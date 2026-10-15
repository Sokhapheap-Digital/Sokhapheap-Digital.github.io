/**
 * KOMA Homepage Redesign - Interactive Engine & Bilingual System
 * Alignment with https://demo.komakh.com
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DATA: Bilingual Translations Dictionary
  // ==========================================
  const translations = {
    en: {
      // Navigation
      navFeatures: 'Features',
      navBooklet: 'MOH Booklet',
      navGrowth: 'Growth Charts',
      navHospitals: 'Hospital Guide',
      navPlayground: 'Playground',
      tryDemoBtn: 'Try Live Demo',
      launchApp: 'Launch Demo',

      // Hero Section
      heroEyebrow: '🇰🇭 100% Cambodian NIP Digital Record • Official Healthcare Replica',
      heroHeadline1: 'Care today.',
      heroHeadline2: 'Grow tomorrow.',
      heroSubhead: 'The joyful, digitized child health record book built for Cambodian families. Never lose a vaccination record or miss an appointment again.',
      btnLaunchDemo: '✨ Launch Interactive Demo →',
      btnSeeBooklet: '📖 See Digital Yellow Book',
      statFree: '100% Free',
      statFreeSub: 'For all Cambodian families',
      statVaccines: '11 Core Vaccines',
      statVaccinesSub: 'Pre-loaded MOH Schedule',
      statPrivate: '100% Private',
      statPrivateSub: 'Offline-ready & secure',

      // Floating Badges
      badgeNip: '💉 100% Cambodian NIP Schedule',
      badgeBday: '🎂 Built-in Birthday Celebrations',

      // Phone Preview
      greetingPrefix: 'Greeting,',
      parentRole: 'Parent • Phnom Penh',
      daraName: 'Dara Chan',
      daraAge: '1 year old',
      bophaName: 'Bopha Chan',
      bophaAge: '7 months old',
      dueUrgentBadge: 'Urgent: In 3 Days',
      dueNextBadge: 'Upcoming: In 5 Days',
      dueDaraTitle: 'Pentavalent 2 (DTP-HepB-Hib)',
      dueDaraHosp: 'National Pediatric Hospital • Phnom Penh',
      dueBophaTitle: 'OPV 2 & Pentavalent 2',
      dueBophaHosp: 'Calmette Hospital • Phnom Penh',
      statVaccinesLabel: 'Vaccines',
      statHeightLabel: 'Height',
      statWeightLabel: 'Weight',

      // Yellow Booklet Cultural Hook
      bookletAnchorTag: 'THE EMOTIONAL ANCHOR',
      bookletSectionTitle: 'Your Yellow Booklet, Reimagined.',
      bookletSectionDesc: 'In Cambodia, every mother receives a physical yellow card at birth. But paper tears, gets water-damaged, and gets left behind. KOMA gives every mother and child an indestructible digital twin.',
      
      paperCardTitle: 'Traditional Paper Booklet',
      paperCardDesc: 'The fragile yellow paper booklet given at birth centers across Cambodia.',
      paperFlaw1: '💧 Water-damaged easily during monsoon season',
      paperFlaw2: '✍️ Faded ink & illegible doctor handwriting',
      paperFlaw3: '🏠 Forgotten at home during clinic checkups',
      paperFlaw4: '⏳ Zero automated due date reminders',

      digitalCardTitle: 'KOMA Digital Twin (MOH Standard)',
      digitalCardSubtitle: 'Kingdom of Cambodia • Ministry of Health Official Schedule',
      tabInfancy: 'Infancy (0–9 Months)',
      tabToddler: 'Toddler (9–18 Months)',
      thVaccine: 'Vaccine',
      thDueAge: 'Due Age',
      thDateGiven: 'Date Given',
      thHospital: 'Hospital / Health Center',
      thStatus: 'Status',
      statusCompleted: 'Completed',
      statusDueSoon: 'Due Soon',
      statusScheduled: 'Upcoming',
      btnPrintPdf: '🖨️ Print / Export A4 PDF',
      btnOpenFullBooklet: '📖 View Full MOH Booklet Modal',

      // 4 Core Feature Pillars
      pillarsTag: 'CORE PILLARS',
      pillarsTitle: 'Everything Parents Need, In One Place',
      pillarsDesc: 'Built around the real everyday healthcare journey of Cambodian mothers and fathers.',

      pillar1Title: 'National Immunization Schedule',
      pillar1Desc: 'Pre-loaded with Cambodia’s complete NIP protocol (BCG, HepB, OPV, Pentavalent, PCV, MR, JE). Always aligned with the Ministry of Health.',
      
      pillar2Title: 'Smart Reminders & Due Dates',
      pillar2Desc: 'Calculates exact vaccination dates from your baby’s birth date. Receive timely countdowns so booster shots are never forgotten.',
      reminderSimTitle: 'Pentavalent 2 (DTP-HepB-Hib)',
      reminderSimDays: '3 days left',
      reminderSimMarkBtn: 'Mark as Given ✅',
      reminderSimDone: 'Completed on Oct 15, 2026 at Kantha Bopha Hospital! 🎉',

      pillar3Title: 'WHO Growth Monitoring',
      pillar3Desc: 'Track your child’s height and weight plotted against World Health Organization percentiles (P3 to P97). Spot healthy growth trends easily.',
      tabWeight: 'Weight (kg)',
      tabHeight: 'Height (cm)',

      pillar4Title: 'Made for Cambodia & Offline-First',
      pillar4Desc: 'Quick hospital selection (Kantha Bopha, Calmette, NPH, commune centers), complete Khmer font support, and 100% offline local storage.',
      hospSelectPrompt: 'Select Referral Hospital:',

      // Playground Section
      playgroundTag: 'INTERACTIVE PLAYGROUND',
      playgroundTitle: 'Try KOMA Features Live',
      playgroundDesc: 'Experience the tools designed to make child health tracking joyful and effortless.',

      calcTitle: 'Vaccine Schedule Calculator',
      calcDesc: 'Enter your child’s birth date to calculate their exact age and next 3 scheduled vaccinations in Cambodia.',
      calcInputLabel: 'Child’s Birth Date:',
      presetNewborn: 'Newborn',
      preset2m: '2 Months',
      preset6m: '6 Months',
      preset1y: '1 Year',
      calcUpcomingTitle: 'Next 3 Recommended Vaccinations:',
      calcDueInPrefix: 'Due in',
      calcDays: 'days',

      bdayTeaserTitle: 'Joyful Birthday Celebrations',
      bdayTeaserDesc: 'Every child deserves to feel celebrated! KOMA has built-in celebratory confetti explosions and heartfelt health blessings on their special day.',
      btnTestBirthday: '🎉 Test Birthday Wish & Confetti',
      bdayTapHint: 'Tap cake to blow candles & launch confetti!',

      // Healthcare Partners & Trust
      trustTag: 'CAMBODIAN HEALTHCARE ECOSYSTEM',
      trustTitle: 'Partnering in Cambodian Child Health',
      trustDesc: 'Compatible with major pediatric referral hospitals and over 1,200 local commune health centers nationwide.',
      
      hospKBName: 'Kantha Bopha Hospital',
      hospKBLoc: 'Phnom Penh & Siem Reap',
      hospKBTag: 'Free Pediatric Care & Vaccinations',
      
      hospNPHName: 'National Pediatric Hospital',
      hospNPHLoc: 'Russian Blvd, Phnom Penh',
      hospNPHTag: 'National Immunization Center',
      
      hospAHCName: 'Angkor Hospital for Children',
      hospAHCLoc: 'Siem Reap',
      hospAHCTag: 'Northern Cambodia Referral Center',
      
      hospCalmetteName: 'Calmette Hospital',
      hospCalmetteLoc: 'Monivong Blvd, Phnom Penh',
      hospCalmetteTag: 'Maternity & Child Health Unit',

      trustPillar1Title: 'Zero Data Selling',
      trustPillar1Desc: 'Your child’s medical records stay private on your device. We never sell health data to third parties.',
      trustPillar2Title: 'MOH NIP Standardized',
      trustPillar2Desc: '100% aligned with the official Cambodian Ministry of Health National Immunization Program protocols.',
      trustPillar3Title: 'Always Free for Parents',
      trustPillar3Desc: 'No subscriptions, no ads, no paywalls. Built for every Cambodian mother, father, and caregiver.',

      // Final CTA Banner
      ctaBannerTitle: 'Start your child’s digital health journey today.',
      ctaBannerDesc: 'Join hundreds of Cambodian parents who care with confidence, peace of mind, and joy.',
      btnTryWebDemo: '🚀 Try Web Demo Now',
      btnRequestMobile: '📱 Request Mobile App Invite',

      // Modals
      waitlistTitle: 'Request Mobile App Invite',
      waitlistDesc: 'Be the first to access KOMA on iOS and Android when public beta opens in Phnom Penh.',
      labelParentName: 'Parent / Caregiver Name',
      labelContact: 'Phone or Telegram Number',
      labelKidAge: 'Child’s Current Age',
      btnSubmitWaitlist: 'Join Priority Waitlist 🚀',
      waitlistSuccess: '🎉 You are on the waitlist! We will notify you via Telegram/SMS.',

      modalClose: 'Close',
      modalPrint: 'Print / Save PDF',
      bdayModalHeading: 'HAPPY BIRTHDAY',
      bdayModalWish: 'KOMA warmly wishes you robust health, protection, sharp wisdom, and a bright future!',
      bdayModalSafe: 'Safe & Protected',
      bdayModalGrowth: 'Healthy Growth',
      bdayModalCelebrate: 'Celebrate! 🎉',

      // Footer
      footerSlogan: 'Helping Cambodian parents care with confidence, stay informed, and celebrate every milestone.',
      footerColProduct: 'Product',
      footerColResources: 'Resources',
      footerColLegal: 'Trust & Legal',
      linkDemo: 'Live Web Demo',
      linkYellowBook: 'Digital Yellow Book',
      linkGrowth: 'Growth Charts',
      linkHospitals: 'Hospital Directory',
      linkMOH: 'MOH Cambodia NIP',
      linkTelegram: 'Telegram Parent Community',
      linkFAQ: 'Vaccine FAQs',
      linkPrivacy: 'Privacy Policy',
      linkTerms: 'Terms of Use',
      linkSecurity: 'Offline Security',
      footerBuiltIn: 'Built with ❤️ in Phnom Penh, Cambodia 🇰🇭',
      footerCopyright: '© 2026 KOMA. All rights reserved.',
    },

    kh: {
      // Navigation
      navFeatures: 'មុខងារ',
      navBooklet: 'សៀវភៅលឿង',
      navGrowth: 'តារាងលូតលាស់',
      navHospitals: 'មន្ទីរពេទ្យ',
      navPlayground: 'សាកល្បង',
      tryDemoBtn: 'សាកល្បង Demo',
      launchApp: 'បើក Demo',

      // Hero Section
      heroEyebrow: '🇰🇭 កូនសៀវភៅលឿងសុខភាពកុមារឌីជីថលកម្ពុជា • ស្របតាមស្តង់ដារជាតិ',
      heroHeadline1: 'ថែទាំថ្ងៃនេះ។',
      heroHeadline2: 'រីកចម្រើនថ្ងៃស្អែក។',
      heroSubhead: 'កូនសៀវភៅតាមដានសុខភាពនិងការចាក់ថ្នាំបង្ការកុមារឌីជីថល សម្រាប់ក្រុមគ្រួសារកម្ពុជា។ មិនបាត់បង់ទិន្នន័យ មិនខកខានកាលវិភាគ។',
      btnLaunchDemo: '✨ សាកល្បង Web Demo →',
      btnSeeBooklet: '📖 មើលកូនសៀវភៅលឿង',
      statFree: 'ឥតគិតថ្លៃ ១០០%',
      statFreeSub: 'សម្រាប់គ្រួសារកម្ពុជា',
      statVaccines: '១១ ថ្នាំបង្ការជាតិ',
      statVaccinesSub: 'ស្របតាមក្រសួងសុខាភិបាល',
      statPrivate: 'ឯកជនភាព ១០០%',
      statPrivateSub: 'ដំណើរការដោយគ្មានអ៊ីនធឺណិត',

      // Floating Badges
      badgeNip: '💉 ស្របតាមកាលវិភាគជាតិ ១០០%',
      badgeBday: '🎂 អបអរខួបកំណើតកុមារ',

      // Phone Preview
      greetingPrefix: 'សូមជម្រាបសួរ,',
      parentRole: 'ឪពុកម្តាយ • រាជធានីភ្នំពេញ',
      daraName: 'ចាន់ តារា',
      daraAge: 'អាយុ ១ ឆ្នាំ',
      bophaName: 'ចាន់ បុប្ផា',
      bophaAge: 'អាយុ ៧ ខែ',
      dueUrgentBadge: 'ត្រូវចាក់ក្នុង ៣ ថ្ងៃ',
      dueNextBadge: 'ត្រូវចាក់ក្នុង ៥ ថ្ងៃ',
      dueDaraTitle: 'ថ្នាំបង្ការ៥មុខ លើកទី២ (DTP-HepB-Hib 2)',
      dueDaraHosp: 'មន្ទីរពេទ្យកុមារជាតិ • ភ្នំពេញ',
      dueBophaTitle: 'OPV 2 & ថ្នាំបង្ការ៥មុខ លើកទី២',
      dueBophaHosp: 'មន្ទីរពេទ្យកាល់ម៉ែត • ភ្នំពេញ',
      statVaccinesLabel: 'ថ្នាំបង្ការ',
      statHeightLabel: 'កម្ពស់',
      statWeightLabel: 'ទម្ងន់',

      // Yellow Booklet Cultural Hook
      bookletAnchorTag: 'ចំណុចស្នូលនៃ KOMA',
      bookletSectionTitle: 'កូនសៀវភៅលឿង... ក្នុងទម្រង់ឌីជីថលទំនើប',
      bookletSectionDesc: 'នៅកម្ពុជា មាតាគ្រប់រូបតែងទទួលបានកូនសៀវភៅលឿងពេលសម្រាលកូន។ ប៉ុន្តែក្រដាសងាយរហែក ប្រឡាក់ទឹកភ្លៀង ឬភ្លេចនៅផ្ទះពេលទៅមន្ទីរពេទ្យ។ KOMA ផ្តល់នូវកូនសៀវភៅឌីជីថលដែលមិនចេះបាត់បង់។',

      paperCardTitle: 'សៀវភៅក្រដាសលឿងចាស់',
      paperCardDesc: 'កូនសៀវភៅក្រដាសពណ៌លឿងដែលម្តាយគ្រប់រូបទទួលបានពេលសម្រាលកូន។',
      paperFlaw1: '💧 ងាយសើម ជ្រាបទឹកភ្លៀង និងរហែកពេលភ្លៀងធ្លាក់',
      paperFlaw2: '✍️ ទឹកថ្នាំរលុប អក្សរគ្រូពេទ្យពិបាកអាន',
      paperFlaw3: '🏠 ងាយភ្លេចនៅផ្ទះពេលនាំកូនទៅចាក់ថ្នាំ',
      paperFlaw4: '⏳ គ្មានប្រព័ន្ធដាស់តឿនពេលដល់ថ្ងៃចាក់លើកក្រោយ',

      digitalCardTitle: 'កូនសៀវភៅឌីជីថល KOMA (ស្តង់ដារក្រសួងសុខាភិបាល)',
      digitalCardSubtitle: 'ព្រះរាជាណាចក្រកម្ពុជា • កម្មវិធីជាតិផ្តល់ថ្នាំបង្ការ ក្រសួងសុខាភិបាល',
      tabInfancy: 'ទារក (០-៩ ខែ)',
      tabToddler: 'កុមារ (៩-១៨ ខែ)',
      thVaccine: 'ថ្នាំបង្ការ',
      thDueAge: 'អាយុត្រូវចាក់',
      thDateGiven: 'កាលបរិច្ឆេទចាក់',
      thHospital: 'មន្ទីរពេទ្យ / មណ្ឌលសុខភាព',
      thStatus: 'ស្ថានភាព',
      statusCompleted: 'បានចាក់រួច',
      statusDueSoon: 'ជិតដល់ថ្ងៃ',
      statusScheduled: 'គ្រោងទុក',
      btnPrintPdf: '🖨️ បោះពុម្ព A4 / រក្សាទុក PDF',
      btnOpenFullBooklet: '📖 បើកមើលសៀវភៅលឿងពេញលេញ',

      // 4 Core Feature Pillars
      pillarsTag: 'មុខងារសំខាន់ៗទាំង ៤',
      pillarsTitle: 'អ្វីៗដែលឪពុកម្តាយត្រូវការ នៅក្នុងកន្លែងតែមួយ',
      pillarsDesc: 'បង្កើតឡើងស្របតាមដំណើរជាក់ស្តែងនៃការថែទាំសុខភាពកុមាររបស់គ្រួសារកម្ពុជា។',

      pillar1Title: 'កាលវិភាគចាក់ថ្នាំបង្ការជាតិកម្ពុជា',
      pillar1Desc: 'ផ្ទុកនូវរាល់ថ្នាំបង្ការដែលកំណត់ដោយក្រសួងសុខាភិបាល (BCG, រលាកថ្លើមបេ, ៥មុខ, ស្វិតដៃជើង, រលាកសួត, កញ្ជ្រឹល-ស្រឡទែន, រលាកខួរក្បាល)។',

      pillar2Title: 'ការរំលឹកវៃឆ្លាត មិនខកខានកាលបរិច្ឆេទ',
      pillar2Desc: 'គណនាកាលបរិច្ឆេទចាក់ថ្នាំដោយស្វ័យប្រវត្តិតាមថ្ងៃខែឆ្នាំកំណើតកូន។ ទទួលបានការរំលឹកទាន់ពេលវេលាដើម្បីសុវត្ថិភាពកូនអ្នក។',
      reminderSimTitle: 'ថ្នាំបង្ការ៥មុខ លើកទី២ (DTP-HepB-Hib)',
      reminderSimDays: 'នៅសល់ ៣ ថ្ងៃ',
      reminderSimMarkBtn: 'កត់ត្រាថាបានចាក់រួច ✅',
      reminderSimDone: 'បានចាក់រួចរាល់នៅថ្ងៃទី១៥ តុលា ២០២៦ នៅមន្ទីរពេទ្យគន្ធបុប្ផា! 🎉',

      pillar3Title: 'តាមដានការលូតលាស់ស្តង់ដារ WHO',
      pillar3Desc: 'កត់ត្រាទម្ងន់និងកម្ពស់ធៀបនឹងស្តង់ដារអង្គការសុខភាពពិភពលោក (WHO P3 ដល់ P97) ដើម្បីដឹងពីការលូតលាស់របស់កូន។',
      tabWeight: 'ទម្ងន់ (គ.ក្រ)',
      tabHeight: 'កម្ពស់ (ស.ម)',

      pillar4Title: 'បង្កើតសម្រាប់កម្ពុជា & ប្រើបានដោយគ្មានអ៊ីនធឺណិត',
      pillar4Desc: 'មានបញ្ជីមន្ទីរពេទ្យល្បីៗ (គន្ធបុប្ផា កាល់ម៉ែត កុមារជាតិ មណ្ឌលសុខភាព) គាំទ្រអក្សរខ្មែរ ១០០% និងរក្សាទុកទិន្នន័យលើទូរសព្ទដោយសុវត្ថិភាព។',
      hospSelectPrompt: 'ជ្រើសរើសមន្ទីរពេទ្យទទួលការចាក់ថ្នាំ៖',

      // Playground Section
      playgroundTag: 'សាកល្បងមុខងារផ្ទាល់',
      playgroundTitle: 'សាកល្បងឧបករណ៍ KOMA ដោយផ្ទាល់',
      playgroundDesc: 'ស្វែងយល់ពីរបៀបដែល KOMA ជួយសម្រាលបន្ទុកឪពុកម្តាយក្នុងការថែទាំកូនៗ។',

      calcTitle: 'ឧបករណ៍គណនាកាលវិភាគចាក់ថ្នាំ',
      calcDesc: 'បញ្ចូលថ្ងៃខែឆ្នាំកំណើតរបស់កូនអ្នក ដើម្បីដឹងពីអាយុជាក់ស្តែង និងថ្នាំបង្ការ ៣ មុខបន្ទាប់ដែលត្រូវចាក់។',
      calcInputLabel: 'ថ្ងៃខែឆ្នាំកំណើតកូន៖',
      presetNewborn: 'ទើបកើត',
      preset2m: '២ ខែ',
      preset6m: '៦ ខែ',
      preset1y: '១ ឆ្នាំ',
      calcUpcomingTitle: 'ថ្នាំបង្ការ ៣ មុខបន្ទាប់ដែលត្រូវចាក់៖',
      calcDueInPrefix: 'ត្រូវចាក់ក្នុងរយៈពេល',
      calcDays: 'ថ្ងៃទៀត',

      bdayTeaserTitle: 'អបអរសាទរខួបកំណើតកុមារ',
      bdayTeaserDesc: 'កុមារគ្រប់រូបសមនឹងទទួលបានការអបអរសាទរ! KOMA មានមុខងារបាញ់កាំជ្រួចឌីជីថល និងពរជ័យសុខភាពនៅថ្ងៃខួបកំណើតរបស់កូន។',
      btnTestBirthday: '🎉 សាកល្បងពរជ័យខួបកំណើត & កាំជ្រួច',
      bdayTapHint: 'ចុចលើនំខេកដើម្បីផ្លុំទៀន និងបាញ់កាំជ្រួច!',

      // Healthcare Partners & Trust
      trustTag: 'ប្រព័ន្ធសុខាភិបាលកម្ពុជា',
      trustTitle: 'ដៃគូជឿទុកចិត្តក្នុងការថែទាំសុខភាពកុមារ',
      trustDesc: 'គាំទ្រមន្ទីរពេទ្យកុមារធំៗ និងមណ្ឌលសុខភាពមូលដ្ឋានជាង ១,២០០ ទូទាំងប្រទេសកម្ពុជា។',

      hospKBName: 'មន្ទីរពេទ្យគន្ធបុប្ផា',
      hospKBLoc: 'រាជធានីភ្នំពេញ & ខេត្តសៀមរាប',
      hospKBTag: 'ព្យាបាលនិងចាក់ថ្នាំឥតគិតថ្លៃ',

      hospNPHName: 'មន្ទីរពេទ្យកុមារជាតិ',
      hospNPHLoc: 'មហាវិថីសហព័ន្ធរុស្ស៊ី ភ្នំពេញ',
      hospNPHTag: 'មជ្ឈមណ្ឌលផ្តល់ថ្នាំបង្ការជាតិ',

      hospAHCName: 'មន្ទីរពេទ្យកុមារអង្គរ',
      hospAHCLoc: 'ខេត្តសៀមរាប',
      hospAHCTag: 'មន្ទីរពេទ្យបង្អែកកុមារភូមិភាគខាងជើង',

      hospCalmetteName: 'មន្ទីរពេទ្យកាល់ម៉ែត',
      hospCalmetteLoc: 'មហាវិថីព្រះមុនីវង្ស ភ្នំពេញ',
      hospCalmetteTag: 'ផ្នែកសម្ភពនិងសុខភាពកុមារ',

      trustPillar1Title: 'គ្មានការលក់ទិន្នន័យ',
      trustPillar1Desc: 'ទិន្នន័យវេជ្ជសាស្ត្ររបស់កូនអ្នកត្រូវបានរក្សាទុកតែនៅលើទូរសព្ទរបស់អ្នកប៉ុណ្ណោះ។ គ្មានការលក់ទិន្នន័យឡើយ។',
      trustPillar2Title: 'ស្តង់ដារក្រសួងសុខាភិបាល',
      trustPillar2Desc: 'ស្របតាមគោលការណ៍ណែនាំ ១០០% នៃកម្មវិធីជាតិផ្តល់ថ្នាំបង្ការ (NIP) របស់ក្រសួងសុខាភិបាលកម្ពុជា។',
      trustPillar3Title: 'ឥតគិតថ្លៃជានិច្ចសម្រាប់ឪពុកម្តាយ',
      trustPillar3Desc: 'គ្មានការបង់ថ្លៃប្រចាំខែ គ្មានពាណិជ្ជកម្មរំខាន បង្កើតឡើងសម្រាប់ឪពុកម្តាយគ្រប់រូប។',

      // Final CTA Banner
      ctaBannerTitle: 'ចាប់ផ្តើមតាមដានសុខភាពកូនរបស់អ្នកជាមួយ KOMA ថ្ងៃនេះ។',
      ctaBannerDesc: 'ចូលរួមជាមួយឪពុកម្តាយកម្ពុជារាប់រយនាក់ ដែលថែទាំកូនៗដោយទំនុកចិត្ត និងភាពកក់ក្តៅ។',
      btnTryWebDemo: '🚀 សាកល្បង Web Demo ឥឡូវនេះ',
      btnRequestMobile: '📱 ចុះឈ្មោះទទួល Mobile App',

      // Modals
      waitlistTitle: 'ចុះឈ្មោះទទួល Mobile App (iOS / Android)',
      waitlistDesc: 'ក្លាយជាអ្នកដំបូងគេដែលបានប្រើប្រាស់ KOMA App ពេលបើកដំណើរការជាផ្លូវការនៅកម្ពុជា។',
      labelParentName: 'ឈ្មោះឪពុក / ម្តាយ / អាណាព្យាបាល',
      labelContact: 'លេខទូរសព្ទ ឬ Telegram',
      labelKidAge: 'អាយុកូនបច្ចុប្បន្ន',
      btnSubmitWaitlist: 'ចុះឈ្មោះជាអាទិភាព 🚀',
      waitlistSuccess: '🎉 ការចុះឈ្មោះទទួលបានជោគជ័យ! យើងនឹងជូនដំណឹងតាម Telegram/SMS។',

      modalClose: 'បិទ',
      modalPrint: 'បោះពុម្ព / រក្សាទុក PDF',
      bdayModalHeading: 'រីករាយថ្ងៃខួបកំណើត',
      bdayModalWish: 'KOMA សូមប្រសិទ្ធពរជ័យសិរីសួស្តីដល់កូន សូមឱ្យមានសុខភាពល្អបរិបូរណ៍ ប្រាជ្ញាឈ្លាសវៃ និងអនាគតភ្លឺស្វាង!',
      bdayModalSafe: 'សុវត្ថិភាព & ការការពារ',
      bdayModalGrowth: 'លូតលាស់ល្អ',
      bdayModalCelebrate: 'អបអរសាទរ! 🎉',

      // Footer
      footerSlogan: 'ជួយឪពុកម្តាយកម្ពុជាក្នុងការតាមដាន ទទួលបានព័ត៌មាន និងថែទាំកូនៗដោយទំនុកចិត្ត។',
      footerColProduct: 'ផលិតផល',
      footerColResources: 'ធនធានសុខភាព',
      footerColLegal: 'ទំនុកចិត្ត & ច្បាប់',
      linkDemo: 'Web Demo ផ្ទាល់',
      linkYellowBook: 'កូនសៀវភៅលឿងឌីជីថល',
      linkGrowth: 'តារាងលូតលាស់',
      linkHospitals: 'បញ្ជីមន្ទីរពេទ្យ',
      linkMOH: 'កាលវិភាគក្រសួងសុខាភិបាល',
      linkTelegram: 'សហគមន៍ Telegram ឪពុកម្តាយ',
      linkFAQ: 'សំណួរចម្លើយថ្នាំបង្ការ',
      linkPrivacy: 'គោលការណ៍ឯកជនភាព',
      linkTerms: 'លក្ខខណ្ឌប្រើប្រាស់',
      linkSecurity: 'សុវត្ថិភាពទិន្នន័យ',
      footerBuiltIn: 'បង្កើតឡើងដោយក្តីស្រឡាញ់ នៅរាជធានីភ្នំពេញ 🇰🇭',
      footerCopyright: '© ២០២៦ KOMA. រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    }
  };

  // ==========================================
  // 2. DATA: Cambodian National Immunization Schedule
  // ==========================================
  const CAMBODIA_VACCINES = [
    {
      id: 'bcg',
      category: 'BCG',
      nameEn: 'BCG (Tuberculosis)',
      nameKh: 'BCG (ជំងឺរបេង)',
      doseNumber: 1,
      totalDoses: 1,
      recommendedAgeMonths: 0,
      recommendedDays: 0,
      recommendedAgeLabelEn: 'At Birth (within 24h)',
      recommendedAgeLabelKh: 'ពេលកើតភ្លាម (ក្នុង ២៤ម៉ោង)',
      defaultHospital: 'Kantha Bopha Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យគន្ធបុប្ផា',
      lot: 'BCG-2025-08',
      descEn: 'Protects newborns from severe tuberculosis and tuberculous meningitis.',
      descKh: 'ការពារទារកទើបនឹងកើតពីជំងឺរបេងធ្ងន់ធ្ងរ និងជំងឺរលាកស្រោមខួរក្បាលរបេង។',
    },
    {
      id: 'hepb0',
      category: 'OTHER',
      nameEn: 'HepB Birth Dose',
      nameKh: 'រលាកថ្លើមបេ (ដូសកើតភ្លាម)',
      doseNumber: 1,
      totalDoses: 1,
      recommendedAgeMonths: 0,
      recommendedDays: 0,
      recommendedAgeLabelEn: 'At Birth (within 24h)',
      recommendedAgeLabelKh: 'ពេលកើតភ្លាម (ក្នុង ២៤ម៉ោង)',
      defaultHospital: 'Kantha Bopha Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យគន្ធបុប្ផា',
      lot: 'HEP-9941',
      descEn: 'Prevents mother-to-child transmission of Hepatitis B virus.',
      descKh: 'ការពារការចម្លងវីរុសរលាកថ្លើមប្រភេទបេ ពីម្តាយទៅកូន។',
    },
    {
      id: 'penta1',
      category: 'HIB',
      nameEn: 'Pentavalent 1 (DTP-HepB-Hib)',
      nameKh: 'ថ្នាំបង្ការ៥មុខ លើកទី១ (DTP-HepB-Hib 1)',
      doseNumber: 1,
      totalDoses: 3,
      recommendedAgeMonths: 1.5,
      recommendedDays: 42,
      recommendedAgeLabelEn: '6 Weeks (1.5 months)',
      recommendedAgeLabelKh: 'អាយុ ៦ សប្តាហ៍',
      defaultHospital: 'Calmette Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យកាល់ម៉ែត',
      lot: 'PEN-4401',
      descEn: 'Protects against Diphtheria, Tetanus, Pertussis, HepB, and Hib meningitis.',
      descKh: 'ការពារជំងឺខាន់ស្លាក់ តេតាណូស ក្អកមាន់ រលាកថ្លើមបេ និងរលាកស្រោមខួរក្បាល។',
    },
    {
      id: 'opv1',
      category: 'OPV',
      nameEn: 'OPV 1 (Oral Polio Drops)',
      nameKh: 'OPV 1 (ដំណក់ស្វិតដៃជើង ១)',
      doseNumber: 1,
      totalDoses: 3,
      recommendedAgeMonths: 1.5,
      recommendedDays: 42,
      recommendedAgeLabelEn: '6 Weeks',
      recommendedAgeLabelKh: 'អាយុ ៦ សប្តាហ៍',
      defaultHospital: 'Calmette Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យកាល់ម៉ែត',
      lot: 'POL-1120',
      descEn: 'Oral drops protecting against Poliovirus paralysis.',
      descKh: 'ថ្នាំដំណក់លេបការពារជំងឺស្វិតដៃជើង។',
    },
    {
      id: 'pcv1',
      category: 'PCV',
      nameEn: 'PCV 1 (Pneumococcal)',
      nameKh: 'PCV 1 (រលាកសួតបាក់តេរី ១)',
      doseNumber: 1,
      totalDoses: 3,
      recommendedAgeMonths: 1.5,
      recommendedDays: 42,
      recommendedAgeLabelEn: '6 Weeks',
      recommendedAgeLabelKh: 'អាយុ ៦ សប្តាហ៍',
      defaultHospital: 'Calmette Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យកាល់ម៉ែត',
      lot: 'PCV-8083',
      descEn: 'Protects against severe pneumonia and bloodstream infections.',
      descKh: 'ការពារជំងឺរលាកសួតធ្ងន់ធ្ងរ និងជំងឺឆ្លងក្នុងឈាម។',
    },
    {
      id: 'penta2',
      category: 'HIB',
      nameEn: 'Pentavalent 2 (DTP-HepB-Hib)',
      nameKh: 'ថ្នាំបង្ការ៥មុខ លើកទី២ (DTP-HepB-Hib 2)',
      doseNumber: 2,
      totalDoses: 3,
      recommendedAgeMonths: 2.5,
      recommendedDays: 70,
      recommendedAgeLabelEn: '10 Weeks (2.5 months)',
      recommendedAgeLabelKh: 'អាយុ ១០ សប្តាហ៍',
      defaultHospital: 'National Pediatric Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យកុមារជាតិ',
      lot: 'PEN-5219',
      descEn: 'Second booster dose building long-lasting antibodies.',
      descKh: 'ដូសលើកទី២ ដើម្បីបង្កើនអង្គបដិប្រាណការពាររាងកាយ។',
    },
    {
      id: 'opv2',
      category: 'OPV',
      nameEn: 'OPV 2 (Oral Polio Drops)',
      nameKh: 'OPV 2 (ដំណក់ស្វិតដៃជើង ២)',
      doseNumber: 2,
      totalDoses: 3,
      recommendedAgeMonths: 2.5,
      recommendedDays: 70,
      recommendedAgeLabelEn: '10 Weeks',
      recommendedAgeLabelKh: 'អាយុ ១០ សប្តាហ៍',
      defaultHospital: 'National Pediatric Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យកុមារជាតិ',
      lot: 'POL-2291',
      descEn: 'Second oral polio immunization dose.',
      descKh: 'ថ្នាំដំណក់លេបការពារជំងឺស្វិតដៃជើងលើកទី២។',
    },
    {
      id: 'penta3',
      category: 'HIB',
      nameEn: 'Pentavalent 3 (DTP-HepB-Hib)',
      nameKh: 'ថ្នាំបង្ការ៥មុខ លើកទី៣ (DTP-HepB-Hib 3)',
      doseNumber: 3,
      totalDoses: 3,
      recommendedAgeMonths: 3.5,
      recommendedDays: 98,
      recommendedAgeLabelEn: '14 Weeks (3.5 months)',
      recommendedAgeLabelKh: 'អាយុ ១៤ សប្តាហ៍',
      defaultHospital: 'National Pediatric Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យកុមារជាតិ',
      lot: 'PEN-6012',
      descEn: 'Completes primary series for 5 core infant diseases.',
      descKh: 'បញ្ចប់ស៊េរីដំបូងនៃថ្នាំបង្ការជំងឺ ៥ មុខសម្រាប់ទារក។',
    },
    {
      id: 'mr1',
      category: 'OTHER',
      nameEn: 'Measles-Rubella 1 (MR 1)',
      nameKh: 'កញ្ជ្រឹល-ស្រឡទែន ១ (MR 1)',
      doseNumber: 1,
      totalDoses: 2,
      recommendedAgeMonths: 9,
      recommendedDays: 270,
      recommendedAgeLabelEn: '9 Months',
      recommendedAgeLabelKh: 'អាយុ ៩ ខែ',
      defaultHospital: 'Kantha Bopha Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យគន្ធបុប្ផា',
      lot: 'MR-1092',
      descEn: 'Protects infants from measles epidemics and congenital rubella.',
      descKh: 'ការពារទារកពីការរាតត្បាតជំងឺកញ្ជ្រឹល និងជំងឺស្អូច។',
    },
    {
      id: 'je',
      category: 'OTHER',
      nameEn: 'Japanese Encephalitis (JE)',
      nameKh: 'រលាកខួរក្បាលជប៉ុន (JE)',
      doseNumber: 1,
      totalDoses: 1,
      recommendedAgeMonths: 9,
      recommendedDays: 270,
      recommendedAgeLabelEn: '9 Months',
      recommendedAgeLabelKh: 'អាយុ ៩ ខែ',
      defaultHospital: 'Kantha Bopha Hospital',
      defaultHospitalKh: 'មន្ទីរពេទ្យគន្ធបុប្ផា',
      lot: 'JE-3310',
      descEn: 'Protects against mosquito-borne encephalitis in Southeast Asia.',
      descKh: 'ការពារជំងឺរលាកខួរក្បាលបង្កដោយមូសខាំនៅអាស៊ីអាគ្នេយ៍។',
    },
    {
      id: 'mr2',
      category: 'OTHER',
      nameEn: 'Measles-Rubella 2 (MR 2)',
      nameKh: 'កញ្ជ្រឹល-ស្រឡទែន ២ (MR 2)',
      doseNumber: 2,
      totalDoses: 2,
      recommendedAgeMonths: 18,
      recommendedDays: 540,
      recommendedAgeLabelEn: '18 Months (1.5 years)',
      recommendedAgeLabelKh: 'អាយុ ១៨ ខែ',
      defaultHospital: 'Angkor Hospital for Children',
      defaultHospitalKh: 'មន្ទីរពេទ្យកុមារអង្គរ',
      lot: 'MR-2104',
      descEn: 'Booster ensuring 99%+ lifetime immunity against measles.',
      descKh: 'ដូសជំរុញធានាភាពស៊ាំការពារជំងឺកញ្ជ្រឹលអស់មួយជីវិតលើស ៩៩%។',
    }
  ];

  // Cambodian Referral Hospitals Info
  const HOSPITALS_INFO = [
    {
      id: 'kantha-bopha',
      nameEn: 'Kantha Bopha Hospital (Phnom Penh & Siem Reap)',
      nameKh: 'មន្ទីរពេទ្យគន្ធបុប្ផា (ភ្នំពេញ និង សៀមរាប)',
      addressEn: 'St. 47, Sangkat Wat Phnom, Phnom Penh',
      addressKh: 'ផ្លូវលេខ ៤៧ សង្កាត់វត្តភ្នំ រាជធានីភ្នំពេញ',
      phone: '+855 23 722 020',
      statusEn: 'Free NIP vaccines available daily (7:00 AM - 5:00 PM)',
      statusKh: 'ផ្តល់ការចាក់ថ្នាំបង្ការជាតិឥតគិតថ្លៃរៀងរាល់ថ្ងៃ (៧:០០ - ១៧:០០)'
    },
    {
      id: 'nph',
      nameEn: 'National Pediatric Hospital (NPH)',
      nameKh: 'មន្ទីរពេទ្យកុមារជាតិ (ភ្នំពេញ)',
      addressEn: 'Russian Federation Blvd, Phnom Penh',
      addressKh: 'មហាវិថីសហព័ន្ធរុស្ស៊ី រាជធានីភ្នំពេញ',
      phone: '+855 23 880 475',
      statusEn: 'Official MOH National Vaccination & Child Health Center',
      statusKh: 'មជ្ឈមណ្ឌលជាតិផ្តល់ថ្នាំបង្ការ និងសុខភាពកុមារ'
    },
    {
      id: 'calmette',
      nameEn: 'Calmette Hospital (Maternity & Pediatrics)',
      nameKh: 'មន្ទីរពេទ្យកាល់ម៉ែត (ផ្នែកសម្ភពនិងកុមារ)',
      addressEn: 'No. 3, Preah Monivong Blvd, Phnom Penh',
      addressKh: 'លេខ ៣ មហាវិថីព្រះមុនីវង្ស រាជធានីភ្នំពេញ',
      phone: '+855 23 426 948',
      statusEn: 'Newborn BCG, HepB birth dose and comprehensive neonatal care',
      statusKh: 'ផ្តល់ដូស BCG, រលាកថ្លើមបេពេលទើបសម្រាល និងការថែទាំទារក'
    },
    {
      id: 'ahc',
      nameEn: 'Angkor Hospital for Children (AHC)',
      nameKh: 'មន្ទីរពេទ្យកុមារអង្គរ (ខេត្តសៀមរាប)',
      addressEn: 'Tep Vong St, Siem Reap',
      addressKh: 'ផ្លូវទេពវង្ស ក្រុងសៀមរាប',
      phone: '+855 63 963 409',
      statusEn: 'Leading pediatric healthcare provider in Northern Cambodia',
      statusKh: 'មន្ទីរពេទ្យកុមារឈានមុខគេនៅភូមិភាគខាងជើងនៃកម្ពុជា'
    },
    {
      id: 'commune',
      nameEn: 'Local Commune Health Centers (1,200+ Nationwide)',
      nameKh: 'មណ្ឌលសុខភាពឃុំ-សង្កាត់ (ជាង ១,២០០ ទូទាំងប្រទេស)',
      addressEn: 'Available in every commune across all 25 provinces',
      addressKh: 'មាននៅគ្រប់ឃុំ-សង្កាត់ ក្នុងខេត្ត-រាជធានីទាំង ២៥',
      phone: 'MOH Hotline: 115',
      statusEn: 'Primary NIP immunization outreach and growth monitoring',
      statusKh: 'ផ្តល់ថ្នាំបង្ការជាតិជាមូលដ្ឋាន និងតាមដានការលូតលាស់'
    }
  ];

  // Mock Child Profiles for Phone Simulation
  const DEMO_CHILDREN = {
    dara: {
      nameEn: 'Dara Chan',
      nameKh: 'ចាន់ តារា',
      gender: 'male',
      ageEn: '1 year old',
      ageKh: 'អាយុ ១ ឆ្នាំ',
      avatarVariant: 'boy',
      dueUrgentEn: 'Pentavalent 2 (DTP-HepB-Hib)',
      dueUrgentKh: 'ថ្នាំបង្ការ៥មុខ លើកទី២ (DTP-HepB-Hib 2)',
      dueDaysEn: 'Due in 3 days',
      dueDaysKh: 'នៅសល់ ៣ ថ្ងៃ',
      dueHospitalEn: 'National Pediatric Hospital • Phnom Penh',
      dueHospitalKh: 'មន្ទីរពេទ្យកុមារជាតិ • ភ្នំពេញ',
      vaccinesCount: '8 / 12',
      height: '74 cm',
      weight: '9.6 kg',
    },
    bopha: {
      nameEn: 'Bopha Chan',
      nameKh: 'ចាន់ បុប្ផា',
      gender: 'female',
      ageEn: '7 months old',
      ageKh: 'អាយុ ៧ ខែ',
      avatarVariant: 'girl',
      dueUrgentEn: 'OPV 2 & Pentavalent 2',
      dueUrgentKh: 'OPV 2 & ថ្នាំបង្ការ៥មុខ លើកទី២',
      dueDaysEn: 'Due in 5 days',
      dueDaysKh: 'នៅសល់ ៥ ថ្ងៃ',
      dueHospitalEn: 'Calmette Hospital • Phnom Penh',
      dueHospitalKh: 'មន្ទីរពេទ្យកាល់ម៉ែត • ភ្នំពេញ',
      vaccinesCount: '5 / 12',
      height: '60 cm',
      weight: '5.8 kg',
    }
  };

  // State Management
  let currentLanguage = localStorage.getItem('koma_lang') || 'en';
  let activePhoneChild = 'dara';
  let activeBookletTab = 'infancy'; // 'infancy' (0-9m) or 'toddler' (9-18m)
  let activeGrowthMetric = 'weight'; // 'weight' or 'height'

  // ==========================================
  // 3. LANGUAGE SYSTEM & DOM RE-RENDER
  // ==========================================
  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('koma_lang', lang);

    document.documentElement.setAttribute('lang', lang === 'kh' ? 'km' : 'en');
    
    // Update active flag in header button
    const activeFlag = document.getElementById('active-lang-flag');
    const activeText = document.getElementById('active-lang-text');
    if (activeFlag) {
      activeFlag.src = lang === 'kh' ? 'assets/flag-kh.png' : 'assets/flag-en.png';
      activeFlag.alt = lang === 'kh' ? 'Cambodia' : 'English';
    }
    if (activeText) {
      activeText.textContent = lang === 'kh' ? 'ភាសាខ្មែរ' : 'English';
    }

    // Update active class on dropdown options
    document.querySelectorAll('.lang-option').forEach(btn => {
      const optionLang = btn.getAttribute('data-lang');
      if (optionLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all data-i18n elements
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update Phone Mockup UI
    updatePhoneMockup();

    // Update Digital Yellow Booklet
    renderBookletTable();

    // Update Feature 1 Timeline Display
    updatePillar1Display();

    // Update Feature 4 Hospital Details
    updateHospitalDetails();

    // Recalculate Playground if date is present
    runVaccineCalculator();
  }

  // ==========================================
  // 4. PHONE MOCKUP INTERACTIVITY
  // ==========================================
  function updatePhoneMockup() {
    const child = DEMO_CHILDREN[activePhoneChild];
    if (!child) return;

    const isKh = currentLanguage === 'kh';

    const nameEl = document.getElementById('phone-child-name');
    const ageEl = document.getElementById('phone-child-age');
    const dueTitleEl = document.getElementById('phone-due-title');
    const dueDaysEl = document.getElementById('phone-due-days');
    const dueHospEl = document.getElementById('phone-due-hosp');
    const vacCountEl = document.getElementById('phone-stat-vaccines');
    const heightEl = document.getElementById('phone-stat-height');
    const weightEl = document.getElementById('phone-stat-weight');
    const avatarContainer = document.getElementById('phone-child-avatar');

    if (nameEl) nameEl.textContent = isKh ? child.nameKh : child.nameEn;
    if (ageEl) ageEl.textContent = isKh ? child.ageKh : child.ageEn;
    if (dueTitleEl) dueTitleEl.textContent = isKh ? child.dueUrgentKh : child.dueUrgentEn;
    if (dueDaysEl) dueDaysEl.textContent = isKh ? child.dueDaysKh : child.dueDaysEn;
    if (dueHospEl) dueHospEl.textContent = isKh ? child.dueHospitalKh : child.dueHospitalEn;
    if (vacCountEl) vacCountEl.textContent = child.vaccinesCount;
    if (heightEl) heightEl.textContent = child.height;
    if (weightEl) weightEl.textContent = child.weight;

    // Switch avatar SVG
    if (avatarContainer) {
      if (child.gender === 'female') {
        avatarContainer.innerHTML = getLunaAvatarSvg();
      } else {
        avatarContainer.innerHTML = getOliverAvatarSvg();
      }
    }

    // Toggle child buttons active class
    const btnDara = document.getElementById('tab-child-dara');
    const btnBopha = document.getElementById('tab-child-bopha');
    if (btnDara) btnDara.classList.toggle('active', activePhoneChild === 'dara');
    if (btnBopha) btnBopha.classList.toggle('active', activePhoneChild === 'bopha');
  }

  // ==========================================
  // 5. DIGITAL YELLOW BOOKLET TABLE
  // ==========================================
  function renderBookletTable() {
    const tableBody = document.getElementById('booklet-table-body');
    const modalTableBody = document.getElementById('modal-booklet-table-body');
    if (!tableBody && !modalTableBody) return;

    const isKh = currentLanguage === 'kh';

    // Infancy = 0 to 6 months (< 9 months)
    // Toddler = 9 to 18 months (>= 9 months)
    const filteredVaccines = CAMBODIA_VACCINES.filter(v => {
      if (activeBookletTab === 'infancy') return v.recommendedAgeMonths < 9;
      return v.recommendedAgeMonths >= 9;
    });

    let html = '';
    filteredVaccines.forEach((vac, index) => {
      const isCompleted = activeBookletTab === 'infancy' && index < 3;
      const statusBadge = isCompleted
        ? `<span class="table-status-pill completed">✓ ${isKh ? 'បានចាក់' : 'Completed'}</span>`
        : `<span class="table-status-pill due">⏳ ${isKh ? 'ជិតដល់ថ្ងៃ' : 'Due Soon'}</span>`;

      const dateStr = isCompleted
        ? `<strong style="color: #176B46;">${vac.recommendedAgeMonths === 0 ? 'Jun 15, 2025' : 'Jul 28, 2025'}</strong>`
        : `<span style="color: #8C5300; font-weight: 700;">${isKh ? 'គ្រោង៖' : 'Due:'} Oct 18, 2026</span>`;

      html += `
        <tr class="${isCompleted ? 'completed-row' : ''}">
          <td>
            <strong>${isKh ? vac.nameKh : vac.nameEn}</strong>
            <div style="font-size: 0.7rem; color: #666; font-family: monospace;">Lot: ${vac.lot}</div>
          </td>
          <td>${isKh ? vac.recommendedAgeLabelKh : vac.recommendedAgeLabelEn}</td>
          <td>${dateStr}</td>
          <td><strong style="color: #18181B;">${isKh ? vac.defaultHospitalKh : vac.defaultHospital}</strong></td>
          <td>${statusBadge}</td>
        </tr>
      `;
    });

    if (tableBody) tableBody.innerHTML = html;
    if (modalTableBody) modalTableBody.innerHTML = html;

    // Toggle Tab styling
    const tabInf = document.getElementById('booklet-tab-infancy');
    const tabTod = document.getElementById('booklet-tab-toddler');
    if (tabInf) tabInf.classList.toggle('active', activeBookletTab === 'infancy');
    if (tabTod) tabTod.classList.toggle('active', activeBookletTab === 'toddler');
  }

  // ==========================================
  // 6. CORE PILLARS INTERACTIVE DEMOS
  // ==========================================
  // Pillar 1: Timeline Pills
  let currentDoseIndex = 0;
  function updatePillar1Display() {
    const isKh = currentLanguage === 'kh';
    const vac = CAMBODIA_VACCINES[currentDoseIndex] || CAMBODIA_VACCINES[0];

    const titleEl = document.getElementById('pillar1-dose-title');
    const ageEl = document.getElementById('pillar1-dose-age');
    const descEl = document.getElementById('pillar1-dose-desc');
    const hospEl = document.getElementById('pillar1-dose-hosp');

    if (titleEl) titleEl.textContent = isKh ? vac.nameKh : vac.nameEn;
    if (ageEl) ageEl.textContent = isKh ? vac.recommendedAgeLabelKh : vac.recommendedAgeLabelEn;
    if (descEl) descEl.textContent = isKh ? vac.descKh : vac.descEn;
    if (hospEl) hospEl.textContent = isKh ? `🏥 ${vac.defaultHospitalKh}` : `🏥 ${vac.defaultHospital}`;

    document.querySelectorAll('.dose-chip').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentDoseIndex);
    });
  }

  // Pillar 2: Overdue Reminder Simulator
  function initReminderSimulator() {
    const markBtn = document.getElementById('btn-mark-reminder-done');
    const simBox = document.getElementById('reminder-sim-box');
    if (!markBtn || !simBox) return;

    markBtn.addEventListener('click', () => {
      const isKh = currentLanguage === 'kh';
      simBox.innerHTML = `
        <div style="background-color: var(--color-status-green-bg); border: 2px solid var(--color-status-green); border-radius: 14px; padding: 0.85rem; text-align: center;">
          <div style="font-size: 1.4rem; margin-bottom: 0.2rem;">🎉</div>
          <strong style="color: #176B46; font-size: 0.9rem; display: block;">
            ${isKh ? 'កត់ត្រារួចរាល់! បានចាក់នៅមន្ទីរពេទ្យគន្ធបុប្ផា' : 'Recorded! Administered at Kantha Bopha Hospital'}
          </strong>
          <span style="font-size: 0.78rem; color: #52525B;">
            ${isKh ? 'កាលបរិច្ឆេទចាក់៖ ១៥ តុលា ២០២៦ • ស្ថានភាពស្របតាមកាលវិភាគជាតិ' : 'Date: Oct 15, 2026 • 100% Up to date on NIP'}
          </span>
        </div>
      `;
      launchConfettiBurst(0.5, 0.7);
    });
  }

  // Pillar 3: WHO Growth Chart Interactive SVG
  function updateGrowthMetric(metric) {
    activeGrowthMetric = metric;
    const isWeight = metric === 'weight';

    const tabW = document.getElementById('growth-tab-weight');
    const tabH = document.getElementById('growth-tab-height');
    if (tabW) tabW.classList.toggle('active', isWeight);
    if (tabH) tabH.classList.toggle('active', !isWeight);

    const svgContainer = document.getElementById('growth-svg-stage');
    if (!svgContainer) return;

    if (isWeight) {
      // Weight Curve: 0 to 12 months (3.2kg to 9.6kg)
      svgContainer.innerHTML = `
        <svg viewBox="0 0 280 90" width="100%" height="100%">
          <rect x="0" y="0" width="280" height="90" fill="#FAF7EE" rx="6" />
          <!-- WHO Corridor (P3 - P97) -->
          <path d="M 20 75 Q 120 40 260 20 L 260 45 Q 120 65 20 82 Z" fill="#EBF5FC" />
          <!-- WHO Median P50 Line -->
          <path d="M 20 78 Q 120 52 260 32" stroke="#4AAEE8" stroke-width="2" stroke-dasharray="3 3" fill="none" />
          <!-- Child's Growth Track -->
          <path d="M 20 80 L 80 62 L 160 45 L 260 30" stroke="#18181B" stroke-width="2.5" fill="none" stroke-linecap="round" />
          <!-- Data Points -->
          <circle cx="20" cy="80" r="3.5" fill="#FABE2C" stroke="#18181B" stroke-width="1.5" />
          <circle cx="80" cy="62" r="3.5" fill="#FABE2C" stroke="#18181B" stroke-width="1.5" />
          <circle cx="160" cy="45" r="3.5" fill="#FABE2C" stroke="#18181B" stroke-width="1.5" />
          <circle cx="260" cy="30" r="5" fill="#36B37E" stroke="#18181B" stroke-width="2" />
          <text x="245" y="20" font-size="9" font-weight="900" fill="#18181B">9.6 kg</text>
        </svg>
      `;
    } else {
      // Height Curve: 0 to 12 months (50cm to 74cm)
      svgContainer.innerHTML = `
        <svg viewBox="0 0 280 90" width="100%" height="100%">
          <rect x="0" y="0" width="280" height="90" fill="#FAF7EE" rx="6" />
          <!-- WHO Corridor (P3 - P97) -->
          <path d="M 20 72 Q 130 38 260 16 L 260 40 Q 130 62 20 80 Z" fill="#E8F8F0" />
          <!-- WHO Median P50 Line -->
          <path d="M 20 76 Q 130 50 260 28" stroke="#36B37E" stroke-width="2" stroke-dasharray="3 3" fill="none" />
          <!-- Child's Growth Track -->
          <path d="M 20 76 L 80 58 L 160 42 L 260 26" stroke="#18181B" stroke-width="2.5" fill="none" stroke-linecap="round" />
          <!-- Data Points -->
          <circle cx="20" cy="76" r="3.5" fill="#EE6748" stroke="#18181B" stroke-width="1.5" />
          <circle cx="80" cy="58" r="3.5" fill="#EE6748" stroke="#18181B" stroke-width="1.5" />
          <circle cx="160" cy="42" r="3.5" fill="#EE6748" stroke="#18181B" stroke-width="1.5" />
          <circle cx="260" cy="26" r="5" fill="#4AAEE8" stroke="#18181B" stroke-width="2" />
          <text x="245" y="18" font-size="9" font-weight="900" fill="#18181B">74 cm</text>
        </svg>
      `;
    }
  }

  // Pillar 4: Referral Hospital Selector
  function updateHospitalDetails() {
    const select = document.getElementById('hospital-select-dropdown');
    if (!select) return;

    const selectedId = select.value;
    const hosp = HOSPITALS_INFO.find(h => h.id === selectedId) || HOSPITALS_INFO[0];
    const isKh = currentLanguage === 'kh';

    const addrEl = document.getElementById('selected-hospital-address');
    const phoneEl = document.getElementById('selected-hospital-phone');
    const statusEl = document.getElementById('selected-hospital-status');

    if (addrEl) addrEl.textContent = isKh ? `📍 ${hosp.addressKh}` : `📍 ${hosp.addressEn}`;
    if (phoneEl) phoneEl.textContent = `📞 ${hosp.phone}`;
    if (statusEl) statusEl.textContent = isKh ? `ℹ️ ${hosp.statusKh}` : `ℹ️ ${hosp.statusEn}`;
  }

  // ==========================================
  // 7. PLAYGROUND: VACCINE CALCULATOR
  // ==========================================
  function runVaccineCalculator() {
    const input = document.getElementById('calc-birth-input');
    const resultsContainer = document.getElementById('calc-results-list');
    const ageDisplay = document.getElementById('calc-child-age-display');
    if (!input || !resultsContainer) return;

    const birthDateStr = input.value;
    if (!birthDateStr) return;

    const birthDate = new Date(birthDateStr);
    const today = new Date();
    const diffTime = today.getTime() - birthDate.getTime();
    const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    const ageMonths = diffDays / 30.44;

    const isKh = currentLanguage === 'kh';

    // Format child age
    let ageString = '';
    if (diffDays < 30) {
      ageString = isKh ? `${diffDays} ថ្ងៃ` : `${diffDays} days old`;
    } else if (ageMonths < 12) {
      const m = Math.floor(ageMonths);
      const d = Math.floor(diffDays % 30.44);
      ageString = isKh ? `${m} ខែ ${d} ថ្ងៃ` : `${m} months, ${d} days old`;
    } else {
      const y = Math.floor(ageMonths / 12);
      const m = Math.floor(ageMonths % 12);
      ageString = isKh ? `${y} ឆ្នាំ ${m} ខែ` : `${y} years, ${m} months old`;
    }

    if (ageDisplay) {
      ageDisplay.innerHTML = `<strong>${isKh ? 'អាយុកូនបច្ចុប្បន្ន៖' : 'Child Current Age:'}</strong> <span class="neo-badge" style="background:#FABE2C;">${ageString}</span>`;
    }

    // Find upcoming vaccines (offsetDays > diffDays or nearest doses)
    let upcoming = CAMBODIA_VACCINES.filter(v => v.recommendedDays >= diffDays);
    if (upcoming.length < 3) {
      upcoming = CAMBODIA_VACCINES.slice(-3);
    } else {
      upcoming = upcoming.slice(0, 3);
    }

    let listHtml = '';
    upcoming.forEach(vac => {
      const daysUntil = Math.max(0, vac.recommendedDays - diffDays);
      const countdownTag = daysUntil === 0
        ? `<span class="neo-badge" style="background:#FDF0ED; color:#EE6748;">${isKh ? 'ត្រូវចាក់ថ្ងៃនេះ!' : 'Due Today!'}</span>`
        : `<span class="neo-badge" style="background:#FEF3D6; color:#8C5300;">${isKh ? `នៅសល់ ${daysUntil} ថ្ងៃ` : `In ${daysUntil} days`}</span>`;

      listHtml += `
        <div class="calc-result-item">
          <div>
            <div class="item-title">${isKh ? vac.nameKh : vac.nameEn}</div>
            <div class="item-desc">${isKh ? vac.recommendedAgeLabelKh : vac.recommendedAgeLabelEn} • 🏥 ${isKh ? vac.defaultHospitalKh : vac.defaultHospital}</div>
          </div>
          <div>${countdownTag}</div>
        </div>
      `;
    });

    resultsContainer.innerHTML = listHtml;
  }

  function setPresetDate(type) {
    const input = document.getElementById('calc-birth-input');
    if (!input) return;

    const now = new Date();
    if (type === 'newborn') {
      now.setDate(now.getDate() - 3); // 3 days ago
    } else if (type === '2m') {
      now.setDate(now.getDate() - 60); // 2 months ago
    } else if (type === '6m') {
      now.setDate(now.getDate() - 180); // 6 months ago
    } else if (type === '1y') {
      now.setFullYear(now.getFullYear() - 1); // 1 year ago
    }

    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    input.value = `${yyyy}-${mm}-${dd}`;

    runVaccineCalculator();
  }

  // ==========================================
  // 8. PLAYGROUND: BIRTHDAY CELEBRATION
  // ==========================================
  function launchConfettiBurst(originX = 0.5, originY = 0.6) {
    // Canvas Confetti implementation using canvas particle animation
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    const colors = ['#FABE2C', '#EE6748', '#36B37E', '#4AAEE8', '#FAF7EE', '#18181B'];
    const particles = [];
    const particleCount = 140;

    const startX = window.innerWidth * originX * dpr;
    const startY = window.innerHeight * originY * dpr;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 9 + 4) * dpr;
      particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 6 + 2) * dpr,
        size: (Math.random() * 8 + 4) * dpr,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.22 * dpr,
        drag: 0.96,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.008
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.rotation += p.rotationSpeed;
        p.alpha -= p.decay;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.3);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(animate);
      } else {
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    }

    animate();
  }

  function openBirthdayModal() {
    const modal = document.getElementById('birthday-modal');
    if (modal) {
      modal.classList.add('open');
      launchConfettiBurst(0.5, 0.5);
      setTimeout(() => launchConfettiBurst(0.3, 0.4), 250);
      setTimeout(() => launchConfettiBurst(0.7, 0.4), 450);
    }
  }

  function closeBirthdayModal() {
    const modal = document.getElementById('birthday-modal');
    if (modal) modal.classList.remove('open');
  }

  // ==========================================
  // 9. MODALS: WAITLIST & FULL BOOKLET
  // ==========================================
  function openWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    if (modal) modal.classList.add('open');
  }

  function closeWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    if (modal) modal.classList.remove('open');
  }

  function openBookletModal() {
    const modal = document.getElementById('booklet-modal');
    if (modal) {
      modal.classList.add('open');
      renderBookletTable();
    }
  }

  function closeBookletModal() {
    const modal = document.getElementById('booklet-modal');
    if (modal) modal.classList.remove('open');
  }

  // ==========================================
  // 10. VECTOR MASCOT SVG GENERATORS
  // ==========================================
  function getOliverAvatarSvg() {
    return `
      <svg viewBox="0 0 64 64" fill="none" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#FABE2C" stroke="#18181B" stroke-width="2.5" />
        <circle cx="32" cy="35" r="17" fill="#FFF3E3" stroke="#18181B" stroke-width="2" />
        <path d="M17 33 C16 21, 24 15, 32 15 C40 15, 48 21, 47 33 C43 27, 38 28, 32 29 C26 28, 21 27, 17 33 Z" fill="#262626" stroke="#18181B" stroke-width="1.8" />
        <path d="M17 26 C22 22, 42 22, 47 26 L47 31 C42 27, 22 27, 17 31 Z" fill="#18181B" stroke="#18181B" stroke-width="1.8" />
        <path d="M18 27 C23 24, 41 24, 46 27" stroke="#FABE2C" stroke-width="1.2" stroke-linecap="round" />
        <circle cx="23" cy="39" r="3" fill="#FFAAA6" />
        <circle cx="41" cy="39" r="3" fill="#FFAAA6" />
        <path d="M23 35 Q26 31 29 35" stroke="#18181B" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M35 35 Q38 31 41 35" stroke="#18181B" stroke-width="2" stroke-linecap="round" fill="none" />
        <circle cx="32" cy="37" r="1.2" fill="#FABE2C" />
        <path d="M29 41 Q32 45 35 41" stroke="#18181B" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </svg>
    `;
  }

  function getLunaAvatarSvg() {
    return `
      <svg viewBox="0 0 64 64" fill="none" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#36B37E" stroke="#18181B" stroke-width="2.5" />
        <circle cx="14" cy="24" r="8" fill="#262626" stroke="#18181B" stroke-width="1.8" />
        <circle cx="16" cy="24" r="3.5" fill="#EE6748" />
        <circle cx="50" cy="24" r="8" fill="#262626" stroke="#18181B" stroke-width="1.8" />
        <circle cx="48" cy="24" r="3.5" fill="#EE6748" />
        <circle cx="32" cy="36" r="17" fill="#FFF3E3" stroke="#18181B" stroke-width="2" />
        <path d="M17 34 C16 22, 24 16, 32 16 C40 16, 48 22, 47 34 C43 28, 38 29, 32 30 C26 29, 21 28, 17 34 Z" fill="#262626" stroke="#18181B" stroke-width="1.8" />
        <path d="M17 26 C22 22, 42 22, 47 26 L47 30 C42 26, 22 26, 17 30 Z" fill="#36B37E" stroke="#18181B" stroke-width="1.8" />
        <circle cx="23" cy="40" r="3" fill="#FFAAA6" />
        <circle cx="41" cy="40" r="3" fill="#FFAAA6" />
        <ellipse cx="26" cy="35" rx="3" ry="3.5" fill="#18181B" />
        <ellipse cx="38" cy="35" rx="3" ry="3.5" fill="#18181B" />
        <circle cx="27" cy="34" r="1.2" fill="#FFFFFF" />
        <circle cx="39" cy="34" r="1.2" fill="#FFFFFF" />
        <circle cx="32" cy="37" r="1.2" fill="#FABE2C" />
        <path d="M29 42 Q32 46 35 42" stroke="#18181B" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </svg>
    `;
  }

  // ==========================================
  // 11. INITIALIZATION & EVENT LISTENERS
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Dropdown Toggle
    const langBtn = document.getElementById('lang-dropdown-btn');
    const langMenu = document.getElementById('lang-menu');
    const chevron = document.getElementById('lang-chevron');

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langMenu.classList.toggle('open');
        if (chevron) chevron.classList.toggle('open', isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!langMenu.contains(e.target) && e.target !== langBtn) {
          langMenu.classList.remove('open');
          if (chevron) chevron.classList.remove('open', false);
        }
      });
    }

    // Language options
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
        if (langMenu) langMenu.classList.remove('open');
        if (chevron) chevron.classList.remove('open', false);
      });
    });

    // 2. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    if (hamburgerBtn && mobileDrawer) {
      hamburgerBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('open');
      });
    }

    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    }

    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
      });
    });

    // 3. Hero Phone Child Switcher
    const btnDara = document.getElementById('tab-child-dara');
    const btnBopha = document.getElementById('tab-child-bopha');

    if (btnDara) {
      btnDara.addEventListener('click', () => {
        activePhoneChild = 'dara';
        updatePhoneMockup();
      });
    }

    if (btnBopha) {
      btnBopha.addEventListener('click', () => {
        activePhoneChild = 'bopha';
        updatePhoneMockup();
      });
    }

    // 4. Yellow Booklet Tabs
    const tabInf = document.getElementById('booklet-tab-infancy');
    const tabTod = document.getElementById('booklet-tab-toddler');

    if (tabInf) {
      tabInf.addEventListener('click', () => {
        activeBookletTab = 'infancy';
        renderBookletTable();
      });
    }

    if (tabTod) {
      tabTod.addEventListener('click', () => {
        activeBookletTab = 'toddler';
        renderBookletTable();
      });
    }

    // Print A4 Booklet
    const printBtns = document.querySelectorAll('.btn-trigger-print');
    printBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.print();
      });
    });

    // Full Booklet Modal
    const openBookletBtns = document.querySelectorAll('.btn-open-booklet-modal');
    openBookletBtns.forEach(btn => {
      btn.addEventListener('click', openBookletModal);
    });

    const closeBookletModalBtn = document.getElementById('btn-close-booklet-modal');
    if (closeBookletModalBtn) {
      closeBookletModalBtn.addEventListener('click', closeBookletModal);
    }

    // 5. Feature Pillar 1 Timeline Chips
    document.querySelectorAll('.dose-chip').forEach((chip, index) => {
      chip.addEventListener('click', () => {
        currentDoseIndex = index;
        updatePillar1Display();
      });
    });

    // Feature Pillar 2 Reminder Simulator
    initReminderSimulator();

    // Feature Pillar 3 Growth Toggles
    const tabWeight = document.getElementById('growth-tab-weight');
    const tabHeight = document.getElementById('growth-tab-height');
    if (tabWeight) {
      tabWeight.addEventListener('click', () => updateGrowthMetric('weight'));
    }
    if (tabHeight) {
      tabHeight.addEventListener('click', () => updateGrowthMetric('height'));
    }

    // Feature Pillar 4 Hospital Selector
    const hospSelect = document.getElementById('hospital-select-dropdown');
    if (hospSelect) {
      hospSelect.addEventListener('change', updateHospitalDetails);
    }

    // 6. Playground Calculator
    const calcInput = document.getElementById('calc-birth-input');
    if (calcInput) {
      calcInput.addEventListener('change', runVaccineCalculator);
      calcInput.addEventListener('input', runVaccineCalculator);
    }

    // Calculator Presets
    document.querySelectorAll('.preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        setPresetDate(preset);
      });
    });

    // 7. Birthday Celebration Triggers
    const birthdayBtns = document.querySelectorAll('.btn-trigger-birthday');
    birthdayBtns.forEach(btn => {
      btn.addEventListener('click', openBirthdayModal);
    });

    const cakeInTeaser = document.getElementById('birthday-teaser-cake');
    if (cakeInTeaser) {
      cakeInTeaser.addEventListener('click', openBirthdayModal);
    }

    const cakeInModal = document.getElementById('modal-birthday-cake');
    if (cakeInModal) {
      cakeInModal.addEventListener('click', () => {
        launchConfettiBurst(0.5, 0.5);
      });
    }

    const closeBdayBtn = document.getElementById('btn-close-birthday-modal');
    if (closeBdayBtn) {
      closeBdayBtn.addEventListener('click', closeBirthdayModal);
    }

    const celebrateDoneBtn = document.getElementById('btn-celebrate-done');
    if (celebrateDoneBtn) {
      celebrateDoneBtn.addEventListener('click', () => {
        launchConfettiBurst(0.5, 0.5);
        setTimeout(closeBirthdayModal, 800);
      });
    }

    // 8. Waitlist Modal
    const waitlistTriggers = document.querySelectorAll('.btn-trigger-waitlist');
    waitlistTriggers.forEach(btn => {
      btn.addEventListener('click', openWaitlistModal);
    });

    const closeWaitlistBtn = document.getElementById('btn-close-waitlist-modal');
    if (closeWaitlistBtn) {
      closeWaitlistBtn.addEventListener('click', closeWaitlistModal);
    }

    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
      waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successEl = document.getElementById('waitlist-success-msg');
        if (successEl) {
          successEl.style.display = 'block';
          launchConfettiBurst(0.5, 0.6);
          waitlistForm.reset();
          setTimeout(() => {
            closeWaitlistModal();
            successEl.style.display = 'none';
          }, 2400);
        }
      });
    }

    // Modal Background Clicks to Dismiss
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
        }
      });
    });

    // Sticky Header Scroll Shadow
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 10);
      }
    });

    // Initial Setup
    setLanguage(currentLanguage);
    updateGrowthMetric('weight');
    setPresetDate('6m'); // Default 6 months for calculator
  });
})();
