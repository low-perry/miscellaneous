<aside class="col-lg-2 pb-5 bg-light nav-main" data-bs-theme="lbx">
  <nav class="navbar navbar-light navbar-expand-lg overflow-y-scroll position-sticky lb-sticky-offset">
        <ul id="sidebar-nav" class="navbar-nav flex-column vh-full" data-bs-theme="lbx">
          <% data.new_menu.each do |item| %>
            <% if item.type == "top_level" %>
              <li class="nav-item">
                <a class="nav-link fw-semibold py-1 <%= current_page.url == item.link ? 'active' : '' %>"
                   href="<%= item.link %>">
                  <i class="me-1 bi-<%= item.icon %>"></i><%= item.title %>
                </a>
              </li>

            <% elsif item.type == "hub" %>
              <li class="nav-item hub-parent">
                <div class="d-flex align-items-center">
                  <a class="nav-link fw-semibold py-1 flex-grow-1 <%= current_page.url == item.link ? 'active' : '' %>"
                     href="<%= item.link %>">
                    <i class="me-1 bi-<%= item.icon %>"></i><%= item.title %>
                  </a>
                  <% if item.children %>
                    <button class="btn btn-sm btn-toggle" type="button" aria-expanded="false">
                      <i class="bi-chevron-right"></i>
                    </button>
                  <% end %>
                </div>
              </li>

              <% if item.children %>
                <ul class="navbar-nav ms-3 flex-column collapse-panel">
                  <% item.children.each do |child| %>
                    <% if child[:type] == "reference_group" %>
                      <li class="nav-item fw-bold mt-2 ms-3 d-flex align-items-center reference-group-item">
                        <span class="reference-group-toggle flex-grow-1 cursor-pointer"><%= child.title %></span>
                        <button class="btn btn-sm btn-toggle ms-auto" type="button" aria-expanded="false">
                          <i class="bi-chevron-right"></i>
                        </button>
                      </li>
                      <ul class="navbar-nav flex-column collapse-panel">
                        <% child.reference_items&.each do |ref| %>
                          <li class="nav-item">
                            <a class="nav-link py-1 ms-4 <%= current_page.url == ref.link ? 'active' : '' %>"
                               href="<%= ref.link %>"><%= ref.title %></a>
                          </li>
                        <% end %>
                      </ul>

                    <% else %>
                      <li class="nav-item">
                        <a class="nav-link py-1 ms-2 <%= current_page.url == child.link ? 'active' : '' %>"
                           href="<%= child.link %>"><%= child.title %></a>
                      </li>
                    <% end %>
                  <% end %>
                </ul>
              <% end %>
            <% end %>
          <% end %>
        </ul>
  </nav>
</aside>

<div class="offcanvas offcanvas-start" id="offcanvasNavbar" data-bs-theme="lbx">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul id="sidebar-nav-mobile" class="navbar-nav flex-column vh-full" data-bs-theme="lbx">
      <% data.new_menu.each do |item| %>
        <% if item.type == "top_level" %>
          <li class="nav-item">
            <a class="nav-link fw-semibold py-1 <%= current_page.url == item.link ? 'active' : '' %>"
               href="<%= item.link %>">
              <i class="me-1 bi-<%= item.icon %>"></i><%= item.title %>
            </a>
          </li>

        <% elsif item.type == "hub" %>
          <li class="nav-item hub-parent">
            <div class="d-flex align-items-center">
              <a class="nav-link fw-semibold py-1 flex-grow-1 <%= current_page.url == item.link ? 'active' : '' %>"
                 href="<%= item.link %>">
                <i class="me-1 bi-<%= item.icon %>"></i><%= item.title %>
              </a>
              <% if item.children %>
                <button class="btn btn-sm btn-toggle" type="button" aria-expanded="false">
                  <i class="bi-chevron-right"></i>
                </button>
              <% end %>
            </div>
          </li>

          <% if item.children %>
            <ul class="navbar-nav ms-3 flex-column collapse-panel">
              <% item.children.each do |child| %>
                <% if child[:type] == "reference_group" %>
                  <li class="nav-item fw-bold mt-2 ms-3 d-flex align-items-center reference-group-item">
                    <span class="reference-group-toggle flex-grow-1 cursor-pointer"><%= child.title %></span>
                    <button class="btn btn-sm btn-toggle ms-auto" type="button" aria-expanded="false">
                      <i class="bi-chevron-right"></i>
                    </button>
                  </li>
                  <ul class="navbar-nav flex-column collapse-panel">
                    <% child.reference_items&.each do |ref| %>
                      <li class="nav-item">
                        <a class="nav-link py-1 ms-4 <%= current_page.url == ref.link ? 'active' : '' %>"
                           href="<%= ref.link %>"><%= ref.title %></a>
                      </li>
                    <% end %>
                  </ul>

                <% else %>
                  <li class="nav-item">
                    <a class="nav-link py-1 ms-2 <%= current_page.url == child.link ? 'active' : '' %>"
                       href="<%= child.link %>"><%= child.title %></a>
                  </li>
                <% end %>
              <% end %>
            </ul>
          <% end %>
        <% end %>
      <% end %>
    </ul>
  </div>
</div>

<style>
#sidebar-nav .collapse-panel,
#sidebar-nav-mobile .collapse-panel { display: none; }

#sidebar-nav .btn-toggle > .bi-chevron-right,
#sidebar-nav-mobile .btn-toggle > .bi-chevron-right {
  display: inline-block;
  transition: transform 0.2s ease;
}

#sidebar-nav .d-flex.align-items-center,
#sidebar-nav-mobile .d-flex.align-items-center {
  align-items: center;
  min-height: auto;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

#sidebar-nav .btn-toggle,
#sidebar-nav .nav-link,
#sidebar-nav-mobile .btn-toggle,
#sidebar-nav-mobile .nav-link {
  line-height: 1.25;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.reference-group-toggle {
  cursor: pointer;
  padding: 0.25rem 0;
  user-select: none;
}

.reference-group-toggle:hover {
  opacity: 0.8;
}
.navbar.lb-sticky-offset {
  min-width: 200px !important;
  overflow-y: auto;
  scrollbar-width: thin;
}

 
.navbar.lb-sticky-offset::-webkit-scrollbar {
  width: 6px;
}
.navbar.lb-sticky-offset::-webkit-scrollbar-track {
  background: transparent;
}
.navbar.lb-sticky-offset::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}


@media (min-width: 992px) {
  .row:has(.nav-main) {
    display: flex;
    flex-wrap: nowrap;
  }

  .row:has(.nav-main) .nav-main {
    min-width: 258px;
    max-width: 270px;
    flex: 0 0 auto;
  }

  .row:has(.nav-main) .col-lg-7,
  .row:has(.nav-main) article {
    flex: 1 1 auto;
    min-width: 0;
  }

  .row:has(.nav-main) .col-lg-3,
  .row:has(.nav-main) #navbar-toc {
    flex: 0 0 auto;
    width: 25%;
    min-width: 200px;
  }
}

@media (max-width: 991.98px) {
  .nav-main {
    display: none;
  }
}
  
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('sidebar-nav');
  const mobileNav = document.getElementById('sidebar-nav-mobile');
  
  function initializeNav(navElement) {
    if (!navElement) return;

    function rotateIcon(icon, deg) {
      if (!icon) return;
      icon.style.setProperty('transform', `rotate(${deg}deg)`, 'important');
    }

    function syncIcon(btn) {
      const icon = btn.querySelector('.bi-chevron-right');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      rotateIcon(icon, expanded ? 90 : 0);
    }

    function togglePanel(btn) {
      const ownerLi = btn.closest('li.nav-item');
      const panel = ownerLi?.nextElementSibling;
      if (!panel || !panel.classList.contains('collapse-panel')) return false;
      
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.style.display = expanded ? 'none' : 'block';
      syncIcon(btn);
      return true;
    }

    navElement.querySelectorAll('.collapse-panel').forEach(panel => panel.style.display = 'none');

    navElement.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-toggle');
      if (btn) {
        togglePanel(btn);
        return;
      }

      const refGroupToggle = e.target.closest('.reference-group-toggle');
      if (refGroupToggle) {
        const parentLi = refGroupToggle.closest('li.nav-item');
        const toggleBtn = parentLi?.querySelector('.btn-toggle');
        if (toggleBtn) {
          togglePanel(toggleBtn);
        }
        
        // Navigate to the first child reference item
        const nextSibling = parentLi?.nextElementSibling;
        if (nextSibling && nextSibling.classList.contains('collapse-panel')) {
          const firstChildLink = nextSibling.querySelector('.nav-link');
          if (firstChildLink) {
            window.location.href = firstChildLink.href;
          }
        }
        return;
      }

      const navLink = e.target.closest('.nav-link');
      if (navLink) {
        const parentDiv = navLink.parentElement;
        if (parentDiv && parentDiv.classList.contains('d-flex') && parentDiv.classList.contains('align-items-center')) {
          const toggleBtn = parentDiv.querySelector('.btn-toggle');
          if (toggleBtn) {
            togglePanel(toggleBtn);
          }
        }
      }
    });

    const active = navElement.querySelector('.nav-link.active');
    if (active) {
      let panel = active.closest('.collapse-panel');
      while (panel && navElement.contains(panel)) {
        panel.style.display = 'block';
        const ownerLi = panel.previousElementSibling;
        const ownerBtn = ownerLi?.querySelector?.('.btn-toggle');
        if (ownerBtn) {
          ownerBtn.setAttribute('aria-expanded', 'true');
          syncIcon(ownerBtn);
        }
        panel = panel.parentElement?.closest('.collapse-panel');

        if (ownerLi && ownerLi.classList.contains('hub-parent')) {
          const hubLink = ownerLi.querySelector('.nav-link');
          if (hubLink) {
            hubLink.classList.add('hub-active');
          }
        }
      }
      
      const parentDiv = active.parentElement;
      if (parentDiv && parentDiv.classList.contains('d-flex') && parentDiv.classList.contains('align-items-center')) {
        const toggleBtn = parentDiv.querySelector('.btn-toggle');
        const ownerLi = active.closest('li.nav-item');
        const hubPanel = ownerLi?.nextElementSibling;
        
        if (toggleBtn && hubPanel && hubPanel.classList.contains('collapse-panel')) {
          hubPanel.style.display = 'block';
          toggleBtn.setAttribute('aria-expanded', 'true');
          syncIcon(toggleBtn);
        }

        const hubParent = active.closest('.hub-parent');
        if (hubParent) {
            active.classList.add('hub-active');
        }
      }
    }
  }
  
  initializeNav(nav);
  initializeNav(mobileNav);
  
  // Close mobile offcanvas when screen size changes to desktop
  const mediaQuery = window.matchMedia('(min-width: 992px)');
  function handleScreenChange(e) {
    if (e.matches) {
      const offcanvas = document.getElementById('offcanvasNavbar');
      if (offcanvas && offcanvas.classList.contains('show')) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      }
    }
  }
  
  mediaQuery.addListener(handleScreenChange);
  handleScreenChange(mediaQuery);
});
</script>