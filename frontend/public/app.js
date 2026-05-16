const state = {
  destinations: [],
  vibes: [],
  selectedVibe: "healing",
  saved: JSON.parse(localStorage.getItem("vibetrip:saved") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const destinationGrid = $("#destinationGrid");
const vibeButtons = $("#vibeButtons");
const matchPanel = $("#matchPanel");
const saveCount = $("#saveCount");
const savedList = $("#savedList");
const destinationPage = $("#destinationPage");

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  return response.json();
}

function moneyTotal(rows) {
  return rows.map(([, value]) => Number(value.match(/\d+/)?.[0] || 0)).reduce((sum, item) => sum + item, 0);
}

function todayPlus(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function saveState() {
  localStorage.setItem("vibetrip:saved", JSON.stringify(state.saved));
  saveCount.textContent = state.saved.length;
  renderSaved();
}

function isSaved(id) {
  return state.saved.some((item) => item.id === id);
}

function toggleSave(destination) {
  state.saved = isSaved(destination.id)
    ? state.saved.filter((item) => item.id !== destination.id)
    : [...state.saved, destination];
  saveState();
  renderDestinations();
  const openPage = location.hash.replace("#/destination/", "");
  if (openPage === destination.id) renderDestinationPage(destination.id);
}

function renderDestinations(list = state.destinations) {
  destinationGrid.innerHTML = list.map((destination, index) => `
    <article class="destination-card reveal" style="transition-delay:${index * 45}ms" data-id="${destination.id}">
      <img src="${destination.image}" alt="${destination.name}" loading="lazy" />
      <div class="card-content">
        <span class="card-kicker">${destination.country} · ${destination.days}</span>
        <h3>${destination.name}</h3>
        <p>${destination.line}</p>
        <div class="tag-row">${destination.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="card-actions">
          <strong>${destination.budget}</strong>
          <button class="save-button ${isSaved(destination.id) ? "saved" : ""}" data-save="${destination.id}" aria-label="Save ${destination.name}">♡</button>
        </div>
      </div>
    </article>
  `).join("");

  destinationGrid.querySelectorAll(".destination-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      const saveTarget = event.target.closest("[data-save]");
      if (saveTarget) {
        event.stopPropagation();
        const destination = state.destinations.find((item) => item.id === saveTarget.dataset.save);
        toggleSave(destination);
        return;
      }
      location.hash = `#/destination/${card.dataset.id}`;
    });
  });
  revealNow();
}

function renderVibes() {
  vibeButtons.innerHTML = state.vibes.map((vibe) => `
    <button class="vibe-button" data-vibe="${vibe.id}">${vibe.label}</button>
  `).join("");

  $("#plannerVibe").innerHTML = state.vibes.map((vibe) => `
    <option value="${vibe.id}">${vibe.label}</option>
  `).join("");

  vibeButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectVibe(button.dataset.vibe));
  });
}

function selectVibe(vibeId) {
  state.selectedVibe = vibeId;
  const vibe = state.vibes.find((item) => item.id === vibeId);
  const matches = state.destinations.filter((destination) => destination.vibeIds.includes(vibeId));
  vibeButtons.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.vibe === vibeId));
  matchPanel.innerHTML = `
    <span>${vibe.label}</span>
    <h3>${vibe.mood}</h3>
    <p>Showing places with actual mood routes for this feeling. Open one and the destination page adapts its routes, prep, gems, and itinerary preview.</p>
    <div class="match-list">
      ${matches.slice(0, 4).map((destination) => `
        <button class="mini-match tiny-button" data-match="${destination.id}">
          ${destination.name}<br><small>${destination.budget}</small>
        </button>
      `).join("")}
    </div>
  `;
  matchPanel.querySelectorAll("[data-match]").forEach((button) => {
    button.addEventListener("click", () => {
      location.hash = `#/destination/${button.dataset.match}`;
    });
  });
}

function hideHomeForDestination(showDestination) {
  ["hero", "destinations", "vibes", "planner"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.hidden = showDestination;
  });
  document.querySelector(".product-strip").hidden = showDestination;
  destinationPage.hidden = !showDestination;
}

function selectedMoodFor(destination) {
  return destination.moodOptions.find((option) => option.vibeIds.includes(state.selectedVibe)) || destination.moodOptions[0];
}

function renderMoodTabs(destination, selectedId) {
  return destination.moodOptions.map((option) => `
    <button class="mood-tab ${option.id === selectedId ? "active" : ""}" data-mood="${option.id}">
      <span>${option.title}</span>
      <small>Preview + premium unlock</small>
    </button>
  `).join("");
}

function sectionList(title, rows, locked = false) {
  return `
    <section class="info-panel ${locked ? "locked-panel" : ""}">
      <div class="${locked ? "locked-content" : ""}">
        <p class="eyebrow">${title}</p>
        <ul class="clean-list">${rows.map((item) => `<li>${Array.isArray(item) ? `<span>${item[0]}</span><strong>${item[1]}</strong>` : item}</li>`).join("")}</ul>
      </div>
      ${locked ? `<div class="mini-lock"><strong>Premium hidden gems</strong><p>Unlock exact names, map order, timings, and saveable pins.</p></div>` : ""}
    </section>
  `;
}

function lockedTeaser(title, teaser, rows, lockCopy) {
  return `
    <section class="premium-panel reveal">
      <div class="premium-teaser">
        <p class="eyebrow">${title}</p>
        <strong>${teaser}</strong>
        <span>Free taste</span>
      </div>
      <div class="premium-locked">
        <ul>${rows.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="unlock-ribbon">
        <strong>Unlock the full ${title.toLowerCase()}</strong>
        <p>${lockCopy}</p>
        <button class="primary-button">Unlock for INR 149</button>
      </div>
    </section>
  `;
}

async function renderDestinationPage(id) {
  const destination = state.destinations.find((item) => item.id === id) || state.destinations[0];
  const mood = selectedMoodFor(destination);
  hideHomeForDestination(true);
  destinationPage.innerHTML = `
    <section class="destination-hero" style="--banner:url('${destination.banner}')">
      <div class="destination-hero-copy reveal">
        <a class="back-link" href="#/">← Back to board</a>
        <p class="eyebrow">${destination.country}</p>
        <h1>${destination.name}</h1>
        <p>${destination.line}</p>
        <div class="hero-actions">
          <button class="primary-button" data-save-page="${destination.id}">${isSaved(destination.id) ? "Saved" : "Save trip"}</button>
          <a class="secondary-button" href="#planner">Remix with planner</a>
        </div>
        <div class="destination-pills">
          ${destination.vibeIds.slice(0, 5).map((vibeId) => {
            const vibe = state.vibes.find((item) => item.id === vibeId);
            return `<span>${vibe?.label || vibeId}</span>`;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="destination-shell">
      <aside class="trip-sidebar reveal">
        <div class="stat-stack">
          <div><span>Best time</span><strong>${destination.bestTime}</strong></div>
          <div><span>Avg budget</span><strong>${destination.budget}</strong></div>
          <div><span>Flight estimate</span><strong>${destination.flight}</strong></div>
          <div><span>Trip length</span><strong>${destination.days}</strong></div>
        </div>
        <form class="date-card" id="dateForm">
          <p class="eyebrow">plan slot</p>
          <label>Start date<input name="date" type="date" value="${todayPlus(21)}" /></label>
          <label>Arrival time<input name="time" type="time" value="14:00" /></label>
          <button class="secondary-button" type="submit">Refresh preview</button>
        </form>
      </aside>

      <div class="trip-content">
        <section class="route-picker reveal">
          <p class="eyebrow">which mood is yours?</p>
          <h2>Choose your ${destination.name} route.</h2>
          <div class="mood-tabs">${renderMoodTabs(destination, mood.id)}</div>
        </section>
        <div id="curatedPlan"></div>
      </div>
    </section>
  `;

  destinationPage.querySelector("[data-save-page]").addEventListener("click", () => toggleSave(destination));
  destinationPage.querySelectorAll("[data-mood]").forEach((button) => {
    button.addEventListener("click", () => renderCuratedPlan(destination, button.dataset.mood));
  });
  $("#dateForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    renderCuratedPlan(destination, destinationPage.querySelector(".mood-tab.active")?.dataset.mood || mood.id, Object.fromEntries(formData.entries()));
  });
  await renderCuratedPlan(destination, mood.id);
  window.scrollTo({ top: 0, behavior: "smooth" });
  revealNow();
}

async function renderCuratedPlan(destination, moodId, slot = null) {
  destinationPage.querySelectorAll(".mood-tab").forEach((button) => button.classList.toggle("active", button.dataset.mood === moodId));
  const form = $("#dateForm");
  const payload = slot || Object.fromEntries(new FormData(form).entries());
  const plan = await api("/api/curated", {
    method: "POST",
    body: JSON.stringify({ destinationId: destination.id, moodId, ...payload })
  });
  $("#curatedPlan").innerHTML = `
    <section class="plan-header reveal">
      <div>
        <p class="eyebrow">${plan.title}</p>
        <h2>${plan.mood.title}</h2>
        <p>${plan.summary}</p>
      </div>
      <div class="rough-cost">
        <span>rough floor</span>
        <strong>INR ${moneyTotal(plan.costBreakdown)}k+</strong>
        <small>Use this as an early planning signal, not a booking quote.</small>
      </div>
    </section>

    <section class="vibe-snapshot reveal">
      <article>
        <span>First must-go</span>
        <strong>${plan.preview.mustGo}</strong>
        <p>Start here so the trip has one anchor instead of becoming a checklist.</p>
      </article>
      <article>
        <span>One cafe tease</span>
        <strong>${plan.preview.cafe || "Curated cafe map"}</strong>
        <p>The full cafe map stays premium because this is the repeat-use layer.</p>
      </article>
      <article>
        <span>Day-one vibe</span>
        <strong>${plan.preview.itinerary}</strong>
        <p>Enough to imagine the route. Full timing unlocks inside premium.</p>
      </article>
    </section>

    <div class="plan-layout">
      <div class="story-rail">
        ${sectionList("before you go", plan.beforeYouGo)}
        ${sectionList("overall cost breakdown", plan.costBreakdown)}
        ${sectionList("avoid this", plan.avoid)}
        ${sectionList("revenue model", plan.revenue)}
      </div>

      <div class="premium-rail">
        ${lockedTeaser("Cafe recs", plan.preview.cafe || "One curated cafe", plan.cafeRecs, "Get the full cafe route, best timing, what to order, and nearby photo stops.")}
        ${lockedTeaser("Hidden gems", plan.preview.hiddenGem, plan.hiddenGems, "Unlock lesser-known spots, map order, transport notes, and when they are actually worth it.")}
      </div>
    </div>

    <section class="itinerary-preview reveal locked-panel">
      <div class="itinerary-free">
        <p class="eyebrow">itinerary preview</p>
        <h3>${plan.mood.title}</h3>
        <p>${plan.preview.itinerary}</p>
      </div>
      <div class="locked-content itinerary-blur">
        <ol>${plan.itinerary.slice(1).map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>
      <div class="lock-layer"><strong>Full itinerary locked</strong><p>Unlock exact timings, cafe/stay links, route order, map pins, and budget notes.</p><button class="primary-button">Unlock for INR 149</button></div>
    </section>
  `;
  revealNow();
}

function renderSaved() {
  if (!state.saved.length) {
    savedList.innerHTML = "<p>No saves yet. Tap the heart on a destination and start building the dream board.</p>";
    return;
  }
  savedList.innerHTML = state.saved.map((item) => `
    <div class="saved-item">
      <div><strong>${item.name}</strong><br><span>${item.line}</span></div>
      <button class="tiny-button" data-open="${item.id}">Open</button>
      <button class="tiny-button" data-remove="${item.id}">Remove</button>
    </div>
  `).join("");
  savedList.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#savesDrawer").close();
      location.hash = `#/destination/${button.dataset.open}`;
    });
  });
  savedList.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.saved = state.saved.filter((item) => item.id !== button.dataset.remove);
      saveState();
      renderDestinations();
    });
  });
}

function setupPlanner() {
  const form = $("#plannerForm");
  const range = form.elements.duration;
  range.addEventListener("input", () => {
    $("#durationLabel").textContent = `${range.value} days`;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    $("#aiResult").innerHTML = "<p>Reading your mood...</p>";
    const result = await api("/api/recommend", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    $("#aiResult").innerHTML = `
      <p class="eyebrow">${result.topDestination.matchScore}% match</p>
      <h3>${result.topDestination.name}</h3>
      <p>${result.answer}</p>
      <button class="secondary-button" data-open-result="${result.topDestination.id}">Open destination page</button>
    `;
    $("#aiResult [data-open-result]").addEventListener("click", () => {
      state.selectedVibe = payload.vibe;
      location.hash = `#/destination/${result.topDestination.id}`;
    });
  });
}

function setupSaves() {
  const drawer = $("#savesDrawer");
  $("#openSaves").addEventListener("click", () => drawer.showModal());
  $("#closeSaves").addEventListener("click", () => drawer.close());
  saveState();
}

function setupMagneticButtons() {
  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const box = button.getBoundingClientRect();
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
  window.revealObserver = observer;
}

function revealNow() {
  document.querySelectorAll(".reveal").forEach((item) => {
    window.revealObserver?.observe(item);
    const box = item.getBoundingClientRect();
    if (box.top < window.innerHeight) item.classList.add("visible");
  });
}

function route() {
  const match = location.hash.match(/^#\/destination\/(.+)/);
  if (match) {
    renderDestinationPage(match[1]);
  } else {
    hideHomeForDestination(false);
    destinationPage.innerHTML = "";
  }
}

async function boot() {
  const data = await api("/api/bootstrap");
  Object.assign(state, data);
  renderDestinations();
  renderVibes();
  setupPlanner();
  setupSaves();
  setupMagneticButtons();
  setupRevealObserver();
  selectVibe("healing");
  window.addEventListener("hashchange", route);
  route();
}

boot();
