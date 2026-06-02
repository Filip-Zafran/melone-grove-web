# 🎨 Melone Grove - Quick Edit Guide

Schnelle Referenz für die häufigsten Bearbeitungen.

## 🎯 Texte ändern (in `index.html`)

### Hero Section
```html
<h1 class="hero-title">Melone Grove</h1>
<p class="hero-subtitle">Dein Tagline hier...</p>
```

### "Über uns" Karten
```html
<div class="about-card">
    <h3>Titel</h3>
    <p>Beschreibung...</p>
</div>
```

### Angebote
```html
<div class="offer-card">
    <div class="offer-icon">🎯</div>  <!-- Emoji ändern -->
    <h3>Angebot Name</h3>
    <p>Beschreibung...</p>
    <a href="#contact" class="btn-link">Link Text →</a>
</div>
```

### News/Updates
```html
<article class="news-card">
    <div class="news-date">1. Januar 2024</div>
    <h3>Überschrift</h3>
    <p>News-Text...</p>
    <a href="#contact" class="btn-link">Link →</a>
</article>
```

## 🎨 Farben ändern (in `styles.css`)

Alle Farben sind am Anfang der Datei definiert:

```css
:root {
    /* Primär-Farben */
    --color-primary: #8B7355;           /* Warm Brown */
    --color-primary-light: #A0886D;     /* Lighter Warm Brown */
    --color-accent: #C4A57B;            /* Warm Gold */
    --color-accent-light: #D4B896;      /* Light Gold */

    /* Hintergrund-Farben */
    --color-bg-primary: #FEFDF8;        /* Warm Cream */
    --color-bg-secondary: #F5F3ED;      /* Light Gray */

    /* Text-Farben */
    --color-text-primary: #2C2820;      /* Dark Brown */
    --color-text-secondary: #5C5651;    /* Medium Brown */

    /* Akzent-Farben */
    --color-green: #7A9B78;             /* Soft Green */
    --color-red: #C97676;               /* Soft Red */
}
```

**Farben suchen/generieren:**
- Besuche [Coolors.co](https://coolors.co) für Farbpaletten
- Oder nutze [Adobe Color](https://color.adobe.com)

## ✍️ Schriften ändern

In `index.html`:
```html
<!-- Change diese Zeile für andere Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap" rel="stylesheet">
```

Verfügbare Schriften auf [Google Fonts](https://fonts.google.com) - suche nach "serif" für elegante Schriften.

Dann in `styles.css`:
```css
--font-serif: 'Lora', serif;  /* Ändern hier */
```

## 🔗 Links/URLs ändern

### Navigationslinks
In `index.html` - bereits auf die richtigen Sections verlinkt, normalerweise keine Änderung nötig.

### Externe Links hinzufügen
```html
<a href="https://externe-seite.de" target="_blank">Linktext</a>
```

## 🆘 Haftungsausschluss / Wichtige Hinweise

Der Haftungsausschluss ist in **zwei Orten** zu finden:

1. **In der `index.html`** (unter Angebote):
```html
<div class="disclaimer-box">
    <p><strong>Wichtiger Hinweis:</strong> Unsere Angebote dienen der persönlichen Entwicklung...</p>
</div>
```

2. **In den AGB** (`agb.html`):
```html
<h3>3.1 Wichtiger Haftungsausschluss</h3>
```

Diese sollten konsistent bleiben!

## 🍪 Cookie-Einstellungen

Das Cookie-Banner zeigt sich automatisch, wenn das erste Mal besucht.

Um es zu testen (localStorage zurücksetzen):
1. Öffne DevTools (F12)
2. Gehe zu Application → Local Storage
3. Lösche `meloneGrove_cookieChoice`
4. Banner erscheint erneut

## 📱 Responsive Breakpoints

CSS Breakpoints für verschiedene Bildschirmgrößen:

```css
/* Mobile: < 768px */
.hamburger { display: flex; }
.navbar-menu { display: none; }

/* Tablet/Desktop: >= 768px */
@media (min-width: 768px) {
    .hamburger { display: none; }
    .navbar-menu { display: flex; }
}

/* Desktop: >= 1024px */
@media (min-width: 1024px) {
    /* Größere Layouts */
}
```

Zum Testen: DevTools (F12) → "Toggle device toolbar" (Ctrl+Shift+M)

## 📧 Kontaktformular

### Validierung ändern

In `script.js`, Funktion `isValidEmail()`:
```javascript
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```

### Erfolgsmeldung ändern

In `script.js`:
```javascript
showFormMessage(
    'Danke für deine Nachricht! Wir melden uns in Kürze bei dir.',  // ← Ändern
    'success',
    formMessage
);
```

### Form echte Emails versenden (Formspree)

1. Gehe zu [Formspree.io](https://formspree.io)
2. Registriere dich, erstelle ein neues Formular
3. Kopiere die `action` URL
4. In `index.html`:

```html
<form id="contactForm" action="https://formspree.io/f/DEINE_ID" method="POST" class="contact-form">
    <!-- Form bleibt gleich -->
</form>
```

(Dann die Form-Validierung aus `script.js` updaten, wenn gewünscht)

## 🎬 Animationen

Animationen sind in `styles.css` definiert:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Auf Elemente anwenden: */
.hero-content {
    animation: fadeInUp 0.8s ease;
}
```

**Weitere Animation hinzufügen:**
```css
@keyframes slideIn {
    from { transform: translateX(-20px); }
    to { transform: translateX(0); }
}

.mein-element {
    animation: slideIn 0.6s ease;
}
```

## 📸 Bilder hinzufügen

1. Speichere Bilder im `assets/images/` Ordner
2. In `index.html`:

```html
<img src="assets/images/mein-bild.jpg" alt="Beschreibung" width="400">
```

**Best practices:**
- ALT-Text immer ausfüllen (SEO + Accessibility)
- Bilder optimieren (komprimieren auf <1MB)
- Moderne Formate verwenden (JPG, WebP)

## 🌐 Sprache ändern (für Englisch vorbereitet)

Das Setup ist mehrsprachig vorbereitet:

```html
<html lang="de">  <!-- Ändere zu "en" für Englisch -->
```

Um vollständig mehrsprachig zu werden, könntest du:
1. Separate Dateien erstellen (`index-en.html`)
2. Oder ein JavaScript i18n System nutzen (später)

## 🔍 SEO verbessern

Wichtigste Meta-Tags in `index.html` aktualisieren:

```html
<title>Melone Grove - Coaching & Workshops</title>
<meta name="description" content="Persönliche Entwicklung, Coaching und Workshops für Nervensystemregulation">
```

**Tipps:**
- Title: < 60 Zeichen
- Description: < 160 Zeichen
- Include Hauptkeywords

## 🚀 Performance Tipps

- Komprimiere große Bilder (nutze [TinyPNG](https://tinypng.com))
- Nutze moderne Bildformate (WebP)
- Minimiere CSS/JS (optional, für Prototyp nicht nötig)
- Nutze Browser DevTools → Lighthouse für Audit

Zum Prüfen: DevTools (F12) → Lighthouse Tab

## 🐛 Debugging

### Browser Console
Öffne DevTools (F12) → Console → Suche nach Fehlern (rote Meldungen)

### Form-Debugging
In `script.js`, in `initializeContactForm()`:
```javascript
console.log('Form submitted with:', { name, email, message });
```

### Navigation Debugging
```javascript
console.log('Hamburger clicked');
console.log('Menu active:', navbarMenu.classList.contains('active'));
```

## 📱 Test-Checkliste

Beim Testen:

- [ ] Mobile (320px, 375px, 768px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1366px+)
- [ ] Alle Links funktionieren
- [ ] Kontaktformular funktioniert
- [ ] Cookie-Banner funktioniert
- [ ] Responsive ohne Horizontal-Scroll
- [ ] Alle Texte sind lesbar
- [ ] Alle Bilder laden
- [ ] Keine Konsolen-Fehler (F12)

---

**Brauchtst du schnelle Hilfe?** Nutze Ctrl+F (oder Cmd+F) um Dateinamen zu suchen! 🔍
