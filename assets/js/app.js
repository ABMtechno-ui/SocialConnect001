// Entry + page hydration
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-nav]");
  if (el) {
    e.preventDefault();
    window.go(el.dataset.nav);
  }
  const back = e.target.closest("[data-back]");
  if (back) {
    e.preventDefault();
    history.length > 1 ? history.back() : window.go("welcome");
  }
  const tog = e.target.closest(".toggle");
  if (tog) tog.classList.toggle("on");
  const tab = e.target.closest("[data-tab-group]");
  if (tab) {
    const group = tab.dataset.tabGroup;
    document
      .querySelectorAll(`[data-tab-group="${group}"]`)
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  }
  const seg = e.target.closest("[data-seg]");
  if (seg && seg.dataset.seg) {
    document
      .querySelectorAll("[data-seg]")
      .forEach((t) => t.classList.remove("active"));
    seg.classList.add("active");
  }
  const pick = e.target.closest(".acc-pick");
  if (pick) pick.classList.toggle("checked");
});

function ic(name) {
  return `<i class="bi bi-${name}"></i>`;
}

window.onPageLoad = function (name) {
  const D = window.DATA;
  if (name === "splash") {
    setTimeout(() => window.go("welcome"), 2200);
  }
  if (name === "dashboard") {
    // greeting
    const g = document.getElementById("greetName");
    if (g) g.textContent = `Good Morning, ${D.user.name}`;
    // overview
    const ov = document.getElementById("overview");
    if (ov)
      ov.innerHTML = D.overview
        .map(
          (s) => `
  <div class="stat">
    <div class="stat-icon ${s.cls}">${ic(s.icon)}</div>
    <div class="stat-body">
      <div class="lbl">${s.lbl}</div>
      <div class="num">${s.num}</div>
    </div>
  </div>`,
        )
        .join("");
    // accounts mini
    const ac = document.getElementById("accountsMini");
    if (ac)
      ac.innerHTML = D.accounts
        .slice(0, 5)
        .map(
          (a) => `
      <div class="acc-mini"><div class="ic ${a.bg}">${ic(a.icon)}</div>
      <div class="n">${a.name.split(" ")[0]}</div><div class="c">${a.count.split(" ")[0]} ${a.count.split(" ")[1] || ""}</div></div>`,
        )
        .join("");
    // today
    const td = document.getElementById("todayList");
    if (td)
      td.innerHTML = D.today
        .map(
          (t) => `
      <div class="sched-row">
        <div class="sched-time"><div class="h">${t.time.split(" ")[0]}</div><div>${t.time.split(" ")[1]}</div></div>
        <div class="sched-ico ${t.bg}">${ic(t.icon)}</div>
        <div class="sched-body"><div class="t">${t.title}</div><div class="d">${t.desc}</div></div>
        <span class="badge warning">${t.status}</span>
      </div>`,
        )
        .join("");
    // activity
    const ac2 = document.getElementById("activityList");
    if (ac2)
      ac2.innerHTML = D.activity
        .map(
          (a) => `
      <div class="activity-row">
        <div class="aic ${a.bg}">${ic(a.icon)}</div>
        <div class="body"><div class="t">${a.title}</div><div class="q">${a.quote}</div></div>
        <div class="meta"><div>${a.time}</div><span class="badge ${a.badge}" style="margin-top:4px">${a.label}</span></div>
      </div>`,
        )
        .join("");
  }
  if (name === "accounts") {
    const list = document.getElementById("accList");
    if (list)
      list.innerHTML = D.accounts
        .map(
          (a) => `
      <div class="acc-card">
        <div class="ic ${a.bg}">${ic(a.icon)}</div>
        <div class="body"><div class="n">${a.name}</div><div class="h">${a.handle}</div><div class="c">${a.count}</div></div>
        <div class="r"><span class="badge success">Active</span><i class="bi bi-chevron-right muted"></i></div>
      </div>`,
        )
        .join("");
  }
  if (name === "create-post") {
    const sel = document.getElementById("accPickList");
    if (sel)
      sel.innerHTML = D.accounts
        .slice(0, 5)
        .map(
          (a, i) => `
      <div class="acc-pick ${i < 2 ? "checked" : ""}">
        <span class="cb">${i < 2 ? '<i class="bi bi-check"></i>' : ""}</span>
        <div class="ic ${a.bg}">${ic(a.icon)}</div>
        <div class="n">${a.name.split(" ")[0]}</div><div class="h">${a.handle}</div>
      </div>`,
        )
        .join("");
    const ta = document.getElementById("caption");
    const cc = document.getElementById("charCount");
    if (ta && cc)
      ta.addEventListener(
        "input",
        () => (cc.textContent = `${ta.value.length} / 2200`),
      );
  }
  if (name === "calendar") {
    renderCalendar();
    const sl = document.getElementById("schedList");
    if (sl)
      sl.innerHTML = D.scheduled
        .map(
          (s) => `
      <div class="sp-card">
        <div class="sp-side ${s.side}"></div>
        <div class="sp-time"><div class="h">${s.time}</div><div class="d">${s.date}</div></div>
        <div class="sp-thumb">${ic(s.icon)}</div>
        <div class="sp-body"><div class="t">${s.title}</div><div class="f"><i class="bi bi-folder2"></i> ${s.cat}</div></div>
        <div class="sp-r">
          <div class="sp-plats">${s.plats.map((p) => `<i class="${p} bi bi-circle-fill" style="font-size:0">.</i>`).join("")}${s.extra ? `<i style="background:#EEE;color:#333;font-size:9px;font-weight:700">+${s.extra}</i>` : ""}</div>
          <i class="bi bi-three-dots-vertical muted"></i>
        </div>
      </div>`,
        )
        .join("");
  }
  if (name === "analytics") {
    const st = document.getElementById("aStats");
    if (st)
      st.innerHTML = D.analytics.stats
        .map(
          (s) => `
      <div class="a-stat"><div class="lbl">${s.lbl}</div><div class="num">${s.num}</div>
      <div class="chg ${s.up ? "up" : "dn"}"><i class="bi bi-arrow-${s.up ? "up" : "down"}-short"></i>${s.chg}</div></div>`,
        )
        .join("");
    const pb = document.getElementById("platBreak");
    if (pb)
      pb.innerHTML = D.analytics.platforms
        .map(
          (p) => `
      <div class="bar-row"><div class="n">${ic(p.ic)} ${p.n}</div>
      <div class="bg"><div class="fg" style="width:${p.pct}%"></div></div>
      <div class="v">${p.pct}%</div></div>`,
        )
        .join("");
    const tp = document.getElementById("topPosts");
    if (tp)
      tp.innerHTML = D.analytics.top
        .map(
          (p, i) => `
      <div class="tp-row"><div class="tp-thumb">${i + 1}</div>
        <div class="tp-body"><div class="t">${p.t}</div>
          <div class="m"><span>${ic("heart")} ${p.l}</span><span>${ic("chat")} ${p.c}</span><span>${ic("share")} ${p.s}</span></div>
        </div></div>`,
        )
        .join("");
    drawLine();
    drawBar();
    drawHeat();
  }
  if (name === "profile") {
    const p = document.getElementById("profBox");
    if (p)
      p.innerHTML = `
      <div class="av">${D.user.name[0]}</div>
      <div><div class="n">${D.user.full}</div><div class="e">${D.user.email}</div></div>
      <span class="pro">${D.user.plan}</span>`;
  }
};

function renderCalendar() {
  const grid = document.getElementById("calGrid");
  if (!grid) return;
  const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let html = dows.map((d) => `<div class="cal-dow">${d}</div>`).join("");
  // build July 2026: starts Wed
  const startOffset = 3; // Sun=0
  const daysInMonth = 31;
  const totalCells = 35;
  const dots = {
    1: "y",
    4: "y",
    7: "b",
    9: "p",
    11: "g",
    15: "y",
    16: "b",
    18: "p",
    21: "g",
    22: { count: 4, color: "y", today: true },
    24: "b",
    28: "p",
    30: "g",
    31: "y",
  };
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startOffset + 1;
    if (dayNum < 1) {
      html += `<div class="cal-cell other">${30 + dayNum}</div>`;
    } else if (dayNum > daysInMonth) {
      html += `<div class="cal-cell other">${dayNum - daysInMonth}</div>`;
    } else {
      const d = dots[dayNum];
      const isToday = d && typeof d === "object" && d.today;
      const dot = d
        ? typeof d === "object"
          ? `<div class="count-badge">${d.count}</div>`
          : `<div class="dot ${d}"></div>`
        : "";
      html += `<div class="cal-cell ${isToday ? "today" : ""}">${dayNum}${dot}</div>`;
    }
  }
  grid.innerHTML = html;
}

function drawLine() {
  const el = document.getElementById("lineChart");
  if (!el) return;
  const pts = [40, 55, 45, 70, 60, 90, 75, 110, 95, 120, 105, 130];
  const w = 340,
    h = 140,
    pad = 20;
  const maxV = 140;
  const step = (w - pad * 2) / (pts.length - 1);
  const path = pts
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"} ${pad + i * step} ${h - pad - (v / maxV) * (h - pad * 2)}`,
    )
    .join(" ");
  const area =
    path +
    ` L ${pad + (pts.length - 1) * step} ${h - pad} L ${pad} ${h - pad} Z`;
  el.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" class="line-chart" preserveAspectRatio="none">
      <path d="${area}" fill="#FFD358" opacity=".2"/>
      <path d="${path}" stroke="#080A0C" stroke-width="2" fill="none"/>
      ${pts.map((v, i) => `<circle cx="${pad + i * step}" cy="${h - pad - (v / maxV) * (h - pad * 2)}" r="2.5" fill="#080A0C"/>`).join("")}
    </svg>`;
}
function drawBar() {
  const el = document.getElementById("barChart");
  if (!el) return;
  const bars = [60, 90, 75, 110, 85, 120, 100];
  const labels = ["M", "T", "W", "T", "F", "S", "S"];
  const w = 340,
    h = 140,
    pad = 24;
  const bw = (w - pad * 2) / bars.length - 8;
  const max = 120;
  el.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" class="bar-chart" preserveAspectRatio="none">
      ${bars
        .map((v, i) => {
          const x = pad + i * ((w - pad * 2) / bars.length) + 4;
          const bh = (v / max) * (h - pad * 2);
          return `<rect x="${x}" y="${h - pad - bh}" width="${bw}" height="${bh}" fill="${i === 5 ? "#FFD358" : "#080A0C"}"/>
                <text x="${x + bw / 2}" y="${h - 6}" text-anchor="middle" font-size="10" fill="#6B7280">${labels[i]}</text>`;
        })
        .join("")}
    </svg>`;
}
function drawHeat() {
  const el = document.getElementById("heat");
  if (!el) return;
  const rows = 4;
  const vals = [];
  for (let i = 0; i < rows * 7; i++) vals.push(Math.floor(Math.random() * 5));
  el.innerHTML = vals
    .map((v) => `<div class="h ${v ? "l" + v : ""}"></div>`)
    .join("");
}

// boot
window.addEventListener("DOMContentLoaded", () => {
  const name = location.hash ? location.hash.replace("#/", "") : "splash";
  if (!location.hash) {
    location.hash = "#/splash";
  }
  window.loadRoute(name);
});
