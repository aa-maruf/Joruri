/* ==========================================================================
   JORURI (জরুরি) — App Logic & Multi-Page View Controller
   ========================================================================== */

// 1. I18N DICTIONARY FOR INTERFACE STRINGS
const i18n = {
  en: {
    // Header & Navigation
    navHome: "Home",
    navPhone: "Emergency Services",
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
let currentView = (window.location.hash === '#phone' || window.location.hash === '#directory') ? 'phone' : 'home';
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
  const brandLink = document.getElementById('brand-link');
  const btnExplore = document.getElementById('home-btn-explore');
  const btnCta = document.getElementById('home-btn-cta');

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
    const hashView = (window.location.hash === '#phone' || window.location.hash === '#directory') ? 'phone' : 'home';
    if (hashView !== currentView) {
      switchView(hashView);
    }
  });
}

function switchView(viewName) {
  currentView = viewName;

  const viewHome = document.getElementById('view-home');
  const viewDirectory = document.getElementById('view-directory');
  const navHome = document.getElementById('nav-home');
  const navPhone = document.getElementById('nav-phone');

  if (viewName === 'home') {
    if (viewHome) viewHome.style.display = 'block';
    if (viewDirectory) viewDirectory.style.display = 'none';
    if (navHome) {
      navHome.classList.add('active');
      navHome.setAttribute('aria-current', 'page');
    }
    if (navPhone) {
      navPhone.classList.remove('active');
      navPhone.removeAttribute('aria-current');
    }
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (viewHome) viewHome.style.display = 'none';
    if (viewDirectory) viewDirectory.style.display = 'block';
    if (navPhone) {
      navPhone.classList.add('active');
      navPhone.setAttribute('aria-current', 'page');
    }
    if (navHome) {
      navHome.classList.remove('active');
      navHome.removeAttribute('aria-current');
    }
    window.location.hash = 'phone';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
  const navWebsites = document.getElementById('nav-websites');
  const navApps = document.getElementById('nav-apps');

  if (navHome) navHome.textContent = t.navHome;
  if (navPhone) navPhone.textContent = t.navPhone;
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
