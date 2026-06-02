# 🚀 GitHub Setup & Deployment Guide

Schritt-für-Schritt Anleitung zum Hochladen zu GitHub und Veröffentlichung mit GitHub Pages.

## 📋 Voraussetzungen

- Git installiert ([https://git-scm.com](https://git-scm.com))
- GitHub Konto ([https://github.com](https://github.com))
- Alle Website-Dateien in einem Ordner (melone-grove-web)

## 🔑 Schritt 1: Git konfigurieren (einmalig)

Öffne Terminal/Konsole und führe aus:

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine.email@example.com"
```

Nutze **deine echte** Email-Adresse - die, die du bei GitHub verwendet hast.

## ✨ Schritt 2: Repository auf GitHub erstellen

1. Gehe zu [https://github.com/new](https://github.com/new)
2. **Repository name**: `melone-grove-web`
3. **Description**: (optional) z.B. "Melone Grove - Static Website Prototype"
4. Wähle **Public** (damit GitHub Pages funktioniert)
5. **Nicht** "Add a README file" ankreuzen (wir haben schon eine)
6. Klicke **Create repository**

**Du siehst nun die leere Repository-Seite mit einer URL wie:**
```
https://github.com/DEIN_USERNAME/melone-grove-web.git
```

Kopiere diese URL - du brauchst sie gleich.

## 🔧 Schritt 3: Git lokal initialisieren

Öffne Terminal im Projekt-Ordner:

```bash
# Navigiere zu deinem Projekt-Ordner
cd "Desktop/Melone Grove/melone-grove-web"

# Initialisiere Git
git init

# Stelle GitHub als Remote ein (ersetze URL mit deiner)
git remote add origin https://github.com/DEIN_USERNAME/melone-grove-web.git

# Benenne main branch (falls noch nicht gemacht)
git branch -M main
```

## 📤 Schritt 4: Erste Änderungen hochladen

```bash
# Alle Dateien hinzufügen
git add .

# Status überprüfen (sollte alle Dateien grün zeigen)
git status

# Commit erstellen
git commit -m "Initial commit: Melone Grove website prototype"

# Zu GitHub pushen
git push -u origin main
```

**Bei Authentifizierung:**
- Falls nach Passwort gefragt: Nutze einen **Personal Access Token** (nicht dein GitHub Passwort)
  - Erstelle einen unter: GitHub → Settings → Developer settings → Personal access tokens
  - Wähle Scopes: `repo` und `workflow`
  - Kopiere den Token und nutze ihn als "Passwort"

## 🌐 Schritt 5: GitHub Pages aktivieren

1. Gehe zu **https://github.com/DEIN_USERNAME/melone-grove-web**
2. Öffne **Settings** (oben rechts)
3. Linke Sidebar: Wähle **Pages**
4. Unter "Build and deployment":
   - **Source**: Wähle "Deploy from a branch"
   - **Branch**: Wähle `main` und `/root`
   - Klicke **Save**

5. Die Seite sagt dir die öffentliche URL:
   ```
   https://DEIN_USERNAME.github.io/melone-grove-web/
   ```

**Wichtig:** Es dauert 1-2 Minuten, bis die Seite online geht. Nach kurzer Zeit solltest du eine grüne Bestätigung sehen.

## ✅ Testen ob es funktioniert

Öffne die URL in deinem Browser:
```
https://DEIN_USERNAME.github.io/melone-grove-web/
```

Wenn du die Website siehst: **Glückwunsch!** 🎉

Falls nicht: Warte noch 1-2 Minuten und aktualisiere die Seite (Ctrl+R oder Cmd+R).

## 📝 Änderungen hochladen (später)

Sobald du Änderungen machst, wiederhole diese Schritte:

```bash
# Überprüfe was sich geändert hat
git status

# Alle Änderungen hinzufügen
git add .

# Commit mit aussagekräftiger Nachricht
git commit -m "Update: Texte angepasst, Farben geändert"

# Zu GitHub pushen
git push
```

**Beispiele für gute Commit-Nachrichten:**
- `Update: Hero-Text und CTA Button`
- `Fix: Hamburger-Menü auf Handy`
- `Add: News Section mit 3 Updates`
- `Style: Farben warmer gemacht`

## 🔗 Domain verbinden (optional)

Falls du eine eigene Domain hast (z.B. `melonegrove.de`):

### Mit GoDaddy, Namecheap, etc.:

1. **Kaufe eine Domain** bei einem Registrar deiner Wahl
2. Gehe zu deinen **Domain Settings**
3. Suche nach **DNS Records** oder **Nameserver**
4. Ändere auf GitHub Nameserver oder erstelle CNAME Records:
   - Je nach Registrar unterschiedlich - suche "[REGISTRAR] GitHub Pages"
5. Auf GitHub: **Settings → Pages → Custom domain**
   - Gib deine Domain ein: `melonegrove.de`
   - Klicke Save
   - GitHub erstellt automatisch HTTPS-Zertifikat (warte 1-2 Min)

**Warte 24-48 Stunden, bis die Domain weltweit aktiv ist.**

Dann lädt deine Website unter:
```
https://melonegrove.de
```

## 🆘 Häufige Probleme

### "git: command not found"
→ Git nicht installiert. Download von https://git-scm.com

### "fatal: remote origin already exists"
→ Repository ist bereits initialisiert. Nutze:
```bash
git remote set-url origin https://github.com/DEIN_USERNAME/melone-grove-web.git
```

### "fatal: branch 'main' does not track a branch"
→ Das ist OK beim ersten Push. Nutze:
```bash
git push -u origin main
```

### Website zeigt "404"
→ Normalerweise 1-2 Minuten warten. Falls danach immer noch:
  1. Überprüfe dass **Source** auf `main` / `/root` eingestellt ist
  2. Überprüfe dass Repository öffentlich ist
  3. Überprüfe dass die URL korrekt ist

### Authentifizierung schlägt fehl
→ Git tried to save credentials falsch. Nutze:
```bash
git config --global credential.helper store
```
Dann nochmal pushen und Personal Access Token eingeben.

## 📊 Repository-Statistiken überprüfen

Nach dem Push kannst du auf GitHub sehen:
- **Commits**: Repository → Commits Tab
- **Dateien**: Repository-Hauptseite zeigt alle Dateien
- **Statistiken**: Repository → Insights → Traffic

## 🔐 GitHub Security (optional)

Um dein Repository zu schützen:

1. **Settings → Branches**
   - Stelle "main" als "Protected branch" ein
   - Vermeide accidental pushes

2. **Settings → Collaborators**
   - Nur du hast Zugriff (oder später andere Mitwirkende)

## 🎬 GitHub Actions (optional)

Du könntest Automatic Deployment einrichten, aber für diesen Prototyp nicht nötig.

## 📚 Nützliche Git Befehle

```bash
# Änderungen anschauen
git diff

# Änderungen "unstagen"
git reset HEAD datei.html

# Letzten Commit rückgängig machen (lokal)
git reset --soft HEAD~1

# Git Verlauf anschauen
git log --oneline

# Zu älterem Commit springen (zur Ansicht)
git checkout COMMIT_HASH
```

## 🎯 Nächste Schritte

Nachdem deine Website online ist:

1. ✅ **Teste alles** auf der Live-URL
2. ✅ **Teile den Link** für Präsentation (GitHub URL)
3. ✅ **Sammle Feedback** vor Wix-Migration
4. ✅ **Nutze dieses Design** als Vorlage für Wix-Rebuild

## 💡 Tipps

- Nutze **GitHub Desktop** App wenn Terminal zu kompliziert ist
  - Download: https://desktop.github.com

- Nutze **VS Code** mit Git Integration
  - Git ist bereits integriert
  - Left sidebar: "Source Control" Tab

- Nutze **GitHub Mobile App** um Änderungen unterwegs zu pushen

## 🎉 Erfolgs-Checkliste

- [ ] Git installiert & konfiguriert
- [ ] Repository auf GitHub erstellt
- [ ] Dateien zu main gemerged
- [ ] GitHub Pages aktiviert
- [ ] Website unter https://username.github.io/melone-grove-web/ erreichbar
- [ ] Alle Links funktionieren
- [ ] Kontaktformular angezeigt
- [ ] Responsive auf Handy
- [ ] Ready zur Präsentation!

---

**Fragen?** Die offizielle Git Dokumentation: https://git-scm.com/doc
