# 🍈 Melone Grove - Static Website Prototype

Ein einfaches, elegantes und vollständig responsive statisches Website-Prototyp für Melone Grove. Entwickelt mit vanilla HTML, CSS und JavaScript — keine Abhängigkeiten, keine Backend erforderlich.

## ✨ Features

✅ **Vollständig responsive** - Mobile-first Design  
✅ **Keine Abhängigkeiten** - Vanilla HTML/CSS/JS  
✅ **Schnell & einfach** - Statische Website, keine Build-Tools erforderlich  
✅ **Bearbeitungsfreundlich** - Gut kommentierter Code  
✅ **SEO-optimiert** - Meta-Tags, strukturiertes HTML  
✅ **Cookie-Banner** - GDPR-konform, localStorage-basiert  
✅ **Kontaktformular** - Validierung mit simulierter Bestätigung  
✅ **Legale Seiten** - Impressum, Datenschutz, AGB mit Platzhaltern  
✅ **Elegant & warm** - Erdig & ruhig farbschema  

## 📁 Projektstruktur

```
melone-grove-web/
├── index.html           # Hauptseite
├── impressum.html       # Rechtliche Seite
├── datenschutz.html     # Datenschutzerklärung
├── agb.html             # AGB
├── styles.css           # Responsive Styling
├── script.js            # Interaktivität & Funktionen
├── assets/              # (Für zukünftige Bilder)
│   ├── images/
│   └── fonts/
└── README.md            # Diese Datei
```

## 🚀 Schnelle Anleitung

### Lokal ausführen (Windows, Mac, Linux)

#### Option 1: Live Server (VS Code)

1. Installiere die Erweiterung "Live Server" in VS Code
2. Klicke mit der rechten Maustaste auf `index.html`
3. Wähle "Open with Live Server"

#### Option 2: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Öffne dann: http://localhost:8000
```

#### Option 3: Node.js (mit http-server)

```bash
npm install -g http-server
http-server -p 8000
# Öffne dann: http://localhost:8000
```

#### Option 4: Direkt im Browser

1. Speichere alle Dateien im gleichen Ordner
2. Öffne `index.html` direkt im Browser (funktioniert mit einigen Einschränkungen bei JavaScript)

## ✏️ Inhalte bearbeiten

### Texte ändern

Öffne `index.html` und bearbeite direkt:

```html
<!-- Hero Title -->
<h1 class="hero-title">Melone Grove</h1>

<!-- Section Text -->
<p class="hero-subtitle">Dein Text hier...</p>

<!-- Angebote hinzufügen/ändern -->
<div class="offer-card">
    <div class="offer-icon">🎯</div>
    <h3>Mein Angebot</h3>
    <p>Beschreibung des Angebots...</p>
</div>
```

### Farben anpassen

Öffne `styles.css` und bearbeite die Farben am Anfang:

```css
:root {
    --color-primary: #8B7355;           /* Warm brown - Ändere diese */
    --color-accent: #C4A57B;            /* Gold accent - Ändere diese */
    --color-green: #7A9B78;             /* Soft green - Ändere diese */
    /* ... weitere Farben ... */
}
```

### Schriften ändern

In `index.html` importierte Google Fonts:

```html
<!-- Ändere die Schriften (Lora oder Cormorant Garamond) -->
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap" rel="stylesheet">
```

Dann in `styles.css`:

```css
:root {
    --font-serif: 'Lora', serif;  /* Ändere hier */
}
```

### Kontaktformular

Das Kontaktformular ist derzeit eine **UI-Demo** ohne tatsächliches Email-Versand. Um es funktionsfähig zu machen:

**Option 1: Formspree.io (kostenlos)**

```html
<form action="https://formspree.io/f/DEINE_ID" method="POST">
    <!-- form fields ... -->
</form>
```

**Option 2: Netlify Forms (falls auf Netlify gehostet)**

```html
<form name="contact" method="POST" netlify>
    <!-- form fields ... -->
</form>
```

### Legale Seiten aktualisieren

Öffne die entsprechende HTML-Datei und ersetze die gelb markierten `TODO`-Blöcke:

- `impressum.html` - Deine Kontaktdaten, Adresse, Berufsbezeichnung
- `datenschutz.html` - GDPR-Bestimmungen, Datenverarbeitung
- `agb.html` - Geschäftsbedingungen, Stornierung, Haftung

## 📱 Responsive Design

Die Website ist mobile-first optimiert:

- **Handy** (< 768px): Single column, hamburger menu
- **Tablet** (768px - 1024px): 2-column grid
- **Desktop** (> 1024px): Full layout, full navigation

Teste mit Browser DevTools (F12) oder verschiedenen Geräten.

## 🍪 Cookie Banner

Der Cookie-Banner speichert die Benutzerwahl in `localStorage`:

```javascript
// Wahl des Benutzers abrufen
localStorage.getItem('meloneGrove_cookieChoice')
// Rückgabewerte: 'accepted', 'rejected', oder null
```

Um externe Tracker zu integrieren (z.B. Google Analytics), füge deinen Code hier ein:

```javascript
// In script.js, nach dem "Accept" Button:
if (cookieChoice === 'accepted') {
    // Google Analytics oder andere Tracker laden
}
```

## 📧 Kontaktformular Validierung

Das Formular validiert:

- ✅ Alle Felder ausgefüllt
- ✅ Gültige Email-Adresse
- ✅ GDPR-Checkbox markiert

Feedback wird direkt unter dem Formular angezeigt.

## 🔍 SEO & Meta-Tags

Bearbeite die Meta-Tags in `index.html`:

```html
<meta name="description" content="Deine Website-Beschreibung">
<title>Dein Seitentitel</title>
```

## 🎨 Farben & Branding

**Aktuelle Farbpalette (warm & erdig):**

- Primary: `#8B7355` (Warm Brown)
- Accent: `#C4A57B` (Soft Gold)
- Green: `#7A9B78` (Soft Green)
- Background: `#FEFDF8` (Warm Cream)

Verwende einen **Color Picker** oder **Hex Color Tool**, um deine Markenfarben zu finden.

## ♿ Barrierefreiheit

Die Website folgt WCAG-Standards:

- Semantic HTML
- Keyboard navigation
- ARIA labels (wo nötig)
- Sufficient color contrast

## 🌐 Zu GitHub hochladen

### Schritt 1: Repository erstellen

```bash
# Initialisiere Git (falls noch nicht geschehen)
git init

# Für GitHub: Repository auf GitHub erstellen (melone-grove-web)
# Dann:
git remote add origin https://github.com/DEIN_USERNAME/melone-grove-web.git
git branch -M main
```

### Schritt 2: Dateien hochladen

```bash
# Alle Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit: Melone Grove website prototype"

# Zu GitHub pushen
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu GitHub.com → deinem Repository
2. Öffne Settings → Pages
3. Wähle "Deploy from a branch"
4. Wähle `main` branch, `/root` Ordner
5. Klicke Save

**Deine Website ist dann unter folgender URL verfügbar:**

```
https://DEIN_USERNAME.github.io/melone-grove-web/
```

(Nach ca. 1-2 Minuten aktiv)

## 🔗 Domain verbinden (optional)

Falls du eine eigene Domain hast (z.B. melonegrove.de):

1. Kaufe eine Domain bei einem Registrar (GoDaddy, Namecheap, etc.)
2. Richte DNS-Einträge ein (siehe Registrar-Anleitung für GitHub Pages)
3. Auf GitHub Pages: Trage deine Domain unter Settings → Pages → Custom domain ein

## 📝 Häufig bearbeitete Dateien

| Aufgabe | Datei |
|---------|-------|
| Text/Inhalte ändern | `index.html` |
| Design/Farben anpassen | `styles.css` |
| Interaktivität ändern | `script.js` |
| Legale Infos | `impressum.html`, `datenschutz.html`, `agb.html` |

## 🆘 Troubleshooting

**Problem: Kontaktformular sendet keine Emails**

→ Das ist normal - dies ist ein Prototyp. Nutze Formspree.io oder Netlify, um Emails zu versenden.

**Problem: Styles laden nicht lokal**

→ Nutze Live Server oder einen HTTP Server, nicht `file://`. Relative Pfade funktionieren besser.

**Problem: Hamburger-Menü funktioniert nicht**

→ Stelle sicher, dass `script.js` geladen wird (öffne Developer Tools - F12 - Console auf Fehler prüfen).

**Problem: Seite sieht auf dem Handy falsch aus**

→ Halte das Fenster smaller, oder öffne DevTools (F12) und aktiviere Device Emulation.

## 🚀 Nächste Schritte

Nach dieser HTML/CSS/JS Version:

1. **Vor Wix-Migration:** Diese Version bei GitHub hochladen und präsentieren
2. **Wix-Version:** Die Inhalte/Struktur in Wix nachbauen (Design Inspiration)
3. **Live gehen:** Domain mit Wix verbinden

## 📚 Ressourcen

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS Dokumentation
- [CSS Tricks](https://css-tricks.com/) - CSS Tutorials
- [Google Fonts](https://fonts.google.com/) - Mehr Schriften
- [Formspree.io](https://formspree.io/) - Kostenlose Formulare
- [GitHub Pages Docs](https://docs.github.com/en/pages) - GitHub Pages Hilfe

## 📄 Lizenz

Diese Website ist dein Property. Verwende, ändere und veröffentliche wie nötig.

## 🤝 Support

Falls Fragen zu dieser Website auftauchen, kann ich dir bei Änderungen und Anpassungen helfen.

---

**Viel Spaß mit deinem Melone Grove Prototyp!** 🍈✨
