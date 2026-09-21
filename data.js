/*
  ============================================================
  OTT RELEASE HUB — DEMO CONTENT FILE
  ============================================================
  This file holds ALL the movie / web-series information shown
  across the website. It is the ONLY file you need to edit to
  add, remove or update a release.

  ----------------------------------------------------------
  HOW TO ADD A NEW OTT RELEASE
  ----------------------------------------------------------
  1. Copy one whole object inside the `releases` array below
     (from the opening { to the closing },).
  2. Paste it at the top (or bottom) of the array.
  3. Change every field to match your new release.
  4. Save the file and refresh the site — the new release will
     automatically appear on the Home page, the correct
     platform page, the correct language page, the Upcoming
     page, the This Week page (if the date matches), and a new
     article page will be generated at:
        article.html?slug=your-slug-here

  Field guide
  -----------
  slug        : unique URL id, lowercase-hyphenated, no spaces.
                The article URL becomes article.html?slug=<slug>
  title       : full title of the movie or web series.
  type        : "Movie" or "Web Series".
  poster      : image URL. Use a real image URL or a local file
                such as "images/my-poster.jpg".
  releaseDate : YYYY-MM-DD format (ISO date).
  platform    : one of: Netflix, Prime Video, JioHotstar,
                SonyLIV, ZEE5, Aha.
  language    : one of: Tamil, Telugu, Malayalam, Kannada, Hindi,
                English.
  genre       : comma-separated genres.
  cast        : comma-separated cast names.
  director    : director name(s).
  synopsis    : 2-3 sentence original description. Write your own.
  trailerUrl  : full YouTube watch or embed URL (optional).
  faqs        : array of {question, answer} pairs (optional).
  updated     : last-updated date (YYYY-MM-DD).

  ----------------------------------------------------------
  IMPORTANT — DEMO CONTENT
  ----------------------------------------------------------
  Every entry below is FICTIONAL demo content created only to
  show how the site looks and works. Replace each entry with
  real, original information you have written yourself before
  publishing. Do not publish fake release dates or fake cast
  information as if it were real news.

  ----------------------------------------------------------
  TRENDING SEARCHES
  ----------------------------------------------------------
  Edit the `trendingSearches` array near the bottom of this file.
  ----------------------------------------------------------
*/

const SITE = {
  name: "OTT Release Hub",
  tagline: "Every OTT release. One place.",
  url: "https://your-username.github.io", // change to your real domain / GitHub Pages URL
  description:
    "OTT Release Hub lists upcoming OTT movie and web-series releases across Netflix, Prime Video, JioHotstar, SonyLIV, ZEE5 and Aha in Tamil, Telugu, Malayalam, Kannada and Hindi.",
  email: "hello@ottreleasehub.example",
  twitter: "@ottreleasehub",
};

const PLATFORMS = [
  { key: "Netflix", slug: "netflix", color: "#e50914" },
  { key: "Prime Video", slug: "prime-video", color: "#00a8e1" },
  { key: "JioHotstar", slug: "jiohotstar", color: "#1f80e3" },
  { key: "SonyLIV", slug: "sonyliv", color: "#b02128" },
  { key: "ZEE5", slug: "zee5", color: "#8b1a8f" },
  { key: "Aha", slug: "aha", color: "#ff6b00" },
];

const LANGUAGES = ["Tamil", "Telugu", "Malayalam", "Kannada", "Hindi"];

const releases = [
  {
    slug: "Operation Safed Sagar",
    title: "Operation Safed Sagar",
    type: "Web Series",
    poster:
      "MV5BOGFiNmY3NDMtNGMwMi00MzNlLThjN2UtNTBjZGY0MTNmNTk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "2026-08-7",
    platform: "Netflix",
    language: "Hindi",
    genre: "A high-octane war and aerial action Drama",
    cast: "Siddharth,Jimmy Shergill ",
    director: "Oni Sen ",
    synopsis:
      "A high-octane war and aerial action drama centered around the Indian Air Force's heroic exploits during the Kargil War.",
    trailerUrl: "https://www.youtube.com/watch?v=vqV3xfeb4SQ",
    faqs: [
      {
        question: "When does Operation Safed Sagar release on Netflix?",
        answer:
          "Operation Safed Sagar released on 7 August 2026. .",
      },
      {
        question: "How many episodes are in Midnight Protocol?",
        answer:
          "There are totally six episodes in Operation Safed Sagar .",
      },
    ],
    updated: "2026-08-19",
  },
  {
    slug: "Karuppu ",
    title: "Karuppu ",
    type: "Movie",
    poster:
      "images.jpeg",
    releaseDate: "2026-08-21",
    platform: "Prime Video",
    language: "Tamil",
    genre: "Action, Drama",
    cast: "Suriya and Trisha Krishnan",
    director: "RJ Balaji",
    synopsis:
      "Tamil fantasy action-drama directed by RJ Balaji and starring Suriya. The story follows the folk guardian deity Vettai Karuppu, who takes human form as a lawyer to fight a deeply corrupt legal system after a tragic father-daughter case.",
    trailerUrl: "https://www.youtube.com/watch?v=nQF7lX1QRNI",
    faqs: [
      {
        question: "This movie is  available in which all are thre languages on Prime Video?",
        answer:
          " Tamil as the primary language.",
      },
    ],
    updated: "2026-08-18",
  },
  {
    slug: "Mr. X",
    title: "Mr. X",
    type: "Movie",
    poster:
      "download.jpeg",
    releaseDate: "2026-05-14",
    platform: "JioHotstar",
    language: "Tamil, Telugu, Malayalam, Kannada",
    genre: "Action, Thriller, Spy",
    cast: "Arya, Gautham Karthik, Manju Warrier, R. Sarathkumar",
    director: "Manu Anand",
    synopsis:
      " A rogue agent races against time to stop a global nuclear catastrophe while uncovering a massive hidden conspiracy.",
    trailerUrl: "https://www.youtube.com/watch?v=jZeFbbs8Isw",
    faqs: [
      {
        question: "What language is Vaanam Lines releasing in?",
        answer:
          "DEMO CONTENT. This demo entry is tagged Tamil. Update with the confirmed languages before publishing.",
      },
    ],
    updated: "2026-08-17",
  },
  {
    slug: "Jazz City",
    title: "Jazz City",
    type: "Web Series",
    poster:
      "images (1).jpeg",
    releaseDate: "March 19, 2026",
    platform: "SonyLIV",
    language: "Indian Bengali",
    genre: "Thriller",
    cast: "Arifin Shuvoo, Sauraseni Maitra and Shataf Figar",
    director: "Soumik Sen",
    synopsis:
      "Jazz City is a 10-episode historical spy thriller musical streaming on Sony LIV. Set against the 1971 Calcutta backdrop of the Bangladesh Liberation War, the series follows jazz club owner Jimmy Roy as he is blackmailed into espionage by Indian intelligence.",
    trailerUrl: "",
    faqs: [],
    updated: "2026-08-16",
  },
  {
    slug: "Nooru Sami",
    title: "Nooru Sami",
    type: "Movie",
    poster:
      "images (5).jpeg",
    releaseDate: "2026-08-20",
    platform: "ZEE5",
    language: "Tamil",
    genre: "Drama",
    cast: "Vijay Antony and Swasika Vijay",
    director: "Sasi",
    synopsis:
      "A mother's silent sacrifices and a son's steadfast love are tested against the harsh realities of rural life and social expectation.",
    trailerUrl: "https://www.youtube.com/watch?v=3EGuYn0_VXc",
    faqs: [],
    updated: "2026-08-15",
  },
  {
    slug: "The Revolutionaries ",
    title: "The Revolutionaries ",
    type: "Web Series",
    poster:
      "download (1).jpeg",
    releaseDate: "2026-09-11",
    platform: "Prime Video",
    language: "Hindi",
    genre: "action, thriller",
    cast: "Bhuvan Bam, Pratibha Ranta, and Rohit Saraf",
    director: "Nikkhil Advani",
    synopsis:"This historical drama focuses on India's freedom struggle and lesser-known heroes like Rash Behari Bose and Bagha Jatin.",
    trailerUrl: "https://www.youtube.com/watch?v=5HkDfG5BhCU",
    faqs: [],
    updated: "2026-09-11",
  },
  {
    slug: "Thudakkam",
    title: "Thudakkam",
    type: "Movie",
    poster:
      "images (2).jpeg",
    releaseDate: "September 18, 2026",
    platform: "JioHotstar",
    language: "Malayalam",
    genre: "Martial Arts Drama, Survival Thriller, and Action",
    cast: " Vismaya Mohanlal, Ashish Joe Antony, Bobby Kurian",
    director: " Jude Anthany Joseph",
    synopsis:
      "Meenu's quiet life changes forever on an ordinary evening when she witnesses two young schoolgirls being harassed and cornered by a group of local thugs. Refusing to stand by, Meenu intervenes. Using her martial arts skills, she effortlessly overpowers the harassers and ensures the girls get home safely.",
    trailerUrl: "https://www.youtube.com/watch?v=vTJIYRKkaH8",
    faqs: [],
    updated: "2026-08-13",
  },
  {
    slug: "Chumbak",
    title: "Chumbak",
    type: "Web Series",
    poster:
      "images (3).jpeg",
    releaseDate: "September 10, 2026",
    platform: "Netflix",
    language: "Hindi",
    genre: "Family Comedy, Sitcom, and Drama",
    cast: "Neena Gupta,Deven Bhojani ",
    director: " Aatish Kapadia",
    synopsis:
      "The central plot kicks off with the elderly couple Rajni Merchant (Neena Gupta) and her husband Kuku (Deven Bhojani). Kuku is a retired pilot living with early-onset dementia. Feeling emotionally and physically exhausted from the relentless, round-the-clock responsibilities of caregiving, Rajni makes the unexpected decision to seek a divorce.",
    trailerUrl: "https://www.youtube.com/watch?v=69auJ1F1EsE",
    faqs: [],
    updated: "2026-08-12",
  },
  {
    slug: "Eleven",
    title: "Eleven",
    type: "Movie",
    poster:
      "810bb7094eb57cd3ff84ac98914740fc5a3b5579466fabef2d6dd0ab229a512c.jpg",
    releaseDate: "2025-06-13",
    platform: "Aha",
    language: "Telugu",
    genre: "Crime, Thriller",
    cast: "Naveen Chandra, Reyaa Hari",
    director: "Lokkesh Ajls",
    synopsis:
      "The movie revolves around Inspector Aravind (Naveen Chandra), a highly dedicated and sharp police officer with a stellar track record for solving complex crimes. He is assigned to investigate a challenging and dark serial killer case involving mysterious twin murders. As he methodically pieces together the clues alongside his colleague Manohar, Aravind uncovers a disturbing pattern—the masked killer is manipulating surviving twins into killing their own siblings. The investigation forces the detective down a dark path linked to childhood trauma and a deep-seated web of revenge.",
    trailerUrl: "https://www.youtube.com/watch?v=m-9Rj_NIztc",
    faqs: [],
    updated: "2025-06-13",
  },
  {
    slug: "Irumudi ",
    title: "Irumudi ",
    type: "Movie",
    poster:
      "Irumudi_poster.jpg",
    releaseDate: "September 18, 2026",
    platform: "Netflix",
    language: "Malayalam",
    genre: " Thriller,vigilante psychological,action.",
    cast: "Demo Lead Five, Demo Lead Six",
    director: "Demo Director Ten",
    synopsis:
      "DEMO CONTENT. Two backpackers keep crossing paths across the Western Ghats during the monsoon and decide to travel the last leg together. Replace with your own original synopsis.",
    trailerUrl: "https://www.youtube.com/watch?v=lqlYx4MdsAY",
    faqs: [],
    updated: "2026-08-10",
  },
  {
    slug: "Jerax",
    title: "Jerax",
    type: "Web Series",
    poster:
      "images (7).jpeg",
    releaseDate: "2026-09-05",
    platform: "ZEE5",
    language: "Kannada",
    genre: "Fantasy, Comedy,Thriller.",
    cast: "Nagabhushana NS ,Payal Chengappa",
    director: " Srinidhi Bengaluru ",
    synopsis:
      "The series follows Prakasha, a modest young man handling a failing Xerox shop in the town of Malavalli. His dull life turns completely upside down during a local election season when a mystical amulet transfers an extraordinary supernatural power into his photocopying machine. Instead of replicating paper, the machine begins producing fully functioning, physical human clones who possess the exact memories and traits of the originals. What starts as a personal experiment quickly spirals into absolute chaos, triggering identity mix-ups, political unrest, and moral dilemmas across the town.",
    trailerUrl: "https://www.youtube.com/watch?v=rZdxGR1Vn8Y",
    faqs: [],
    updated: "2026-08-09",
  },
  {
    slug: "Kattalan",
    title: "Kattalan",
    type: "Movie",
    poster:
      "images (8).jpeg",
    releaseDate: "2026-09-18",
    platform: "SonyLIV",
    language: "Hindi",
    genre: "Action, Crime ,Thriller",
    cast: "Antony Varghese, Sunil",
    director: "Paul George",
    synopsis:
      "The film is a standalone spin-off and the third installment in the Mikhael Extended Universe (following Mikhael and Marco). The story plunges deep into the dark, lawless universe of the illegal ivory trade. Two powerful crime bosses, Maari and Eddy, control rival ivory smuggling networks and are locked in a bloody, merciless turf war for dominance. Antony, a feared and ruthless poacher known as Kattalan, works within this ecosystem. When massive corruption keeps both empires thriving despite law enforcement intervention, Kattalan finds himself caught in a deadly web of violence, betrayal, and a deep-seated pursuit of personal revenge.",
    trailerUrl: "https://www.youtube.com/watch?v=xJ-XerjU_NQ",
    faqs: [],
    updated: "2026-08-08",
  },
  {
    slug: "Jagamae Sangeetham",
    title: "Jagamae Sangeetham",
    type: "Web Series",
    poster:
      "images (6).jpeg",
    releaseDate: "2026-09-4",
    platform: "Prime Video",
    language: "Telugu",
    genre: "Drama",
    cast: "Prakash Raj, Srikanth Meka, Madhubala",
    director: "Palnati Surya Pratap",
    synopsis:
      "A compelling musical drama starring Prakash Raj that weaves interpersonal relationships with a rich, classical, and contemporary musical backdrop.",
    trailerUrl: "https://www.youtube.com/watch?v=tbiXRFXVuMs",
    faqs: [],
    updated: "2026-09-4",
  },
  {
    slug: "Rippan Swamy.",
    title: "Rippan Swamy.",
    type: "Movie",
    poster:
      "images (9).jpeg",
    releaseDate: "2025-08-29",
    platform: "Aha",
    language: "Kannada",
    genre: "Rural Psychological Thrille",
    cast: "Vijay Raghavendra, Ashwini Chandrashekar",   
    director: " Kishor Moodbidri",
    synopsis:
      "Set in the fictional Malnad village of Snana Kopa, the narrative kicks off with the shocking and mysterious suicide of a local man named Rippan Swamy. As the village attempts to process the tragedy, the sudden death opens a dark Pandora's box. A tense investigation slowly unearths deep-seated village secrets, betrayal, hidden greed, and personal vendettas. The plot shifts into a deep psychological study of how childhood trauma and adult choices alter a person's behavior, ultimately revealing the dark truth behind his name and tragic end.",
    trailerUrl: "https://www.youtube.com/watch?v=RA6xU_7Kteg",
    faqs: [],
    updated: "2025-08-29",
  },
];

const trendingSearches = [
  "Netflix releases this week",
  "Tamil OTT releases August 2026",
  "Prime Video new movies",
  "JioHotstar web series",
  "Telugu movies on OTT",
  "Malayalam OTT releases",
];

/* ------------------------------------------------------------------
   Helper functions — used by script.js. You normally do not need to
   edit anything below this line.
   ------------------------------------------------------------------ */

function getRelease(slug) {
  return releases.find((r) => r.slug === slug);
}

function getReleasesByPlatform(platform) {
  return releases.filter((r) => r.platform === platform);
}

function getReleasesByLanguage(language) {
  return releases.filter((r) => r.language === language);
}

function getUpcomingReleases(fromDate) {
  return releases
    .filter((r) => new Date(r.releaseDate) >= fromDate)
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
}

function getThisWeekReleases(fromDate) {
  const weekEnd = new Date(fromDate);
  weekEnd.setDate(weekEnd.getDate() + 7);
  return releases
    .filter((r) => {
      const d = new Date(r.releaseDate);
      return d >= fromDate && d < weekEnd;
    })
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
}

function getRelatedReleases(slug, limit) {
  const current = getRelease(slug);
  if (!current) return [];
  return releases
    .filter(
      (r) =>
        r.slug !== slug &&
        (r.platform === current.platform || r.language === current.language)
    )
    .slice(0, limit || 4);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
