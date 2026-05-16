// ======================================================
// VIBETRIP — APP.JS REBUILD
// PHASE 2A
// CORE RENDER ENGINE
// ======================================================

import { trips } from "./data.js";

// ======================================================
// STATE
// ======================================================

const state = {
  trips,
  activeMonth: null,
  activeCategory: "all",
  search: ""
};

// ======================================================
// DOM
// ======================================================

const heroGrid = document.querySelector("#heroGrid");

const quickEscapesGrid =
  document.querySelector("#quickEscapesGrid");

const indiaGrid =
  document.querySelector("#indiaGrid");

const intlGrid =
  document.querySelector("#internationalGrid");

const dreamGrid =
  document.querySelector("#dreamRoutesGrid");

const seasonalGrid =
  document.querySelector("#seasonalGrid");

const monthPicker =
  document.querySelector("#travelMonth");

const searchInput =
  document.querySelector("#searchInput");

// ======================================================
// MONTH
// ======================================================

function getCurrentMonth() {

  if (!monthPicker?.value) {
    return new Date()
      .toLocaleString("default", {
        month: "long"
      });
  }

  return new Date(monthPicker.value + "-01")
    .toLocaleString("default", {
      month: "long"
    });
}

// ======================================================
// HELPERS
// ======================================================

function seasonalBoost(trip) {

  const month = getCurrentMonth();

  if (!trip.bestMonths) return 0;

  return trip.bestMonths.includes(month)
    ? 20
    : 0;
}

function rankTrips(trips) {

  return [...trips].sort((a, b) => {

    const aScore =
      (a.trending ? 50 : 0) +
      seasonalBoost(a);

    const bScore =
      (b.trending ? 50 : 0) +
      seasonalBoost(b);

    return bScore - aScore;
  });
}

function filteredTrips() {

  const ranked = rankTrips(state.trips);

  return ranked.filter(trip => {

    const search =
      state.search.toLowerCase();

    const matchesSearch =
      trip.title.toLowerCase().includes(search)
      ||
      trip.locations.join(" ")
        .toLowerCase()
        .includes(search);

    return matchesSearch;
  });
}

// ======================================================
// CARD TEMPLATE
// ======================================================

function createTripCard(trip) {

  const isSeasonBest =
    trip.bestMonths?.includes(
      getCurrentMonth()
    );

  return `
  
  <article class="trip-card">

    <div class="trip-image-wrap">

      <img
        src="${trip.image}"
        alt="${trip.title}"
        class="trip-image"
      />

      <div class="trip-overlay"></div>

      <div class="trip-top-row">

        <span class="trip-duration">
          ${trip.duration}
        </span>

        ${
          isSeasonBest
            ? `
            <span class="season-pill">
              best right now
            </span>
          `
            : ""
        }

      </div>

    </div>

    <div class="trip-content">

      <div class="trip-locations">
        ${trip.locations.join(" • ")}
      </div>

      <h3 class="trip-title">
        ${trip.title}
      </h3>

      <p class="trip-identity">
        ${trip.identity}
      </p>

      <div class="trip-tags">

        ${trip.vibeTags.map(tag => `
          <span class="trip-tag">
            ${tag}
          </span>
        `).join("")}

      </div>

      <div class="trip-budget-row">

        <div class="budget-box">
          <span>budget</span>
          <strong>${trip.budgets.budget}</strong>
        </div>

        <div class="budget-box">
          <span>mid</span>
          <strong>${trip.budgets.mid}</strong>
        </div>

      </div>

      <div class="trip-footer">

        <div class="trip-highlight">

          <span>don’t miss</span>

          <p>
            ${trip.dontMiss}
          </p>

        </div>

      </div>

    </div>

  </article>
  `;
}

// ======================================================
// RENDERERS
// ======================================================

function renderQuickEscapes() {

  const escapes =
    filteredTrips().filter(trip =>
      trip.routeType === "quick-escape"
    );

  quickEscapesGrid.innerHTML =
    escapes
      .map(createTripCard)
      .join("");
}

function renderIndia() {

  const indiaTrips =
    filteredTrips().filter(trip => {

      const intlTypes = [
        "luxury-europe",
        "classic-europe",
        "island-luxury",
        "nature-expedition",
        "wildlife-expedition"
      ];

      return !intlTypes.includes(
        trip.routeType
      );
    });

  indiaGrid.innerHTML =
    indiaTrips
      .map(createTripCard)
      .join("");
}

function renderInternational() {

  const intlTrips =
    filteredTrips().filter(trip => {

      return trip.id.includes("-complete")
        ||
        trip.routeType.includes("europe")
        ||
        trip.routeType.includes("luxury")
        ||
        trip.routeType.includes("island")
        ||
        trip.routeType.includes("historic");
    });

  intlGrid.innerHTML =
    intlTrips
      .map(createTripCard)
      .join("");
}

function renderDreamRoutes() {

  const dreamTrips =
    filteredTrips().filter(trip => {

      return [
        "luxury-europe",
        "classic-europe",
        "mountain-luxury",
        "island-luxury",
        "nature-expedition"
      ].includes(trip.routeType);

    });

  dreamGrid.innerHTML =
    dreamTrips
      .map(createTripCard)
      .join("");
}

function renderSeasonal() {

  const seasonal =
    filteredTrips()
      .filter(trip =>
        trip.bestMonths?.includes(
          getCurrentMonth()
        )
      )
      .slice(0, 8);

  seasonalGrid.innerHTML =
    seasonal
      .map(createTripCard)
      .join("");
}

// ======================================================
// MAIN RENDER
// ======================================================

function renderEverything() {

  renderQuickEscapes();

  renderIndia();

  renderInternational();

  renderDreamRoutes();

  renderSeasonal();
}

// ======================================================
// EVENTS
// ======================================================

monthPicker?.addEventListener(
  "change",
  renderEverything
);

searchInput?.addEventListener(
  "input",
  e => {

    state.search = e.target.value;

    renderEverything();
  }
);

// ======================================================
// INIT
// ======================================================

renderEverything();
