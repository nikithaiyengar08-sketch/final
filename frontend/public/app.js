
import {
  quickEscapes,
  indiaDestinations,
  indiaPackages,
  internationalDestinations,
  globalPackages
} from './data.js';

const monthInput = document.getElementById('travel-month');

function getCurrentMonth() {
  if (!monthInput || !monthInput.value) {
    return new Date().toLocaleString('default', { month: 'long' });
  }

  return new Date(monthInput.value)
    .toLocaleString('default', { month: 'long' });
}

function renderSection(items, targetId) {
  const grid = document.getElementById(targetId);

  const selectedMonth = getCurrentMonth();

  const filtered = items.filter(item =>
    !item.bestMonths || item.bestMonths.includes(selectedMonth)
  );

  grid.innerHTML = filtered.map(item => `
    <article class="route-card">
      <img src="${item.image || ''}" alt="${item.title || item.name}" />

      <div class="card-content">
        <div class="route-duration">
          ${item.duration || item.country || ''}
        </div>

        <h3>${item.title || item.name}</h3>

        <div class="route-locations">
          ${(item.locations || item.route || []).join(' • ')}
        </div>

        <p>${item.identity || item.line || item.why || ''}</p>

        ${item.budgets ? `
          <div class="budget-box">
            <span>Budget</span>
            <strong>${item.budgets.budget}</strong>

            <span>Mid</span>
            <strong>${item.budgets.mid}</strong>

            <span>Luxury</span>
            <strong>${item.budgets.luxury}</strong>
          </div>
        ` : ''}

        ${item.trendingScore >= 9 ? `
          <div class="trending-badge">
            trending right now
          </div>
        ` : ''}
      </div>
    </article>
  `).join('');
}

function renderAll() {
  renderSection(quickEscapes, 'quick-escapes-grid');
  renderSection(indiaDestinations, 'india-grid');
  renderSection(indiaPackages, 'india-packages-grid');
  renderSection(internationalDestinations, 'international-grid');
  renderSection(globalPackages, 'global-grid');
}

monthInput?.addEventListener('change', renderAll);

renderAll();
