export const vibes = [
  { id: "quiet-luxury", label: "Quiet Luxury", mood: "slow, polished, boutique, calm" },
  { id: "healing", label: "Healing Escape", mood: "journaling, nature, sleep, reset" },
  { id: "cafes", label: "Cafe Hopping", mood: "walkable neighborhoods and pretty coffee" },
  { id: "girls-trip", label: "Girls Trip", mood: "safe, photogenic, social, cute fits" },
  { id: "adventure", label: "Adventure", mood: "views, movement, sunrise plans" },
  { id: "soft-life", label: "Soft Life", mood: "spa, sunsets, nice rooms, zero rush" },
  { id: "party", label: "Party + Aesthetic", mood: "beach clubs, late dinners, music" },
  { id: "spiritual", label: "Spiritual", mood: "temples, rituals, silence, meaning" }
];

const commonRevenue = [
  ["Affiliate stays", "Hotels, villas, hostels"],
  ["Experiences", "Tours, SIMs, transfers"],
  ["Premium guide", "INR 149-499 itinerary unlock"],
  ["Sponsored gems", "Boutique cafes and stays later"]
];

export const destinations = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=80",
    line: "Temples, cafes, beach clubs, rice fields, and enough versions of you to choose from.",
    tags: ["calm", "cafes", "beach clubs"],
    vibeIds: ["healing", "cafes", "soft-life", "spiritual", "party", "girls-trip"],
    budget: "INR 78k - 1.45L",
    budgetMin: 78000,
    days: "6-8 days",
    bestTime: "April to October",
    flight: "INR 22k - 38k from India",
    score: 94,
    mustGo: ["Ubud rice terraces", "Uluwatu cliff sunset", "Canggu cafe lane", "Tirta Empul", "Nusa Penida viewpoint"],
    hiddenGems: ["Sidemen valley stay", "Sayan backroad cafes", "Amed black-sand sunrise"],
    beforeYouGo: ["Check Indonesia e-VOA rules", "Carry an international card", "Install Grab/Gojek", "Keep one buffer day for traffic"],
    costBreakdown: [["Flights", "INR 22k-38k"], ["Stay", "INR 24k-70k"], ["Food", "INR 12k-35k"], ["Transport", "INR 7k-20k"], ["Experiences", "INR 10k-30k"]],
    revenue: commonRevenue,
    moodOptions: [
      {
        id: "soft-bali",
        vibeIds: ["healing", "soft-life", "spiritual", "cafes"],
        title: "Soft Bali",
        hook: "Ubud mornings, flower baths, journaling cafes, and one golden Uluwatu evening.",
        premium: false,
        itinerary: ["Land and sleep in Ubud", "Rice terraces + coffee tasting", "Temple morning + sound healing", "Waterfall + spa", "Uluwatu sunset"],
        avoid: ["Do not force Ubud, Canggu, and Uluwatu into one day.", "Avoid villas without road-access reviews."]
      },
      {
        id: "social-bali",
        vibeIds: ["party", "girls-trip", "cafes"],
        title: "Social Bali",
        hook: "Canggu brunch, beach clubs, cute boutiques, and late dinners.",
        premium: true,
        itinerary: ["Canggu check-in", "Cafe crawl + beach club", "Seminyak shopping", "Uluwatu night", "Slow recovery brunch"],
        avoid: ["Do not leave club reservations for Saturday night.", "Avoid scooters late if you are not confident."]
      },
      {
        id: "budget-bali",
        vibeIds: ["adventure", "cafes"],
        title: "Budget Aesthetic Bali",
        hook: "Hostels, scooters, cheap warungs, waterfall mornings, and still-pretty photos.",
        premium: true,
        itinerary: ["Ubud hostel base", "Waterfall route", "Local food crawl", "Nusa Penida day", "Canggu sunset"],
        avoid: ["Do not pick the cheapest island tour blindly.", "Avoid moving hotels every night."]
      }
    ]
  },
  {
    id: "japan",
    name: "Japan",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1800&q=80",
    line: "For clean design, tiny details, train-window feelings, and food you plan your day around.",
    tags: ["cinematic", "food", "culture"],
    vibeIds: ["quiet-luxury", "cafes", "girls-trip", "soft-life"],
    budget: "INR 1.35L - 2.4L",
    budgetMin: 135000,
    days: "7-10 days",
    bestTime: "March-May, October-November",
    flight: "INR 42k - 70k from India",
    score: 91,
    mustGo: ["Kyoto old streets", "Tokyo Daikanyama", "Osaka food lanes", "Hakone onsen", "TeamLab Borderless"],
    hiddenGems: ["Kichijoji cafes", "Kurama day trip", "Yanaka slow walk"],
    beforeYouGo: ["Book popular restaurants early", "Use Suica/Pasmo on phone if supported", "Pre-plan luggage forwarding", "Carry cash for small shops"],
    costBreakdown: [["Flights", "INR 42k-70k"], ["Stay", "INR 45k-95k"], ["Food", "INR 25k-55k"], ["Transit", "INR 18k-40k"], ["Experiences", "INR 10k-35k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "soft-japan", vibeIds: ["quiet-luxury", "soft-life"], title: "Soft Japan", hook: "Boutique hotels, onsen days, design shops, and clean mornings.", premium: false, itinerary: ["Tokyo design day", "Kyoto ryokan", "Arashiyama early walk", "Hakone onsen", "Osaka dinner"], avoid: ["Do not overpack cities.", "Avoid peak transit with huge luggage."] },
      { id: "cafe-japan", vibeIds: ["cafes", "girls-trip"], title: "Cafe Japan", hook: "Kissaten corners, matcha stops, photobooths, tiny bakeries.", premium: true, itinerary: ["Tokyo cafe map", "Shimokitazawa thrift", "Kyoto matcha", "Nara soft day", "Osaka dessert crawl"], avoid: ["Do not depend on late cafe hours.", "Avoid only staying near tourist stations."] }
    ]
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?auto=format&fit=crop&w=1800&q=80",
    line: "A weekend that can be soft, chaotic, luxe, or all three if you route it right.",
    tags: ["weekend", "beaches", "nightlife"],
    vibeIds: ["party", "girls-trip", "cafes", "soft-life"],
    budget: "INR 18k - 55k",
    budgetMin: 18000,
    days: "3-5 days",
    bestTime: "November to February",
    flight: "INR 5k - 14k domestic",
    score: 88,
    mustGo: ["Assagao cafes", "Fontainhas", "Anjuna sunset", "South Goa beach day", "Mapusa market"],
    hiddenGems: ["Aldona river roads", "Chorao island morning", "Cabo de Rama sunset"],
    beforeYouGo: ["Pre-book weekend cabs", "Pick North or South as your base", "Carry beach-safe footwear", "Check club event calendars"],
    costBreakdown: [["Flights/train", "INR 5k-14k"], ["Stay", "INR 8k-25k"], ["Food", "INR 5k-14k"], ["Cabs", "INR 3k-10k"], ["Nightlife", "INR 4k-16k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "goa-girls-weekend", vibeIds: ["girls-trip", "party", "cafes"], title: "Girls Weekend Goa", hook: "Safe stays, brunch, beach club, photo lanes, and no frantic driving.", premium: false, itinerary: ["North Goa check-in", "Assagao + Anjuna", "Fontainhas + beach club", "Slow checkout"], avoid: ["Do not bargain for random midnight cabs.", "Avoid splitting days across far beaches."] },
      { id: "soft-goa", vibeIds: ["soft-life", "cafes"], title: "Soft Goa", hook: "South Goa, quieter beaches, pretty breakfasts, sunset dinners.", premium: true, itinerary: ["South Goa base", "Slow beach day", "Cabo sunset", "Old Goa + Fontainhas"], avoid: ["Do not stay too far from dinner spots.", "Avoid peak weekend beach shacks without booking."] }
    ]
  },
  {
    id: "coorg",
    name: "Coorg",
    country: "India",
    image: "https://images.unsplash.com/photo-1609948543911-7f01ff385be5?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=80",
    line: "Misty coffee estates, slow villas, and no pressure to be reachable.",
    tags: ["misty", "coffee", "slow"],
    vibeIds: ["healing", "quiet-luxury", "soft-life", "spiritual"],
    budget: "INR 16k - 48k",
    budgetMin: 16000,
    days: "3-4 days",
    bestTime: "October to March",
    flight: "Best via Bengaluru + road",
    score: 85,
    mustGo: ["Coffee estate stay", "Abbey Falls", "Madikeri fort area", "Raja's Seat", "Plantation breakfast"],
    hiddenGems: ["Kakkabe side roads", "Estate lunch experiences", "Quiet sunrise viewpoints"],
    beforeYouGo: ["Book a driver if not self-driving", "Carry light layers", "Check rain before waterfall plans", "Pick stay quality over number of spots"],
    costBreakdown: [["Road travel", "INR 4k-12k"], ["Stay", "INR 8k-25k"], ["Food", "INR 3k-8k"], ["Local cab", "INR 4k-10k"], ["Experiences", "INR 2k-6k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "healing-coorg", vibeIds: ["healing", "soft-life"], title: "Healing Coorg", hook: "Estate stay, coffee, naps, mist, and zero guilt about doing less.", premium: false, itinerary: ["Drive in", "Coffee estate morning", "Waterfall + lunch", "Viewpoint sunset"], avoid: ["Do not chase too many tourist points.", "Avoid stays far from main roads in heavy rain."] },
      { id: "luxury-coorg", vibeIds: ["quiet-luxury"], title: "Quiet Luxury Coorg", hook: "A nicer estate room, private meals, spa time, and forest silence.", premium: true, itinerary: ["Check-in slow", "Estate tour", "Spa + viewpoint", "Late breakfast checkout"], avoid: ["Do not book without recent property photos.", "Avoid last-minute weekend rates."] }
    ]
  },
  {
    id: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1800&q=80",
    line: "Budget-friendly, wildly pretty, and built for cafe-to-coast wandering.",
    tags: ["budget", "street food", "views"],
    vibeIds: ["adventure", "cafes", "girls-trip", "healing"],
    budget: "INR 55k - 1.05L",
    budgetMin: 55000,
    days: "6-9 days",
    bestTime: "February to April",
    flight: "INR 18k - 34k from India",
    score: 90,
    mustGo: ["Hanoi old quarter", "Ninh Binh", "Hoi An lantern streets", "Da Nang beach", "Ha Long/Lan Ha Bay"],
    hiddenGems: ["Train Street alternatives", "Tam Coc backroads", "Hoi An quiet coffee courtyards"],
    beforeYouGo: ["Apply e-visa early", "Carry USD backup", "Check domestic flight baggage", "Use Grab for city rides"],
    costBreakdown: [["Flights", "INR 18k-34k"], ["Stay", "INR 10k-28k"], ["Food", "INR 8k-20k"], ["Internal travel", "INR 8k-24k"], ["Tours", "INR 8k-24k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "vietnam-budget-aesthetic", vibeIds: ["adventure", "cafes"], title: "Budget Aesthetic Vietnam", hook: "Egg coffee, hostels, lantern nights, sleeper routes, and big landscapes.", premium: false, itinerary: ["Hanoi food", "Ninh Binh", "Bay day", "Hoi An", "Da Nang beach"], avoid: ["Do not book the cheapest bay cruise blindly.", "Avoid too many north-south jumps."] },
      { id: "vietnam-girls", vibeIds: ["girls-trip", "cafes", "healing"], title: "Vietnam Girls Route", hook: "Cute stays, safe transfers, cafe maps, photos, and relaxed movement.", premium: true, itinerary: ["Hanoi cute stay", "Ninh Binh day", "Hoi An lantern night", "Beach morning", "Spa + cafe"], avoid: ["Do not arrive at bus stops too late.", "Avoid isolated stays without transport reviews."] }
    ]
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1800&q=80",
    line: "Train rides, surf towns, tea hills, wildlife, and gentle tropical drama.",
    tags: ["surf", "tea hills", "wildlife"],
    vibeIds: ["adventure", "healing", "soft-life", "spiritual"],
    budget: "INR 45k - 95k",
    budgetMin: 45000,
    days: "5-8 days",
    bestTime: "December to April",
    flight: "INR 12k - 24k from India",
    score: 87,
    mustGo: ["Ella train", "Galle Fort", "Mirissa", "Sigiriya", "Tea country"],
    hiddenGems: ["Ahangama cafe strip", "Diyaluma Falls", "Hiriketiya beach"],
    beforeYouGo: ["Check ETA rules", "Use PickMe in cities", "Book scenic train early", "Keep beach and hill layers"],
    costBreakdown: [["Flights", "INR 12k-24k"], ["Stay", "INR 14k-35k"], ["Food", "INR 8k-18k"], ["Transport", "INR 8k-24k"], ["Experiences", "INR 6k-18k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "sri-soft", vibeIds: ["healing", "soft-life"], title: "Soft Sri Lanka", hook: "Tea hills, slow beaches, scenic trains, and pretty dinners.", premium: false, itinerary: ["Colombo arrival", "Ella train", "Tea hills", "Mirissa", "Galle"], avoid: ["Do not underestimate travel time.", "Avoid loose plans for scenic trains."] },
      { id: "sri-adventure", vibeIds: ["adventure", "spiritual"], title: "Wild Sri Lanka", hook: "Sigiriya, safari, waterfalls, temples, and coast after the climb.", premium: true, itinerary: ["Sigiriya", "Kandy", "Ella", "Safari", "South coast"], avoid: ["Do not pack only beachwear.", "Avoid back-to-back long road days."] }
    ]
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1800&q=80",
    line: "Easy flights, island energy, shopping days, spa nights, and food that fixes moods.",
    tags: ["islands", "shopping", "food"],
    vibeIds: ["party", "girls-trip", "soft-life", "cafes"],
    budget: "INR 55k - 1.2L",
    budgetMin: 55000,
    days: "5-8 days",
    bestTime: "November to March",
    flight: "INR 16k - 32k from India",
    score: 89,
    mustGo: ["Bangkok cafes", "Chiang Mai old city", "Phuket beaches", "Phi Phi", "Night markets"],
    hiddenGems: ["Ari neighborhood cafes", "Koh Yao Noi", "Chiang Mai ceramic studios"],
    beforeYouGo: ["Check visa rules for Indians", "Keep island ferry buffers", "Use Grab/Bolt", "Book ethical elephant experiences only"],
    costBreakdown: [["Flights", "INR 16k-32k"], ["Stay", "INR 18k-45k"], ["Food", "INR 10k-25k"], ["Transfers", "INR 8k-22k"], ["Experiences", "INR 8k-25k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "thai-girls", vibeIds: ["girls-trip", "party"], title: "Thailand Girls Trip", hook: "Bangkok shopping, island photos, beach clubs, spa recovery.", premium: false, itinerary: ["Bangkok", "Cafe + shopping", "Phuket", "Island day", "Spa + night market"], avoid: ["Do not schedule tight ferry-flight connections.", "Avoid animal attractions with poor welfare."] },
      { id: "thai-soft", vibeIds: ["soft-life", "cafes"], title: "Soft Thailand", hook: "Chiang Mai cafes, boutique stays, massages, and warm nights.", premium: true, itinerary: ["Chiang Mai", "Cafe map", "Temple morning", "Spa day", "Bangkok dining"], avoid: ["Do not skip air-quality checks in burning season.", "Avoid only staying in party zones."] }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1800&q=80",
    line: "Glossy, easy, shopping-heavy, skyline-coded, and perfect for a quick luxury reset.",
    tags: ["luxury", "shopping", "quick trip"],
    vibeIds: ["quiet-luxury", "girls-trip", "soft-life", "party"],
    budget: "INR 70k - 1.6L",
    budgetMin: 70000,
    days: "4-6 days",
    bestTime: "November to March",
    flight: "INR 18k - 35k from India",
    score: 84,
    mustGo: ["Museum of the Future", "Alserkal Avenue", "Dubai Mall", "Desert dinner", "JBR/Marina"],
    hiddenGems: ["Al Fahidi mornings", "Meydan sunset spots", "Jumeirah coffee corners"],
    beforeYouGo: ["Check visa processing", "Reserve popular restaurants", "Plan outfits for dress codes", "Use metro plus cabs smartly"],
    costBreakdown: [["Flights", "INR 18k-35k"], ["Stay", "INR 32k-80k"], ["Food", "INR 18k-45k"], ["Transport", "INR 8k-24k"], ["Experiences", "INR 12k-35k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "dubai-luxe", vibeIds: ["quiet-luxury", "soft-life"], title: "Dubai Luxe Reset", hook: "Skyline rooms, spa, museum, desert dinner, and good lighting everywhere.", premium: false, itinerary: ["Arrive + marina", "Museum + mall", "Desert dinner", "Beach club", "Brunch"], avoid: ["Do not underestimate restaurant minimum spends.", "Avoid midday outdoor plans in heat."] },
      { id: "dubai-girls", vibeIds: ["girls-trip", "party"], title: "Dubai Girls Trip", hook: "Shopping, beach club, photos, dinners, and one dramatic night out.", premium: true, itinerary: ["JBR", "Mall + photos", "Beach club", "Dinner night", "Old Dubai"], avoid: ["Do not ignore dress codes.", "Avoid last-minute Saturday reservations."] }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=80",
    line: "Backwaters, tea gardens, slow wellness, monsoon greens, and coastal food.",
    tags: ["wellness", "backwaters", "green"],
    vibeIds: ["healing", "soft-life", "spiritual", "quiet-luxury"],
    budget: "INR 22k - 70k",
    budgetMin: 22000,
    days: "4-7 days",
    bestTime: "September to March",
    flight: "INR 6k - 18k domestic",
    score: 86,
    mustGo: ["Alleppey backwaters", "Munnar tea", "Fort Kochi", "Varkala cliff", "Ayurveda stay"],
    hiddenGems: ["Kumarakom mornings", "Marari beach", "Vagamon meadows"],
    beforeYouGo: ["Pick one region if short on time", "Check monsoon road conditions", "Book houseboats carefully", "Carry breathable cotton"],
    costBreakdown: [["Flights/train", "INR 6k-18k"], ["Stay", "INR 12k-38k"], ["Food", "INR 5k-14k"], ["Transport", "INR 8k-22k"], ["Experiences", "INR 4k-16k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "kerala-healing", vibeIds: ["healing", "spiritual"], title: "Healing Kerala", hook: "Ayurveda, backwaters, tea air, and a softer body clock.", premium: false, itinerary: ["Kochi", "Munnar", "Tea estate", "Backwater stay", "Slow checkout"], avoid: ["Do not combine every Kerala region in one week.", "Avoid unverified houseboats."] },
      { id: "kerala-soft", vibeIds: ["soft-life", "quiet-luxury"], title: "Soft Kerala", hook: "Boutique resorts, coastal dinners, and green luxury without loudness.", premium: true, itinerary: ["Fort Kochi", "Marari", "Kumarakom", "Spa day", "Kochi cafe"], avoid: ["Do not leave resort transfers unclear.", "Avoid peak holiday booking delays."] }
    ]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=80",
    line: "Palaces, desert light, boutique havelis, silver jewelry, and old-world drama.",
    tags: ["palaces", "heritage", "desert"],
    vibeIds: ["quiet-luxury", "girls-trip", "spiritual", "cafes"],
    budget: "INR 28k - 90k",
    budgetMin: 28000,
    days: "4-7 days",
    bestTime: "October to March",
    flight: "INR 6k - 18k domestic",
    score: 83,
    mustGo: ["Jaipur City Palace", "Udaipur lakes", "Jodhpur blue lanes", "Jaisalmer dunes", "Local bazaars"],
    hiddenGems: ["Bar Palladio timing hack", "Bundi lanes", "Quiet haveli breakfasts"],
    beforeYouGo: ["Book heritage stays early", "Plan sunrise/sunset shoots", "Carry sunscreen", "Check intercity drive times"],
    costBreakdown: [["Flights/train", "INR 6k-18k"], ["Stay", "INR 14k-45k"], ["Food", "INR 6k-18k"], ["Transport", "INR 8k-25k"], ["Experiences", "INR 5k-20k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "rajasthan-luxe", vibeIds: ["quiet-luxury"], title: "Palace Soft Luxury", hook: "Heritage hotels, lake dinners, slow bazaars, and sunset terraces.", premium: false, itinerary: ["Jaipur palace day", "Bazaar + cafe", "Udaipur lakes", "Heritage dinner"], avoid: ["Do not stack too many cities.", "Avoid midday fort walks."] },
      { id: "rajasthan-girls", vibeIds: ["girls-trip", "cafes"], title: "Rajasthan Girls Edit", hook: "Jewelry lanes, cafes, havelis, photos, and safe route planning.", premium: true, itinerary: ["Jaipur", "Cafe + bazaar", "Udaipur", "Boat sunset", "Slow brunch"], avoid: ["Do not leave intercity rides unbooked.", "Avoid overpacking outfits for heat."] }
    ]
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1800&q=80",
    line: "One island, blue water, no itinerary guilt, and luxury that mostly means silence.",
    tags: ["island", "luxury", "honeymoon"],
    vibeIds: ["quiet-luxury", "soft-life", "healing"],
    budget: "INR 95k - 2.8L",
    budgetMin: 95000,
    days: "4-5 days",
    bestTime: "November to April",
    flight: "INR 20k - 38k from India",
    score: 82,
    mustGo: ["House reef", "Sandbank picnic", "Sunset cruise", "Spa session", "Floating breakfast if worth it"],
    hiddenGems: ["Local island cafes", "Shoulder-season resort deals", "House-reef-first properties"],
    beforeYouGo: ["Compare transfer costs", "Check meal plan inclusions", "Read reef reviews", "Pack reef-safe sunscreen"],
    costBreakdown: [["Flights", "INR 20k-38k"], ["Stay", "INR 55k-2L"], ["Meals", "INR 15k-45k"], ["Transfers", "INR 12k-45k"], ["Experiences", "INR 8k-35k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "maldives-soft", vibeIds: ["soft-life", "healing"], title: "Maldives Soft Reset", hook: "Sleep, swim, eat, repeat. That is the feature.", premium: false, itinerary: ["Arrive", "Reef swim", "Spa day", "Sandbank", "Lazy checkout"], avoid: ["Do not ignore speedboat/seaplane costs.", "Avoid resorts with weak meal plans."] },
      { id: "maldives-luxe", vibeIds: ["quiet-luxury"], title: "Quiet Luxury Maldives", hook: "House reef, nicer room category, fewer decisions, better food.", premium: true, itinerary: ["Water villa", "Private dinner", "Snorkel", "Spa", "Sunset cruise"], avoid: ["Do not pay for overwater only for photos.", "Avoid poor reef access."] }
    ]
  }
];

destinations.push(
  {
    id: "paris",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1800&q=80",
    line: "Museums, perfume counters, tiny tables, late walks, and feeling overdressed in the best way.",
    tags: ["fashion", "cafes", "museums"],
    vibeIds: ["quiet-luxury", "cafes", "girls-trip", "soft-life"],
    budget: "INR 1.45L - 2.8L",
    budgetMin: 145000,
    days: "5-7 days",
    bestTime: "April-June, September-October",
    flight: "INR 48k - 85k from India",
    score: 86,
    mustGo: ["Le Marais", "Musee d'Orsay", "Seine sunset", "Saint-Germain", "Montmartre morning"],
    hiddenGems: ["Canal Saint-Martin corners", "Musee Rodin garden hour", "Galerie Vivienne"],
    cafeRecs: ["Cafe de Flore", "Boot Cafe", "Ten Belles", "Partisan Cafe"],
    beforeYouGo: ["Book museum slots", "Keep anti-theft basics", "Use Navigo/metro passes", "Reserve popular dinners"],
    costBreakdown: [["Flights", "INR 48k-85k"], ["Stay", "INR 60k-1.2L"], ["Food", "INR 28k-65k"], ["Transit", "INR 8k-18k"], ["Experiences", "INR 15k-45k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "paris-fashion", vibeIds: ["quiet-luxury", "girls-trip"], title: "Fashion Week Feel", hook: "Concept stores, perfume, gallery walks, and polished dinners.", premium: true, itinerary: ["Le Marais", "Perfume stop", "Gallery lunch", "Seine walk", "Saint-Germain dinner"], avoid: ["Do not wing popular restaurants.", "Avoid packed museum hours."] },
      { id: "paris-cafe", vibeIds: ["cafes", "soft-life"], title: "Cafe Paris", hook: "Slow mornings, tiny tables, bookstores, and buttery plans.", premium: true, itinerary: ["Left Bank breakfast", "Bookshop route", "Musee d'Orsay", "Canal cafes", "Golden hour Seine"], avoid: ["Do not overplan arrondissement jumps.", "Avoid only eating near landmarks."] }
    ]
  },
  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1538485399081-7c8edffc8bb7?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1800&q=80",
    line: "Skincare runs, concept cafes, late-night food, clean trains, and main-character shopping.",
    tags: ["skincare", "cafes", "shopping"],
    vibeIds: ["cafes", "girls-trip", "party", "quiet-luxury"],
    budget: "INR 1.05L - 2.1L",
    budgetMin: 105000,
    days: "6-8 days",
    bestTime: "April-June, September-November",
    flight: "INR 38k - 70k from India",
    score: 88,
    mustGo: ["Seongsu", "Hannam", "Hongdae", "Bukchon", "Myeongdong"],
    hiddenGems: ["Mangwon market lanes", "Ikseon-dong evenings", "Seoul Forest cafe pockets"],
    cafeRecs: ["Onion Anguk", "Anthracite", "Cafe Layered", "Teddy Beurre House"],
    beforeYouGo: ["Install Naver Map", "Get T-money card", "Check clinic bookings", "Carry passport for tax refunds"],
    costBreakdown: [["Flights", "INR 38k-70k"], ["Stay", "INR 38k-85k"], ["Food", "INR 18k-42k"], ["Transit", "INR 6k-14k"], ["Shopping/experiences", "INR 20k-70k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "seoul-cafe", vibeIds: ["cafes", "girls-trip"], title: "Cafe Seoul", hook: "Seongsu warehouses, bakeries, photo booths, and skincare stops.", premium: true, itinerary: ["Seongsu cafe map", "Hannam boutiques", "Myeongdong skincare", "Hongdae night", "Bukchon morning"], avoid: ["Do not rely only on Google Maps.", "Avoid Sundays for some boutiques."] },
      { id: "seoul-night", vibeIds: ["party", "girls-trip"], title: "Night Seoul", hook: "BBQ dinners, neon lanes, safe transit, and late dessert.", premium: true, itinerary: ["Hongdae", "BBQ dinner", "Karaoke", "Convenience-store dessert", "Slow brunch"], avoid: ["Do not miss last train timing.", "Avoid unmarked taxis."] }
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1800&q=80",
    line: "Clean, compact, food-obsessed, design-heavy, and perfect when you want easy international.",
    tags: ["food", "design", "easy"],
    vibeIds: ["quiet-luxury", "cafes", "girls-trip", "soft-life"],
    budget: "INR 75k - 1.7L",
    budgetMin: 75000,
    days: "4-5 days",
    bestTime: "February-April, July-September",
    flight: "INR 20k - 38k from India",
    score: 85,
    mustGo: ["Tiong Bahru", "Gardens by the Bay", "Jewel Changi", "Haji Lane", "Marina Bay"],
    hiddenGems: ["Dempsey Hill", "Joo Chiat shophouses", "Gillman Barracks"],
    cafeRecs: ["Tiong Bahru Bakery", "Plain Vanilla", "Merci Marcel", "Nylon Coffee"],
    beforeYouGo: ["Use MRT + Grab", "Book attractions online", "Carry light rainwear", "Plan hawker meals by area"],
    costBreakdown: [["Flights", "INR 20k-38k"], ["Stay", "INR 36k-90k"], ["Food", "INR 14k-35k"], ["Transit", "INR 5k-12k"], ["Experiences", "INR 12k-35k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "singapore-clean-girl", vibeIds: ["quiet-luxury", "soft-life"], title: "Clean Girl Singapore", hook: "Design hotels, gardens, shopping, and no logistical drama.", premium: true, itinerary: ["Jewel arrival", "Marina walk", "Gardens", "Dempsey dinner", "Tiong Bahru brunch"], avoid: ["Do not overpay for taxis at peak.", "Avoid outdoor-heavy afternoons."] },
      { id: "singapore-cafe", vibeIds: ["cafes", "girls-trip"], title: "Cafe + Hawker Edit", hook: "Pretty brunch, hawker icons, shophouse walks, and shopping breaks.", premium: true, itinerary: ["Tiong Bahru", "Joo Chiat", "Haji Lane", "Hawker dinner", "Orchard"], avoid: ["Do not eat only in malls.", "Avoid skipping hydration."] }
    ]
  },
  {
    id: "turkey",
    name: "Turkey",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1800&q=80",
    line: "Rooftop breakfasts, hammams, bazaars, balloons, coastlines, and cinematic chaos.",
    tags: ["bazaars", "hammam", "views"],
    vibeIds: ["adventure", "girls-trip", "spiritual", "cafes"],
    budget: "INR 95k - 1.9L",
    budgetMin: 95000,
    days: "7-9 days",
    bestTime: "April-June, September-October",
    flight: "INR 32k - 62k from India",
    score: 87,
    mustGo: ["Istanbul old city", "Galata", "Cappadocia", "Grand Bazaar", "Bosphorus"],
    hiddenGems: ["Balat streets", "Kadikoy food side", "Uchisar viewpoints"],
    cafeRecs: ["Federal Galata", "Mangerie", "Petra Roasting", "Mandabatmaz"],
    beforeYouGo: ["Check visa/e-visa", "Book balloon buffer nights", "Carry scarf for mosques", "Use BiTaksi in Istanbul"],
    costBreakdown: [["Flights", "INR 32k-62k"], ["Stay", "INR 32k-75k"], ["Food", "INR 16k-38k"], ["Internal travel", "INR 18k-45k"], ["Experiences", "INR 18k-60k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "turkey-cinematic", vibeIds: ["girls-trip", "cafes"], title: "Cinematic Turkey", hook: "Rooftop breakfasts, Galata lanes, hammam, and Cappadocia photos.", premium: true, itinerary: ["Istanbul arrival", "Old city", "Galata + hammam", "Cappadocia", "Balloon morning"], avoid: ["Do not book one Cappadocia night only.", "Avoid taxis without app/price clarity."] },
      { id: "turkey-adventure", vibeIds: ["adventure", "spiritual"], title: "Soul + Stone Route", hook: "Mosques, valleys, ancient streets, and slow tea stops.", premium: true, itinerary: ["Sultanahmet", "Bosphorus", "Cappadocia valleys", "Sunrise viewpoint", "Bazaar"], avoid: ["Do not ignore modest dress days.", "Avoid midday summer climbs."] }
    ]
  },
  {
    id: "greece",
    name: "Greece",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=80",
    line: "Whitewashed islands, seaside dinners, linen outfits, ferries, and golden-hour everything.",
    tags: ["islands", "sunset", "linen"],
    vibeIds: ["soft-life", "quiet-luxury", "girls-trip", "party"],
    budget: "INR 1.35L - 2.8L",
    budgetMin: 135000,
    days: "6-8 days",
    bestTime: "May-June, September",
    flight: "INR 45k - 80k from India",
    score: 84,
    mustGo: ["Athens Plaka", "Santorini sunset", "Paros villages", "Mykonos beach", "Naxos old town"],
    hiddenGems: ["Milos boat day", "Antiparos evening", "Anafiotika lanes"],
    cafeRecs: ["Little Tree Athens", "The Underdog", "Passaggio Santorini", "Yard Paros"],
    beforeYouGo: ["Book ferries with buffers", "Choose islands by vibe", "Carry sunscreen", "Check luggage rules"],
    costBreakdown: [["Flights", "INR 45k-80k"], ["Stay", "INR 55k-1.4L"], ["Food", "INR 25k-60k"], ["Ferries", "INR 18k-45k"], ["Experiences", "INR 14k-40k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "greece-soft", vibeIds: ["soft-life", "quiet-luxury"], title: "Linen Island Route", hook: "Santorini views, Paros villages, long dinners, and unbothered mornings.", premium: true, itinerary: ["Athens", "Santorini", "Boat day", "Paros", "Slow beach"], avoid: ["Do not island-hop too fast.", "Avoid July-August if budget-sensitive."] },
      { id: "greece-girls", vibeIds: ["girls-trip", "party"], title: "Greek Girls Summer", hook: "Beach clubs, cute villages, photos, seafood, and ferry timing handled.", premium: true, itinerary: ["Athens", "Mykonos", "Beach club", "Paros", "Sunset dinner"], avoid: ["Do not book late ferries before flights.", "Avoid staying far from ports without transfers."] }
    ]
  },
  {
    id: "morocco",
    name: "Morocco",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1539020140153-e8c237112e53?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1800&q=80",
    line: "Riads, souks, desert light, mint tea, tiled courtyards, and textured everything.",
    tags: ["riads", "desert", "souks"],
    vibeIds: ["adventure", "spiritual", "girls-trip", "quiet-luxury"],
    budget: "INR 1.15L - 2.2L",
    budgetMin: 115000,
    days: "7-9 days",
    bestTime: "March-May, September-November",
    flight: "INR 42k - 78k from India",
    score: 83,
    mustGo: ["Marrakech medina", "Jardin Majorelle", "Agafay desert", "Fes medina", "Chefchaouen"],
    hiddenGems: ["Riad rooftop mornings", "Essaouira coast", "Le Jardin Secret"],
    cafeRecs: ["Nomad", "Cafe des Epices", "Bacha Coffee", "Plus61"],
    beforeYouGo: ["Book riad transfers", "Dress modestly in medinas", "Carry cash", "Use guides for dense souks"],
    costBreakdown: [["Flights", "INR 42k-78k"], ["Stay", "INR 35k-85k"], ["Food", "INR 18k-42k"], ["Transport", "INR 18k-45k"], ["Experiences", "INR 15k-50k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "morocco-design", vibeIds: ["quiet-luxury", "girls-trip"], title: "Riad Design Route", hook: "Courtyards, tiled pools, rooftop breakfasts, and souk styling.", premium: true, itinerary: ["Riad check-in", "Majorelle", "Souk guided walk", "Agafay dinner", "Hammam"], avoid: ["Do not wander dense souks late alone.", "Avoid riads without transfer help."] },
      { id: "morocco-adventure", vibeIds: ["adventure", "spiritual"], title: "Desert + Medina", hook: "Medina mornings, desert dinner, old cities, and quiet tea stops.", premium: true, itinerary: ["Marrakech", "Agafay", "Fes", "Chefchaouen", "Coast"], avoid: ["Do not underestimate drive times.", "Avoid unlicensed guides."] }
    ]
  },
  {
    id: "bhutan",
    name: "Bhutan",
    country: "Bhutan",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=80",
    line: "Mountain air, monasteries, quiet roads, and the rare feeling of slowing down fully.",
    tags: ["monasteries", "mountains", "quiet"],
    vibeIds: ["spiritual", "healing", "quiet-luxury", "adventure"],
    budget: "INR 65k - 1.45L",
    budgetMin: 65000,
    days: "5-7 days",
    bestTime: "March-May, September-November",
    flight: "INR 18k - 36k from India",
    score: 86,
    mustGo: ["Tiger's Nest", "Thimphu", "Punakha Dzong", "Dochula Pass", "Paro valley"],
    hiddenGems: ["Gangtey valley", "Riverside farm lunches", "Quiet monastery courtyards"],
    cafeRecs: ["Ambient Cafe", "Mountain Cafe", "Champaca Cafe", "Brioche Cafe"],
    beforeYouGo: ["Check sustainable development fee", "Book through local operators if needed", "Carry layers", "Respect monastery rules"],
    costBreakdown: [["Flights", "INR 18k-36k"], ["Stay", "INR 25k-70k"], ["Food", "INR 8k-20k"], ["Guide/transport", "INR 20k-45k"], ["Permits/experiences", "INR 8k-30k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "bhutan-spiritual", vibeIds: ["spiritual", "healing"], title: "Monastery Reset", hook: "Paro, Punakha, quiet roads, and the Tiger's Nest climb.", premium: true, itinerary: ["Paro", "Thimphu", "Punakha", "Tiger's Nest", "Slow valley"], avoid: ["Do not rush the altitude days.", "Avoid ignoring temple etiquette."] },
      { id: "bhutan-luxury", vibeIds: ["quiet-luxury"], title: "Mountain Luxury", hook: "Design lodges, slow meals, valley views, and curated drives.", premium: true, itinerary: ["Paro lodge", "Thimphu design", "Punakha stay", "Spa", "Tiger's Nest"], avoid: ["Do not book luxury stays without transfer clarity.", "Avoid overstuffed days."] }
    ]
  },
  {
    id: "andaman",
    name: "Andaman",
    country: "India",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=80",
    line: "Blue water without leaving India, beach mornings, ferries, scuba, and quiet island nights.",
    tags: ["beaches", "scuba", "islands"],
    vibeIds: ["healing", "adventure", "soft-life", "girls-trip"],
    budget: "INR 45k - 1.1L",
    budgetMin: 45000,
    days: "5-7 days",
    bestTime: "November to April",
    flight: "INR 14k - 32k domestic",
    score: 84,
    mustGo: ["Havelock", "Radhanagar Beach", "Neil Island", "Scuba/snorkel", "Cellular Jail"],
    hiddenGems: ["Kalapathar sunrise", "Laxmanpur sunset", "Quiet beach shack mornings"],
    cafeRecs: ["Full Moon Cafe", "Something Different", "Fat Martin", "Dugong Cafe"],
    beforeYouGo: ["Book ferries early", "Carry cash", "Check weather before water activities", "Keep buffer before return flight"],
    costBreakdown: [["Flights", "INR 14k-32k"], ["Stay", "INR 18k-50k"], ["Food", "INR 8k-20k"], ["Ferries/cabs", "INR 7k-18k"], ["Water activities", "INR 8k-30k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "andaman-blue-reset", vibeIds: ["healing", "soft-life"], title: "Blue Reset", hook: "Havelock beaches, slow cafes, swims, and no city noise.", premium: true, itinerary: ["Port Blair", "Havelock", "Radhanagar", "Neil Island", "Lazy return"], avoid: ["Do not book tight ferry-flight combos.", "Avoid monsoon water activity assumptions."] },
      { id: "andaman-adventure", vibeIds: ["adventure", "girls-trip"], title: "Scuba + Island Route", hook: "Dives, beach hops, ferries, and group-friendly island pacing.", premium: true, itinerary: ["Havelock", "Scuba day", "Kalapathar", "Neil", "Snorkel"], avoid: ["Do not dive right before flying.", "Avoid unlicensed operators."] }
    ]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1800&q=80",
    line: "High-altitude moonscapes, monasteries, lakes, silence, and a trip that feels earned.",
    tags: ["mountains", "monasteries", "roadtrip"],
    vibeIds: ["adventure", "spiritual", "healing"],
    budget: "INR 42k - 1.05L",
    budgetMin: 42000,
    days: "6-8 days",
    bestTime: "June to September",
    flight: "INR 12k - 28k domestic",
    score: 85,
    mustGo: ["Leh", "Pangong", "Nubra", "Thiksey monastery", "Shanti Stupa"],
    hiddenGems: ["Turtuk village", "Hemis quiet corners", "Alchi monastery"],
    cafeRecs: ["Lehvenda Cafe", "Lala's Cafe", "Bon Appetit", "OpenHand Cafe"],
    beforeYouGo: ["Acclimatize first", "Carry layers", "Check permits", "Avoid alcohol early"],
    costBreakdown: [["Flights", "INR 12k-28k"], ["Stay", "INR 14k-35k"], ["Food", "INR 7k-18k"], ["Transport", "INR 18k-45k"], ["Permits/experiences", "INR 4k-12k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "ladakh-spiritual", vibeIds: ["spiritual", "healing"], title: "Monastery + Silence", hook: "Slow acclimatization, monasteries, lake views, and early nights.", premium: true, itinerary: ["Leh rest", "Monastery day", "Nubra", "Pangong", "Slow return"], avoid: ["Do not skip acclimatization.", "Avoid packed arrival day plans."] },
      { id: "ladakh-adventure", vibeIds: ["adventure"], title: "High Road Adventure", hook: "Road days, dramatic passes, cold air, and big-view pacing.", premium: true, itinerary: ["Leh", "Khardung La", "Nubra", "Pangong", "Turtuk"], avoid: ["Do not ignore weather closures.", "Avoid poor vehicle operators."] }
    ]
  },
  {
    id: "himachal",
    name: "Himachal",
    country: "India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
    line: "Mountain cafes, pine roads, hostel energy, workation corners, and soft foggy mornings.",
    tags: ["mountains", "cafes", "workation"],
    vibeIds: ["cafes", "adventure", "healing", "party"],
    budget: "INR 18k - 60k",
    budgetMin: 18000,
    days: "4-7 days",
    bestTime: "March-June, October-November",
    flight: "Best via Delhi/Chandigarh + road",
    score: 82,
    mustGo: ["Manali old town", "Dharamkot", "Bir", "Jibhi", "Kasol"],
    hiddenGems: ["Sethan", "Tirthan riverside stays", "Naggar art corners"],
    cafeRecs: ["Johnson's Cafe", "Moonpeak", "June 16", "Garden Cafe"],
    beforeYouGo: ["Check road status", "Pick one valley", "Carry layers", "Book buses in advance"],
    costBreakdown: [["Travel", "INR 4k-14k"], ["Stay", "INR 8k-24k"], ["Food", "INR 5k-14k"], ["Local transport", "INR 4k-12k"], ["Experiences", "INR 3k-12k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "himachal-cafe", vibeIds: ["cafes", "healing"], title: "Mountain Cafe Route", hook: "Dharamkot mornings, pine walks, book cafes, and slow evenings.", premium: true, itinerary: ["Dharamkot", "Cafe day", "Waterfall walk", "Bir", "Slow return"], avoid: ["Do not switch towns daily.", "Avoid bad-weather bike plans."] },
      { id: "himachal-adventure", vibeIds: ["adventure", "party"], title: "Hostel + Hike Edit", hook: "Hostels, short hikes, bonfire nights, and budget mountain socializing.", premium: true, itinerary: ["Manali", "Sethan", "Cafe night", "Hike day", "Naggar"], avoid: ["Do not underestimate road fatigue.", "Avoid isolated late-night walks."] }
    ]
  },
  {
    id: "mauritius",
    name: "Mauritius",
    country: "Mauritius",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
    banner: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1800&q=80",
    line: "Lagoon water, road trips, resort softness, waterfalls, and island days with more movement than Maldives.",
    tags: ["island", "resort", "waterfalls"],
    vibeIds: ["soft-life", "adventure", "quiet-luxury", "healing"],
    budget: "INR 1.05L - 2.3L",
    budgetMin: 105000,
    days: "5-7 days",
    bestTime: "May-December",
    flight: "INR 38k - 72k from India",
    score: 81,
    mustGo: ["Le Morne", "Chamarel", "Ile aux Cerfs", "Grand Baie", "Black River Gorges"],
    hiddenGems: ["Rochester Falls", "Mahebourg waterfront", "Gris Gris cliffs"],
    cafeRecs: ["Cafe LUX", "Vanilla Village", "The Good Life", "Artisan Coffee"],
    beforeYouGo: ["Rent car or book driver", "Check resort meal plans", "Carry beach and hike shoes", "Plan south and north separately"],
    costBreakdown: [["Flights", "INR 38k-72k"], ["Stay", "INR 45k-1.2L"], ["Food", "INR 18k-45k"], ["Transport", "INR 15k-40k"], ["Experiences", "INR 12k-35k"]],
    revenue: commonRevenue,
    moodOptions: [
      { id: "mauritius-soft", vibeIds: ["soft-life", "quiet-luxury"], title: "Lagoon Soft Life", hook: "Resort mornings, Le Morne views, spa, and slow island dinners.", premium: true, itinerary: ["Resort check-in", "Le Morne", "Chamarel", "Ile aux Cerfs", "Slow beach"], avoid: ["Do not stay too far from planned regions.", "Avoid assuming taxis are cheap."] },
      { id: "mauritius-adventure", vibeIds: ["adventure", "healing"], title: "Waterfall + Coast", hook: "South island drives, waterfalls, hikes, beaches, and blue water breaks.", premium: true, itinerary: ["South coast", "Chamarel", "Black River", "Catamaran", "North day"], avoid: ["Do not skip weather checks.", "Avoid overpacking resort-only clothes."] }
    ]
  }
);

for (const destination of destinations) {
  destination.cafeRecs ||= [`${destination.name} signature cafe`, `${destination.name} quiet breakfast spot`, `${destination.name} sunset coffee stop`];
  const hasRoute = (id) => destination.moodOptions.some((route) => route.id === id);
  const firstMust = destination.mustGo[0] || destination.name;
  const firstGem = destination.hiddenGems[0] || `${destination.name} slow corner`;

  if (destination.vibeIds.includes("cafes") && !destination.moodOptions.some((route) => route.vibeIds.includes("cafes") && route.title.toLowerCase().includes("cafe"))) {
    destination.moodOptions.push({
      id: `${destination.id}-cafe-crawl`,
      vibeIds: ["cafes", "girls-trip"],
      title: "Cafe Crawl Edit",
      hook: `${destination.name} through coffee, photogenic streets, easy walks, and one low-effort dinner.`,
      premium: true,
      itinerary: [`Start near ${destination.cafeRecs[0]}`, `Walk ${firstMust}`, `Save ${firstGem} for golden hour`, "Dinner close to your stay"],
      avoid: ["Do not cross the city for every cafe.", "Avoid places with pretty photos but weak recent reviews."]
    });
  }

  if (destination.vibeIds.includes("adventure") && !hasRoute(`${destination.id}-active-route`)) {
    destination.moodOptions.push({
      id: `${destination.id}-active-route`,
      vibeIds: ["adventure", "healing"],
      title: "Active Reset",
      hook: `${destination.name} with movement, views, early starts, and recovery meals built in.`,
      premium: true,
      itinerary: [`Base near ${firstMust}`, "Early outdoor block", `Detour to ${firstGem}`, "Recovery cafe or spa", "Slow final morning"],
      avoid: ["Do not stack intense travel days back-to-back.", "Avoid booking weather-sensitive experiences without a buffer."]
    });
  }

  if (destination.vibeIds.includes("spiritual") && !hasRoute(`${destination.id}-soul-route`)) {
    destination.moodOptions.push({
      id: `${destination.id}-soul-route`,
      vibeIds: ["spiritual", "healing"],
      title: "Soul Reset",
      hook: `${destination.name} with quiet mornings, ritual spaces, soft food stops, and less noise.`,
      premium: true,
      itinerary: ["Slow arrival", `Morning at ${firstMust}`, "Long lunch", `Quiet hour near ${firstGem}`, "Early night"],
      avoid: ["Do not turn sacred places into photo-only stops.", "Avoid loud zones if rest is the goal."]
    });
  }

  if (destination.vibeIds.includes("party") && !hasRoute(`${destination.id}-social-route`)) {
    destination.moodOptions.push({
      id: `${destination.id}-social-route`,
      vibeIds: ["party", "girls-trip"],
      title: "Social Night Edit",
      hook: `${destination.name} with safe transfers, dinner-first plans, and a night-out route that still feels aesthetic.`,
      premium: true,
      itinerary: ["Late brunch", "Shopping or beach block", "Golden hour stop", "Dinner reservation", "One curated night-out area"],
      avoid: ["Do not leave return transport vague.", "Avoid hopping across far nightlife zones."]
    });
  }
}

export const packages = destinations.flatMap((destination) =>
  destination.moodOptions.map((option) => ({
    ...option,
    destinationId: destination.id,
    budget: destination.costBreakdown,
    affiliate: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination.name)}`
  }))
);

export const hiddenGems = destinations.flatMap((destination) =>
  destination.hiddenGems.map((gem) => ({ destinationId: destination.id, gem }))
);
