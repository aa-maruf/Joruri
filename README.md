# Joruri (জরুরি)

### Bangladesh Public-Service Contact Directory

> *Find the right number. Understand the service. Call when needed.*

---

## ⚡ TL;DR

**Joruri (জরুরি)** is a lightweight, responsive, bilingual (English & বাংলা) public-service contact directory for Bangladesh. Beyond popular numbers like **999**, it helps citizens quickly discover, search, call, and export (.vcf / .csv) specialized helpline numbers across health, legal, government, and emergency services. Built with pure Vanilla JS and zero backend required.

---

## 🌐 Live Website

🔗 **[joruri.vercel.app](https://joruri.vercel.app/)**

---

## 💡 Mission & Rationale

Important public-service numbers are often difficult to find or remember during moments of need. Furthermore, while most citizens are aware of emergency services like **999**, specialized helplines (e.g., healthcare, legal support, child assistance) remain underutilized simply due to a lack of awareness.

**Joruri** solves this by:
* Centralizing public-service numbers into a single, clutter-free hub.
* Enlightening citizens on the full spectrum of available specialized services.
* Providing direct, frictionless ways to call, copy, or save contact details instantly.

---

## ✨ Features

* 📞 **Quick Access & Categorization:** Browse contacts organized into *Emergency*, *Healthcare*, *Government*, *Law & Order*, and *Women & Children*.
* 🔎 **Real-time Dynamic Search:** Filter directory instantly by service name, topic, phone number, or key topics as you type.
* 🌐 **Bilingual Interface (EN / bangla):** Seamlessly toggle between English and বাংলা. Language preference is preserved automatically in the browser.
* ☎️ **Click-to-Call:** Native direct calling on supported mobile devices using `tel:` protocol.
* 📋 **One-Click Copying:** Copy phone numbers instantly with localized user feedback.
* 📇 **Contact Exporting:** Export contacts in `.vcf` (vCard) or `.csv` formats to import directly into phone contacts or Google Contacts.
* 📱 **Mobile-First & Responsive:** Optimized interface for seamless use across mobile devices, tablets, and desktops.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Markup & Layout** | HTML5, CSS3 (Responsive Design) |
| **Logic & Scripting** | JavaScript (Vanilla JS ES6+) |
| **Data & Storage** | Structured JS Objects (`contacts.js`), LocalStorage API |
| **Integrations** | Clipboard API, `tel:` URI scheme |
| **Export Engines** | Native JavaScript `.vcf` (vCard) & `.csv` generators |
| **Hosting** | Vercel |

---

## 🎨 Design Philosophy

Joruri adopts a **formal, information-first design** built around usability and speed:
* **National Aesthetic:** Visual identity subtly inspired by Bangladesh's national colors without decorative bloat.
* **Accessibility First:** High contrast ratios, clear typography, and touch-friendly CTA elements.
* **Zero Distractions:** Focused entirely on clear navigation and fast visual discovery.

---

## 📁 Project Structure

```text
Joruri/
│
├── index.html                                 # Page structure & layout
├── style.css                                  # Global styles & responsive rules
├── app.js                                     # UI interaction, search, & export logic
├── contacts.js                                # Core contact dataset (JSON-style)
├── joruri-phone-directory-verified-master.xlsx # Master reference directory sheet
└── README.md                                  # Project documentation
```
