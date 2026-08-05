# Joruri — জরুরি

### Bangladesh Public-Service Contact Directory

Joruri (জরুরি) is an independent, bilingual public-service contact directory designed to help people quickly find important emergency, healthcare, government, law & order, and other essential service numbers in Bangladesh.

The goal is simple:

> Find the right number. Understand the service. Call when needed.

Joruri is designed to make important public-service contact information easier to discover, use, and save.

---

## 🌐 Live Website

https://joruri.vercel.app/

---

## ✨ Features

### 📞 Quick Access to Important Numbers

Users can quickly find important public-service numbers such as:

- Emergency services
- Government helplines
- Healthcare services
- Law & order services
- Women & children support services

The phone number can be directly called from supported devices.

---

### 🔎 Search

Users can search the directory using:

- Service name
- Topic
- Phone number
- Relevant keywords

Search results update dynamically as the user types.

---

### 🗂️ Category Filtering

Services can be filtered by category.

Current categories include:

- All
- Emergency
- Healthcare
- Government
- Law & Order
- Women & Children

---

### 🌐 English & বাংলা

Joruri supports both:

- English
- বাংলা

The interface and service information switch according to the selected language.

The selected language preference is also preserved between visits.

---

### 📋 Copy Phone Numbers

Users can copy a service number with a single click.

A localized confirmation is displayed after copying.

---

### 📇 Save Contacts

Joruri allows users to select service numbers and export them for saving in their phone contacts.

Supported export formats:

- `.vcf` — vCard
- `.csv` — CSV

Users can then import the exported contacts into a compatible contacts application such as their phone's native Contacts app or Google Contacts.

The exported contact information is intentionally kept simple and useful rather than including unnecessary directory metadata.

---

### ☎️ Click-to-Call

On supported mobile devices, users can directly call a service by selecting its Call action.

---

### 📱 Responsive Design

Joruri is designed for:

- Mobile phones
- Tablets
- Laptops
- Desktop computers

The interface adapts to different screen sizes while keeping important actions easy to access.

---

## 🏠 Project Concept

Joruri is intended to solve a simple problem:

Important public-service numbers are often difficult to remember or find when they are needed.

Instead of searching across different websites or relying on memory, Joruri brings important contact information into one simple directory.

The project focuses on:

- Accessibility
- Simplicity
- Fast discovery
- Clear information
- Bilingual usability
- Easy contact saving

---

## 🎨 Design Philosophy

Joruri follows a clean, formal, information-first design approach.

The visual identity is inspired by Bangladesh's national colors while avoiding excessive decorative elements.

### Design principles

- Clear information hierarchy
- Strong Call-to-Action visibility
- Comfortable spacing
- Easy-to-read typography
- Mobile-first usability
- Minimal unnecessary decoration
- Consistent English and Bengali experiences

---

## 🛠️ Technology

Joruri is currently implemented as a lightweight front-end web application.

Main technologies include:

- HTML
- CSS
- JavaScript
- JSON-based contact data
- Browser Local Storage
- Browser Clipboard API
- `tel:` links
- CSV export
- vCard (`.vcf`) export

The current implementation does not require a traditional backend for its core directory functionality.

---

## 📁 Project Structure

A simplified structure of the project:

```text
Joruri/
│
├── index.html
├── style.css
├── app.js
├── contacts.js
└── README.md