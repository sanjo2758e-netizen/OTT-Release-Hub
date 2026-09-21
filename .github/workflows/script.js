/* ============================================================
   OTT RELEASE HUB — SCRIPT
   Handles: navigation toggle, search, rendering cards,
   article page, FAQ accordion, sitemap generation.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Utility ---------- */
  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function $all(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function platformClass(platform) {
    return "platform-" + platform.replace(/[^a-zA-Z]/g, "");
  }

  function platformColor(platform) {
    var p = PLATFORMS.find(function (x) {
      return x.key === platform;
    });
    return p ? p.color : "#e50914";
  }

  /* ---------- Card renderer ---------- */
  function cardHTML(r) {
    return (
      '<article class="card ' +
      platformClass(r.platform) +
      '">' +
      '<a href="article.html?slug=' +
      encodeURIComponent(r.slug) +
      '" class="card-link" aria-label="' +
      escapeHtml(r.title) +
      '">' +
      '<div class="card-poster">' +
      '<img src="' +
      escapeHtml(r.poster) +
      '" alt="' +
      escapeHtml(r.title) +
      " poster" +
      '" loading="lazy" width="400" height="600">' +
      '<span class="card-badge">' +
      escapeHtml(r.type) +
      "</span>" +
      '<span class="card-platform">' +
      escapeHtml(r.platform) +
      "</span>" +
      "</div>" +
      '<div class="card-body">' +
      '<h3 class="card-title">' +
      escapeHtml(r.title) +
      "</h3>" +
      '<div class="card-meta">' +
      "<span>" +
      escapeHtml(r.language) +
      "</span>" +
      "<span>•</span>" +
      "<span>" +
      escapeHtml(r.genre.split(",")[0]) +
      "</span>" +
      "</div>" +
      '<div class="card-date">' +
      formatDate(r.releaseDate) +
      "</div>" +
      "</div>" +
      "</a>" +
      "</article>"
    );
  }

  function renderCards(container, items) {
    if (!container) return;
    if (!items || items.length === 0) {
      container.innerHTML =
        '<div class="empty-state"><h3>No releases listed yet</h3><p>Check back soon — new OTT releases are added regularly.</p></div>';
      return;
    }
    container.innerHTML = items.map(cardHTML).join("");
  }

  /* ---------- Mini card (sidebar) ---------- */
  function miniCardHTML(r) {
    return (
      '<a href="article.html?slug=' +
      encodeURIComponent(r.slug) +
      '" class="mini-card">' +
      '<img src="' +
      escapeHtml(r.poster) +
      '" alt="' +
      escapeHtml(r.title) +
      '" loading="lazy" width="48" height="64">' +
      "<div><div class=\"mc-title\">" +
      escapeHtml(r.title) +
      '</div><div class="mc-meta">' +
      escapeHtml(r.platform) +
      " • " +
      formatDate(r.releaseDate) +
      "</div></div>" +
      "</a>"
    );
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    var toggle = $(".nav-toggle");
    var nav = $(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    // close on link click (mobile)
    $all(".nav-list a", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 900) {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------- Search ---------- */
  function initSearch() {
    var input = $("#searchInput");
    var results = $("#searchResults");
    if (!input || !results) return;

    function search(q) {
      q = q.trim().toLowerCase();
      if (!q) {
        results.classList.remove("active");
        return;
      }
      var matches = releases
        .filter(function (r) {
          return (
            r.title.toLowerCase().indexOf(q) !== -1 ||
            r.platform.toLowerCase().indexOf(q) !== -1 ||
            r.language.toLowerCase().indexOf(q) !== -1 ||
            r.genre.toLowerCase().indexOf(q) !== -1
          );
        })
        .slice(0, 6);
      if (matches.length === 0) {
        results.innerHTML =
          '<div class="search-result-item"><div class="sri-title">No matches found</div></div>';
      } else {
        results.innerHTML = matches
          .map(function (r) {
            return (
              '<a href="article.html?slug=' +
              encodeURIComponent(r.slug) +
              '" class="search-result-item">' +
              '<img src="' +
              escapeHtml(r.poster) +
              '" alt="' +
              escapeHtml(r.title) +
              '" loading="lazy">' +
              "<div><div class=\"sri-title\">" +
              escapeHtml(r.title) +
              '</div><div class="sri-meta">' +
              escapeHtml(r.platform) +
              " • " +
              escapeHtml(r.language) +
              "</div></div>" +
              "</a>"
            );
          })
          .join("");
      }
      results.classList.add("active");
    }

    input.addEventListener("input", function () {
      search(input.value);
    });

    input.addEventListener("focus", function () {
      if (input.value.trim()) search(input.value);
    });

    document.addEventListener("click", function (e) {
      if (!input.contains(e.target) && !results.contains(e.target)) {
        results.classList.remove("active");
      }
    });
  }

  /* ---------- Trending searches ---------- */
  function initTrending() {
    var container = $("#trendingList");
    if (!container) return;
    container.innerHTML = trendingSearches
      .map(function (t, i) {
        return (
          '<span class="trending-item" data-q="' +
          escapeHtml(t) +
          '"><span class="rank">' +
          (i + 1) +
          "</span>" +
          escapeHtml(t) +
          "</span>"
        );
      })
      .join("");
    $all(".trending-item", container).forEach(function (el) {
      el.addEventListener("click", function () {
        var input = $("#searchInput");
        if (input) {
          input.value = el.getAttribute("data-q") || "";
          input.focus();
          input.dispatchEvent(new Event("input"));
          input.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  }

  /* ---------- Home page ---------- */
  function initHome() {
    var featuredEl = $("#featuredGrid");
    var weekEl = $("#weekGrid");
    var upcomingEl = $("#upcomingGrid");
    var sideTopEl = $("#sidebarTop");
    var sideUpcomingEl = $("#sidebarUpcoming");

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    if (featuredEl) {
      var featured = releases.slice(0, 4);
      renderCards(featuredEl, featured);
    }
    if (weekEl) {
      renderCards(weekEl, getThisWeekReleases(today));
    }
    if (upcomingEl) {
      renderCards(upcomingEl, getUpcomingReleases(today).slice(0, 8));
    }
    if (sideTopEl) {
      var top = releases.slice(0, 5);
      sideTopEl.innerHTML = top.map(miniCardHTML).join("");
    }
    if (sideUpcomingEl) {
      var up = getUpcomingReleases(today).slice(0, 5);
      sideUpcomingEl.innerHTML = up.map(miniCardHTML).join("");
    }
  }

  /* ---------- Listing page (releases, platform, language) ---------- */
  function initListing() {
    var grid = $("#listingGrid");
    if (!grid) return;

    var filter = document.body.getAttribute("data-filter"); // platform | language | all | upcoming | week
    var value = document.body.getAttribute("data-value");
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    // Allow ?filter=week to override on releases.html
    var q = new URLSearchParams(window.location.search).get("filter");
    if (q === "week") filter = "week";
    if (q === "upcoming") filter = "upcoming";

    var items;

    if (filter === "platform") {
      items = getReleasesByPlatform(value);
    } else if (filter === "language") {
      items = getReleasesByLanguage(value);
    } else if (filter === "upcoming") {
      items = getUpcomingReleases(today);
    } else if (filter === "week") {
      items = getThisWeekReleases(today);
    } else {
      items = releases;
    }

    items.sort(function (a, b) {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });

    renderCards(grid, items);

    // sidebar
    var sideEl = $("#sidebarTop");
    if (sideEl) {
      sideEl.innerHTML = releases.slice(0, 5).map(miniCardHTML).join("");
    }
  }

  /* ---------- Article page ---------- */
  function initArticle() {
    var root = $("#articleRoot");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var slug = params.get("slug");
    var r = getRelease(slug);

    if (!r) {
      root.innerHTML =
        '<div class="empty-state"><h3>Release not found</h3><p>The article you are looking for does not exist or may have been removed.</p><p><a href="index.html">Go back home</a></p></div>';
      return;
    }

    document.title = r.title + " — OTT Release Date, Cast & Where to Watch | OTT Release Hub";

    // meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", r.synopsis.slice(0, 155));

    // canonical
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", SITE.url + "/article.html?slug=" + encodeURIComponent(r.slug));

    // OG tags
    setMeta("og:title", r.title + " — OTT Release Hub");
    setMeta("og:description", r.synopsis.slice(0, 200));
    setMeta("og:image", r.poster);
    setMeta("og:url", SITE.url + "/article.html?slug=" + encodeURIComponent(r.slug));
    setMeta("twitter:title", r.title + " — OTT Release Hub");
    setMeta("twitter:description", r.synopsis.slice(0, 200));
    setMeta("twitter:image", r.poster);

    var pColor = platformColor(r.platform);

    // trailer embed
    var trailerBlock = "";
    if (r.trailerUrl) {
      var embed = r.trailerUrl;
      if (embed.indexOf("watch?v=") !== -1) {
        embed = embed.replace("watch?v=", "embed/");
      }
      trailerBlock =
        '<div class="trailer-frame"><iframe src="' +
        escapeHtml(embed) +
        '" title="' +
        escapeHtml(r.title) +
        ' trailer" allowfullscreen loading="lazy"></iframe></div>';
    } else {
      trailerBlock =
        '<div class="trailer-frame"><div class="no-trailer">Trailer not added yet. Add a YouTube link in the <strong>trailerUrl</strong> field of this release in <code>data.js</code>.</div></div>';
    }

    // FAQ HTML
    var faqHTML = "";
    if (r.faqs && r.faqs.length) {
      faqHTML = r.faqs
        .map(function (f, i) {
          return (
            '<div class="faq-item" id="faq-' +
            i +
            '">' +
            '<button class="faq-question" aria-expanded="false" aria-controls="faq-a-' +
            i +
            '">' +
            escapeHtml(f.question) +
            '<span class="faq-icon" aria-hidden="true">+</span></button>' +
            '<div class="faq-answer" id="faq-a-' +
            i +
            '" role="region"><p>' +
            escapeHtml(f.answer) +
            "</p></div>" +
            "</div>"
          );
        })
        .join("");
    } else {
      faqHTML = "<p>No FAQs added for this release yet.</p>";
    }

    // related
    var related = getRelatedReleases(r.slug, 4);
    var relatedHTML = related.length
      ? related.map(cardHTML).join("")
      : '<div class="empty-state"><p>No related releases yet.</p></div>';

    root.innerHTML =
      '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      '<a href="index.html">Home</a><span class="sep">›</span>' +
      '<a href="' +
      platformPage(r.platform) +
      '">' +
      escapeHtml(r.platform) +
      "</a><span class=\"sep\">›</span>" +
      "<span>" +
      escapeHtml(r.title) +
      "</span>" +
      "</nav>" +
      '<header class="article-header">' +
      "<h1>" +
      escapeHtml(r.title) +
      "</h1>" +
      '<div class="article-meta">' +
      '<span class="meta-pill"><strong>' +
      escapeHtml(r.type) +
      "</strong></span>" +
      '<span class="meta-pill">Releases: <strong>' +
      formatDate(r.releaseDate) +
      "</strong></span>" +
      '<span class="meta-pill" style="border-color:' +
      pColor +
      '"><strong style="color:' +
      pColor +
      '">' +
      escapeHtml(r.platform) +
      "</strong></span>" +
      '<span class="meta-pill">Language: <strong>' +
      escapeHtml(r.language) +
      "</strong></span>" +
      "</div>" +
      "</header>" +
      '<div class="ad-container ad-leaderboard">Ad slot — article top (YOUR_AD_SLOT_ID)</div>' +
      '<div class="article-layout">' +
      '<div class="article-poster ' +
      platformClass(r.platform) +
      '">' +
      '<img src="' +
      escapeHtml(r.poster) +
      '" alt="' +
      escapeHtml(r.title) +
      " poster" +
      '" width="400" height="600">' +
      "</div>" +
      '<div class="article-content">' +
      '<table class="info-table"><tbody>' +
      "<tr><th>Release Date</th><td>" +
      formatDate(r.releaseDate) +
      "</td></tr>" +
      "<tr><th>OTT Platform</th><td>" +
      escapeHtml(r.platform) +
      "</td></tr>" +
      "<tr><th>Language</th><td>" +
      escapeHtml(r.language) +
      "</td></tr>" +
      "<tr><th>Genre</th><td>" +
      escapeHtml(r.genre) +
      "</td></tr>" +
      "<tr><th>Cast</th><td>" +
      escapeHtml(r.cast) +
      "</td></tr>" +
      "<tr><th>Director</th><td>" +
      escapeHtml(r.director) +
      "</td></tr>" +
      "<tr><th>Type</th><td>" +
      escapeHtml(r.type) +
      "</td></tr>" +
      "</tbody></table>" +
      '<div class="ad-container ad-incontent">Ad slot — article in-content (YOUR_AD_SLOT_ID)</div>' +
      '<section class="article-section"><h2>Synopsis</h2><p>' +
      escapeHtml(r.synopsis) +
      "</p></section>" +
      '<section class="article-section"><h2>Trailer</h2>' +
      trailerBlock +
      "</section>" +
      '<section class="article-section"><h2>Where to Watch</h2><p>You can watch <strong>' +
      escapeHtml(r.title) +
      "</strong> on <strong>" +
      escapeHtml(r.platform) +
      "</strong> from " +
      formatDate(r.releaseDate) +
      ". A subscription to the platform may be required.</p></section>" +
      '<section class="article-section"><h2>Frequently Asked Questions</h2><div class="faq-list">' +
      faqHTML +
      "</div></section>" +
      '<p class="updated-line" style="color:var(--text-dim);font-size:.82rem">Last updated: ' +
      formatDate(r.updated) +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="ad-container ad-incontent">Ad slot — article bottom (YOUR_AD_SLOT_ID)</div>' +
      '<section class="section"><h2 class="section-title">Related OTT Releases</h2><div class="card-grid" id="relatedGrid">' +
      relatedHTML +
      "</div></section>";

    // FAQ accordion
    $all(".faq-question", root).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.parentElement;
        var isOpen = item.classList.contains("open");
        item.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });
    });

    // JSON-LD injection
    injectArticleJsonLd(r);
  }

  function platformPage(platform) {
    var p = PLATFORMS.find(function (x) {
      return x.key === platform;
    });
    return p ? p.slug + ".html" : "releases.html";
  }

  function setMeta(prop, content) {
    var el = document.querySelector('meta[property="' + prop + '"]') ||
      document.querySelector('meta[name="' + prop + '"]');
    if (el) el.setAttribute("content", content);
  }

  function injectArticleJsonLd(r) {
    var data = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: r.title,
      description: r.synopsis,
      image: r.poster,
      datePublished: r.releaseDate,
      dateModified: r.updated,
      author: { "@type": "Organization", name: SITE.name },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        logo: { "@type": "ImageObject", url: SITE.url + "/logo.png" },
      },
      mainEntityOfPage: SITE.url + "/article.html?slug=" + encodeURIComponent(r.slug),
    };
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    // Breadcrumb JSON-LD
    var bc = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
        {
          "@type": "ListItem",
          position: 2,
          name: r.platform,
          item: SITE.url + "/" + platformPage(r.platform),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: r.title,
          item: SITE.url + "/article.html?slug=" + encodeURIComponent(r.slug),
        },
      ],
    };
    var bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.textContent = JSON.stringify(bc);
    document.head.appendChild(bcScript);

    // FAQ JSON-LD
    if (r.faqs && r.faqs.length) {
      var faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: r.faqs.map(function (f) {
          return {
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          };
        }),
      };
      var faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify(faq);
      document.head.appendChild(faqScript);
    }
  }

  /* ---------- Contact form ---------- */
  function initContact() {
    var form = $("#contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = $("#formNote");
      if (note) {
        note.textContent =
          "Thanks! This is a static demo form — it does not send email yet. Connect it to a form service (e.g. Formspree, Google Forms) to receive messages.";
        note.style.color = "var(--success)";
      }
      form.reset();
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initSearch();
    initTrending();
    initHome();
    initListing();
    initArticle();
    initContact();
  });
})();
