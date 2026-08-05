/* ==========================================================================
   JORURI (জরুরি) — App Logic & Multi-Page View Controller
   ========================================================================== */

// 1. I18N DICTIONARY FOR INTERFACE STRINGS
const i18n = {
  en: {
    // Header & Navigation
    navHome: "Home",
    navPhone: "Emergency Services",
    navAbout: "About",
    navWebsites: "Websites",
    navApps: "Apps",
    soonBadge: "Soon",

    // Home Page Hero & Workflow
    homeHeroTitle: "Important Public-Service Information, All in One Place",
    homeHeroDesc: "Joruri helps citizens quickly find important public-service phone numbers, call them directly, copy them, or export them to their phone contacts.",
    homeExploreBtn: "Explore Emergency Services →",
    homeLearnBtn: "Learn How It Works",
    labelFlow1: "Find Service",
    labelFlow2: "Check Details",
    labelFlow3: "Call / Copy",
    labelFlow4: "Save for Later",

    homeWorkflowTitle: "HOW JORURI WORKS",
    homeStep1Title: "Find a Service",
    homeStep1Desc: "Search by service name, topic, category, or phone number.",
    homeStep2Title: "Check Details",
    homeStep2Desc: "Open any service card to view complete official information and availability.",
    homeStep3Title: "Call or Copy",
    homeStep3Desc: "Call instantly using your device or copy the number for later.",
    homeStep4Title: "Save for Later",
    homeStep4Desc: "Export selected numbers as CSV or vCard (.vcf) and import into your phone contacts.",

    // Platform Capabilities
    homeCapabilitiesTitle: "SIMPLE TO USE. EASY TO KEEP.",
    homeStat1Number: "{count}+",
    homeStat1Label: "Services Listed",
    homeStat2Title: "CSV & vCard Export",
    homeStat2Desc: "Select the numbers you need, export them, and import them into your phone's Contacts.",
    homeStat3Number: "100%",
    homeStat3Label: "Verified Sources",

    // Contact Saving Explanation
    homeSaveTitle: "TAKE IMPORTANT NUMBERS WITH YOU",
    homeSaveDesc: "Select the public-service numbers you want to keep, export them as CSV or vCard (.vcf) files, then import them directly into your phone's address book for offline access.",
    homeSaveFlow1: "Select Numbers",
    homeSaveFlow2: "Export CSV / vCard",
    homeSaveFlow3: "Import to Contacts",
    homeSaveFlow4: "Available on Your Phone",

    // Emergency Section
    homeEmergencyTitle: "TOP EMERGENCY NUMBERS",

    // About Page View
    aboutBadge: "ABOUT JORURI",
    aboutHeroTitle: "Making Public-Service Information Easier to Find",
    aboutHeroDesc: "Joruri (জরুরি) is a public-service contact directory designed to help people in Bangladesh quickly find and access important public-service phone numbers.",
    aboutWhyTitle: "Why Joruri?",
    aboutWhyP1: "Bangladesh has many important public and government services, but people may not always know which number to call when they need assistance.",
    aboutWhyP2: "While almost everyone is familiar with the national emergency number 999, fewer people know about specialized public-service hotlines such as child helplines, healthcare support, or legal assistance. When citizens are unaware of these dedicated services, they often rely solely on 999 even when another specialized hotline would be more direct and appropriate.",
    aboutWhyP3: "Joruri exists to bridge this gap by making specialized public services easy to discover, understand, and reach.",
    aboutPurposeTitle: "Our Purpose",
    aboutPurposeMain: "\"Joruri aims to make public-service information easier to discover and understand, helping people identify the service they need and reach it more easily.\"",
    aboutPillar1Title: "Find the Right Service",
    aboutPillar1Desc: "Search and discover the exact helpline suited for your situation.",
    aboutPillar2Title: "Understand What It Does",
    aboutPillar2Desc: "View official operating hours, toll-free status, and service scope.",
    aboutPillar3Title: "Reach It at the Right Time",
    aboutPillar3Desc: "Connect directly via quick call or copy controls without delay.",
    aboutMissionTitle: "OUR MISSION",
    aboutMissionStatement: "Help people reach the right public service at the right time.",
    aboutMissionDesc: "Joruri aims to raise awareness of the wider range of public services available in Bangladesh and make important service information easier for citizens to access.",
    aboutProvidesTitle: "WHAT JORURI PROVIDES",
    aboutCard1Title: "Search",
    aboutCard1Desc: "Find public-service numbers by service name, category, topic, or phone number.",
    aboutCard2Title: "Understand",
    aboutCard2Desc: "Learn what a particular service or number is intended for before making a call.",
    aboutCard3Title: "Call",
    aboutCard3Desc: "Call a number directly from any compatible mobile or desktop device.",
    aboutCard4Title: "Copy",
    aboutCard4Desc: "Copy a number with a single click for use elsewhere or sharing.",
    aboutEveryoneTitle: "Built for Everyone",
    aboutEveryoneIntro: "Joruri is thoughtfully designed with high contrast, large readable typography, and simple navigation to ensure seamless access for:",
    aboutEveryoneItem1: "General users searching for government contacts",
    aboutEveryoneItem2: "People in urgent need of emergency helplines",
    aboutEveryoneItem3: "Older citizens or users with limited technical experience",
    aboutEveryoneItem4: "Mobile device users seeking fast on-the-go access",
    aboutDisclaimerTitle: "An Independent Information Hub",
    aboutDisclaimerBanner: "Joruri is not an official government platform.",
    aboutDisclaimerText: "It is an independent public-service information hub created to make important service information easier for citizens to find and use. All contact details are compiled from verified public sources.",

    // Phone Directory View
    heroTitle: "Important Public-Service Contacts in Bangladesh",
    heroDesc: "Quickly find, copy, and dial emergency hotlines, healthcare support, and official government helplines.",
    searchPlaceholder: "Search by service name, topic, or phone number...",
    callBtn: "Call",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    emptyTitle: "No Contacts Found",
    emptyDesc: "No contacts match your current search query or selected category.",
    resetFiltersBtn: "Clear Search & Filters",
    selectAll: "Select All",
    selectedCount: "{count} selected",
    clearSelection: "Clear Selection",
    exportVCard: "vCard (.vcf)",
    exportCSV: "CSV (.csv)",
    viewDetails: "View Details ↗",
    tollFree: "Toll-Free",
    badge247: "24/7",
    yes: "Yes",
    no: "No",
    unknown: "N/A",
    modalAvailability: "Availability",
    modalTollFree: "Toll-Free",
    modalCoverage: "Coverage",
    modalVerified: "Verified Date",
    modalSource: "Official Source",

    categories: {
      "All": "All",
      "Emergency": "Emergency",
      "Healthcare": "Healthcare",
      "Government": "Government",
      "Law & Order": "Law & Order",
      "Women & Children": "Women & Children"
    },

    footerBrand: "Joruri (জরুরি) — Public-Service Contact Directory",
    footerDisclaimer: "Disclaimer: Joruri is an independent public-service directory designed for citizen guidance. It is not an official government platform.",
    footerCopyright: "© 2026 Joruri. Information first."
  },
  bn: {
    // Header & Navigation
    navHome: "হোম",
    navPhone: "জরুরির সেবা",
    navAbout: "জরুরি সম্পর্কে",
    navWebsites: "ওয়েবসাইট",
    navApps: "অ্যাপস",
    soonBadge: "শীঘ্রই",

    // Home Page Hero & Workflow
    homeHeroTitle: "গুরুত্বপূর্ণ সরকারি ও জরুরি তথ্য, এক জায়গায়",
    homeHeroDesc: "জরুরি নাগরিকদের সরকারি ও জরুরি সেবার নম্বর দ্রুত খুঁজতে, সরাসরি কল করতে, কপি করতে এবং নিজের ফোনে সেভ করে রাখার সুবিধা দেয়।",
    homeExploreBtn: "জরুরি সেবাসমূহ দেখুন →",
    homeLearnBtn: "কার্যপ্রণালী দেখুন",
    labelFlow1: "সেবা খুঁজুন",
    labelFlow2: "বিস্তারিত দেখুন",
    labelFlow3: "কল / কপি",
    labelFlow4: "সেভ করে রাখুন",

    homeWorkflowTitle: "জরুরি যেভাবে কাজ করে",
    homeStep1Title: "সেবা খুঁজুন",
    homeStep1Desc: "সেবার নাম, বিষয়, ক্যাটাগরি বা নম্বর দিয়ে খুঁজুন।",
    homeStep2Title: "বিস্তারিত দেখুন",
    homeStep2Desc: "অফিসিয়াল তথ্য ও সময়সূচী দেখতে সেবার কার্ডটি চাপুন।",
    homeStep3Title: "কল বা কপি করুন",
    homeStep3Desc: "সরাসরি কল করতে ট্যাপ করুন অথবা নম্বরটি কপি করে রাখুন।",
    homeStep4Title: "সেভ করে রাখুন",
    homeStep4Desc: "নম্বর নির্বাচন করে CSV বা vCard ফাইল ডাউনলোড করুন এবং আপনার পরিচিতিতে ইম্পোর্ট করুন।",

    // Platform Capabilities
    homeCapabilitiesTitle: "ব্যবহারে সহজ। সংরক্ষণে সুবিধাজনক।",
    homeStat1Number: "{count}+",
    homeStat1Label: "নথিভুক্ত সেবাসমূহ",
    homeStat2Title: "CSV ও vCard এক্সপোর্ট",
    homeStat2Desc: "প্রয়োজনীয় নম্বর নির্বাচন করে এক্সপোর্ট করুন এবং আপনার ফোনে সেভ করুন।",
    homeStat3Number: "১০০%",
    homeStat3Label: "যাচাইকৃত অফিসিয়াল তথ্য",

    // Contact Saving Explanation
    homeSaveTitle: "জরুরি নম্বরগুলো সাথে রাখুন",
    homeSaveDesc: "জরুরি নম্বরগুলো CSV বা vCard ফাইল হিসেবে নামিয়ে নিন এবং অফলাইনে ব্যবহারের জন্য সরাসরি আপনার ফোনের অ্যাড্রেস বুকে যুক্ত করুন।",
    homeSaveFlow1: "নম্বর নির্বাচন",
    homeSaveFlow2: "CSV / vCard এক্সপোর্ট",
    homeSaveFlow3: "ফোনের পরিচিতিতে ইম্পোর্ট",
    homeSaveFlow4: "আপনার ফোনে প্রস্তুত",

    // Emergency Section
    homeEmergencyTitle: "জরুরি শীর্ষ নম্বরসমূহ",

    // About Page View
    aboutBadge: "জরুরি সম্পর্কে",
    aboutHeroTitle: "জনসেবামূলক তথ্য সহজে পাওয়ার মাধ্যম",
    aboutHeroDesc: "জরুরি (Joruri) হলো বাংলাদেশের একটি জনসেবামূলক ফোন ডিরেক্টরি যা নাগরিকদের প্রয়োজনীয় সরকারি ও জরুরি সেবার নম্বর সহজে খুঁজে পেতে সহায়তা করে।",
    aboutWhyTitle: "কেন জরুরি?",
    aboutWhyP1: "বাংলাদেশে অনেক প্রয়োজনীয় সরকারি ও জনসেবামূলক সংস্থা রয়েছে, তবে নাগরিকরা প্রায়শই জানেন না নির্দিষ্ট প্রয়োজনে কোন নম্বরে যোগাযোগ করতে হবে।",
    aboutWhyP2: "জাতীয় জরুরি সেবা ৯৯৯ সম্পর্কে প্রায় সবাই জানেন, কিন্তু নারী ও শিশু হেল্পলাইন, স্বাস্থ্যসেবা বা আইনি সহায়তার মতো বিশেষায়িত নম্বরগুলো অনেকের কাছেই অপরিচিত। এই বিশেষায়িত সেবাগুলো সম্পর্কে ধারণা না থাকায় অনেকেই বিকল্প না পেয়ে ৯৯৯-এর ওপর নির্ভর করেন, যদিও অন্য কোনো নির্দিষ্ট হেল্পলাইন আরও সরাসরি ও উপযুক্ত হতে পারত।",
    aboutWhyP3: "জরুরি-র লক্ষ্য হলো এই তথ্যের ঘাটতি পূরণ করে বিশেষায়িত জনসেবাসমূহ আবিষ্কার, অনুধাবন এবং যোগাযোগের প্রক্রিয়াকে সহজতর করা।",
    aboutPurposeTitle: "আমাদের উদ্দেশ্য",
    aboutPurposeMain: "\"জরুরির লক্ষ্য হলো জনসেবামূলক তথ্য জানা ও বোঝা আরও সহজ করা, যাতে মানুষ তাদের প্রয়োজনীয় সেবা শনাক্ত করতে পারে এবং সহজে যোগাযোগ করতে পারে।\"",
    aboutPillar1Title: "সঠিক সেবাটি খুঁজুন",
    aboutPillar1Desc: "আপনার পরিস্থিতির জন্য উপযুক্ত নির্দিষ্ট হেল্পলাইন অনুসন্ধান করুন।",
    aboutPillar2Title: "সেবাটি সম্পর্কে জানুন",
    aboutPillar2Desc: "অফিসিয়াল সময়সূচী, টোল-ফ্রি তথ্য ও সেবার আওতা জানুন।",
    aboutPillar3Title: "সঠিক সময়ে যোগাযোগ করুন",
    aboutPillar3Desc: "সরাসরি কল বা কপি অপশনের মাধ্যমে অবিলম্বে যোগাযোগ করুন।",
    aboutMissionTitle: "আমাদের মিশন",
    aboutMissionStatement: "মানুষকে সঠিক সময়ে সঠিক জনসেবার আওতায় নিয়ে আসা।",
    aboutMissionDesc: "জরুরির উদ্দেশ্য হলো বাংলাদেশে বিদ্যমান বিভিন্ন সরকারি ও জনসেবা সম্পর্কে নাগরিকদের মধ্যে সচেতনতা বৃদ্ধি করা এবং তথ্য পাওয়ার প্রক্রিয়াকে আরও সহজ করা।",
    aboutProvidesTitle: "জরুরি যা প্রদান করে",
    aboutCard1Title: "অনুসন্ধান (Search)",
    aboutCard1Desc: "সেবার নাম, ক্যাটাগরি, বিষয় বা ফোন নম্বর দিয়ে সহজে জনসেবা খুঁজুন।",
    aboutCard2Title: "অনুধাবন (Understand)",
    aboutCard2Desc: "কল করার আগেই নির্দিষ্ট নম্বর বা সেবাটি কী কাজের জন্য তা ভালোভাবে জানুন।",
    aboutCard3Title: "সরাসরি কল (Call)",
    aboutCard3Desc: "যেকোনো উপযুক্ত ডিভাইস থেকে এক ট্যাপে সরাসরি নম্বরে কল করুন।",
    aboutCard4Title: "সহজ কপি (Copy)",
    aboutCard4Desc: "শেয়ার বা অন্য কোথাও ব্যবহারের জন্য এক ক্লিকে নম্বর কপি করে রাখুন।",
    aboutEveryoneTitle: "সকলের জন্য তৈরি",
    aboutEveryoneIntro: "সহজ নেভিগেশন এবং স্পষ্ট লেখার মাধ্যমে জরুরি-কে এমনভাবে ডিজাইন করা হয়েছে যাতে এটি সহজেই ব্যবহার করতে পারেন:",
    aboutEveryoneItem1: "সরকারি যোগাযোগের তথ্য অনুসন্ধানী সাধারণ ব্যবহারকারীগণ",
    aboutEveryoneItem2: "জরুরি সেবা অনুসন্ধানে নিয়োজিত নাগরিকগণ",
    aboutEveryoneItem3: "বয়োজ্যেষ্ঠ বা তুলনামূলক কম প্রযুক্তি-অভিজ্ঞ নাগরিকগণ",
    aboutEveryoneItem4: "মোবাইল ফোন থেকে দ্রুত সেবা সন্ধানকারী ব্যবহারকারীগণ",
    aboutDisclaimerTitle: "স্বাধীন তথ্য কেন্দ্র",
    aboutDisclaimerBanner: "জরুরি কোনো সরকারি প্রাতিষ্ঠানিক প্ল্যাটফর্ম নয়।",
    aboutDisclaimerText: "এটি একটি স্বাধীন জনসেবামূলক তথ্য কেন্দ্র যা নাগরিকদের প্রয়োজনীয় সেবা খোঁজা ও ব্যবহারের প্রক্রিয়াকে সহজ করার জন্য তৈরি করা হয়েছে। সকল তথ্য নিবন্ধিত ও যাচাইকৃত অফিসিয়াল উৎস থেকে সংগৃহীত।",

    // Phone Directory View
    heroTitle: "বাংলাদেশের গুরুত্বপূর্ণ সরকারি ও জরুরি নম্বরসমূহ",
    heroDesc: "জরুরি সেবা, স্বাস্থ্যসেবা এবং সরকারি হেল্পলাইন নম্বর সহজে খুঁজুন, কপি করুন এবং সরাসরি কল করুন।",
    searchPlaceholder: "সেবার নাম, বিষয় বা ফোন নম্বর দিয়ে খুঁজুন...",
    callBtn: "কল করুন",
    copyBtn: "কপি",
    copiedMsg: "কপি হয়েছে!",
    emptyTitle: "কোনো নম্বর পাওয়া যায়নি",
    emptyDesc: "আপনার অনুসন্ধান বা ফিল্টারের সাথে কোনো সরকারি বা জরুরি সেবা নম্বর মিলছে না।",
    resetFiltersBtn: "অনুসন্ধান রিসেট করুন",
    selectAll: "সব নির্বাচন করুন",
    selectedCount: "{count}টি নির্বাচিত",
    clearSelection: "নির্বাচন বাতিল",
    exportVCard: "vCard (.vcf)",
    exportCSV: "CSV (.csv)",
    viewDetails: "বিস্তারিত দেখুন ↗",
    tollFree: "টোল-ফ্রি",
    badge247: "২৪/৭",
    yes: "হ্যাঁ",
    no: "না",
    unknown: "প্রযোজ্য নয়",
    modalAvailability: "প্রাপ্যতা",
    modalTollFree: "টোল-ফ্রি",
    modalCoverage: "আওতা",
    modalVerified: "যাচাইয়ের তারিখ",
    modalSource: "অফিসিয়াল উৎস",

    categories: {
      "All": "সব",
      "Emergency": "জরুরি",
      "Healthcare": "স্বাস্থ্যসেবা",
      "Government": "সরকারি",
      "Law & Order": "আইন ও শৃঙ্খলা",
      "Women & Children": "নারী ও শিশু"
    },

    footerBrand: "জরুরি (Joruri) — গণসেবামূলক তথ্য ডিরেক্টরি",
    footerDisclaimer: "ডিসক্লেইমার: জরুরি একটি স্বাধীন জনসেবামূলক তথ্য প্ল্যাটফর্ম। এটি কোনো সরকারি প্রাতিষ্ঠানিক ওয়েবসাইট নয়।",
    footerCopyright: "© ২০২৬ জরুরি। তথ্যই অগ্রাধিকার।"
  }
};

// 2. STATE MANAGEMENT
let currentLang = localStorage.getItem('joruri_lang') || 'en';
let currentView = 'home';
if (window.location.hash === '#phone' || window.location.hash === '#directory') {
  currentView = 'phone';
} else if (window.location.hash === '#about') {
  currentView = 'about';
}
let currentCategory = 'All';
let searchQuery = '';
const selectedIds = new Set();
let activeModalItem = null;

const categoryKeys = ["All", "Emergency", "Healthcare", "Government", "Law & Order", "Women & Children"];

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageControls();
  setupNavigationControls();
  setupSearchInput();
  setupSelectionBarListeners();
  setupModalEventListeners();
  
  // Apply Language & Render Views
  applyLanguage(currentLang);
  switchView(currentView);
});

// 4. LANGUAGE SWITCHER SETUP
function setupLanguageControls() {
  const btnEn = document.getElementById('lang-en');
  const btnBn = document.getElementById('lang-bn');

  if (btnEn) {
    btnEn.addEventListener('click', () => switchLanguage('en'));
  }
  if (btnBn) {
    btnBn.addEventListener('click', () => switchLanguage('bn'));
  }
}

function switchLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem('joruri_lang', lang);
  applyLanguage(lang);
}

// 5. VIEW NAVIGATION CONTROLLER
function setupNavigationControls() {
  const navHome = document.getElementById('nav-home');
  const navPhone = document.getElementById('nav-phone');
  const navAbout = document.getElementById('nav-about');
  const brandLink = document.getElementById('brand-link');
  const btnExplore = document.getElementById('home-btn-explore');

  if (navHome) {
    navHome.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
    });
  }

  if (navPhone) {
    navPhone.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('phone');
    });
  }

  if (navAbout) {
    navAbout.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('about');
    });
  }

  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
    });
  }

  if (btnExplore) {
    btnExplore.addEventListener('click', () => {
      switchView('phone');
    });
  }

  window.addEventListener('hashchange', () => {
    let hashView = 'home';
    if (window.location.hash === '#phone' || window.location.hash === '#directory') {
      hashView = 'phone';
    } else if (window.location.hash === '#about') {
      hashView = 'about';
    }
    if (hashView !== currentView) {
      switchView(hashView);
    }
  });
}

function switchView(viewName) {
  currentView = viewName;

  const viewHome = document.getElementById('view-home');
  const viewDirectory = document.getElementById('view-directory');
  const viewAbout = document.getElementById('view-about');
  const navHome = document.getElementById('nav-home');
  const navPhone = document.getElementById('nav-phone');
  const navAbout = document.getElementById('nav-about');

  if (viewHome) viewHome.style.display = 'none';
  if (viewDirectory) viewDirectory.style.display = 'none';
  if (viewAbout) viewAbout.style.display = 'none';

  [navHome, navPhone, navAbout].forEach(tab => {
    if (tab) {
      tab.classList.remove('active');
      tab.removeAttribute('aria-current');
    }
  });

  if (viewName === 'home') {
    if (viewHome) viewHome.style.display = 'block';
    if (navHome) {
      navHome.classList.add('active');
      navHome.setAttribute('aria-current', 'page');
    }
    window.location.hash = 'home';
  } else if (viewName === 'about') {
    if (viewAbout) viewAbout.style.display = 'block';
    if (navAbout) {
      navAbout.classList.add('active');
      navAbout.setAttribute('aria-current', 'page');
    }
    window.location.hash = 'about';
  } else {
    if (viewDirectory) viewDirectory.style.display = 'block';
    if (navPhone) {
      navPhone.classList.add('active');
      navPhone.setAttribute('aria-current', 'page');
    }
    window.location.hash = 'phone';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. SEARCH INPUT LISTENER
function setupSearchInput() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderFilteredContacts();
  });
}

// 7. SELECTION BAR LISTENERS
function setupSelectionBarListeners() {
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const clearSelectionBtn = document.getElementById('clear-selection-btn');
  const btnExportVCard = document.getElementById('btn-export-vcard');
  const btnExportCSV = document.getElementById('btn-export-csv');

  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', (e) => {
      toggleSelectAllVisible(e.target.checked);
    });
  }

  if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener('click', () => {
      clearSelection();
    });
  }

  if (btnExportVCard) {
    btnExportVCard.addEventListener('click', () => {
      exportSelectedVCard();
    });
  }

  if (btnExportCSV) {
    btnExportCSV.addEventListener('click', () => {
      exportSelectedCSV();
    });
  }
}

// 8. APPLY LANGUAGE TO UI & RE-RENDER
function applyLanguage(lang) {
  const t = i18n[lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Language Buttons Active State
  const btnEn = document.getElementById('lang-en');
  const btnBn = document.getElementById('lang-bn');
  if (btnEn && btnBn) {
    btnEn.classList.toggle('active', lang === 'en');
    btnBn.classList.toggle('active', lang === 'bn');
  }

  // Update Header Navigation Labels
  const navHome = document.getElementById('nav-home');
  const navPhone = document.getElementById('nav-phone');
  const navAbout = document.getElementById('nav-about');
  const navWebsites = document.getElementById('nav-websites');
  const navApps = document.getElementById('nav-apps');

  if (navHome) navHome.textContent = t.navHome;
  if (navPhone) navPhone.textContent = t.navPhone;
  if (navAbout) navAbout.textContent = t.navAbout;
  if (navWebsites) navWebsites.innerHTML = `${t.navWebsites} <span class="badge-soon">${t.soonBadge}</span>`;
  if (navApps) navApps.innerHTML = `${t.navApps} <span class="badge-soon">${t.soonBadge}</span>`;

  // --- A. HOME PAGE TEXT UPDATES ---
  const homeHeroTitle = document.getElementById('home-hero-title');
  const homeHeroDesc = document.getElementById('home-hero-desc');
  const labelHomeExplore = document.getElementById('label-home-explore');
  const labelHomeLearn = document.getElementById('label-home-learn');

  if (homeHeroTitle) homeHeroTitle.textContent = t.homeHeroTitle;
  if (homeHeroDesc) homeHeroDesc.textContent = t.homeHeroDesc;
  if (labelHomeExplore) labelHomeExplore.textContent = t.homeExploreBtn;
  if (labelHomeLearn) labelHomeLearn.textContent = t.homeLearnBtn;

  const labelFlow1 = document.getElementById('label-flow-1');
  const labelFlow2 = document.getElementById('label-flow-2');
  const labelFlow3 = document.getElementById('label-flow-3');
  const labelFlow4 = document.getElementById('label-flow-4');
  if (labelFlow1) labelFlow1.textContent = t.labelFlow1;
  if (labelFlow2) labelFlow2.textContent = t.labelFlow2;
  if (labelFlow3) labelFlow3.textContent = t.labelFlow3;
  if (labelFlow4) labelFlow4.textContent = t.labelFlow4;

  const homeWorkflowTitle = document.getElementById('home-workflow-title');
  const homeStep1Title = document.getElementById('home-step1-title');
  const homeStep1Desc = document.getElementById('home-step1-desc');
  const homeStep2Title = document.getElementById('home-step2-title');
  const homeStep2Desc = document.getElementById('home-step2-desc');
  const homeStep3Title = document.getElementById('home-step3-title');
  const homeStep3Desc = document.getElementById('home-step3-desc');
  const homeStep4Title = document.getElementById('home-step4-title');
  const homeStep4Desc = document.getElementById('home-step4-desc');

  if (homeWorkflowTitle) homeWorkflowTitle.textContent = t.homeWorkflowTitle;
  if (homeStep1Title) homeStep1Title.textContent = t.homeStep1Title;
  if (homeStep1Desc) homeStep1Desc.textContent = t.homeStep1Desc;
  if (homeStep2Title) homeStep2Title.textContent = t.homeStep2Title;
  if (homeStep2Desc) homeStep2Desc.textContent = t.homeStep2Desc;
  if (homeStep3Title) homeStep3Title.textContent = t.homeStep3Title;
  if (homeStep3Desc) homeStep3Desc.textContent = t.homeStep3Desc;
  if (homeStep4Title) homeStep4Title.textContent = t.homeStep4Title;
  if (homeStep4Desc) homeStep4Desc.textContent = t.homeStep4Desc;

  const homeCapabilitiesTitle = document.getElementById('home-capabilities-title');
  const homeStat1Number = document.getElementById('home-stat1-number');
  const homeStat1Label = document.getElementById('home-stat1-label');
  const homeStat2Title = document.getElementById('home-stat2-title');
  const homeStat2Desc = document.getElementById('home-stat2-desc');
  const homeStat3Number = document.getElementById('home-stat3-number');
  const homeStat3Label = document.getElementById('home-stat3-label');

  const totalContactsCount = (typeof contactsData !== 'undefined' && Array.isArray(contactsData)) ? contactsData.length : 14;

  if (homeCapabilitiesTitle) homeCapabilitiesTitle.textContent = t.homeCapabilitiesTitle;
  if (homeStat1Number) homeStat1Number.textContent = t.homeStat1Number.replace('{count}', formatCount(totalContactsCount, lang));
  if (homeStat1Label) homeStat1Label.textContent = t.homeStat1Label;
  if (homeStat2Title) homeStat2Title.textContent = t.homeStat2Title;
  if (homeStat2Desc) homeStat2Desc.textContent = t.homeStat2Desc;
  if (homeStat3Number) homeStat3Number.textContent = t.homeStat3Number;
  if (homeStat3Label) homeStat3Label.textContent = t.homeStat3Label;

  const homeSaveTitle = document.getElementById('home-save-title');
  const homeSaveDesc = document.getElementById('home-save-desc');
  const homeSaveFlow1 = document.getElementById('home-save-flow1');
  const homeSaveFlow2 = document.getElementById('home-save-flow2');
  const homeSaveFlow3 = document.getElementById('home-save-flow3');
  const homeSaveFlow4 = document.getElementById('home-save-flow4');

  if (homeSaveTitle) homeSaveTitle.textContent = t.homeSaveTitle;
  if (homeSaveDesc) homeSaveDesc.textContent = t.homeSaveDesc;
  if (homeSaveFlow1) homeSaveFlow1.textContent = t.homeSaveFlow1;
  if (homeSaveFlow2) homeSaveFlow2.textContent = t.homeSaveFlow2;
  if (homeSaveFlow3) homeSaveFlow3.textContent = t.homeSaveFlow3;
  if (homeSaveFlow4) homeSaveFlow4.textContent = t.homeSaveFlow4;

  const homeEmergencyTitle = document.getElementById('home-emergency-title');
  if (homeEmergencyTitle) homeEmergencyTitle.textContent = t.homeEmergencyTitle;

  // --- B. DIRECTORY VIEW TEXT UPDATES ---
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroDesc) heroDesc.textContent = t.heroDesc;

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const selectAllText = document.getElementById('select-all-text');
  const clearSelectionBtn = document.getElementById('clear-selection-btn');
  const labelExportVCard = document.getElementById('label-export-vcard');
  const labelExportCSV = document.getElementById('label-export-csv');

  if (selectAllText) selectAllText.textContent = t.selectAll;
  if (clearSelectionBtn) clearSelectionBtn.textContent = t.clearSelection;
  if (labelExportVCard) labelExportVCard.textContent = t.exportVCard;
  if (labelExportCSV) labelExportCSV.textContent = t.exportCSV;

  // Render Dynamic Home Emergency Cards & Category Filters
  renderHomeEmergencyCards();
  renderCategoryFilters();
  renderFilteredContacts();

  // If modal is open, refresh modal in new language
  if (activeModalItem) {
    openDetailsModal(activeModalItem.id);
  }

  // --- C. ABOUT PAGE TEXT UPDATES ---
  const aboutBadge = document.getElementById('about-hero-badge');
  const aboutHeroTitle = document.getElementById('about-hero-title');
  const aboutHeroDesc = document.getElementById('about-hero-desc');
  if (aboutBadge) aboutBadge.textContent = t.aboutBadge;
  if (aboutHeroTitle) aboutHeroTitle.textContent = t.aboutHeroTitle;
  if (aboutHeroDesc) aboutHeroDesc.textContent = t.aboutHeroDesc;

  const aboutWhyTitle = document.getElementById('about-why-title');
  const aboutWhyP1 = document.getElementById('about-why-p1');
  const aboutWhyP2 = document.getElementById('about-why-p2');
  const aboutWhyP3 = document.getElementById('about-why-p3');
  if (aboutWhyTitle) aboutWhyTitle.textContent = t.aboutWhyTitle;
  if (aboutWhyP1) aboutWhyP1.textContent = t.aboutWhyP1;
  if (aboutWhyP2) aboutWhyP2.textContent = t.aboutWhyP2;
  if (aboutWhyP3) aboutWhyP3.textContent = t.aboutWhyP3;

  const aboutPurposeTitle = document.getElementById('about-purpose-title');
  const aboutPurposeMain = document.getElementById('about-purpose-main');
  const aboutPillar1Title = document.getElementById('about-pillar1-title');
  const aboutPillar1Desc = document.getElementById('about-pillar1-desc');
  const aboutPillar2Title = document.getElementById('about-pillar2-title');
  const aboutPillar2Desc = document.getElementById('about-pillar2-desc');
  const aboutPillar3Title = document.getElementById('about-pillar3-title');
  const aboutPillar3Desc = document.getElementById('about-pillar3-desc');

  if (aboutPurposeTitle) aboutPurposeTitle.textContent = t.aboutPurposeTitle;
  if (aboutPurposeMain) aboutPurposeMain.textContent = t.aboutPurposeMain;
  if (aboutPillar1Title) aboutPillar1Title.textContent = t.aboutPillar1Title;
  if (aboutPillar1Desc) aboutPillar1Desc.textContent = t.aboutPillar1Desc;
  if (aboutPillar2Title) aboutPillar2Title.textContent = t.aboutPillar2Title;
  if (aboutPillar2Desc) aboutPillar2Desc.textContent = t.aboutPillar2Desc;
  if (aboutPillar3Title) aboutPillar3Title.textContent = t.aboutPillar3Title;
  if (aboutPillar3Desc) aboutPillar3Desc.textContent = t.aboutPillar3Desc;

  const aboutMissionTitle = document.getElementById('about-mission-title');
  const aboutMissionStatement = document.getElementById('about-mission-statement');
  const aboutMissionDesc = document.getElementById('about-mission-desc');
  if (aboutMissionTitle) aboutMissionTitle.textContent = t.aboutMissionTitle;
  if (aboutMissionStatement) aboutMissionStatement.textContent = t.aboutMissionStatement;
  if (aboutMissionDesc) aboutMissionDesc.textContent = t.aboutMissionDesc;

  const aboutProvidesTitle = document.getElementById('about-provides-title');
  const aboutCard1Title = document.getElementById('about-card1-title');
  const aboutCard1Desc = document.getElementById('about-card1-desc');
  const aboutCard2Title = document.getElementById('about-card2-title');
  const aboutCard2Desc = document.getElementById('about-card2-desc');
  const aboutCard3Title = document.getElementById('about-card3-title');
  const aboutCard3Desc = document.getElementById('about-card3-desc');
  const aboutCard4Title = document.getElementById('about-card4-title');
  const aboutCard4Desc = document.getElementById('about-card4-desc');

  if (aboutProvidesTitle) aboutProvidesTitle.textContent = t.aboutProvidesTitle;
  if (aboutCard1Title) aboutCard1Title.textContent = t.aboutCard1Title;
  if (aboutCard1Desc) aboutCard1Desc.textContent = t.aboutCard1Desc;
  if (aboutCard2Title) aboutCard2Title.textContent = t.aboutCard2Title;
  if (aboutCard2Desc) aboutCard2Desc.textContent = t.aboutCard2Desc;
  if (aboutCard3Title) aboutCard3Title.textContent = t.aboutCard3Title;
  if (aboutCard3Desc) aboutCard3Desc.textContent = t.aboutCard3Desc;
  if (aboutCard4Title) aboutCard4Title.textContent = t.aboutCard4Title;
  if (aboutCard4Desc) aboutCard4Desc.textContent = t.aboutCard4Desc;

  const aboutEveryoneTitle = document.getElementById('about-everyone-title');
  const aboutEveryoneIntro = document.getElementById('about-everyone-intro');
  const aboutEveryoneItem1 = document.getElementById('about-everyone-item1');
  const aboutEveryoneItem2 = document.getElementById('about-everyone-item2');
  const aboutEveryoneItem3 = document.getElementById('about-everyone-item3');
  const aboutEveryoneItem4 = document.getElementById('about-everyone-item4');

  if (aboutEveryoneTitle) aboutEveryoneTitle.textContent = t.aboutEveryoneTitle;
  if (aboutEveryoneIntro) aboutEveryoneIntro.textContent = t.aboutEveryoneIntro;
  if (aboutEveryoneItem1) aboutEveryoneItem1.textContent = t.aboutEveryoneItem1;
  if (aboutEveryoneItem2) aboutEveryoneItem2.textContent = t.aboutEveryoneItem2;
  if (aboutEveryoneItem3) aboutEveryoneItem3.textContent = t.aboutEveryoneItem3;
  if (aboutEveryoneItem4) aboutEveryoneItem4.textContent = t.aboutEveryoneItem4;

  const aboutDisclaimerTitle = document.getElementById('about-disclaimer-title');
  const aboutDisclaimerBanner = document.getElementById('about-disclaimer-banner');
  const aboutDisclaimerText = document.getElementById('about-disclaimer-text');

  if (aboutDisclaimerTitle) aboutDisclaimerTitle.textContent = t.aboutDisclaimerTitle;
  if (aboutDisclaimerBanner) aboutDisclaimerBanner.textContent = t.aboutDisclaimerBanner;
  if (aboutDisclaimerText) aboutDisclaimerText.textContent = t.aboutDisclaimerText;

  // Footer Text
  const footerBrand = document.getElementById('footer-brand');
  const footerDisclaimer = document.getElementById('footer-disclaimer');
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerBrand) footerBrand.textContent = t.footerBrand;
  if (footerDisclaimer) footerDisclaimer.textContent = t.footerDisclaimer;
  if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
}

// 9. RENDER TOP EMERGENCY NUMBERS FOR HOME PAGE
function renderHomeEmergencyCards() {
  const container = document.getElementById('home-emergency-grid');
  if (!container || typeof contactsData === 'undefined' || !Array.isArray(contactsData)) return;

  const t = i18n[currentLang];
  const emergencyIds = ["nat_999", "helpline_109", "child_1098"];
  const featured = contactsData.filter(c => emergencyIds.includes(c.id));

  container.innerHTML = featured.map(item => {
    const isSelected = selectedIds.has(item.id);
    const title = currentLang === 'bn' ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
    const description = currentLang === 'bn' ? (item.description_bn || item.description_en) : (item.description_en || item.description_bn);
    
    const categoryLabel = t.categories[item.category] || item.category;
    const isEmergency = item.category === 'Emergency' || item.category === 'Women & Children';

    return `
      <article 
        class="contact-card emergency-card ${isSelected ? 'selected' : ''}" 
        data-id="${item.id}"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="${title}"
        onclick="openDetailsModal('${item.id}')"
        onkeydown="handleCardKeydown(event, '${item.id}')"
      >
        <div class="card-header">
          <div class="card-header-left">
            <span class="category-badge badge-emergency">${categoryLabel}</span>
          </div>
          <div class="extra-badges-container">
            <span class="badge-247">${t.badge247}</span>
            <span class="badge-tollfree">${t.tollFree}</span>
          </div>
        </div>

        <div class="card-body">
          <h2 class="service-title">${title}</h2>
          <p class="service-description">${description}</p>
          <div class="phone-number-display">${item.phone_number}</div>
        </div>

        <div class="card-footer-wrapper">
          <div class="card-actions">
            <a 
              href="tel:${item.phone_number}" 
              class="btn btn-call btn-call-emergency"
              onclick="event.stopPropagation()"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              ${t.callBtn} ${item.phone_number}
            </a>
          </div>
          <div class="card-hover-affordance">
            <span class="view-details-text">${t.viewDetails}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 10. RENDER CATEGORY FILTER BUTTONS
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const tCategories = i18n[currentLang].categories;

  container.innerHTML = categoryKeys.map(catKey => {
    const isActive = catKey === currentCategory;
    const label = tCategories[catKey] || catKey;
    return `
      <button 
        class="category-btn ${isActive ? 'active' : ''}" 
        type="button" 
        onclick="selectCategory('${catKey}')"
      >${label}</button>
    `;
  }).join('');
}

// 11. SELECT CATEGORY ACTION
function selectCategory(catKey) {
  currentCategory = catKey;
  renderCategoryFilters();
  renderFilteredContacts();
}

// 12. GET CURRENTLY VISIBLE CONTACTS
function getCurrentlyVisibleContacts() {
  if (typeof contactsData === 'undefined' || !Array.isArray(contactsData)) return [];

  return contactsData.filter(item => {
    const matchCategory = (currentCategory === 'All') || (item.category === currentCategory);
    let matchSearch = true;
    if (searchQuery) {
      const q = searchQuery;
      matchSearch = (
        (item.service_name_en && item.service_name_en.toLowerCase().includes(q)) ||
        (item.service_name_bn && item.service_name_bn.toLowerCase().includes(q)) ||
        (item.phone_number && item.phone_number.includes(q)) ||
        (item.description_en && item.description_en.toLowerCase().includes(q)) ||
        (item.description_bn && item.description_bn.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (item.organization_en && item.organization_en.toLowerCase().includes(q)) ||
        (item.organization_bn && item.organization_bn.toLowerCase().includes(q))
      );
    }
    return matchCategory && matchSearch;
  });
}

// 13. FILTER LOGIC & CARD RENDERING FOR DIRECTORY
function renderFilteredContacts() {
  const grid = document.getElementById('contact-grid');
  if (!grid) return;

  if (typeof contactsData === 'undefined' || !Array.isArray(contactsData)) {
    grid.innerHTML = '<p class="error-msg">Error: Contact dataset could not be loaded.</p>';
    return;
  }

  const t = i18n[currentLang];
  const filtered = getCurrentlyVisibleContacts();

  // Update compact selection bar UI based on visible items
  updateSelectionBarUI(filtered);

  // Empty State handling
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3 class="empty-title">${t.emptyTitle}</h3>
        <p class="empty-desc">${t.emptyDesc}</p>
        <button class="btn btn-copy" type="button" onclick="resetFilters()">${t.resetFiltersBtn}</button>
      </div>
    `;
    return;
  }

  // Render cards
  grid.innerHTML = filtered.map(item => {
    const isSelected = selectedIds.has(item.id);
    const title = currentLang === 'bn' ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
    const description = currentLang === 'bn' ? (item.description_bn || item.description_en) : (item.description_en || item.description_bn);
    
    const categoryLabel = t.categories[item.category] || item.category;
    const isEmergency = item.category === 'Emergency';

    // Dynamic Badges
    const is247 = item.availability === "24/7";
    const isTollFree = item.toll_free === "True" || item.toll_free === true;

    return `
      <article 
        class="contact-card ${isEmergency ? 'emergency-card' : ''} ${isSelected ? 'selected' : ''}" 
        data-id="${item.id}"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="${title}"
        onclick="openDetailsModal('${item.id}')"
        onkeydown="handleCardKeydown(event, '${item.id}')"
      >
        <div class="card-header">
          <div class="card-header-left">
            <label class="card-checkbox-wrapper" title="${t.selectAll}" onclick="event.stopPropagation()">
              <input 
                type="checkbox" 
                class="card-checkbox" 
                ${isSelected ? 'checked' : ''} 
                onchange="event.stopPropagation(); toggleSelectContact('${item.id}', this.checked)"
              >
            </label>
            <span class="category-badge ${isEmergency ? 'badge-emergency' : ''}">${categoryLabel}</span>
          </div>
          <div class="extra-badges-container">
            ${is247 ? `<span class="badge-247">${t.badge247}</span>` : ''}
            ${isTollFree ? `<span class="badge-tollfree">${t.tollFree}</span>` : ''}
          </div>
        </div>

        <div class="card-body">
          <h2 class="service-title">${title}</h2>
          <p class="service-description">${description}</p>
          <div class="phone-number-display">${item.phone_number}</div>
        </div>

        <div class="card-footer-wrapper">
          <div class="card-actions">
            <a 
              href="tel:${item.phone_number}" 
              class="btn btn-call ${isEmergency ? 'btn-call-emergency' : ''}"
              onclick="event.stopPropagation()"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              ${t.callBtn} ${item.phone_number}
            </a>
            <button 
              class="btn btn-copy" 
              type="button" 
              onclick="event.stopPropagation(); copyToClipboard('${item.phone_number}', this)"
            >${t.copyBtn}</button>
          </div>
          <div class="card-hover-affordance">
            <span class="view-details-text">${t.viewDetails}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Keyboard navigation for card
function handleCardKeydown(event, id) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openDetailsModal(id);
  }
}

// 14. SELECTION HANDLERS
function toggleSelectContact(id, isChecked) {
  if (isChecked) {
    selectedIds.add(id);
  } else {
    selectedIds.delete(id);
  }

  const cardElement = document.querySelector(`.contact-card[data-id="${id}"]`);
  if (cardElement) {
    cardElement.classList.toggle('selected', isChecked);
  }

  const visibleItems = getCurrentlyVisibleContacts();
  updateSelectionBarUI(visibleItems);
}

function toggleSelectAllVisible(isChecked) {
  const visibleItems = getCurrentlyVisibleContacts();
  visibleItems.forEach(item => {
    if (isChecked) {
      selectedIds.add(item.id);
    } else {
      selectedIds.delete(item.id);
    }
  });

  renderFilteredContacts();
}

function clearSelection() {
  selectedIds.clear();
  renderFilteredContacts();
}

// 15. UPDATE SELECTION BAR UI
function updateSelectionBarUI(visibleItems = []) {
  const t = i18n[currentLang];
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const countBadge = document.getElementById('selected-count-badge');
  const selectionActions = document.getElementById('selection-actions');

  if (selectAllCheckbox) {
    const allVisibleSelected = visibleItems.length > 0 && visibleItems.every(item => selectedIds.has(item.id));
    selectAllCheckbox.checked = allVisibleSelected;
  }

  const totalSelected = selectedIds.size;

  if (totalSelected > 0) {
    if (countBadge) {
      countBadge.textContent = t.selectedCount.replace('{count}', formatCount(totalSelected, currentLang));
    }
    if (selectionActions) selectionActions.style.display = 'inline-flex';
  } else {
    if (selectionActions) selectionActions.style.display = 'none';
  }
}

// 16. BANGLA NUMERAL FORMATTER
function formatCount(num, lang) {
  if (lang !== 'bn') return num.toString();
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, d => bnDigits[d]);
}

// 17. SERVICE DETAILS MODAL CONTROLLER
function openDetailsModal(id) {
  const item = contactsData.find(c => c.id === id);
  if (!item) return;

  activeModalItem = item;
  const t = i18n[currentLang];
  const modal = document.getElementById('details-modal');
  if (!modal) return;

  const isBn = currentLang === 'bn';
  const title = isBn ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
  const description = isBn ? (item.description_bn || item.description_en) : (item.description_en || item.description_bn);
  const organization = isBn ? (item.organization_bn || item.organization_en) : (item.organization_en || item.organization_bn);

  const categoryLabel = t.categories[item.category] || item.category;
  const isEmergency = item.category === 'Emergency';
  const is247 = item.availability === "24/7";
  const isTollFree = item.toll_free === "True" || item.toll_free === true;

  // Set Badges
  const catBadgeEl = document.getElementById('modal-category-badge');
  if (catBadgeEl) {
    catBadgeEl.textContent = categoryLabel;
    catBadgeEl.className = `category-badge ${isEmergency ? 'badge-emergency' : ''}`;
  }

  const extraBadgesEl = document.getElementById('modal-extra-badges');
  if (extraBadgesEl) {
    extraBadgesEl.innerHTML = `
      ${is247 ? `<span class="badge-247">${t.badge247}</span>` : ''}
      ${isTollFree ? `<span class="badge-tollfree">${t.tollFree}</span>` : ''}
    `;
  }

  // Set Header Content
  const titleEl = document.getElementById('modal-service-title');
  const orgEl = document.getElementById('modal-organization');
  if (titleEl) titleEl.textContent = title;
  if (orgEl) orgEl.textContent = organization || '';

  // Set Body Content
  const descEl = document.getElementById('modal-description');
  const phoneEl = document.getElementById('modal-phone-display');
  if (descEl) descEl.textContent = description;
  if (phoneEl) phoneEl.textContent = item.phone_number;

  // Set Grid Labels & Values
  const lblAvail = document.getElementById('label-modal-availability');
  const valAvail = document.getElementById('modal-availability');
  if (lblAvail) lblAvail.textContent = t.modalAvailability;
  if (valAvail) valAvail.textContent = is247 ? t.badge247 : (item.availability || t.unknown);

  const lblToll = document.getElementById('label-modal-tollfree');
  const valToll = document.getElementById('modal-tollfree');
  if (lblToll) lblToll.textContent = t.modalTollFree;
  if (valToll) valToll.textContent = isTollFree ? t.yes : (item.toll_free === "False" ? t.no : t.unknown);

  const lblCov = document.getElementById('label-modal-coverage');
  const valCov = document.getElementById('modal-coverage');
  if (lblCov) lblCov.textContent = t.modalCoverage;
  if (valCov) valCov.textContent = item.coverage || t.unknown;

  const lblVer = document.getElementById('label-modal-verified');
  const valVer = document.getElementById('modal-verified');
  if (lblVer) lblVer.textContent = t.modalVerified;
  if (valVer) valVer.textContent = item.last_verified || t.unknown;

  // Set Source Link
  const sourceWrapper = document.getElementById('modal-source-wrapper');
  const lblSource = document.getElementById('label-modal-source');
  const sourceLink = document.getElementById('modal-source-link');
  if (lblSource) lblSource.textContent = t.modalSource + ':';
  if (item.source_url && sourceLink) {
    sourceLink.href = item.source_url;
    sourceLink.textContent = item.source_name || 'Link ↗';
    if (sourceWrapper) sourceWrapper.style.display = 'flex';
  } else if (sourceWrapper) {
    sourceWrapper.style.display = 'none';
  }

  // Set Footer Action Buttons
  const btnCall = document.getElementById('modal-btn-call');
  const btnCopy = document.getElementById('modal-btn-copy');

  if (btnCall) {
    btnCall.href = `tel:${item.phone_number}`;
    btnCall.className = `btn btn-call ${isEmergency ? 'btn-call-emergency' : ''}`;
    btnCall.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      ${t.callBtn} ${item.phone_number}
    `;
  }

  if (btnCopy) {
    btnCopy.onclick = (e) => {
      e.stopPropagation();
      copyToClipboard(item.phone_number, btnCopy);
    };
  }

  // Show Modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeDetailsModal() {
  const modal = document.getElementById('details-modal');
  if (modal) {
    modal.style.display = 'none';
  }
  document.body.style.overflow = '';
  activeModalItem = null;
}

function setupModalEventListeners() {
  const modal = document.getElementById('details-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDetailsModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDetailsModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModalItem) {
      closeDetailsModal();
    }
  });
}

// 18. MINIMAL vCARD EXPORT (.vcf)
function exportSelectedVCard() {
  const selectedItems = contactsData.filter(item => selectedIds.has(item.id));
  if (selectedItems.length === 0) return;

  const isBn = currentLang === 'bn';
  let vcard = '';

  selectedItems.forEach(item => {
    const name = isBn ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
    vcard += 'BEGIN:VCARD\r\n';
    vcard += 'VERSION:3.0\r\n';
    vcard += `FN:${name}\r\n`;
    vcard += `TEL;TYPE=CELL:${item.phone_number}\r\n`;
    vcard += 'END:VCARD\r\n';
  });

  const fileName = isBn ? 'joruri-contacts-bn.vcf' : 'joruri-contacts-en.vcf';
  downloadFile(vcard, fileName, 'text/vcard;charset=utf-8');
}

// 19. MINIMAL CSV EXPORT (.csv) WITH UTF-8 BOM
function exportSelectedCSV() {
  const selectedItems = contactsData.filter(item => selectedIds.has(item.id));
  if (selectedItems.length === 0) return;

  const isBn = currentLang === 'bn';
  const nameHeader = isBn ? 'নাম' : 'Name';
  const phoneHeader = isBn ? 'ফোন নম্বর' : 'Phone';

  let csv = '\uFEFF';
  csv += `"${nameHeader}","${phoneHeader}"\r\n`;

  selectedItems.forEach(item => {
    const name = isBn ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
    const cleanName = name.replace(/"/g, '""');
    const phone = item.phone_number.replace(/"/g, '""');
    csv += `"${cleanName}","${phone}"\r\n`;
  });

  const fileName = isBn ? 'joruri-contacts-bn.csv' : 'joruri-contacts-en.csv';
  downloadFile(csv, fileName, 'text/csv;charset=utf-8');
}

// Helper to trigger browser file download
function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 20. RESET FILTERS ACTION
function resetFilters() {
  currentCategory = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilters();
  renderFilteredContacts();
}

// 21. COPY TO CLIPBOARD HELPER
function copyToClipboard(text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showCopyFeedback(btnElement)).catch(() => fallbackCopy(text, btnElement));
  } else {
    fallbackCopy(text, btnElement);
  }
}

function fallbackCopy(text, btnElement) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showCopyFeedback(btnElement);
}

function showCopyFeedback(btnElement) {
  if (!btnElement) return;
  const originalText = i18n[currentLang].copyBtn;
  btnElement.textContent = i18n[currentLang].copiedMsg;
  btnElement.classList.add('copied');
  setTimeout(() => {
    btnElement.textContent = originalText;
    btnElement.classList.remove('copied');
  }, 1500);
}
