const budgetBands = {
  "under-30k": 30000,
  "30k-70k": 70000,
  "70k-1.5l": 150000,
  "1.5l-plus": 300000
};

function parseLowestBudget(range) {
  const match = range.replace(/,/g, "").match(/(?:INR|₹)\s*([\d.]+)\s*(k|L|l)?/i);
  if (!match) return 80000;
  const value = Number(match[1]);
  const suffix = (match[2] || "").toLowerCase();
  if (suffix === "l") return value * 100000;
  if (suffix === "k") return value * 1000;
  return value;
}

export function recommendTrips(input, { destinations, packages }) {
  const selectedVibe = input.vibe || "healing";
  const maxBudget = budgetBands[input.budget] || 100000;
  const duration = Number(input.duration || 5);
  const food = input.food || "anything";

  const ranked = destinations
    .map((destination) => {
      let score = destination.score;
      if (destination.vibeIds.includes(selectedVibe)) score += 30;
      if (parseLowestBudget(destination.budget) <= maxBudget) score += 16;
      if (duration >= Number(destination.days.match(/\d+/)?.[0] || 5)) score += 8;
      if (food === "vegetarian" && ["bali", "goa", "coorg", "vietnam"].includes(destination.id)) score += 5;
      if (food === "street-food" && ["vietnam", "japan", "goa"].includes(destination.id)) score += 8;
      return { ...destination, matchScore: Math.min(score, 100) };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  const lead = ranked[0];
  const packageMatch = packages.find((item) => item.destinationId === lead.id && !item.premium) || packages.find((item) => item.destinationId === lead.id);
  const reason = `You will probably enjoy ${lead.name} because it matches your ${selectedVibe.replace("-", " ")} mood, fits a ${duration}-day plan, and still leaves room for food, photos, and unplanned little discoveries.`;

  return {
    answer: reason,
    topDestination: lead,
    package: packageMatch,
    alternatives: ranked.slice(1)
  };
}
