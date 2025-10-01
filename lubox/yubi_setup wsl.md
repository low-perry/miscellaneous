# YubiKey GPG Signing Setup Guide for WSL

This guide walks you through setting up YubiKey for GPG-signed Git commits in Windows Subsystem for Linux (WSL).

## Prerequisites

- Windows 10/11 with WSL2 installed
- YubiKey 4/5 or newer with OpenPGP support
- Administrator access on Windows

## Part 1: Windows Setup (USB Passthrough)

### 1.1 Install usbipd-win

Download and install usbipd-win from the official release:
- Visit: https://github.com/dorssel/usbipd-win/releases
- Download the latest `.msi` file
- Run as Administrator and install

### 1.2 Configure USB Passthrough

1. **Open PowerShell as Administrator**

2. **List USB devices:**
   ```powershell
   usbipd list
   ```

3. **Find your YubiKey** (look for Yubico device, typically VID:PID `1050:0407`)

4. **Bind the YubiKey:**
   ```powershell
   usbipd bind --busid X-X
   ```
   Replace `X-X` with your YubiKey's bus ID from step 2.

5. **Attach to WSL:**
   ```powershell
   usbipd attach --wsl --busid X-X
   ```

6. **Make attachment persistent** (optional but recommended):
   ```powershell
   usbipd attach --wsl --busid X-X --auto-attach
   ```

## Part 2: WSL Setup

### 2.1 Install Required Packages

```bash
sudo apt update
sudo apt install -y gpg scdaemon pcscd
```

### 2.2 Start PC/SC Service

```bash
sudo systemctl enable pcscd
sudo systemctl start pcscd
```

### 2.3 Verify YubiKey Detection

```bash
# Check if YubiKey is detected
lsusb | grep Yubico

# Test GPG card detection
gpg --card-status
```

You should see your YubiKey information displayed.

## Part 3: GPG Configuration

### 3.1 Configure GPG Agent

Create/edit `~/.gnupg/gpg-agent.conf`:

```bash
cat > ~/.gnupg/gpg-agent.conf << 'EOF'
pinentry-program /usr/bin/pinentry-curses
default-cache-ttl 28800
max-cache-ttl 86400
EOF
```

### 3.2 Set Environment Variables

Add to your `~/.bashrc`:

```bash
echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
source ~/.bashrc
```

### 3.3 Restart GPG Agent

```bash
gpgconf --kill gpg-agent
gpgconf --launch gpg-agent
```

## Part 4: Generate GPG Key on YubiKey

### 4.1 Access Card Admin Functions

```bash
gpg --card-edit
```

### 4.2 Configure Card (in GPG prompt)

```
gpg/card> admin
gpg/card> passwd
# Change PIN (default: 123456) and Admin PIN (default: 12345678)

gpg/card> name
# Enter: Last name, First name

gpg/card> url
# Enter: Optional key URL

gpg/card> quit
```

### 4.3 Generate Key on Card

```bash
gpg --card-edit
```

In the GPG prompt:
```
gpg/card> admin
gpg/card> generate
# Follow prompts:
# - Backup encryption key? No (n)
# - Key valid for? 1y (1 year)
# - Real name: Your Name
# - Email: your.email@domain.com
# - Comment: (optional, e.g., "Yubi")
# - Confirm with O
# - Enter passphrase when prompted
```

### 4.4 Verify Key Generation

```bash
gpg --list-secret-keys
gpg --card-status
```

## Part 5: Git Configuration

### 5.1 Configure Git GPG Settings

```bash
# Get your GPG key ID (long format)
GPG_KEY_ID=$(gpg --list-secret-keys --keyid-format LONG | grep sec | awk '{print $2}' | cut -d'/' -f2)

# Configure Git to use GPG
git config --global user.signingkey $GPG_KEY_ID
git config --global gpg.format openpgp
git config --global gpg.program gpg
git config --global commit.gpgsign false  # Manual signing with -S flag
```

### 5.2 Test GPG Signing

```bash
# Create a test commit
echo "Test" > test.txt
git add test.txt
git commit -S -m "Test GPG signing"

# Verify signature
git log --show-signature -1
```

You should see "Good signature from" in the output.

## Part 6: GitHub Integration

### 6.1 Export Public Key

```bash
gpg --armor --export --export-options export-minimal $GPG_KEY_ID
```

### 6.2 Add Key to GitHub

1. **Copy the entire output** from the previous command (including `-----BEGIN PGP PUBLIC KEY BLOCK-----` and `-----END PGP PUBLIC KEY BLOCK-----`)

2. **Go to GitHub Settings:**
   - GitHub → Settings → SSH and GPG keys
   - Click "New GPG key"
   - Paste the public key
   - Click "Add GPG key"

3. **Verify Email:**
   - Ensure the email in your GPG key matches a verified email in GitHub → Settings → Emails

### 6.3 Test GitHub Integration

```bash
# Create and push a signed commit
echo "GitHub test" > github_test.txt
git add github_test.txt
git commit -S -m "Test: GPG signed commit for GitHub verification"
git push origin main
```

Check your commit on GitHub - it should show a green "Verified" badge.

## Part 7: Troubleshooting

### Common Issues and Solutions

#### YubiKey Not Detected
```bash
# Check USB connection
lsusb | grep Yubico

# Restart services
sudo systemctl restart pcscd
gpgconf --kill gpg-agent
```

#### "Inappropriate ioctl" Error
- Ensure `GPG_TTY` is set: `export GPG_TTY=$(tty)`
- Check gpg-agent.conf has correct pinentry program

#### Git "Couldn't load public key" Error
- Verify GPG format: `git config gpg.format` should be `openpgp`
- Check signing key: `git config user.signingkey`

#### GitHub "Invalid GPG key" Error
- Use `--export-options export-minimal` when exporting
- Ensure email in GPG key is verified in GitHub
- Remove trailing whitespaces from the key

### Useful Commands

```bash
# Check YubiKey status
gpg --card-status

# List GPG keys
gpg --list-keys
gpg --list-secret-keys

# Test GPG signing
echo "test" | gpg --clearsign

# Restart GPG agent
gpgconf --kill gpg-agent

# Check Git GPG config
git config --list | grep gpg
```

## Part 8: Daily Usage

### Signing Commits

```bash
# Sign individual commits
git commit -S -m "Your commit message"

# Enable automatic signing (optional)
git config --global commit.gpgsign true
```

### YubiKey Management

- **Always remove YubiKey safely** before unplugging
- **PIN attempts:** YubiKey locks after 3 failed PIN attempts
- **Admin PIN:** Required for key management operations
- **Key expiration:** Remember to renew before expiration (check with `gpg --list-keys`)

## Security Notes

- **Backup:** Your private key is on the YubiKey only - create backup recovery codes
- **PIN Protection:** Change default PINs immediately after setup
- **Physical Security:** YubiKey must be present for signing operations
- **Expiration:** Set reasonable expiration dates and renew keys regularly

---

## Quick Reference

**Generate new key on YubiKey:**
```bash
gpg --card-edit
admin → generate
```

**Sign a commit:**
```bash
git commit -S -m "message"
```

**Export public key for GitHub:**
```bash
gpg --armor --export --export-options export-minimal [KEY-ID]
```

**Check verification:**
```bash
git log --show-signature -1
```

---

*This setup provides hardware-backed cryptographic signing for your Git commits, significantly enhancing the security and authenticity of your code contributions.*