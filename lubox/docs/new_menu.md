<% current_url = current_page.url %>

<aside class="nav-main bg-light" data-bs-theme="lbx">
  <nav class="navbar navbar-light position-sticky lb-sticky-offset">
    <div class="offcanvas-body">
      <ul id="sidebar-nav" class="navbar-nav flex-column">

        <% data.new_menu.each_with_index do |item, idx| %>
          <% if item.type == "top_level" %>
            <li class="nav-item">
              <a class="nav-link fw-semibold py-1 <%= current_url == item.link ? 'active' : '' %>"
                 href="<%= item.link %>"
                 <%= 'aria-current="page"' if current_url == item.link %>>
                <% if item.icon %><i class="bi-<%= item.icon %> me-1"></i><% end %>
                <%= item.title %>
              </a>
            </li>

          <% elsif item.type == "hub" %>
            <li class="nav-item">
              <div class="d-flex align-items-center">
                <a class="nav-link fw-semibold py-1 flex-grow-1 <%= current_url == item.link ? 'active' : '' %>"
                   href="<%= item.link %>"
                   <%= 'aria-current="page"' if current_url == item.link %>>
                  <% if item.icon %><i class="bi-<%= item.icon %> me-1"></i><% end %>
                  <%= item.title %>
                </a>
                <% if item.children %>
                  <button class="btn btn-sm btn-toggle" type="button"
                          aria-expanded="false" aria-label="Toggle submenu">
                    <i class="bi-chevron-right"></i>
                  </button>
                <% end %>
              </div>
            </li>

            <% if item.children %>
              <ul class="navbar-nav flex-column collapse-panel">
                <% item.children.each do |child| %>

                  <% if child.type == "reference_group" %>
                    <li class="nav-item fw-bold mt-2 ms-3 d-flex align-items-center">
                      <span><%= child.title %></span>
                      <button class="btn btn-sm btn-toggle ms-auto" type="button"
                              aria-expanded="false" aria-label="Toggle <%= child.title %>">
                        <i class="bi-chevron-right"></i>
                      </button>
                    </li>
                    <ul class="navbar-nav flex-column collapse-panel">
                      <% child.reference_items&.each do |ref| %>
                        <li class="nav-item">
                          <a class="nav-link py-1 ms-4 <%= current_url == ref.link ? 'active' : '' %>"
                             href="<%= ref.link %>"
                             <%= 'aria-current="page"' if current_url == ref.link %>>
                            <%= ref.title %>
                          </a>
                        </li>
                      <% end %>
                    </ul>

                  <% else %>
                    <li class="nav-item">
                      <div class="d-flex align-items-center">
                        <a class="nav-link py-1 ms-3 flex-grow-1 <%= current_url == child.link ? 'active' : '' %>"
                           href="<%= child.link %>"
                           <%= 'aria-current="page"' if current_url == child.link %>>
                          <%= child.title %>
                        </a>
                        <% if child.children %>
                          <button class="btn btn-sm btn-toggle" type="button"
                                  aria-expanded="false" aria-label="Toggle submenu">
                            <i class="bi-chevron-right"></i>
                          </button>
                        <% end %>
                      </div>
                    </li>

                    <% if child.children %>
                      <ul class="navbar-nav flex-column collapse-panel ms-1">
                        <% child.children.each do |grandchild| %>
                          <li class="nav-item">
                            <a class="nav-link py-1 ms-4 <%= current_url == grandchild.link ? 'active' : '' %>"
                               href="<%= grandchild.link %>"
                               <%= 'aria-current="page"' if current_url == grandchild.link %>>
                              <%= grandchild.title %>
                            </a>
                          </li>
                        <% end %>
                      </ul>
                    <% end %>
                  <% end %>

                <% end %>
              </ul>
            <% end %>
          <% end %>
        <% end %>

      </ul>
    </div>
  </nav>
</aside>

<style>
/* Scope essential styles to the sidebar */
#sidebar-nav .collapse-panel { display: none; }
#sidebar-nav .ms-3 { margin-left: 1rem !important; }
#sidebar-nav .ms-4 { margin-left: 1.5rem !important; }
#sidebar-nav .btn-toggle {
  background: none;
  border: 0;
  padding: 0.125rem 0.25rem;
  line-height: 1;
  color: inherit;
}
/* Ensure the icon can rotate */
#sidebar-nav .btn-toggle > .bi-chevron-right {
  display: inline-block;
  transition: transform 0.2s ease;
}

/* Sidebar layout */
.nav-main { width: 280px; flex: 0 0 280px; overflow-y: auto; height: 100vh; }
.nav-main .navbar-nav { flex-direction: column !important; }
.nav-main .navbar { flex-direction: column !important; align-items: stretch !important; }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  // Collapse all panels by default
  nav.querySelectorAll('.collapse-panel').forEach(panel => { panel.style.display = 'none'; });

  // Utilities to force icon rotation via inline style (with !important)
  function rotateIcon(icon, deg) {
    if (!icon) return;
    icon.style.setProperty('transition', 'transform 0.2s ease');
    icon.style.setProperty('transform', `rotate(${deg}deg)`, 'important');
  }

  function syncIcon(btn) {
    const icon = btn.querySelector('.bi-chevron-right');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    rotateIcon(icon, expanded ? 90 : 0);
  }

  // Delegated toggle: find next UL sibling and toggle it
  nav.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-toggle');
    if (!btn) return;

    const ownerLi = btn.closest('li.nav-item');
    const panel = ownerLi?.nextElementSibling;
    if (!panel || !panel.classList.contains('collapse-panel')) return;

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.style.display = expanded ? 'none' : 'block';

    // Force rotate this icon
    syncIcon(btn);
  });

  // Auto-open the active branch and force-rotate ancestor icons
  const active = nav.querySelector('.nav-link.active');
  if (active) {
    let panel = active.closest('.collapse-panel');
    while (panel && nav.contains(panel)) {
      panel.style.display = 'block';
      const ownerLi = panel.previousElementSibling;
      const ownerBtn = ownerLi?.querySelector?.('.btn-toggle');
      if (ownerBtn) {
        ownerBtn.setAttribute('aria-expanded', 'true');
        syncIcon(ownerBtn);
      }
      panel = panel.parentElement?.closest('.collapse-panel');
    }
  }
});
</script>