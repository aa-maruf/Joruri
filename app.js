/* ==========================================================================
   JORURI (জরুরি) — App Logic & Google Contacts Integration (Phase 6)
   ========================================================================== */

// Public Google Client ID (Configurable: Set your Client ID from Google Cloud Console)
// Safe to expose on frontend (OAuth 2.0 Web Client PKCE/Token model - NO client secrets!)
const GOOGLE_CLIENT_ID = '583701530039-ltqatn7lfdeikdi5v8f9icbos711jht3.apps.googleusercontent.com';

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
    selectAll: "Select All",
    selectedCount: "{count} selected",
    clearSelection: "Clear Selection",
    exportVCard: "vCard (.vcf)",
    exportCSV: "CSV (.csv)",
    exportGoogle: "Google Contacts",
    connectGoogle: "Connect Google Contacts",
    googleConnected: "Connected",
    disconnectGoogle: "Disconnect",
    addToGoogle: "+ Google",
    modalBulkTitle: "Add {count} contact(s) to Google Contacts?",
    modalBulkDesc: "This will create standard contacts in your personal Google Contacts account using the selected language.",
    modalConfirm: "Confirm",
    modalCancel: "Cancel",
    successSingle: "Added to Google Contacts",
    successBulk: "{count} contact(s) added to Google Contacts!",
    partialSuccess: "{success} contact(s) added. {fail} could not be added.",
    authDenied: "Permission denied. You can still export contacts using CSV or vCard.",
    authRequired: "Please connect Google Contacts first.",
    configRequired: "Google Client ID is required. Please set GOOGLE_CLIENT_ID in app.js.",
    disconnectNotice: "Disconnected from Google Contacts. (Existing Google Contacts were NOT deleted).",
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
    selectAll: "সব নির্বাচন করুন",
    selectedCount: "{count}টি নির্বাচিত",
    clearSelection: "নির্বাচন বাতিল",
    exportVCard: "vCard (.vcf)",
    exportCSV: "CSV (.csv)",
    exportGoogle: "Google Contacts",
    connectGoogle: "Google Contacts সংযুক্ত করুন",
    googleConnected: "সংযুক্ত রয়েছে",
    disconnectGoogle: "বিচ্ছিন্ন করুন",
    addToGoogle: "+ Google",
    modalBulkTitle: "Google Contacts-এ {count}টি পরিচিতি যোগ করবেন?",
    modalBulkDesc: "এর ফলে নির্বাচিত পরিচিতিগুলো আপনার ব্যক্তিগত Google Contacts অ্যাকাউন্টে যুক্ত হবে।",
    modalConfirm: "নিশ্চিত করুন",
    modalCancel: "বাতিল",
    successSingle: "Google Contacts-এ যোগ করা হয়েছে",
    successBulk: "{count}টি পরিচিতি Google Contacts-এ যোগ করা হয়েছে!",
    partialSuccess: "{success}টি পরিচিতি যোগ করা হয়েছে। {fail}টি যোগ করা সম্ভব হয়নি।",
    authDenied: "অনুমতি দেওয়া হয়নি। আপনি তবুও CSV বা vCard মাধ্যমে পরিচিতি এক্সপোর্ট করতে পারবেন।",
    authRequired: "অনুগ্রহ করে প্রথমে Google Contacts সংযুক্ত করুন।",
    configRequired: "Google Client ID প্রয়োজন। অনুগ্রহ করে app.js ফাইল থেকে Client ID সেট করুন।",
    disconnectNotice: "Google Contacts সংযোগ বিচ্ছিন্ন করা হয়েছে। (পূর্বের পরিচিতিগুলো মুছে ফেলা হয়নি)।",
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
const selectedIds = new Set();

// Google Auth State
let googleAccessToken = null;
let googleTokenClient = null;
let googleUserConnected = false;
let googleTokenCallbackHandler = null;

const categoryKeys = ["All", "Emergency", "Healthcare", "Government", "Law & Order", "Women & Children"];

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageControls();
  setupSearchInput();
  setupSelectionBarListeners();
  setupGoogleAuthListeners();
  initGoogleAuth();
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

// 6. SELECTION BAR LISTENERS
function setupSelectionBarListeners() {
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const clearSelectionBtn = document.getElementById('clear-selection-btn');
  const btnExportVCard = document.getElementById('btn-export-vcard');
  const btnExportCSV = document.getElementById('btn-export-csv');
  const btnExportGoogle = document.getElementById('btn-export-google');

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

  if (btnExportGoogle) {
    btnExportGoogle.addEventListener('click', () => {
      promptBulkGoogleExport();
    });
  }
}

// 7. GOOGLE IDENTITY SERVICES AUTH SETUP
function initGoogleAuth() {
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
    return;
  }

  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.startsWith('YOUR_GOOGLE_CLIENT_ID')) {
    return;
  }

  try {
    googleTokenClient = google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/contacts',
      callback: handleGoogleTokenResponse
    });
  } catch (err) {
    console.warn('GIS TokenClient init warning:', err);
  }
}

function setupGoogleAuthListeners() {
  const btnConnect = document.getElementById('btn-connect-google');
  const btnDisconnect = document.getElementById('btn-disconnect-google');

  if (btnConnect) {
    btnConnect.addEventListener('click', () => {
      requestGoogleConnect();
    });
  }

  if (btnDisconnect) {
    btnDisconnect.addEventListener('click', () => {
      disconnectGoogleAccount();
    });
  }
}

function requestGoogleConnect(onSuccessCallback = null) {
  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.startsWith('YOUR_GOOGLE_CLIENT_ID')) {
    showToast(i18n[currentLang].configRequired, 'warning');
    return;
  }

  if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
    showToast(i18n[currentLang].authRequired, 'warning');
    return;
  }

  if (!googleTokenClient) {
    initGoogleAuth();
  }

  if (!googleTokenClient) {
    showToast(i18n[currentLang].configRequired, 'warning');
    return;
  }

  googleTokenCallbackHandler = onSuccessCallback;
  googleTokenClient.requestAccessToken({ prompt: 'consent' });
}

function handleGoogleTokenResponse(response) {
  if (response.error) {
    if (response.error === 'access_denied') {
      showToast(i18n[currentLang].authDenied, 'warning');
    } else {
      showToast(i18n[currentLang].authRequired, 'warning');
    }
    return;
  }

  if (response.access_token) {
    googleAccessToken = response.access_token;
    googleUserConnected = true;
    updateGoogleAuthUI();

    if (googleTokenCallbackHandler) {
      const cb = googleTokenCallbackHandler;
      googleTokenCallbackHandler = null;
      cb();
    }
  }
}

function disconnectGoogleAccount() {
  if (googleAccessToken && typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
    try {
      google.accounts.oauth2.revoke(googleAccessToken, () => {});
    } catch (e) {}
  }
  googleAccessToken = null;
  googleUserConnected = false;
  updateGoogleAuthUI();
  showToast(i18n[currentLang].disconnectNotice, 'info');
}

function updateGoogleAuthUI() {
  const btnConnect = document.getElementById('btn-connect-google');
  const connectedBadge = document.getElementById('google-connected-badge');
  const t = i18n[currentLang];

  const labelConnect = document.getElementById('label-connect-google');
  const labelConnected = document.getElementById('label-google-connected');
  const btnDisconnect = document.getElementById('btn-disconnect-google');

  if (labelConnect) labelConnect.textContent = t.connectGoogle;
  if (labelConnected) labelConnected.textContent = t.googleConnected;
  if (btnDisconnect) btnDisconnect.textContent = t.disconnectGoogle;

  if (googleUserConnected) {
    if (btnConnect) btnConnect.style.display = 'none';
    if (connectedBadge) connectedBadge.style.display = 'inline-flex';
  } else {
    if (btnConnect) btnConnect.style.display = 'inline-flex';
    if (connectedBadge) connectedBadge.style.display = 'none';
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

  // Update Selection Bar Labels
  const selectAllText = document.getElementById('select-all-text');
  const clearSelectionBtn = document.getElementById('clear-selection-btn');
  const labelExportVCard = document.getElementById('label-export-vcard');
  const labelExportCSV = document.getElementById('label-export-csv');
  const labelExportGoogle = document.getElementById('label-export-google');

  if (selectAllText) selectAllText.textContent = t.selectAll;
  if (clearSelectionBtn) clearSelectionBtn.textContent = t.clearSelection;
  if (labelExportVCard) labelExportVCard.textContent = t.exportVCard;
  if (labelExportCSV) labelExportCSV.textContent = t.exportCSV;
  if (labelExportGoogle) labelExportGoogle.textContent = t.exportGoogle;

  updateGoogleAuthUI();

  // Render Category Filter Buttons
  renderCategoryFilters();

  // Render Contacts Grid & Selection Bar UI
  renderFilteredContacts();

  // Update Footer Text
  const footerBrand = document.getElementById('footer-brand');
  const footerDisclaimer = document.getElementById('footer-disclaimer');
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerBrand) footerBrand.textContent = t.footerBrand;
  if (footerDisclaimer) footerDisclaimer.textContent = t.footerDisclaimer;
  if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
}

// 9. RENDER CATEGORY FILTER BUTTONS
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

// 10. SELECT CATEGORY ACTION
function selectCategory(catKey) {
  currentCategory = catKey;
  renderCategoryFilters();
  renderFilteredContacts();
}

// 11. GET CURRENTLY VISIBLE CONTACTS
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

// 12. FILTER LOGIC & CARD RENDERING
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

    return `
      <article class="contact-card ${isEmergency ? 'emergency-card' : ''} ${isSelected ? 'selected' : ''}" data-id="${item.id}">
        <div class="card-header">
          <label class="card-checkbox-wrapper" title="${t.selectAll}">
            <input 
              type="checkbox" 
              class="card-checkbox" 
              ${isSelected ? 'checked' : ''} 
              onchange="toggleSelectContact('${item.id}', this.checked)"
            >
          </label>
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
          <button class="btn btn-google-card" type="button" onclick="handleSingleGoogleAdd('${item.id}', this)" title="${t.addToGoogle}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.545,6.477,2.545,12s4.476,10,10,10c5.766,0,9.65-4.053,9.65-9.821c0-0.781-0.076-1.378-0.218-1.94H12.545z"/></svg>
            ${t.addToGoogle}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// 13. SELECTION HANDLERS
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

// 14. UPDATE SELECTION BAR UI
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

// 15. BANGLA NUMERAL FORMATTER
function formatCount(num, lang) {
  if (lang !== 'bn') return num.toString();
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, d => bnDigits[d]);
}

// 16. SINGLE GOOGLE CONTACT ADDITION
function handleSingleGoogleAdd(id, btnElement) {
  const item = contactsData.find(c => c.id === id);
  if (!item) return;

  if (!googleUserConnected || !googleAccessToken) {
    requestGoogleConnect(() => {
      executeSingleGoogleAdd(item, btnElement);
    });
    return;
  }

  executeSingleGoogleAdd(item, btnElement);
}

async function executeSingleGoogleAdd(item, btnElement) {
  const t = i18n[currentLang];
  const name = currentLang === 'bn' ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);

  try {
    const response = await fetch('https://people.googleapis.com/v1/people:createContact', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${googleAccessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        names: [{ givenName: name }],
        phoneNumbers: [{ value: item.phone_number, type: 'mobile' }]
      })
    });

    if (response.ok) {
      showToast(t.successSingle, 'success');
      if (btnElement) {
        btnElement.textContent = '✓';
        btnElement.classList.add('added');
      }
    } else {
      const errData = await response.json();
      if (response.status === 401) {
        googleAccessToken = null;
        googleUserConnected = false;
        updateGoogleAuthUI();
        showToast(t.authRequired, 'warning');
      } else {
        showToast(t.authRequired, 'warning');
      }
    }
  } catch (err) {
    showToast(t.authRequired, 'warning');
  }
}

// 17. BULK GOOGLE CONTACTS ADDITION WITH MODAL CONFIRMATION
function promptBulkGoogleExport() {
  const selectedItems = contactsData.filter(item => selectedIds.has(item.id));
  if (selectedItems.length === 0) return;

  if (!googleUserConnected || !googleAccessToken) {
    requestGoogleConnect(() => {
      showBulkGoogleModal(selectedItems);
    });
    return;
  }

  showBulkGoogleModal(selectedItems);
}

function showBulkGoogleModal(selectedItems) {
  const t = i18n[currentLang];
  const modal = document.getElementById('google-modal');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const btnConfirm = document.getElementById('modal-btn-confirm');
  const btnCancel = document.getElementById('modal-btn-cancel');

  if (!modal) return;

  if (title) title.textContent = t.modalBulkTitle.replace('{count}', formatCount(selectedItems.length, currentLang));
  if (desc) desc.textContent = t.modalBulkDesc;
  if (btnConfirm) btnConfirm.textContent = t.modalConfirm;
  if (btnCancel) btnCancel.textContent = t.modalCancel;

  modal.style.display = 'flex';

  const cleanup = () => {
    modal.style.display = 'none';
    btnConfirm.onclick = null;
    btnCancel.onclick = null;
  };

  btnCancel.onclick = () => {
    cleanup();
  };

  btnConfirm.onclick = async () => {
    cleanup();
    await executeBulkGoogleAdd(selectedItems);
  };
}

async function executeBulkGoogleAdd(selectedItems) {
  const t = i18n[currentLang];
  let successCount = 0;
  let failCount = 0;

  for (const item of selectedItems) {
    const name = currentLang === 'bn' ? (item.service_name_bn || item.service_name_en) : (item.service_name_en || item.service_name_bn);
    try {
      const response = await fetch('https://people.googleapis.com/v1/people:createContact', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${googleAccessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          names: [{ givenName: name }],
          phoneNumbers: [{ value: item.phone_number, type: 'mobile' }]
        })
      });

      if (response.ok) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (err) {
      failCount++;
    }
  }

  if (failCount === 0) {
    showToast(t.successBulk.replace('{count}', formatCount(successCount, currentLang)), 'success');
  } else if (successCount > 0) {
    showToast(t.partialSuccess.replace('{success}', formatCount(successCount, currentLang)).replace('{fail}', formatCount(failCount, currentLang)), 'warning');
  } else {
    showToast(t.authRequired, 'warning');
  }
}

// 18. TOAST FEEDBACK NOTIFICATIONS
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

// 19. MINIMAL vCARD EXPORT (.vcf)
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

// 20. MINIMAL CSV EXPORT (.csv) WITH UTF-8 BOM
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

// 21. RESET FILTERS ACTION
function resetFilters() {
  currentCategory = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilters();
  renderFilteredContacts();
}

// 22. COPY TO CLIPBOARD HELPER
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
