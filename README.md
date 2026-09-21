# OTT Release Hub

A fast, SEO-friendly, mobile-first **static website** for listing upcoming OTT movie and web-series releases across Netflix, Prime Video, JioHotstar, SonyLIV, ZEE5 and Aha in Tamil, Telugu, Malayalam, Kannada and Hindi.

Built with plain **HTML + CSS + JavaScript** — no backend, no database, no build step. Host it free on GitHub Pages.

---

## 1. Complete folder structure

```
ott-release-hub/
├── index.html          ← Home page
├── releases.html       ← Upcoming + This Week releases
├── netflix.html        ← Netflix releases
├── prime-video.html    ← Prime Video releases
├── jiohotstar.html     ← JioHotstar releases
├── sonyliv.html        ← SonyLIV releases
├── zee5.html           ← ZEE5 releases
├── tamil.html          ← Tamil OTT releases
├── telugu.html         ← Telugu OTT releases
├── malayalam.html      ← Malayalam OTT releases
├── hindi.html          ← Hindi OTT releases
├── article.html        ← Single article template (works for every release)
├── about.html          ← About Us
├── contact.html        ← Contact Us
├── privacy.html        ← Privacy Policy
├── disclaimer.html     ← Disclaimer
├── style.css           ← All styling
├── script.js           ← Navigation, search, rendering, SEO schema
├── data.js             ← ALL release content (edit this file!)
├── robots.txt           ← Search engine instructions
├── sitemap.xml         ← Sitemap for Google Search Console
└── README.md           ← This file
```

---

## 2. How to run it locally

You do not need any build tools. Two options:

### Option A — Open directly
Just double-click `index.html`. It opens in your browser. Everything works.

### Option B — Local server (recommended)
This gives you a more realistic preview.

1. Install [Node.js](https://nodejs.org/) (if not already installed).
2. Open a terminal in the project folder.
3. Run:
   ```
   npx serve .
   ```
   or
   ```
   npx http-server -p 8080
   ```
4. Open `http://localhost:8080` in your browser.

---

## 3. How to upload it to GitHub

1. Create a free GitHub account at [github.com](https://github.com) if you don't have one.
2. Click the **+** icon (top-right) → **New repository**.
3. Name it `ott-release-hub` (or any name). Set it to **Public**. Do **not** check "Add a README". Click **Create repository**.
4. On your computer, open a terminal in the project folder and run:
   ```
   git init
   git add .
   git commit -m "Initial OTT Release Hub website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ott-release-hub.git
   git push -u origin main
   ```
   Replace `YOUR-USERNAME` with your GitHub username.

---

## 4. How to publish it using GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** (top tab).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
5. Under **Branch**, select **main** and folder **/ (root)**. Click **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/ott-release-hub/
   ```

---

## 5. How to connect a custom domain

1. Buy a domain from any registrar (GoDaddy, Namecheap, etc.).
2. In your GitHub repo: **Settings → Pages → Custom domain**. Enter your domain (e.g. `ottreleasehub.com`) and click **Save**.
3. At your domain registrar, add these DNS records:
   - **A records** (point to GitHub Pages IPs):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a **CNAME record** if using a subdomain (e.g. `www`):
     ```
     www  CNAME  YOUR-USERNAME.github.io.
     ```
4. Wait for DNS to propagate (can take up to 48 hours). Check the Pages settings — it will show "DNS check successful".
5. Tick **Enforce HTTPS** in Pages settings once the certificate is issued.

---

## 6. How to submit sitemap.xml to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property** → enter your site URL (e.g. `https://YOUR-USERNAME.github.io/ott-release-hub/` or your custom domain).
3. Verify ownership (HTML tag method is easiest — add the meta tag to `index.html` inside `<head>`).
4. Once verified, click **Sitemaps** in the left sidebar.
5. Enter `sitemap.xml` and click **Submit**.
6. Check back after a few days — Google will show indexed pages.

**Before submitting:** open `sitemap.xml` and replace every `https://your-username.github.io` with your real site URL. Also do the same in `robots.txt`.

---

## 7. How to apply for Google AdSense

1. Go to [Google AdSense](https://www.google.com/adsense).
2. Sign in with your Google account and click **Get started**.
3. Enter your website URL.
4. AdSense will give you a snippet like:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
5. Paste this snippet into the `<head>` section of **every HTML page** (or at minimum, `index.html`). AdSense checks for it.
6. Complete the setup: connect your bank account, provide address, etc.
7. Wait for review (can take days to weeks). Ensure your site has:
   - Original content (replace demo entries with real articles)
   - Privacy Policy page (already included)
   - About + Contact pages (already included)
   - Clear navigation
   - No prohibited content

---

## 8. Where to insert the AdSense code after approval

Once approved, you need to do two things:

### A. Add the AdSense loader script
Paste this in the `<head>` of every HTML page (right before `</head>`):
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_CLIENT_ID" crossorigin="anonymous"></script>
```
Replace `YOUR_ADSENSE_CLIENT_ID` with your real publisher ID (starts with `ca-pub-`).

### B. Replace ad placeholders with real ad units
Every ad slot in the site looks like this:
```html
<div class="ad-container ad-leaderboard">Ad slot — below header (YOUR_AD_SLOT_ID)</div>
```
Replace the inner text with a real AdSense ad unit:
```html
<div class="ad-container ad-leaderboard">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-YOUR_ADSENSE_CLIENT_ID"
       data-ad-slot="YOUR_AD_SLOT_ID"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

Ad slot locations in the site:
- **Below the header** (all pages) — `ad-leaderboard`
- **Between content sections** (home + listing pages) — `ad-incontent`
- **Inside article pages** (top, middle, bottom) — `ad-leaderboard`, `ad-incontent`
- **Desktop sidebar** (home + listing pages) — `ad-sidebar`
- **Footer area** (all pages) — `ad-footer`

Create separate ad slots in your AdSense dashboard for each location and paste their slot IDs.

---

## 9. How to create a new OTT release article

You only need to edit **one file**: `data.js`.

### Step-by-step

1. Open `data.js` in any text editor.
2. Find the `releases` array (starts around line 60).
3. Copy one whole block that looks like this:
   ```javascript
   {
     slug: "my-new-release",
     title: "My New Release",
     type: "Movie",              // or "Web Series"
     poster: "https://example.com/poster.jpg",
     releaseDate: "2026-09-20",  // YYYY-MM-DD
     platform: "Netflix",        // Netflix | Prime Video | JioHotstar | SonyLIV | ZEE5 | Aha
     language: "Tamil",          // Tamil | Telugu | Malayalam | Kannada | Hindi | English
     genre: "Action, Thriller",
     cast: "Actor One, Actor Two",
     director: "Director Name",
     synopsis: "Your original 2-3 sentence description here.",
     trailerUrl: "https://www.youtube.com/watch?v=XXXXX",  // optional
     faqs: [                     // optional
       { question: "When does it release?", answer: "Your answer." }
     ],
     updated: "2026-08-19"
   },
   ```
4. Paste it at the top of the `releases` array.
5. Change every field to match your real release.
6. Save the file. That's it.

### What happens automatically
- The release appears on the **Home** page (Featured + Upcoming + This Week if the date matches).
- It appears on the correct **platform page** (e.g. `netflix.html`).
- It appears on the correct **language page** (e.g. `tamil.html`).
- It appears on the **Upcoming Releases** page.
- A new article page is generated automatically at:
  ```
  article.html?slug=my-new-release
  ```
  (using the `slug` you set)
- Related releases are shown on the article page.
- FAQ accordion and SEO structured data are generated from the `faqs` field.

### Adding the new article to the sitemap
Open `sitemap.xml` and add a new `<url>` block:
```xml
<url>
  <loc>https://YOUR-DOMAIN/article.html?slug=my-new-release</loc>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
</url>
```
Replace `YOUR-DOMAIN` with your real domain.

### Poster images
You can use:
- A full image URL (e.g. from your image host)
- A local file: put the image in the project folder and use `"images/my-poster.jpg"`

---

## 10. Updating the site URL

After publishing, replace `https://your-username.github.io` with your real URL in:
- `sitemap.xml` (every `<loc>` tag)
- `robots.txt` (the `Sitemap:` line)
- Every HTML file's `<link rel="canonical">` and `<meta property="og:url">` tags
- `data.js` → `SITE.url` (used for article canonical URLs and structured data)

---

## 11. Demo content notice

All movie/series entries in `data.js` are **fictional demo content** clearly marked with "(Demo)" in the title and "DEMO CONTENT" in the synopsis. Replace every entry with real, original information you have written yourself before publishing. Do not publish fake release dates or fake cast information as if it were real news.

---

## 12. SEO features included

- Unique title and meta description per page
- Canonical URLs
- Open Graph + Twitter/X card metadata
- XML sitemap
- robots.txt
- JSON-LD structured data (WebSite, Organization, Article, Breadcrumb, FAQ)
- Proper H1/H2/H3 hierarchy
- SEO-friendly URLs
- Mobile responsive
- Image lazy loading
- Accessible alt text
- Internal linking between related releases
