// Simple hash-based router that fetches page HTML fragments

window.ROUTES = {
  splash: { file: "splash.html", nav: false },
  welcome: { file: "welcome.html", nav: false },
  register: { file: "register.html", nav: false },
  verify: { file: "verify.html", nav: false },
  login: { file: "login.html", nav: false },
  "forgot-password": { file: "forgot-password.html", nav: false },

  dashboard: { file: "dashboard.html", nav: true, tab: "dashboard" },
  accounts: { file: "accounts.html", nav: true, tab: "accounts" },
  "create-post": { file: "create-post.html", nav: true, tab: "create-post" },
  calendar: { file: "calendar.html", nav: true, tab: "calendar" },
  analytics: { file: "analytics.html", nav: true, tab: "analytics" },
  profile: { file: "profile.html", nav: true, tab: "profile" },
};

const app = () => document.getElementById("app");
const nav = () => document.getElementById("bottomNav");

function setNavVisibility(route) {
  const navEl = nav();
  if (!navEl) return;

  if (route.nav === true) {
    navEl.hidden = false;
    navEl.style.display = "flex";

    const appEl = app();
    if (appEl) appEl.classList.add("has-nav");

    document.querySelectorAll("#bottomNav .nav-item, #bottomNav .nav-fab").forEach((el) => {
      const isActive = route.tab && el.dataset.nav === route.tab;
      el.classList.toggle("active", !!isActive);
    });
  } else {
    navEl.hidden = true;
    navEl.style.display = "none";

    const appEl = app();
    if (appEl) appEl.classList.remove("has-nav");

    document.querySelectorAll("#bottomNav .nav-item, #bottomNav .nav-fab").forEach((el) => {
      el.classList.remove("active");
    });
  }
}

async function loadRoute(name) {
  const routeName = window.ROUTES[name] ? name : "splash";
  const route = window.ROUTES[routeName];

  try {
    const res = await fetch(`pages/${route.file}`, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} while loading ${route.file}`);
    }

    const html = await res.text();

    const appEl = app();
    if (!appEl) {
      throw new Error("#app element not found");
    }

    appEl.innerHTML = html;
    appEl.scrollTop = 0;

    setNavVisibility(route);

    if (typeof window.onPageLoad === "function") {
      window.onPageLoad(routeName);
    }
  } catch (error) {
    const appEl = app();
    if (appEl) {
      appEl.innerHTML = `
        <div class="page">
          <p class="muted">Failed to load ${routeName}</p>
        </div>
      `;
      appEl.classList.remove("has-nav");
    }

    const navEl = nav();
    if (navEl) {
      navEl.hidden = true;
      navEl.style.display = "none";
    }

    console.error("Route load failed:", routeName, error);
  }
}

function go(name) {
  const targetHash = `#/${name}`;
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  } else {
    loadRoute(name);
  }
}

window.addEventListener("hashchange", () => {
  const routeName = (window.location.hash || "#/splash").replace("#/", "") || "splash";
  loadRoute(routeName);
});

window.go = go;
window.loadRoute = loadRoute;