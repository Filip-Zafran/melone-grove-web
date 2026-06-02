# 🍈 MELONE GROVE - Start Guide

Willkommen! Dein vollständiger Website-Prototyp ist ready. Hier findest du alles zum Starten.

## ✅ Was wurde erstellt?

### 📄 Hauptseite
- **index.html** - Die Haupt-Website mit 7 Sections:
  1. **Hero** - Ansprechend, mit CTAs
  2. **Über Melone Grove** - 4 Feature-Cards
  3. **Angebote** - 4 Service-Cards mit Beschreibungen
  4. **Ansatz** - Philosophie & Werte (4 Items)
  5. **News** - Editable updates (3 Platzhalter)
  6. **Kontakt** - Funktionales Formular mit Validierung
  7. **Footer** - Links zu legalen Seiten + Impressum

### 🎨 Styling & Interaktivität
- **styles.css** - Vollständig responsive, mobile-first, warm colors
  - 768px Breakpoint (Tablet)
  - 1024px Breakpoint (Desktop)
  - Smooth animations & transitions
  - WCAG Accessibility

- **script.js** - Vanilla JavaScript für:
  - Hamburger-Menü auf Handy
  - Cookie-Banner (localStorage-basiert)
  - Kontaktformular mit Validierung
  - Smooth scrolling
  - Optionaler Scroll-to-Top Button

### ⚖️ Rechtliche Seiten
- **impressum.html** - Mit TODO Platzhaltern für deine Daten
- **datenschutz.html** - GDPR-konform, mit Platzhaltern
- **agb.html** - Business Terms mit Coaching-spezifischem Haftungsausschluss

### 📚 Dokumentation
- **README.md** - Vollständige Dokumentation
- **CHEAT_SHEET.md** - Schnelle Referenz für häufige Edits
- **GITHUB_SETUP.md** - Schritt-für-Schritt GitHub & GitHub Pages Guide
- **.gitignore** - Für sauberes Git Repository

## 🚀 Schnellstart

### 1️⃣ Lokal testen (wähle eine Methode)

**Option A: VS Code Live Server**
```bash
# In VS Code:
1. Installiere Extension "Live Server"
2. Rechtsklick auf index.html
3. "Open with Live Server"
```

**Option B: Python HTTP Server**
```bash
cd "Desktop/Melone Grove/melone-grove-web"
python -m http.server 8000
# Öffne http://localhost:8000
```

**Option C: Node.js**
```bash
npm install -g http-server
http-server -p 8000
# Öffne http://localhost:8000
```

### 2️⃣ Inhalte bearbeiten

- **Texte ändern**: Öffne `index.html` und bearbeite direkt
- **Farben ändern**: `styles.css` - Variable am Anfang
- **Schriften ändern**: Suche "Google Fonts" in `index.html`
- **Legal Text**: `impressum.html`, `datenschutz.html`, `agb.html` - alle haben TODO Marker

→ Sieh auch **CHEAT_SHEET.md** für Code-Beispiele

### 3️⃣ Zu GitHub pushen

```bash
cd "Desktop/Melone Grove/melone-grove-web"

# Repository initialisieren
git init
git remote add origin https://github.com/DEIN_USERNAME/melone-grove-web.git
git branch -M main

# Änderungen hochladen
git add .
git commit -m "Initial commit: Melone Grove prototype"
git push -u origin main
```

→ Vollständige Anleitung: **GITHUB_SETUP.md**

### 4️⃣ GitHub Pages aktivieren

1. GitHub → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / Folder: `/root`
4. Speichern

**Deine Live-URL:** `https://DEIN_USERNAME.github.io/melone-grove-web/`

(1-2 Minuten warten bis sie aktiv ist)

## 📋 Was muss noch angepasst werden?

### Vor der Präsentation (wichtig):

- [ ] **impressum.html** - Deine Daten einfügen (Name, Adresse, Email)
- [ ] **datenschutz.html** - Datenverarbeitung definieren, Tools auflisten
- [ ] **agb.html** - Deine spezifischen AGB ausarbeiten
- [ ] **Rechtliche Disclaimer** - Besonders wichtig! In `index.html` unter Angebote

### Optional / Later:

- [ ] Echtes Kontaktformular (Formspree.io oder Netlify)
- [ ] Bilder hinzufügen (assets/ Ordner)
- [ ] Newsletter-Signup
- [ ] Englische Version
- [ ] Custom Domain

## 🎯 Datei-Übersicht für Edits

| Was ändern? | Datei | Bereich |
|------------|-------|--------|
| Texte | `index.html` | Suche nach `<h1>`, `<h2>`, `<p>` |
| Farben | `styles.css` | Zeile 1-30, `:root { }` |
| Schriften | `index.html` & `styles.css` | Google Fonts Link + --font-serif |
| Navigation | `index.html` | `<nav>` Section |
| Angebote | `index.html` | `.offer-card` Elemente |
| Legal Data | `impressum.html`, etc. | "TODO:" Marker suchen |
| JavaScript | `script.js` | Je nach Funktion |

## 🔍 Wichtige Hinweise

### Cookie Banner & GDPR
- ✅ Speichert Nutzer-Wahl in localStorage
- ✅ Kein External Tracking ohne Zustimmung
- ⚠️ Falls du Google Analytics/Similar nutzt → Code hinzufügen (siehe CHEAT_SHEET.md)

### Haftungsausschluss
Der wichtige Text ist an zwei Orten:
1. `index.html` - Unter Angebote (gelbe Box)
2. `agb.html` - Detailliert unter Punkt 3.1

Achte darauf, dass dieser konsistent bleibt!

### Kontaktformular
Derzeit: **UI-Demo nur** (keine echten Emails)

Um Emails zu versenden → nutze:
- [Formspree.io](https://formspree.io) (kostenlos, einfach)
- [Netlify Forms](https://www.netlify.com/) (falls auf Netlify hosted)
- Oder echter Backend später

Siehe CHEAT_SHEET.md für Code-Beispiel.

## 📱 Design-Features

- **Mobile-first**: Startet klein, skaliert nach oben
- **Responsive Breakpoints**: 768px (Tablet), 1024px (Desktop)
- **Warm Colors**: Erdig, professionell, beruhigend
- **Typography**: Cormorant Garamond (Google Fonts)
- **Animations**: Fade-in effects, hover states
- **Accessibility**: WCAG Standards, Keyboard Navigation

## 🎨 Farb-Palette (aktuell)

```
Primary Brown: #8B7355
Accent Gold: #C4A57B
Soft Green: #7A9B78
Warm Cream BG: #FEFDF8
Dark Text: #2C2820
```

Nutze einen **Color Picker** um eigene Palette zu finden (Coolors.co, Adobe Color)

## 🧪 Test-Checkliste

Bevor du präsentierst:

- [ ] Alle Links funktionieren
- [ ] Responsive auf Handy (DevTools - F12 → Device Mode)
- [ ] Responsive auf Tablet (768px Viewport)
- [ ] Responsive auf Desktop (1366px+)
- [ ] Kontaktformular akzeptiert Input & zeigt Success Message
- [ ] Cookie Banner funktioniert
- [ ] Keine Console Errors (F12 → Console)
- [ ] Alle Bilder laden
- [ ] Text ist lesbar (Kontrast)
- [ ] Navigation flüssig

## 💡 Tipps

1. **Lokal testen** bevor du zu GitHub pushst
2. **Teste auf echtem Handy** - nicht nur im Browser
3. **Rechtliche Texte** sollten von Rechtsanwalt geprüft werden
4. **Datenschutz** ist wichtig! Halte dich an DSGVO
5. **Diese Version** = HTML/CSS/JS Prototyp
6. **Wix-Version** = Nutze diese als Design-Inspiration

## 📚 Dokumentation

Alle Dateien haben gute Dokumentation:

- **README.md** - Vollständige Beschreibung & Deployment
- **CHEAT_SHEET.md** - Code-Beispiele für häufige Edits
- **GITHUB_SETUP.md** - Git & GitHub Pages Anleitung
- **HTML Files** - Kommentierte Struktur
- **CSS** - Erklärte Variablen & Breakpoints
- **JavaScript** - Funktionen sind erklärt

## 🆘 Häufige Fragen

**F: Kann ich die Farben ändern?**
A: Ja! `styles.css` Zeile 1-30, dann alle Farb-Variablen anpassen.

**F: Kontaktformular sendet keine Emails?**
A: Das ist normal - das ist ein Prototyp. Nutze Formspree.io für echte Emails. Siehe CHEAT_SHEET.md.

**F: Wie füge ich Bilder ein?**
A: Speichere im `assets/images/` Ordner, referenziere mit `<img src="assets/images/file.jpg" alt="Text">`. Siehe CHEAT_SHEET.md.

**F: Kann ich englische Version hinzufügen?**
A: Ja! Erstelle `index-en.html` oder später ein i18n System. Für Prototyp nicht nötig.

**F: Funktioniert das auf GitHub Pages kostenlos?**
A: Ja! Völlig kostenlos. Website unter `username.github.io/melone-grove-web/` gehostet.

## ✨ Fertig zum Präsentieren?

1. ✅ Content geprüft?
2. ✅ Legale Texte aktualisiert?
3. ✅ Lokal getestet?
4. ✅ Zu GitHub gepusht?
5. ✅ GitHub Pages aktiv?

Dann bist du ready für deine Präsentation! 🎉

---

**Nächster Schritt:** Öffne README.md für detaillierte Dokumentation oder CHEAT_SHEET.md für schnelle Code-Referenzen.

**Brauchtst du Hilfe?** Alle Dateien sind auskommentiert und dokumentiert. Falls Fehler: DevTools öffnen (F12) und Console prüfen.

**Viel Erfolg mit Melone Grove!** 🍈✨
