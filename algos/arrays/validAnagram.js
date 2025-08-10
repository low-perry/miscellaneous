const isAnagram = (s, t) => { 
  if (s.length !== t.length) return false;

  const charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  return charCount.every(count => count === 0);
}