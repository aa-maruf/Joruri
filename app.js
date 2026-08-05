/* ==========================================================================
   JORURI (জরুরি) — App Logic & Service Details Modal Implementation
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
let currentCategory = 'All';
let searchQuery = '';
const selectedIds = new Set();
let activeModalItem = null;

const categoryKeys = ["All", "Emergency", "Healthcare", "Government", "Law & Order", "Women & Children"];

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageControls();
  setupSearchInput();
  setupSelectionBarListeners();
  setupModalEventListeners();
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

// 7. APPLY LANGUAGE TO UI & RE-RENDER
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

  if (selectAllText) selectAllText.textContent = t.selectAll;
  if (clearSelectionBtn) clearSelectionBtn.textContent = t.clearSelection;
  if (labelExportVCard) labelExportVCard.textContent = t.exportVCard;
  if (labelExportCSV) labelExportCSV.textContent = t.exportCSV;

  // Render Category Filter Buttons
  renderCategoryFilters();

  // Render Contacts Grid & Selection Bar UI
  renderFilteredContacts();

  // If modal is currently open, refresh modal content in new language
  if (activeModalItem) {
    openDetailsModal(activeModalItem.id);
  }

  // Update Footer Text
  const footerBrand = document.getElementById('footer-brand');
  const footerDisclaimer = document.getElementById('footer-disclaimer');
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerBrand) footerBrand.textContent = t.footerBrand;
  if (footerDisclaimer) footerDisclaimer.textContent = t.footerDisclaimer;
  if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
}

// 8. RENDER CATEGORY FILTER BUTTONS
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

// 9. SELECT CATEGORY ACTION
function selectCategory(catKey) {
  currentCategory = catKey;
  renderCategoryFilters();
  renderFilteredContacts();
}

// 10. GET CURRENTLY VISIBLE CONTACTS
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

// 11. FILTER LOGIC & CARD RENDERING
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

// 12. SELECTION HANDLERS
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

// 13. UPDATE SELECTION BAR UI
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

// 14. BANGLA NUMERAL FORMATTER
function formatCount(num, lang) {
  if (lang !== 'bn') return num.toString();
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, d => bnDigits[d]);
}

// 15. SERVICE DETAILS MODAL CONTROLLER
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
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
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

// 16. MINIMAL vCARD EXPORT (.vcf)
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

// 17. MINIMAL CSV EXPORT (.csv) WITH UTF-8 BOM
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

// 18. RESET FILTERS ACTION
function resetFilters() {
  currentCategory = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilters();
  renderFilteredContacts();
}

// 19. COPY TO CLIPBOARD HELPER
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
