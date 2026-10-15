# KOMA Homepage (`komakh.com`)

> **KOMA (Cambodian Child Health & Vaccination Companion)**
> Redesigned with 100% brand alignment to the KOMA Web App Demo (`demo.komakh.com`).

---

## 🎨 Visual Identity & Brand System

* **Aesthetic**: Neo-Brutalist Cartoon
* **Color Tokens**:
  * Canvas: `#FAF7EE` (Warm cream)
  * Primary: `#FABE2C` (Signature marigold yellow)
  * Border: `#18181B` (High-contrast 2px solid black)
  * Status Colors: Green `#36B37E` (`#E8F8F0`), Coral `#EE6748` (`#FDF0ED`), Blue `#4AAEE8` (`#EBF5FC`)
* **Typography**:
  * English: `Plus Jakarta Sans` (Weights: 500, 600, 700, 800, 900 Black)
  * Khmer: `Kantumruy Pro` (Weights: 400, 500, 600, 700, 800)
* **Shadows**: Hard neo-brutalist drop-shadows (`3px 3px 0px #18181B` / `4px 4px 0px #18181B`).
* **Official Mascot**: Vector Kid Avatars (Oliver & Luna) peeking out from hero mockups.

---

## ✨ Features & Highlights

1. **Bilingual Switcher (🇰🇭 / 🇬🇧)**:
   * Direct replica of the demo app header dropdown with Cambodia Flag and UK Flag.
   * Instantly translates 100% of landing page copy without page reload.
   * Remembers parent's language preference via `localStorage`.

2. **Interactive Hero Phone Mockup**:
   * Interactive child switcher pills (*Dara Chan*, *Bopha Chan*).
   * Live updates of upcoming vaccine alerts, countdown days, and WHO growth stats.
   * Floating interactive badges for Cambodian NIP schedule and Birthday celebrations.

3. **Cultural Hook: "Your Yellow Booklet, Reimagined"**:
   * Side-by-side interactive comparison: Damaged paper card vs. KOMA Digital Twin.
   * Replica of Cambodia Ministry of Health National Immunization Program (NIP) booklet.
   * Tab switcher between Infancy (0–9 Months) and Toddler (9–18 Months).
   * One-click **Print to A4 / Export PDF** capability (`window.print()`).

4. **4 Core Interactive Feature Pillars**:
   * **National Immunization Schedule**: Interactive dose timeline explorer (Birth, 6 Weeks, 10 Weeks, 14 Weeks, 9 Months, 18 Months).
   * **Smart Reminders**: Live countdown badge simulation with interactive *"Mark Given ✅"* celebration.
   * **WHO Growth Monitoring**: Interactive toggle between Weight (kg) and Height (cm) with SVG WHO percentile corridors.
   * **Made for Cambodia**: Interactive referral hospital selector (Kantha Bopha, Calmette, NPH, Angkor Hospital, Commune Health Centers).

5. **Interactive Mini-Playground**:
   * **Vaccine Schedule Calculator**: Enter child's birth date (or click quick presets) to calculate exact age and the next 3 scheduled vaccinations with Cambodian hospital recommendations.
   * **Birthday Celebration Preview**: Test celebratory canvas-confetti explosion and the full birthday cake blessing modal with tap-to-blow-candles!

6. **Healthcare Partner Directory & Trust**:
   * Referral hospitals (*Kantha Bopha*, *NPH*, *AHC*, *Calmette*, *Commune Health Centers*).
   * Reassurance of offline-first storage, zero data selling, and 100% free forever for Cambodian families.

7. **Mobile App Waitlist Modal**:
   * Fast sign-up modal for early access on iOS and Android.

---

## 🚀 Running Locally

```bash
# Option 1: Double-click index.html or open directly in any web browser
open index.html

# Option 2: Using Node / npx
npx serve -l 3000 .
# or
npm start

# Option 3: Python local server
python3 -m http.server 3000
```

Deployable directly to **GitHub Pages** (`Sokhapheap-Digital.github.io`) and **Vercel** with zero build configuration.
