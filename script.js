/**
 * KOMA Homepage Redesign - Interactive Engine & Bilingual System
 * Alignment with https://app.komakh.com/
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DATA: Bilingual Translations Dictionary
  // ==========================================
  const translations = {
    en: {
      // Navigation Matching Sample
      navHome: 'Home',
      navAbout: 'About',
      navFeatures: 'Features',
      navDemo: 'Demo',
      btnContactUs: 'Contact Us',

      // Hero Section Matching Sample
      heroTagline: 'Digital Vaccination Reminder',
      heroTitle: 'Healthier future for your child',
      heroTitle1: 'Healthier future for your child',
      heroTitle2: '',
      heroDescSample: 'KOMA is a bilingual child health record for Cambodian parents includes the MOH national vaccination schedule per child, growth measurements according to WHO curves, and Telegram reminders before each vaccination due date.',
      btnGetAppHero: 'Get App',

      // Phone Mockup Matching Sample
      phoneSecureBadge: 'Secure & Private',
      phoneWelcomeSign: 'WELCOME',
      phoneSub: 'CHILD HEALTH & VACCINE TRACKER',
      phoneSignInTelegram: 'Sign in with your Telegram',
      phoneBtnTelegram: 'Log in with Telegram',
      phoneOr: 'OR',
      phoneTryDemo: 'Try out our app demo',
      phoneBtnDemo: '✨ KOMA Demo',

      // Startup Navigation & Hero
      navHowItWorks: 'How it works',
      navSecurity: 'Trust & Security',
      btnGetApp: 'Get App',
      btnWatchVideo: 'Watch demo video',
      heroBadgeText: '🇰🇭 Cambodia MOH Protocol • National Immunization Program',
      heroHeadline1: 'Next-Generation Child Health & Immunization Companion',
      heroSubhead: 'The modern, indestructible digital companion for Cambodian families and pediatric clinics. Protect your child\'s immunization history against paper damage, automate booster alerts, and track WHO growth curves with ease.',
      btnRequestInvite: 'Request Mobile App Invite',
      btnExploreDemo: 'Explore Live Web App',
      btnRequestMobile: 'Request Mobile App Invite',
      btnTryWebDemo: 'Explore Web App Demo ↗',

      // Startup About Us
      aboutKicker: 'OUR MISSION',
      aboutTitle: 'About Us',
      
      // 1. The Problem We Solve
      problemSolveTag: 'THE PROBLEM WE SOLVE',
      problemSolveTitle: 'The Problem We Solve',
      problemSolveText: "Many parents face challenges in keeping track of their children's healthcare needs. Some may forget important vaccination dates, lose paper-based health records, or lack access to reliable information about child health, nutrition, and development. These challenges can make it difficult for parents to stay informed and ensure their children receive proper care. KOMA aims to address these problems through a simple and accessible digital solution.",

      // 2. Our Solution
      ourSolutionTag: 'OUR SOLUTION',
      ourSolutionTitle: 'Our Solution',
      ourSolutionText: "KOMA provides a range of digital tools to help parents take better care of their children's health. Parents can keep vaccination records organized, track upcoming vaccines, and receive smart reminders so they don't miss important vaccination dates. KOMA also offers growth tracking, age-based nutrition recommendations, and useful child healthcare information to help parents make informed decisions throughout their children's growth journey.",

      // 3. Our Mission and Our Vision
      missionTag: 'OUR MISSION',
      missionTitle: 'Our Mission',
      missionText: "Our mission is to make child healthcare easier, more accessible, and more reliable for every Cambodian family through technology. We aim to help parents manage their children's health records, stay on track with vaccinations, and make informed healthcare decisions.",
      visionTag: 'OUR VISION',
      visionTitle: 'Our Vision',
      visionText: "We envision a Cambodia where every parent has access to reliable health information and every child has the opportunity to grow up healthy. We hope to contribute to a more connected and digitally supported child healthcare system across the country.",

      // 4. Who We Serve
      whoServeTag: 'WHO WE SERVE',
      whoServeTitle: 'Who We Serve',
      whoServeText: "KOMA is designed to support parents, healthcare workers, and healthcare organizations across Cambodia. It helps parents manage their children's health records, keep track of vaccination schedules, and stay informed about important healthcare needs. It also supports healthcare workers in guiding parents and improving health awareness, while helping healthcare organizations strengthen communication and promote better child healthcare services.",

      // 5. Meet Our Team
      teamTitle: 'Meet Our Team',
      teamDesc: "We are a team of passionate students who believe technology can make a positive difference in people's lives. With a shared interest in innovation and child healthcare, we created KOMA to address real challenges faced by Cambodian families. Our goal is to continue improving our platform and making child healthcare easier and more accessible through technology.",
      
      // Startup Features
      featuresKicker: 'PLATFORM CAPABILITIES',
      featuresMainTitle: 'Everything Parents & Pediatricians Need',
      pillarsDesc: 'Engineered around the real, everyday immunization journey of Cambodian families.',
      pillar1Title: 'National Immunization Schedule (NIP)',
      pillar1Desc: 'Pre-loaded with Cambodia\'s complete protocol approved by the Ministry of Health. Covers BCG, HepB, Pentavalent (DTP-HepB-Hib), OPV, IPV, PCV, and Measles-Rubella from Birth through 18 months.',
      pillar2Title: 'Smart Countdown & Due Date Alerts',
      pillar2Desc: 'Automated reminder engines calculated precisely from your child\'s birth date. Proactive alerts notify parents via Telegram and SMS 7 days, 3 days, and 24 hours prior to scheduled clinic dates.',
      pillar3Title: 'WHO Standard Growth Monitoring',
      pillar3Desc: 'Track height and weight curves mapped against official World Health Organization percentile standards (P3 to P97). Spot nutritional deficits early and monitor healthy infant development.',
      btnOpenFullBooklet: '📖 View Full MOH Schedule Modal',
      btnPrintPdf: '🖨️ Export Official PDF Booklet',

      // Startup How It Works
      howItWorksKicker: 'SIMPLE WORKFLOW',
      howItWorksTitle: 'How KOMA Works in 3 Easy Steps',
      howItWorksSubtitle: 'Get your child\'s official Ministry of Health digital health record active in under two minutes.',

      // Startup Security
      securityKicker: 'SECURITY & RELIABILITY',
      securityTitle: 'Bank-Grade Privacy & Clinical Reliability',
      securitySubtitle: 'Engineered to perform in rural provincial centers while strictly safeguarding sensitive pediatric data.',

      // Navigation
      navBooklet: 'MOH Booklet',
      navGrowth: 'Growth Charts',
      navHospitals: 'Hospital Guide',
      navPlayground: 'Security & Trust',
      tryDemoBtn: 'Try Live Demo',
      launchApp: 'Launch Demo',
      tryDemoBtn: 'Try Live Demo',
      launchApp: 'Launch Demo',
      drawerLangLabel: 'Language / ភាសា',

      // Hero Section
      heroEyebrow: '🇰🇭 100% Cambodian NIP Digital Record • Official Healthcare Replica',
      heroHeadline1: 'Care today',
      heroHeadline2: 'Grow tomorrow',
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
      bookletAnchorTag: 'Digitalize MOH Booklet',
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
      tableScrollHint: 'Swipe horizontally to view full MOH record',

      // Core Features
      featuresMainTitle: 'KOMA FEATURES',
      featuresTitle: 'KOMA Features',
      featuresDesc: "KOMA offers simple tools to help parents take care of their children's health. From vaccination reminders to growth tracking and food tips, KOMA helps parents stay informed at every stage of their child's growth.",

      feature1Badge: 'Vaccination & Schedule',
      feature1Title: '1. Vaccination Tracking & Reminders',
      feature1Lead: "Keep your child's vaccination records organized and never miss an important vaccination date.",
      feature1Bullet1: "View vaccination schedules based on your child's age.",
      feature1Bullet2: "Track completed, upcoming, and due vaccines.",
      feature1Bullet3: "Get reminders for upcoming vaccinations.",
      feature1Bullet4: "Keep all vaccination records in one place.",

      feature2Badge: 'Growth & Development',
      feature2Title: '2. Growth Tracking',
      feature2Lead: "Follow your child's growth and see how they develop over time.",
      feature2Bullet1: "Record your child's height and weight.",
      feature2Bullet2: "Check growth progress over time.",
      feature2Bullet3: "Keep track of important growth information.",

      feature3Badge: 'Nutrition & Food Guide',
      feature3Title: '3. Nutrition Guidance',
      feature3Lead: "Learn more about your child's food needs at different ages.",
      feature3Bullet1: "Explore food tips based on your child's age.",
      feature3Bullet2: "Learn about suitable foods for each growth stage.",
      feature3Bullet3: "Get helpful information about healthy eating.",

      featuresCtaTitle: "Take Care of Your Child's Health with KOMA",
      featuresCtaDesc: "Make your child's healthcare easier with KOMA. Keep health information organized and stay on track with important care needs.",
      featuresCtaBtn: "Get Started with KOMA Today!",

      // Demo Section
      demoKicker: 'LIVE DEMO',
      demoTitle: 'Demo',
      demoDesc: "Watch how KOMA makes child healthcare simple, organized, and stress-free for parents. Explore schedules, growth tracking, and health tips in real-time.",
      demoBadge1: 'Vaccine Tracking & Reminders',
      demoBadge2: 'WHO Growth Curves',
      demoBadge3: 'Age-Based Nutrition Advice',
      demoTryBtn: 'Try Demo',
      demoTrySubtitle: 'Instant access in your browser • No install required',

      pillarsTag: 'KOMA FEATURES',
      pillarsTitle: 'KOMA Features',
      pillarsDesc: "KOMA offers simple tools to help parents take care of their children's health. From vaccination reminders to growth tracking and food tips, KOMA helps parents stay informed at every stage of their child's growth.",

      pillar1Title: 'National Immunization Schedule',
      pillar1Desc: 'Pre-loaded with Cambodia’s complete NIP protocol aligned with the Ministry of Health.',

      pillar2Title: 'Smart Reminders & Due Dates',
      pillar2Desc: 'Automated countdowns calculated from your baby’s birth date so booster shots are never forgotten.',
      reminderSimTitle: 'Pentavalent 2 (DTP-HepB-Hib)',
      reminderSimDays: '3 days left',
      reminderSimMarkBtn: 'Mark as Given ✅',
      reminderSimDone: 'Completed on Oct 15, 2026 at Kantha Bopha Hospital! 🎉',

      pillar3Title: 'WHO Growth Monitoring',
      pillar3Desc: 'Track height & weight plotted against official World Health Organization percentiles (P3 to P97).',
      tabWeight: 'Weight',
      tabHeight: 'Height',

      pillar4Title: 'Made for Cambodia & Offline-First',
      pillar4Desc: 'Quick hospital selection, complete Khmer font support, and 100% offline local storage.',
      hospSelectPrompt: 'Select Referral Hospital:',

      // Playground Section
      playgroundTag: 'INTERACTIVE PLAYGROUND',
      playgroundTitle: 'Try KOMA Features Live',
      playgroundDesc: 'Experience the tools designed to make child health tracking joyful and effortless.',

      waitLabel: 'Wait for it...',
      mascotClickHint: 'Try clicking on them',
      mascotActionSparkle: '✨ Sparkling Eyes',
      mascotActionHeart: '❤️ Heart Hands',
      mascotActionHug: '🤗 Mascot Hug',
      mascotActionScared: '💉 Vaccine Shot!',

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
      footerColCompany: 'Company',
      footerColNav: 'Navigation',
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
      // Navigation Matching Sample
      navHome: 'ទំព័រដើម',
      navAbout: 'អំពីយើង',
      navFeatures: 'មុខងារ',
      navDemo: 'សាកល្បង',
      btnContactUs: 'ទាក់ទងយើង',

      // Hero Section Matching Sample
      heroTagline: 'ការរំលឹកកាលវិភាគចាក់ថ្នាំឌីជីថល',
      heroTitle: 'អនាគតកាន់តែមានសុខភាពល្អសម្រាប់កូនរបស់អ្នក',
      heroTitle1: 'អនាគតកាន់តែមានសុខភាពល្អសម្រាប់កូនរបស់អ្នក',
      heroTitle2: '',
      heroDescSample: 'KOMA គឺជាកូនសៀវភៅតាមដានសុខភាពកុមារពីរភាសាសម្រាប់មាតាបិតាកម្ពុជា រួមបញ្ចូលទាំងកាលវិភាគចាក់ថ្នាំបង្ការជាតិរបស់ក្រសួងសុខាភិបាល ការវាស់វែងការលូតលាស់តាមខ្សែកោង WHO និងការរំលឹកតាម Telegram មុនកាលបរិច្ឆេទចាក់ថ្នាំនីមួយៗ។',
      btnGetAppHero: 'ទាញយក App',

      // Phone Mockup Matching Sample
      phoneSecureBadge: 'សុវត្ថិភាព & ឯកជន',
      phoneWelcomeSign: 'សូមស្វាគមន៍',
      phoneSub: 'កម្មវិធីតាមដានសុខភាព និងថ្នាំបង្ការកុមារ',
      phoneSignInTelegram: 'ចូលគណនីតាម Telegram របស់អ្នក',
      phoneBtnTelegram: 'ចូលដោយប្រើ Telegram',
      phoneOr: 'ឬ',
      phoneTryDemo: 'សាកល្បង Demo របស់យើង',
      phoneBtnDemo: '✨ KOMA Demo',

      // Startup Navigation & Hero
      navHowItWorks: 'របៀបដំណើរការ',
      navSecurity: 'ទំនុកចិត្ត & សុវត្ថិភាព',
      btnGetApp: 'ទាញយក App',
      btnWatchVideo: 'មើលវីដេអូសាកល្បង',
      heroBadgeText: '🇰🇭 ស្របតាមកាលវិភាគជាតិ NIP • ក្រសួងសុខាភិបាលកម្ពុជា',
      heroHeadline1: 'កូនសៀវភៅសុខភាព និងចាក់ថ្នាំបង្ការឌីជីថលសម្រាប់កុមារកម្ពុជា',
      heroSubhead: 'កូនសៀវភៅតាមដានសុខភាពនិងការចាក់ថ្នាំបង្ការកុមារឌីជីថលទំនើប សម្រាប់ក្រុមគ្រួសារកម្ពុជា និងគ្លីនិកកុមារ។ ការពារការបាត់បង់ទិន្នន័យ ទទួលបានការរំលឹកកាលបរិច្ឆេទឆ្លាតវៃ និងតាមដានការលូតលាស់ស្តង់ដារ WHO។',
      btnRequestInvite: 'ស្នើសុំការអញ្ជើញប្រើប្រាស់ App',
      btnExploreDemo: 'សាកល្បង Live Web App',
      btnRequestMobile: 'ស្នើសុំការអញ្ជើញប្រើប្រាស់ App',
      btnTryWebDemo: 'សាកល្បង Web App Demo ↗',

      // Startup About Us
      aboutKicker: 'បេសកកម្មរបស់យើង',
      aboutTitle: 'អំពីយើង',
      
      // 1. The Problem We Solve
      problemSolveTag: 'បញ្ហាដែលយើងដោះស្រាយ',
      problemSolveTitle: 'បញ្ហាដែលយើងដោះស្រាយ',
      problemSolveText: 'មាតាបិតាជាច្រើនតែងជួបប្រទះការលំបាកក្នុងការតាមដានតម្រូវការថែទាំសុខភាពរបស់កូនៗ។ អ្នកខ្លះអាចភ្លេចថ្ងៃចាក់ថ្នាំបង្ការសំខាន់ៗ បាត់បង់កូនសៀវភៅសុខភាពក្រដាស ឬខ្វះព័ត៌មានដែលអាចទុកចិត្តបានអំពីសុខភាព អាហារូបត្ថម្ភ និងការលូតលាស់របស់កុមារ។ បញ្ហាប្រឈមទាំងនេះធ្វើឱ្យមាតាបិតាពិបាកទទួលបានព័ត៌មានទាន់ពេល និងធានាថាកូនៗទទួលបានការថែទាំត្រឹមត្រូវ។ KOMA មានគោលបំណងដោះស្រាយបញ្ហាទាំងនេះតាមរយៈដំណោះស្រាយឌីជីថលដ៏សាមញ្ញ និងងាយស្រួលប្រើប្រាស់។',

      // 2. Our Solution
      ourSolutionTag: 'ដំណោះស្រាយរបស់យើង',
      ourSolutionTitle: 'ដំណោះស្រាយរបស់យើង',
      ourSolutionText: 'KOMA ផ្តល់នូវឧបករណ៍ឌីជីថលជាច្រើនដើម្បីជួយមាតាបិតាថែទាំសុខភាពកូនៗឱ្យកាន់តែប្រសើរ។ មាតាបិតាអាចរៀបចំកំណត់ត្រាចាក់ថ្នាំបង្ការឱ្យមានរបៀបរៀបរយ តាមដានវ៉ាក់សាំងបន្ទាប់ និងទទួលបានការរំលឹកឆ្លាតវៃដើម្បីកុំឱ្យខកខានកាលបរិច្ឆេទចាក់ថ្នាំសំខាន់ៗ។ លើសពីនេះ KOMA ក៏ផ្តល់នូវការតាមដានការលូតលាស់ ការណែនាំអាហារូបត្ថម្ភតាមអាយុ និងព័ត៌មានសុខភាពកុមារមានប្រយោជន៍ ដើម្បីជួយមាតាបិតាធ្វើការសម្រេចចិត្តបានត្រឹមត្រូវពេញមួយដំណើរនៃការលូតលាស់របស់កូន។',

      // 3. Our Mission and Our Vision
      missionTag: 'បេសកកម្មរបស់យើង',
      missionTitle: 'បេសកកម្មរបស់យើង',
      missionText: 'បេសកកម្មរបស់យើងគឺធ្វើឱ្យការថែទាំសុខភាពកុមារកាន់តែងាយស្រួល អាចចូលប្រើបានកាន់តែទូលំទូលាយ និងអាចទុកចិត្តបានសម្រាប់គ្រប់ក្រុមគ្រួសារកម្ពុជា តាមរយៈបច្ចេកវិទ្យា។ យើងមានគោលបំណងជួយមាតាបិតាគ្រប់គ្រងកំណត់ត្រាសុខភាពរបស់កូនៗ តាមដានកាលវិភាគចាក់ថ្នាំបង្ការបានត្រឹមត្រូវ និងធ្វើការសម្រេចចិត្តប្រកបដោយទំនុកចិត្តលើការថែទាំសុខភាព។',
      visionTag: 'ចក្ខុវិស័យរបស់យើង',
      visionTitle: 'ចក្ខុវិស័យរបស់យើង',
      visionText: 'យើងស្រមៃឃើញប្រទេសកម្ពុជាដែលមាតាបិតាគ្រប់រូបទទួលបានព័ត៌មានសុខភាពដែលអាចទុកចិត្តបាន ហើយកុមារគ្រប់រូបមានឱកាសធំធាត់ឡើងប្រកបដោយសុខភាពល្អ។ យើងសង្ឃឹមថានឹងរួមចំណែកដល់ប្រព័ន្ធថែទាំសុខភាពកុមារដែលតភ្ជាប់គ្នាកាន់តែជិតស្និទ្ធ និងគាំទ្រដោយប្រព័ន្ធឌីជីថលនៅទូទាំងប្រទេស។',

      // 4. Who We Serve
      whoServeTag: 'អ្នកដែលយើងបម្រើ',
      whoServeTitle: 'អ្នកដែលយើងបម្រើ',
      whoServeText: 'KOMA ត្រូវបានរចនាឡើងដើម្បីគាំទ្រដល់មាតាបិតា បុគ្គលិកសុខាភិបាល និងស្ថាប័នសុខាភិបាលទូទាំងប្រទេសកម្ពុជា។ វាជួយមាតាបិតាក្នុងការគ្រប់គ្រងកំណត់ត្រាសុខភាពរបស់កូនៗ តាមដានកាលវិភាគចាក់ថ្នាំបង្ការ និងទទួលបានព័ត៌មានអំពីតម្រូវការសុខភាពសំខាន់ៗ។ លើសពីនេះ វាក៏ជួយបុគ្គលិកសុខាភិបាលក្នុងការណែនាំមាតាបិតា និងលើកកម្ពស់ការយល់ដឹងអំពីសុខភាព ព្រមទាំងជួយស្ថាប័នសុខាភិបាលពង្រឹងទំនាក់ទំនង និងលើកកម្ពស់សេវាថែទាំសុខភាពកុមារឱ្យកាន់តែប្រសើរឡើង។',

      // 5. Meet Our Team
      teamTitle: 'ជួបជាមួយក្រុមការងាររបស់យើង',
      teamDesc: 'យើងជាក្រុមនិស្សិតប្រកបដោយឆន្ទៈ ដែលជឿជាក់ថាបច្ចេកវិទ្យាអាចបង្កើតការផ្លាស់ប្តូរជាវិជ្ជមានដល់ជីវិតមនុស្ស។ ជាមួយនឹងចំណាប់អារម្មណ៍រួមគ្នាក្នុងការច្នៃប្រឌិត និងការថែទាំសុខភាពកុមារ យើងបានបង្កើត KOMA ឡើងដើម្បីដោះស្រាយបញ្ហាប្រឈមជាក់ស្តែងដែលគ្រួសារកម្ពុជាកំពុងជួបប្រទះ។ គោលដៅរបស់យើងគឺបន្តអភិវឌ្ឍប្រព័ន្ធរបស់យើង និងធ្វើឱ្យការថែទាំសុខភាពកុមារកាន់តែងាយស្រួលតាមរយៈបច្ចេកវិទ្យា។',
      
      // Startup Features
      featuresKicker: 'សមត្ថភាពនៃប្រព័ន្ធ',
      featuresMainTitle: 'អ្វីៗគ្រប់យ៉ាងដែលមាតាបិតា និងគ្រូពេទ្យកុមារត្រូវការ',
      pillarsDesc: 'រចនាឡើងស្របតាមដំណើរជាក់ស្តែងនៃការថែទាំសុខភាពកុមារកម្ពុជា។',
      pillar1Title: 'កាលវិភាគចាក់ថ្នាំបង្ការជាតិ (NIP)',
      pillar1Desc: 'បានកំណត់ស្របតាមស្តង់ដារផ្លូវការរបស់ក្រសួងសុខាភិបាលកម្ពុជា ចាប់ពីពេលទើបកើតរហូតដល់អាយុ ១៨ ខែ រួមមាន BCG, HepB, Pentavalent, OPV, IPV, PCV និងកញ្ជ្រឹល-ស្អូច។',
      pillar2Title: 'ការរំលឹកកាលបរិច្ឆេទឆ្លាតវៃតាម Telegram',
      pillar2Desc: 'គណនាដោយស្វ័យប្រវត្តិតាមថ្ងៃខែឆ្នាំកំណើតរបស់កូនលោកអ្នក។ ផ្ញើសាររំលឹកជាមុន ៧ថ្ងៃ ៣ថ្ងៃ និង ២៤ម៉ោងតាម Telegram និង SMS មុនថ្ងៃកំណត់ចាក់ថ្នាំ។',
      pillar3Title: 'ការតាមដានការលូតលាស់ស្តង់ដារ WHO',
      pillar3Desc: 'កត់ត្រានិងតាមដានការឡើងទម្ងន់និងកម្ពស់ធៀបនឹងស្តង់ដារអង្គការសុខភាពពិភពលោក (Percentiles P3 ដល់ P97) ដើម្បីដឹងទាន់ពេលពីស្ថានភាពអាហារូបត្ថម្ភ។',
      btnOpenFullBooklet: '📖 មើលកាលវិភាគ MOH ពេញលេញ',
      btnPrintPdf: '🖨️ បោះពុម្ពកូនសៀវភៅជា PDF',

      // Startup How It Works
      howItWorksKicker: 'ដំណើរការងាយស្រួល',
      howItWorksTitle: 'របៀបប្រើប្រាស់ KOMA ក្នុង ៣ ជំហាន',
      howItWorksSubtitle: 'បង្កើតកូនសៀវភៅសុខភាពឌីជីថលរបស់កូនអ្នកយ៉ាងឆាប់រហ័សក្នុងរយៈពេលមិនដល់ ២ នាទី។',

      // Startup Security
      securityKicker: 'សុវត្ថិភាព & ទំនុកចិត្តខ្ពស់',
      securityTitle: 'សុវត្ថិភាពទិន្នន័យកម្រិតស្តង់ដារ និងទំនុកចិត្តផ្នែកវេជ្ជសាស្ត្រ',
      securitySubtitle: 'រចនាឡើងដើម្បីដំណើរការបានល្អនៅមណ្ឌលសុខភាពជនបទ និងការពារទិន្នន័យសុខភាពកុមារយ៉ាងម៉ឺងម៉ាត់។',

      // Navigation
      navBooklet: 'សៀវភៅលឿង',
      navGrowth: 'តារាងលូតលាស់',
      navHospitals: 'មន្ទីរពេទ្យ',
      navPlayground: 'សុវត្ថិភាព & ទំនុកចិត្ត',
      tryDemoBtn: 'សាកល្បង Demo',
      launchApp: 'បើក Demo',
      drawerLangLabel: 'ភាសា / Language',

      // Hero Section
      heroEyebrow: '🇰🇭 កូនសៀវភៅលឿងសុខភាពកុមារឌីជីថលកម្ពុជា • ស្របតាមស្តង់ដារជាតិ',
      heroHeadline1: 'ថែទាំថ្ងៃនេះ',
      heroHeadline2: 'រីកចម្រើនថ្ងៃស្អែក',
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
      bookletAnchorTag: 'ឌីជីថលូបនីយកម្មសៀវភៅលឿង MOH',
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
      tableScrollHint: 'អូសទៅស្តាំដើម្បីមើលព័ត៌មានលម្អិត',

      // Core Features
      featuresMainTitle: 'មុខងាររបស់ KOMA',
      featuresTitle: 'មុខងាររបស់ KOMA',
      featuresDesc: 'KOMA ផ្តល់នូវឧបករណ៍ងាយស្រួលដើម្បីជួយឪពុកម្តាយក្នុងការថែទាំសុខភាពកូនៗ។ ចាប់ពីការរំលឹកការចាក់ថ្នាំបង្ការ រហូតដល់ការតាមដានការលូតលាស់ និងគន្លឹះអាហារូបត្ថម្ភ KOMA ជួយឪពុកម្តាយទទួលបានព័ត៌មានទាន់ហេតុការណ៍នៅគ្រប់ដំណាក់កាលនៃការលូតលាស់របស់កូន។',

      feature1Badge: 'ការចាក់ថ្នាំបង្ការ និងកាលវិភាគ',
      feature1Title: '១. ការតាមដានការចាក់ថ្នាំបង្ការ & ការរំលឹក',
      feature1Lead: 'រក្សាកំណត់ត្រាចាក់ថ្នាំបង្ការរបស់កូនអ្នកឱ្យមានរបៀបរៀបរយ និងមិនដែលខកខានកាលបរិច្ឆេទចាក់ថ្នាំសំខាន់ៗឡើយ។',
      feature1Bullet1: 'មើលកាលវិភាគចាក់ថ្នាំបង្ការផ្អែកលើអាយុកូនរបស់អ្នក។',
      feature1Bullet2: 'តាមដានថ្នាំបង្ការដែលបានចាក់រួច ជិតមកដល់ និងហួសកាលកំណត់។',
      feature1Bullet3: 'ទទួលបានការរំលឹកសម្រាប់ការចាក់ថ្នាំបង្ការដែលជិតមកដល់។',
      feature1Bullet4: 'រក្សាទុកកំណត់ត្រាចាក់ថ្នាំបង្ការទាំងអស់នៅកន្លែងតែមួយ។',

      feature2Badge: 'ការលូតលាស់ និងការអភិវឌ្ឍ',
      feature2Title: '២. ការតាមដានការលូតលាស់',
      feature2Lead: 'តាមដានការលូតលាស់របស់កូនអ្នក និងមើលពីការវិវត្តតាមពេលវេលា។',
      feature2Bullet1: 'កត់ត្រាកម្ពស់ និងទម្ងន់របស់កូនអ្នក។',
      feature2Bullet2: 'ពិនិត្យមើលការវិវត្តនៃការលូតលាស់តាមពេលវេលា។',
      feature2Bullet3: 'តាមដានព័ត៌មានសំខាន់ៗអំពីការលូតលាស់។',

      feature3Badge: 'អាហារូបត្ថម្ភ និងការណែនាំ',
      feature3Title: '៣. ការណែនាំអំពីអាហារូបត្ថម្ភ',
      feature3Lead: 'ស្វែងយល់បន្ថែមអំពីតម្រូវការអាហារូបត្ថម្ភរបស់កូនអ្នកតាមវ័យផ្សេងៗគ្នា។',
      feature3Bullet1: 'ស្វែងយល់ពីគន្លឹះអាហារូបត្ថម្ភផ្អែកលើអាយុកូនរបស់អ្នក។',
      feature3Bullet2: 'ស្វែងយល់អំពីអាហារដែលសមស្របសម្រាប់ដំណាក់កាលលូតលាស់នីមួយៗ។',
      feature3Bullet3: 'ទទួលបានព័ត៌មានមានប្រយោជន៍អំពីការទទួលទានអាហារប្រកបដោយសុខភាពល្អ។',

      featuresCtaTitle: 'ថែរក្សាសុខភាពកូនរបស់អ្នកជាមួយ KOMA',
      featuresCtaDesc: 'ធ្វើឱ្យការថែទាំសុខភាពកូនអ្នកកាន់តែងាយស្រួលជាមួយ KOMA។ រក្សាព័ត៌មានសុខភាពឱ្យមានរបៀប និងតាមដានរាល់តម្រូវការថែទាំសំខាន់ៗ។',
      featuresCtaBtn: 'ចាប់ផ្តើមជាមួយ KOMA ថ្ងៃនេះ!',

      // Demo Section
      demoKicker: 'ការបង្ហាញផ្ទាល់',
      demoTitle: 'ការសាកល្បង KOMA',
      demoDesc: 'ទស្សនារបៀបដែល KOMA ធ្វើឱ្យការថែទាំសុខភាពកូនៗកាន់តែងាយស្រួល និងមានរបៀបរៀបរយ។ ស្វែងយល់ពីកាលវិភាគ ការតាមដានការលូតលាស់ និងគន្លឹះសុខភាពទាន់ពេលវេលា។',
      demoBadge1: 'តាមដានការចាក់ថ្នាំបង្ការ',
      demoBadge2: 'ខ្សែកោងការលូតលាស់',
      demoBadge3: 'ការណែនាំអាហារូបត្ថម្ភតាមវ័យ',
      demoTryBtn: 'សាកល្បង Demo',
      demoTrySubtitle: 'ចូលប្រើភ្លាមៗក្នុងកម្មវិធីអ៊ីនធឺណិត • មិនបាច់ដំឡើង',

      pillarsTag: 'មុខងាររបស់ KOMA',
      pillarsTitle: 'មុខងាររបស់ KOMA',
      pillarsDesc: 'KOMA ផ្តល់នូវឧបករណ៍ងាយស្រួលដើម្បីជួយឪពុកម្តាយក្នុងការថែទាំសុខភាពកូនៗ។ ចាប់ពីការរំលឹកការចាក់ថ្នាំបង្ការ រហូតដល់ការតាមដានការលូតលាស់ និងគន្លឹះអាហារូបត្ថម្ភ KOMA ជួយឪពុកម្តាយទទួលបានព័ត៌មានទាន់ហេតុការណ៍នៅគ្រប់ដំណាក់កាលនៃការលូតលាស់របស់កូន។',

      pillar1Title: 'កាលវិភាគចាក់ថ្នាំបង្ការជាតិកម្ពុជា',
      pillar1Desc: 'ផ្ទុកនូវរាល់ថ្នាំបង្ការដែលកំណត់ដោយក្រសួងសុខាភិបាល ស្របតាមស្តង់ដារជាតិ។',

      pillar2Title: 'ការរំលឹកវៃឆ្លាត មិនខកខានកាលបរិច្ឆេទ',
      pillar2Desc: 'គណនាកាលបរិច្ឆេទចាក់ថ្នាំដោយស្វ័យប្រវត្តិតាមថ្ងៃខែឆ្នាំកំណើតកូន ទទួលបានការរំលឹកទាន់ពេលវេលា។',
      reminderSimTitle: 'ថ្នាំបង្ការ៥មុខ លើកទី២ (DTP-HepB-Hib)',
      reminderSimDays: 'នៅសល់ ៣ ថ្ងៃ',
      reminderSimMarkBtn: 'កត់ត្រាថាបានចាក់រួច ✅',
      reminderSimDone: 'បានចាក់រួចរាល់នៅថ្ងៃទី១៥ តុលា ២០២៦ នៅមន្ទីរពេទ្យគន្ធបុប្ផា! 🎉',

      pillar3Title: 'តាមដានការលូតលាស់ស្តង់ដារ WHO',
      pillar3Desc: 'កត់ត្រាទម្ងន់និងកម្ពស់ធៀបនឹងស្តង់ដារអង្គការសុខភាពពិភពលោក (WHO P3 ដល់ P97)។',
      tabWeight: 'ទម្ងន់',
      tabHeight: 'កម្ពស់',

      pillar4Title: 'បង្កើតសម្រាប់កម្ពុជា & ប្រើបានដោយគ្មានអ៊ីនធឺណិត',
      pillar4Desc: 'មានបញ្ជីមន្ទីរពេទ្យល្បីៗ គាំទ្រអក្សរខ្មែរ ១០០% និងរក្សាទុកទិន្នន័យលើទូរសព្ទដោយសុវត្ថិភាព។',
      hospSelectPrompt: 'ជ្រើសរើសមន្ទីរពេទ្យទទួលការចាក់ថ្នាំ៖',

      // Playground Section
      playgroundTag: 'សាកល្បងមុខងារផ្ទាល់',
      playgroundTitle: 'សាកល្បងឧបករណ៍ KOMA ដោយផ្ទាល់',
      playgroundDesc: 'ស្វែងយល់ពីរបៀបដែល KOMA ជួយសម្រាលបន្ទុកឪពុកម្តាយក្នុងការថែទាំកូនៗ។',

      waitLabel: 'រង់ចាំមើល...',
      mascotClickHint: 'សាកល្បងចុចលើពួកយើង',
      mascotActionSparkle: '✨ ភ្នែកភ្លឺចែងចាំង',
      mascotActionHeart: '❤️ បេះដូងស្រឡាញ់',
      mascotActionHug: '🤗 ឱបយ៉ាងកក់ក្តៅ',
      mascotActionScared: '💉 ខ្លាចម្ជុលចាក់ថ្នាំ!',

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
      footerColCompany: 'ក្រុមហ៊ុន',
      footerColNav: 'ទំព័ររុករក',
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

    // Update active class on drawer language buttons
    document.querySelectorAll('.drawer-lang-btn').forEach(btn => {
      const optionLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', optionLang === lang);
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
    const phoneFlagImg = document.getElementById('phone-flag-img');
    if (phoneFlagImg) {
      phoneFlagImg.src = lang === 'kh' ? 'assets/flag-kh.png' : 'assets/flag-en.png';
      phoneFlagImg.alt = lang === 'kh' ? 'Khmer' : 'English';
    }
    const daraSignText = document.getElementById('dara-sign-text');
    if (daraSignText) {
      daraSignText.textContent = lang === 'kh' ? 'សូមស្វាគមន៍' : 'WELCOME';
    }
    updatePhoneMockup();

    // Update Digital Yellow Booklet
    renderBookletTable();

    // Update Feature 1 Timeline Display
    updatePillar1Display();

    // Update Feature 4 Hospital Details (if present)
    if (typeof updateHospitalDetails === 'function') {
      updateHospitalDetails();
    }

    // Update Mascot Action Pill text in current language
    if (typeof updateMascotActionDisplay === 'function') {
      updateMascotActionDisplay();
    }
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

    let html = '';
    CAMBODIA_VACCINES.forEach((vac, index) => {
      const isCompleted = index < 3;
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
  // 7. PLAYGROUND: ANIMATED INTERACTIVE MASCOTS
  // ==========================================
  const MASCOT_ACTIONS = [
    {
      id: 'sparkling-eyes',
      class: 'action-sparkling-eyes',
      textEn: '✨ Sparkling Eyes',
      textKh: '✨ ភ្នែកភ្លឺចែងចាំង'
    },
    {
      id: 'heart-hands',
      class: 'action-heart-hands',
      textEn: '❤️ Heart Hands',
      textKh: '❤️ បេះដូងស្រឡាញ់'
    },
    {
      id: 'hugging',
      class: 'action-hugging',
      textEn: '🤗 Mascot Hug',
      textKh: '🤗 ឱបយ៉ាងកក់ក្តៅ'
    },
    {
      id: 'scared-shot',
      class: 'action-scared-shot',
      textEn: '💉 Vaccine Shot!',
      textKh: '💉 ខ្លាចម្ជុលចាក់ថ្នាំ!'
    }
  ];

  let currentMascotActionIndex = 0;
  let mascotActionTimer = null;
  let speechBubbleTimeout = null;

  function updateMascotActionDisplay() {
    const pill = document.getElementById('mascot-action-pill');
    const wrap = document.getElementById('mascots-wrap');
    if (!pill || !wrap) return;

    const action = MASCOT_ACTIONS[currentMascotActionIndex];
    if (!action) return;

    MASCOT_ACTIONS.forEach(a => wrap.classList.remove(a.class));
    wrap.classList.add(action.class);

    const isKh = currentLanguage === 'kh';
    pill.textContent = isKh ? action.textKh : action.textEn;
  }

  function advanceMascotAction() {
    currentMascotActionIndex = (currentMascotActionIndex + 1) % MASCOT_ACTIONS.length;
    updateMascotActionDisplay();
  }

  function triggerMascotHello(character) {
    const speechBubble = document.getElementById('mascot-speech-bubble');
    const speechText = document.getElementById('mascot-speech-text');
    const boy = document.getElementById('interactive-mascot-boy');
    const girl = document.getElementById('interactive-mascot-girl');
    if (!speechBubble || !speechText) return;

    const isKh = currentLanguage === 'kh';
    let message = '';
    let confettiX = 0.5;

    if (character === 'boy') {
      message = isKh ? '👋 សួស្តី! ខ្ញុំឈ្មោះតារា! រឹងមាំនិងសុខភាពល្អ!' : '👋 Hello! I’m Dara! I’m strong & healthy!';
      confettiX = 0.38;
      if (boy) {
        boy.classList.remove('clicked-bounce');
        void boy.offsetWidth;
        boy.classList.add('clicked-bounce');
      }
      const wrap = document.getElementById('mascots-wrap');
      if (wrap) {
        wrap.classList.add('wave-boy');
        setTimeout(() => wrap.classList.remove('wave-boy'), 1800);
      }
    } else if (character === 'girl') {
      message = isKh ? '👋 សួស្តី! ខ្ញុំឈ្មោះបុប្ផា! ញញឹមនិងមានសុវត្ថិភាព!' : '👋 Hello! I’m Bopha! Checkups are fun!';
      confettiX = 0.62;
      if (girl) {
        girl.classList.remove('clicked-bounce');
        void girl.offsetWidth;
        girl.classList.add('clicked-bounce');
      }
      const wrap = document.getElementById('mascots-wrap');
      if (wrap) {
        wrap.classList.add('wave-girl');
        setTimeout(() => wrap.classList.remove('wave-girl'), 1800);
      }
    } else {
      message = isKh ? '👋 សូមស្វាគមន៍មកកាន់ KOMA! រួមគ្នារក្សាសុខភាពល្អ!' : '👋 Welcome to KOMA! Let’s stay healthy together!';
      confettiX = 0.5;
      if (boy) {
        boy.classList.remove('clicked-bounce');
        void boy.offsetWidth;
        boy.classList.add('clicked-bounce');
      }
      if (girl) {
        girl.classList.remove('clicked-bounce');
        void girl.offsetWidth;
        girl.classList.add('clicked-bounce');
      }
      const wrap = document.getElementById('mascots-wrap');
      if (wrap) {
        wrap.classList.add('wave-boy', 'wave-girl');
        setTimeout(() => wrap.classList.remove('wave-boy', 'wave-girl'), 1800);
      }
    }

    speechText.textContent = message;
    speechBubble.classList.add('active');

    // Confetti burst
    launchConfettiBurst(confettiX, 0.62);

    clearTimeout(speechBubbleTimeout);
    speechBubbleTimeout = setTimeout(() => {
      speechBubble.classList.remove('active');
    }, 3200);
  }

  function initAnimatedMascots() {
    if (!document.getElementById('mascot-stage')) return;
    updateMascotActionDisplay();

    if (mascotActionTimer) clearInterval(mascotActionTimer);
    mascotActionTimer = setInterval(advanceMascotAction, 3500);

    // Interactive Action Pill & Wait Badge (click to cycle immediately)
    const actionPill = document.getElementById('mascot-action-pill');
    if (actionPill) {
      actionPill.style.cursor = 'pointer';
      actionPill.setAttribute('title', 'Click to switch action!');
      actionPill.addEventListener('click', (e) => {
        e.stopPropagation();
        advanceMascotAction();
        if (mascotActionTimer) clearInterval(mascotActionTimer);
        mascotActionTimer = setInterval(advanceMascotAction, 3500);
      });
    }

    const waitBadge = document.querySelector('.mascot-wait-badge');
    if (waitBadge) {
      waitBadge.style.cursor = 'pointer';
      waitBadge.setAttribute('title', 'Click to switch action!');
      waitBadge.addEventListener('click', (e) => {
        e.stopPropagation();
        advanceMascotAction();
        if (mascotActionTimer) clearInterval(mascotActionTimer);
        mascotActionTimer = setInterval(advanceMascotAction, 3500);
      });
    }

    const boy = document.getElementById('interactive-mascot-boy');
    if (boy) {
      boy.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerMascotHello('boy');
      });
    }

    const girl = document.getElementById('interactive-mascot-girl');
    if (girl) {
      girl.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerMascotHello('girl');
      });
    }

    const stage = document.getElementById('mascot-stage');
    if (stage) {
      stage.addEventListener('click', () => {
        triggerMascotHello('both');
      });
    }

    const clickHint = document.getElementById('mascot-click-hint');
    if (clickHint) {
      clickHint.addEventListener('click', () => {
        triggerMascotHello('both');
      });
    }
  }

  // ==========================================
  // SCROLLSPY NAVIGATION (YELLOW UNDERLINE)
  // ==========================================
  function initScrollspy() {
    const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
    const sections = ['home', 'about', 'features'];

    function updateActiveNav() {
      const scrollPos = window.scrollY + 180;
      let currentId = 'home';

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && scrollPos >= sec.offsetTop) {
          currentId = sections[i];
          break;
        }
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#' + currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav, { passive: true });
    updateActiveNav();
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
      document.body.style.overflow = 'hidden';
      launchConfettiBurst(0.5, 0.5);
      setTimeout(() => launchConfettiBurst(0.3, 0.4), 250);
      setTimeout(() => launchConfettiBurst(0.7, 0.4), 450);
    }
  }

  function closeBirthdayModal() {
    const modal = document.getElementById('birthday-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ==========================================
  // 9. MODALS: WAITLIST & FULL BOOKLET
  // ==========================================
  function openWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function openBookletModal() {
    const modal = document.getElementById('booklet-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderBookletTable();
    }
  }

  function closeBookletModal() {
    const modal = document.getElementById('booklet-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
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
        langBtn.setAttribute('aria-expanded', String(isOpen));
        if (chevron) chevron.classList.toggle('open', isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
          langMenu.classList.remove('open');
          langBtn.setAttribute('aria-expanded', 'false');
          if (chevron) chevron.classList.remove('open');
        }
      });
    }

    // Language options
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
        if (langMenu) {
          langMenu.classList.remove('open');
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
        if (chevron) chevron.classList.remove('open');
      });
    });

    // Mobile drawer language options
    document.querySelectorAll('.drawer-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
      });
    });

    // Phone mockup language toggle pill
    const phoneLangPill = document.getElementById('phone-lang-pill');
    if (phoneLangPill) {
      phoneLangPill.addEventListener('click', () => {
        const nextLang = currentLanguage === 'en' ? 'kh' : 'en';
        setLanguage(nextLang);
      });
    }

    // Phone Telegram button is static mockup UI (non-clickable)

    // 2. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    if (hamburgerBtn && mobileDrawer) {
      hamburgerBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        // Close language dropdown if open
        if (langMenu) {
          langMenu.classList.remove('open');
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
          if (chevron) chevron.classList.remove('open');
        }
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeDrawerBtn && mobileDrawer) {
      closeDrawerBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    }

    if (mobileDrawer) {
      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) {
          mobileDrawer.classList.remove('open');
          if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    }

    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileDrawer) {
          mobileDrawer.classList.remove('open');
          if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Keyboard Accessibility: Escape key dismisses open menus and modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (langMenu && langMenu.classList.contains('open')) {
          langMenu.classList.remove('open');
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
          if (chevron) chevron.classList.remove('open');
        }
        if (mobileDrawer && mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
        document.querySelectorAll('.modal-overlay.open').forEach(modal => {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        });
      }
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

    // 6. Animated Interactive Mascots Showcase
    initAnimatedMascots();

    // 7. Scrollspy Header Navigation
    function initScrollspy() {
      const sections = [
        { id: 'home', el: document.getElementById('home'), link: document.querySelector('.nav-desktop a[href="#home"]') },
        { id: 'about', el: document.getElementById('about'), link: document.querySelector('.nav-desktop a[href="#about"]') },
        { id: 'features', el: document.getElementById('features'), link: document.querySelector('.nav-desktop a[href="#features"]') }
      ];

      function updateActive() {
        const scrollY = window.scrollY + 160;
        let activeSection = null;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = sections[i];
          if (sec.el && sec.el.offsetTop <= scrollY) {
            activeSection = sec;
            break;
          }
        }

        sections.forEach(sec => {
          if (!sec.link) return;
          const isActive = activeSection && activeSection.id === sec.id;
          sec.link.classList.toggle('active', isActive);
          if (sec.id === 'features') {
            sec.link.classList.toggle('active-green', isActive);
          } else if (sec.id === 'about') {
            sec.link.classList.toggle('active-blue', isActive);
          }
        });
      }

      window.addEventListener('scroll', updateActive, { passive: true });
      updateActive();
    }
    initScrollspy();

    // 7b. Features 3-Card Interactive Tab Switching (Image 5)
    function initFeatureTabs() {
      const cards = document.querySelectorAll('.features-card-outline');
      const bannerTitle = document.getElementById('feature-active-banner-title');
      const bannerIcon = document.getElementById('feature-active-banner-icon');
      const pane1 = document.getElementById('feature-pane-1');
      const pane2 = document.getElementById('feature-pane-2');
      const pane3 = document.getElementById('feature-pane-3');

      const featureDetails = {
        '1': {
          titleEn: 'National Immunization Schedule',
          titleKh: 'កាលវិភាគចាក់ថ្នាំបង្ការជាតិ',
          color: '#00A86B',
          bgColor: '#E6F7F0',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>`
        },
        '2': {
          titleEn: 'Smart Reminders & Due Dates',
          titleKh: 'ការរំលឹកឆ្លាតវៃ & កាលបរិច្ឆេទ',
          color: '#EE6748',
          bgColor: '#FEF3D6',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`
        },
        '3': {
          titleEn: 'WHO Growth Monitoring',
          titleKh: 'ការតាមដានការលូតលាស់ស្តង់ដារ WHO',
          color: '#4AAEE8',
          bgColor: '#EBF5FC',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="3" y1="20" x2="21" y2="20"/></svg>`
        }
      };

      cards.forEach(card => {
        card.addEventListener('click', () => {
          const tab = card.getAttribute('data-feature-tab');
          cards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');

          const info = featureDetails[tab] || featureDetails['1'];
          if (bannerTitle) {
            bannerTitle.textContent = currentLanguage === 'kh' ? info.titleKh : info.titleEn;
          }
          if (bannerIcon) {
            bannerIcon.innerHTML = info.icon;
            bannerIcon.style.backgroundColor = info.bgColor;
            bannerIcon.style.color = info.color;
          }

          if (pane1) pane1.style.display = tab === '1' ? 'block' : 'none';
          if (pane2) pane2.style.display = tab === '2' ? 'block' : 'none';
          if (pane3) pane3.style.display = tab === '3' ? 'block' : 'none';
        });
      });
    }
    initFeatureTabs();

    // 7c. Video Demo Modal Handlers
    const videoModal = document.getElementById('video-modal');
    const closeVideoModalBtn = document.getElementById('btn-close-video-modal');
    const openVideoBtns = document.querySelectorAll('.btn-open-demo-video, .btn-trigger-video');
    const videoToWaitlistBtn = document.getElementById('video-to-waitlist-btn');
    const videoPlayBtn = document.getElementById('video-play-btn');

    function openVideoModal() {
      if (videoModal) {
        videoModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeVideoModal() {
      if (videoModal) {
        videoModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }

    openVideoBtns.forEach(btn => btn.addEventListener('click', openVideoModal));
    if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
    if (videoToWaitlistBtn) {
      videoToWaitlistBtn.addEventListener('click', () => {
        closeVideoModal();
        openWaitlistModal();
      });
    }
    if (videoPlayBtn) {
      videoPlayBtn.addEventListener('click', () => {
        window.open('https://app.komakh.com/', '_blank', 'noopener,noreferrer');
      });
    }

    // 8. Birthday Celebration Triggers
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

    // 9. Waitlist Modal
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
          document.body.style.overflow = '';
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
    // Demo Video Player Interaction
    const demoVideo = document.getElementById('demo-video-player');
    const demoPlayBtn = document.getElementById('demo-play-btn');

    if (demoVideo) {
      if (demoPlayBtn) {
        const playIcon = demoPlayBtn.querySelector('.play-icon');
        const pauseIcon = demoPlayBtn.querySelector('.pause-icon');

        const updatePlayState = () => {
          const isPaused = demoVideo.paused;
          if (playIcon) playIcon.style.display = isPaused ? 'block' : 'none';
          if (pauseIcon) pauseIcon.style.display = isPaused ? 'none' : 'block';
        };

        demoPlayBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (demoVideo.paused) {
            demoVideo.play();
          } else {
            demoVideo.pause();
          }
          updatePlayState();
        });

        demoVideo.addEventListener('play', updatePlayState);
        demoVideo.addEventListener('pause', updatePlayState);
        updatePlayState();
      }

    }

    setLanguage(currentLanguage);
    updateGrowthMetric('weight');
  });
})();
