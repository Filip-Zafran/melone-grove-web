# 📁 Melone Grove - Complete File Structure

Übersicht aller Dateien und deren Zweck.

## 📂 Projekt-Ordner

```
melone-grove-web/
│
├── 📄 HTML Dateien (Seiten)
│   ├── index.html              ← HAUPTSEITE - 7 Sections + Footer
│   ├── impressum.html          ← Impressum (Kontaktdaten, Haftung)
│   ├── datenschutz.html        ← DSGVO Datenschutzerklärung
│   └── agb.html                ← Allgemeine Geschäftsbedingungen
│
├── 🎨 Styling & Funktionalität
│   ├── styles.css              ← ALLE CSS Styles (mobile-first, responsive)
│   └── script.js               ← ALLE JavaScript (Navigation, Forms, Cookies)
│
├── 📚 Dokumentation
│   ├── START_HERE.md           ← 👈 BEGIN HERE! Schnellstart Guide
│   ├── README.md               ← Vollständige Dokumentation
│   ├── CHEAT_SHEET.md          ← Quick Reference für häufige Edits
│   ├── GITHUB_SETUP.md         ← GitHub & GitHub Pages Anleitung
│   └── FILE_STRUCTURE.md       ← Diese Datei
│
├── 🔧 Konfiguration
│   └── .gitignore              ← Git ignore rules (für sauberes Repo)
│
└── 📦 Assets (leer, zur Verwendung später)
    └── assets/
        ├── images/             ← Speichere Bilder hier
        └── fonts/              ← Custom Fonts (optional)
```

## 📋 Datei-Beschreibungen

### HTML Seiten

#### **index.html** (HAUPT-DATEI)
- **Größe**: ~8KB
- **Zweck**: Komplette Website mit 7 Sections
- **Sections**:
  1. Navigation Bar (sticky, responsive)
  2. Cookie Banner (mit GDPR compliance)
  3. Hero Section (Title, Subtitle, CTAs)
  4. About Section (4 Feature Cards)
  5. Offers Section (4 Service Cards)
  6. Approach Section (4 Value Cards)
  7. News Section (3 News Articles)
  8. Contact Section (Funktionales Formular)
  9. Footer (Links, Copyright)
- **Was ändern**: Texte, Angebote, News
- **Verlinkt mit**: styles.css, script.js

#### **impressum.html**
- **Größe**: ~6KB
- **Zweck**: Rechtliche Informationen
- **Enthält**: Name, Adresse, Kontakt, Haftungsausschlüsse
- **TODOs**: Alle gelben Marker mit deinen Daten füllen
- **Wichtig**: Muss aktuell und korrekt sein!

#### **datenschutz.html**
- **Größe**: ~8KB
- **Zweck**: DSGVO Compliance
- **Enthält**: Datenschutzerklärung, Nutzerrechte, Cookies
- **TODOs**: Deine spezifischen Datenverarbeitungsprozesse einfügen
- **Wichtig**: Von Rechtanwalt prüfen lassen!

#### **agb.html**
- **Größe**: ~7KB
- **Zweck**: Geschäftsbedingungen
- **Enthält**: Service Beschreibungen, Zahlungsbedingungen, Stornierung, Haftung
- **Spezifisch für**: Coaching & Wellness Services
- **Wichtig**: Anpassen an deine spezifischen Services!

### CSS & JavaScript

#### **styles.css** (STYLING)
- **Größe**: ~15KB
- **Struktur**:
  1. **CSS Variables** (Zeile 1-45)
     - Farben, Spacing, Fonts
     - Einfach zu ändern
  2. **Base Styles** (Zeile 46-100)
     - HTML/Body/Default Styles
  3. **Typography** (Zeile 100-130)
     - Heading Styles
  4. **Components** (Zeile 130-600)
     - Buttons, Forms, Cards
  5. **Sections** (Zeile 600-800)
     - Hero, About, Offers, Contact, Footer
  6. **Responsive** (Zeile 800-900)
     - Media Queries für 768px & 1024px
  7. **Animations** (Zeile 900-950)
     - Fade-in, Slide-in Effects
- **Mobile-First**: Startet mit Mobile Layout, dann @media upward
- **Farben**: Warm, erdig, professionell
- **Fonts**: Cormorant Garamond (Google), System Sans-Serif für Text

#### **script.js** (INTERAKTIVITÄT)
- **Größe**: ~5KB
- **Funktionen**:
  1. **Navigation** (initializeNavigation)
     - Hamburger Menu Toggle
     - Auto-close on link click
  2. **Cookie Banner** (initializeCookieBanner)
     - Accept/Reject/Settings
     - localStorage Speicherung
  3. **Contact Form** (initializeContactForm)
     - Email Validierung
     - GDPR Checkbox Check
     - Success/Error Messages
  4. **Smooth Scroll** (initializeSmoothScroll)
     - CSS-basiert, JS enhancing
  5. **Scroll to Top** (optional)
     - Button bei Scroll erscheint
     - Auskommentiert, kann aktiviert werden
- **No Dependencies**: Vanilla JavaScript, keine Libraries
- **Browser Support**: Alle modernen Browser

### Dokumentation

#### **START_HERE.md** 👈 HIER BEGINNEN!
- Schnell-Anleitung
- Was wurde erstellt?
- Erste Schritte
- Häufige Fragen
- Checklisten

#### **README.md** (VOLLSTÄNDIG)
- Umfassende Dokumentation
- Alle Features erklärt
- Lokal testen Optionen
- Inhalte bearbeiten
- GitHub Setup
- Domain verbinden
- Ressourcen & Links

#### **CHEAT_SHEET.md** (SCHNELL-REFERENZ)
- Code-Beispiele
- HTML Snippets
- CSS Variablen
- JavaScript Funktionen
- Häufige Aufgaben
- Debugging Tipps
- Test-Checkliste

#### **GITHUB_SETUP.md** (DEPLOYMENT)
- Git Configuration
- Repository erstellen
- GitHub Pages aktivieren
- Fehlerbehandlung
- Domain verbinden
- Sicherheit
- Nützliche Befehle

#### **FILE_STRUCTURE.md** (DIESE DATEI)
- Projekt-Übersicht
- Datei-Beschreibungen
- Größen & Zwecke
- Änderungspunkte

### Konfiguration

#### **.gitignore**
- Git ignore rules
- OS files (DS_Store, Thumbs.db)
- IDE files (.vscode, .idea)
- Node modules (falls benötigt)
- Environment files

## 📊 Dateigröße & Performance

```
index.html          8 KB
styles.css         15 KB
script.js           5 KB
impressum.html      6 KB
datenschutz.html    8 KB
agb.html            7 KB
────────────────────────
Total HTML/CSS/JS: ~49 KB

+ Google Fonts:    ~100 KB (online, gecacht)
────────────────────────
Total Page Load:   ~150 KB
Load Time:         < 1 Sekunde (lokal)
```

→ Super schnell! ⚡

## 🎯 Was wo bearbeiten?

| Task | Datei | Suche nach |
|------|-------|-----------|
| Texte ändern | `index.html` | `<h1>`, `<p>`, `<h3>` |
| Hauptfarbe | `styles.css` | `--color-primary: #8B7355` |
| Akzent-Farbe | `styles.css` | `--color-accent: #C4A57B` |
| Schriftart | `styles.css` | `--font-serif` |
| Angebot hinzufügen | `index.html` | `.offer-card` |
| News updaten | `index.html` | `.news-card` |
| Impressum Info | `impressum.html` | `TODO:` |
| Datenschutz | `datenschutz.html` | `TODO:` |
| AGB Bedingungen | `agb.html` | `TODO:` |
| Menu verhalten | `script.js` | `initializeNavigation()` |
| Form validierung | `script.js` | `initializeContactForm()` |
| Cookies | `script.js` | `initializeCookieBanner()` |

## 🔍 Code-Navigation

### HTML Struktur (index.html)
```html
<!DOCTYPE html>
<html lang="de">  ← Language Setting
<head>
    <meta ...>    ← Important for SEO
    <title>       ← Browser Title
    <link>        ← Google Fonts
    <link>        ← styles.css
</head>
<body>
    <!-- Cookie Banner -->
    <!-- Navigation -->
    <!-- Hero Section -->
    <!-- About Section -->
    <!-- Offers Section -->
    <!-- Approach Section -->
    <!-- News Section -->
    <!-- Contact Section -->
    <!-- Footer -->
    <script>      ← script.js
</body>
</html>
```

### CSS Organization (styles.css)
```css
:root { }                      /* Color & Spacing Variables */
* { }                          /* Base Resets */
body, h1, h2, etc { }         /* Typography */
.container { }                /* Layout */
.btn { }                      /* Buttons */
.navbar { }                   /* Navigation */
.hero { }                     /* Hero Section */
.about { }                    /* About Section */
.offers { }                   /* Offers Section */
... (weitere Sections)
@media (min-width: 768px) { } /* Tablet Responsiveness */
@media (min-width: 1024px) {} /* Desktop Responsiveness */
@keyframes { }                /* Animations */
```

### JavaScript Flow (script.js)
```javascript
DOMContentLoaded Event Listener
├─ initializeNavigation()      // Hamburger menu
├─ initializeCookieBanner()    // Cookie consent
├─ initializeContactForm()     // Form handling
├─ initializeSmoothScroll()    // Scroll behavior
└─ console.log(...)            // Debug info

Helper Functions:
├─ isValidEmail()              // Email validation
├─ showFormMessage()           // Form feedback
└─ (optional) initializeScrollToTop()
```

## 📱 Responsive Breakpoints

```css
/* Default: Mobile (< 768px) */
- Single column layouts
- Hamburger menu shown
- Larger touch targets
- Single navigation menu

/* Tablet: >= 768px */
@media (min-width: 768px) {
    - 2-column grid layouts
    - Full navigation bar shown
    - Hamburger hidden
}

/* Desktop: >= 1024px */
@media (min-width: 1024px) {
    - 4-column grid layouts
    - Full width optimized
    - Large spacing
}
```

## 🎨 CSS Variables (einfach zu ändern)

```css
:root {
    /* Colors - HIER ÄNDERN */
    --color-primary: #8B7355;
    --color-accent: #C4A57B;
    --color-text-primary: #2C2820;

    /* Spacing - für konsistente Abstände */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;

    /* Typography */
    --font-serif: 'Cormorant Garamond', serif;
    --font-sans: System Fonts;

    /* Transitions */
    --transition: all 0.3s ease;
}
```

**Vorteil**: Einmalig ändern, überall aktualisiert!

## 🚀 Deployment Path

```
Entwicklung (Local)
    ↓
index.html öffnen (im Browser)
    ↓
Änderungen machen
    ↓
HTTP Server starten (optional)
    ↓
Tests im Browser + Mobile
    ↓
Git Repository initialisieren
    ↓
Zu GitHub pushen
    ↓
GitHub Pages aktivieren
    ↓
Live unter GitHub Pages URL
    ↓
Domain verbinden (optional)
    ↓
Zu Wix migrieren (später)
```

## 📚 Datei Referenzen (Interne Links)

```html
index.html
├─ Linkt auf → styles.css
├─ Linkt auf → script.js
├─ Linkt auf → impressum.html
├─ Linkt auf → datenschutz.html
└─ Linkt auf → agb.html

impressum.html, datenschutz.html, agb.html
├─ Linken auf → index.html (Back Link)
├─ Linken auf → styles.css
├─ Linken auf → script.js
└─ Linken aufeinander (Legal Links)
```

**Wichtig**: Alle relative Links (`impressum.html` nicht `/impressum.html`)

## ✅ Deployment Checkliste

- [ ] Alle HTML Seiten erstellt ✓
- [ ] styles.css vollständig ✓
- [ ] script.js funktional ✓
- [ ] README dokumentiert ✓
- [ ] CHEAT_SHEET für Quick Ref ✓
- [ ] GITHUB_SETUP Guide ✓
- [ ] .gitignore konfiguriert ✓
- [ ] Lokal getestet ✓
- [ ] Responsive auf Handy/Tablet/Desktop ✓
- [ ] Alle Links funktionieren ✓
- [ ] Kontaktformular validiert ✓
- [ ] Cookie Banner funktioniert ✓
- [ ] Ready für GitHub ✓
- [ ] Ready für Präsentation ✓

---

## 🎯 Zusammenfassung

**Insgesamt:**
- 10 Dateien
- 4 HTML Seiten
- 1 CSS File
- 1 JS File
- 4 Dokumentation Files
- ~50KB Code
- 0 Dependencies
- 100% Responsive
- Ready to Deploy

**Los geht's!** 🚀 Siehe START_HERE.md
