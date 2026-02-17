# Website TODO

## New Features

- [ ] Build functional ad script generator tool on /tools/video-ad-script-generator
  - [ ] Rate limit API calls (per IP or session)
  - [ ] Make the tool interactive and working
  - [ ] Fix the tools page layout for this
- [ ] Create custom 404 page (app/not-found.tsx)
- [ ] Add modal on InteractiveProduct demo homescreen
  - [ ] On clicking "Create" or interacting, show modal with link to app.owly.studio or contact form

## SEO Content Fixes

- [x] Remove em dashes (--) from all blog MDX files
- [ ] Blog posts are too barebones - add more elements:
  - [ ] Add hero images per post (not reusing shine gallery images)
  - [ ] Add inline images/diagrams within post body
  - [ ] Add author bio section at bottom of each post
  - [ ] Add "Related Posts" section at bottom linking to other blog posts
  - [ ] Add table of contents for longer posts
  - [ ] Add estimated reading time display
  - [ ] Add social share buttons
  - [ ] Consider adding code snippets, callout boxes, stat highlights as MDX components

## /make and /tools Pages - Need Visual Polish

- [x] Reuse existing site components (GlowingEffect on feature cards, motion animations)
- [x] Add hero section with background image or gradient (like main site hero)
- [ ] Add an interactive product preview or mockup screenshot
- [x] Add FAQ section with schema markup (faqSchema already exists in lib/schema.ts)
- [ ] Add testimonial or social proof element
- [x] Add "How it works" steps section with icons
- [ ] /tools pages need actual interactive tool components (Phase 3)
- [x] Better CTA section - reuse the black rounded card style from blog newsletter CTA

## Placeholder Content & Broken Links (42 issues)

### Critical - Fake/Placeholder Content
- [ ] Replace lorem ipsum text in contact section (`page.tsx:714`)
- [ ] Replace fake email `contact@company.com` with real email (`page.tsx:727`)
- [ ] Replace fake phone `(123) 456 - 789` in contact section (`page.tsx:737`)
- [ ] Replace fake phone `(123) 456 - 789` in footer (`Footer.tsx:112`)
- [ ] Fix contradictory addresses: San Francisco in contact section vs Bangalore in footer
- [ ] Fix Bangalore address with SF ZIP code 94102 (`Footer.tsx:113`)
- [ ] Fix copyright year 2025 to 2026 (`Footer.tsx:121`)
- [ ] Fix "All right reserved" typo to "All rights reserved" (`Footer.tsx:121`)
- [ ] Fix form placeholder "Ex; Jhon" to "Ex: John" (`page.tsx:643`)

### Fake Testimonials & Team
- [ ] Replace or remove 5 fabricated testimonials with fake names/companies (`page.tsx:200-242`)
- [ ] Replace founder photos (randomuser.me stock avatars) with real photos (`about/page.tsx:20,25,30`)
- [ ] Fix Hari's title from "Co-founder" to "Head of Engineering" (`about/page.tsx:29`)
- [ ] Fix or remove 60 fake "team member" avatars implying large team (`about/page.tsx:9-13`)
- [ ] Add Aadith's last name for consistency (`about/page.tsx:18`)

### Dead Links (11 href="#" in Footer)
- [ ] Fix X/Twitter social icon link (`Footer.tsx:45`)
- [ ] Fix Discord social icon link (`Footer.tsx:51`)
- [ ] Fix LinkedIn social icon link (`Footer.tsx:57`)
- [ ] Fix "Content Inspiration" link (`Footer.tsx:73`)
- [ ] Fix "Engagement" link (`Footer.tsx:74`)
- [ ] Fix "Analytics" link (`Footer.tsx:75`)
- [ ] Fix LinkedIn contact link (`Footer.tsx:109`)
- [ ] Fix Twitter contact link (`Footer.tsx:110`)
- [ ] Fix Instagram contact link (`Footer.tsx:111`)
- [ ] Fix Privacy Policy link (`Footer.tsx:122`)
- [ ] Fix Terms of Services link (`Footer.tsx:123`)

### Fake/Inflated Stats
- [ ] Fix "500K+ Videos Delivered" in StatsCounter.tsx:15 and StatsHeroBento.tsx:20
- [ ] Fix "50+ Languages Supported" in StatsCounter.tsx:16 and StatsHeroBento.tsx:21
- [ ] Fix "1000+ Brand Guidelines Extracted" in StatsCounter.tsx:17 and StatsHeroBento.tsx:22
- [ ] Fix "99.9% Platform Uptime" in StatsCounter.tsx:18 and StatsHeroBento.tsx:23
- [ ] Fix "Join thousands of marketing teams" in pricing/page.tsx and features/page.tsx

### Non-Functional UI
- [ ] Make contact form "Send Message" button functional or remove form (`page.tsx:687`)
- [ ] Make newsletter "Subscribe" button functional or remove form (`BlogListClient.tsx:97`)

### Duplicate/Placeholder Images
- [ ] All 4 workflow stages use same ideate.png (`WorkflowShowcase.tsx:27-42`)

### Source URLs to Verify (learn pages)
- [ ] Verify TINT URL: tintup.com/blog/user-generated-content-statistics/
- [ ] Verify Nielsen URL: nielsen.com/insights/2021/beyond-martech-building-trust/
- [ ] Verify Influencer Marketing Hub URL: influencermarketinghub.com/ugc-creator-rates/
- [ ] Verify Motion URL: motionapp.com/creative-trends-2024
- [ ] Verify Meta URL: facebook.com/business/help/202195703544438
- [ ] Verify Wyzowl URL: wyzowl.com/video-marketing-statistics/

## SEO Phase 3 - Content at Scale

- [ ] Set up Gemini API integration for content generation
- [ ] AI detection check pipeline (GPTZero or Sapling)
- [ ] Humanization pass workflow
- [ ] Quality gate checklist automation
- [ ] Generate 20-30 /make pages (see KEYWORDS.md in ai_seo/ for full list)
- [ ] Write 5 bottom-of-funnel blog posts (comparisons, "best X" lists)
- [ ] Build first 2 interactive tools (video ad script generator, hook generator)
- [ ] Generate 20-30 /learn glossary pages

## SEO Phase 4 - Analytics & Tracking

- [ ] Set up Google Search Console for owly.studio
- [ ] Add Google Analytics (GA4) tracking
- [ ] Set up conversion tracking (CTA clicks -> app.owly.studio)
- [ ] Integrate GSC API for weekly performance pulls (impressions, clicks, CTR, position)
- [ ] Add "Last updated" dates to all content pages (freshness signal)
- [ ] Set up AI citation monitoring (manual weekly checks on ChatGPT, Perplexity, Gemini)

## SEO Phase 5 - Entity Building & AEO

- [x] Create /llms.txt file for AI engine discoverability
- [ ] Submit to Product Hunt
- [ ] Create Reddit presence (r/videography, r/marketing, r/ugcreators)
- [ ] List on directories (G2, Capterra, AlternativeTo)
- [x] Add SoftwareApplication JSON-LD to root layout
- [ ] Add metadata exports to existing pages (home, features, about, pricing need server wrappers)
- [x] Add OG image (1200x630)
- [ ] Generate dynamic OG images per blog post (Next.js ImageResponse)

## Website Audit Fixes (from full audit report)

See `owly_miscellenous_tasks/website_audit_report.md` for the full 55-issue report covering:
- Performance issues (rAF loops, duplicate font loading, unthrottled scroll listeners)
- Accessibility gaps (missing ARIA labels, form label associations)
- CSS inconsistencies (40+ font sizes, 15+ gray colors, 12 max-width values)
- Missing SEO metadata on sub-pages
- Unused dependencies (gsap, react-icons)
- Native img tags instead of Next/Image
