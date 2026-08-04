/* ==========================================================================
   JORURI (জরুরি) — App Logic & Interactive Features (Phase 2 Implementation)
   ========================================================================== */

// 1. I18N DICTIONARY FOR INTERFACE STRINGS
const i18n = {
  en: {
    heroTitle: "Important Public-Service Contacts in Bangladesh",
    heroDesc: "Quickly find, copy, and dial emergency hotlines, healthcare support, and official government helplines.",
    searchPlaceholder: "Search by service name, topic, or phone number...",
    navPhone: "Phone Numbers",
    navWebsites: "Websites",
    navApps: "Apps",
    soonBadge: "Soon",
    callBtn: "Call",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    emptyTitle: "No Contacts Found",
    emptyDesc: "No contacts match your current search query or selected category.",
    resetFiltersBtn: "Clear Search & Filters",
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
    heroTitle: "বাংলাদেশের গুরুত্বপূর্ণ সরকারি ও জরুরি নম্বরসমূহ",
    heroDesc: "জরুরি সেবা, স্বাস্থ্যসেবা এবং সরকারি হেল্পলাইন নম্বর সহজে খুঁজুন, কপি করুন এবং সরাসরি কল করুন।",
    searchPlaceholder: "সেবার নাম, বিষয় বা ফোন নম্বর দিয়ে খুঁজুন...",
    navPhone: "ফোন নম্বর",
    navWebsites: "ওয়েবসাইট",
    navApps: "অ্যাপস",
    soonBadge: "শীঘ্রই",
    callBtn: "কল করুন",
    copyBtn: "কপি",
    copiedMsg: "কপি হয়েছে!",
    emptyTitle: "কোনো নম্বর পাওয়া যায়নি",
    emptyDesc: "আপনার অনুসন্ধান বা ফিল্টারের সাথে কোনো সরকারি বা জরুরি সেবা নম্বর মিলছে না।",
    resetFiltersBtn: "অনুসন্ধান রিসেট করুন",
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
let currentCategory = 'All';
let searchQuery = '';

const categoryKeys = ["All", "Emergency", "Healthcare", "Government", "Law & Order", "Women & Children"];

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageControls();
  setupSearchInput();
  applyLanguage(currentLang);
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

// 5. SEARCH INPUT LISTENER
function setupSearchInput() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderFilteredContacts();
  });
}

// 6. APPLY LANGUAGE TO UI & RE-RENDER
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
  const navPhone = document.getElementById('nav-phone');
  const navWebsites = document.getElementById('nav-websites');
  const navApps = document.getElementById('nav-apps');
  if (navPhone) navPhone.textContent = t.navPhone;
  if (navWebsites) navWebsites.innerHTML = `${t.navWebsites} <span class="badge-soon">${t.soonBadge}</span>`;
  if (navApps) navApps.innerHTML = `${t.navApps} <span class="badge-soon">${t.soonBadge}</span>`;

  // Update Hero Section Text
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroDesc) heroDesc.textContent = t.heroDesc;

  // Update Search Placeholder
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  // Render Category Filter Buttons
  renderCategoryFilters();

  // Render Contacts Grid
  renderFilteredContacts();

  // Update Footer Text
  const footerBrand = document.getElementById('footer-brand');
  const footerDisclaimer = document.getElementById('footer-disclaimer');
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerBrand) footerBrand.textContent = t.footerBrand;
  if (footerDisclaimer) footerDisclaimer.textContent = t.footerDisclaimer;
  if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
}

// 7. RENDER CATEGORY FILTER BUTTONS
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

// 8. SELECT CATEGORY ACTION
function selectCategory(catKey) {
  currentCategory = catKey;
  renderCategoryFilters();
  renderFilteredContacts();
}

// 9. FILTER LOGIC & CARD RENDERING
function renderFilteredContacts() {
  const grid = document.getElementById('contact-grid');
  if (!grid) return;

  if (typeof contactsData === 'undefined' || !Array.isArray(contactsData)) {
    grid.innerHTML = '<p class="error-msg">Error: Contact dataset could not be loaded.</p>';
    return;
  }

  const t = i18n[currentLang];

  // Filter contacts by active category and search query
  const filtered = contactsData.filter(item => {
    // Category match
    const matchCategory = (currentCategory === 'All') || (item.category === currentCategory);

    // Search query match
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
    // Select language-specific title and description
    const title = currentLang === 'bn' ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
    const description = currentLang === 'bn' ? (item.description_bn || item.description_en) : (item.description_en || item.description_bn);
    
    const categoryLabel = t.categories[item.category] || item.category;
    const isEmergency = item.category === 'Emergency';

    return `
      <article class="contact-card ${isEmergency ? 'emergency-card' : ''}" data-id="${item.id}">
        <div class="card-header">
          <span class="category-badge ${isEmergency ? 'badge-emergency' : ''}">${categoryLabel}</span>
        </div>
        <div class="card-body">
          <h2 class="service-title">${title}</h2>
          <p class="service-description">${description}</p>
          <div class="phone-number-display">${item.phone_number}</div>
        </div>
        <div class="card-actions">
          <a href="tel:${item.phone_number}" class="btn btn-call ${isEmergency ? 'btn-call-emergency' : ''}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            ${t.callBtn} ${item.phone_number}
          </a>
          <button class="btn btn-copy" type="button" onclick="copyToClipboard('${item.phone_number}', this)">${t.copyBtn}</button>
        </div>
      </article>
    `;
  }).join('');
}

// 10. RESET FILTERS ACTION
function resetFilters() {
  currentCategory = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilters();
  renderFilteredContacts();
}

// 11. COPY TO CLIPBOARD HELPER
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
