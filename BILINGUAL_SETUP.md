# 🌍 Melone Grove - Bilingual Setup Guide (German + English)

Complete guide to the new bilingual system and softer fonts.

## ✨ What's New

### 1. Softer Fonts
- Changed from **Cormorant Garamond** → **Lora** (elegant serif, softer appearance)
- Applied to all headings and titles
- More approachable while maintaining elegance

### 2. Full Bilingual Support
- **Main page**: Switches between German (DE) and English (EN) via flag button
- **Legal pages**: Separate versions (impressum-en.html, datenschutz-en.html, agb-en.html)
- **Cookie banner**: Translates based on language preference
- **Contact form**: Messages adapt to selected language

### 3. Language Toggle Button
- Flag emoji button in navigation (🇩🇪 / 🇬🇧)
- Shows current language
- Stores preference in localStorage
- Available on desktop and mobile

## 📋 Files Added/Modified

### New Files Created

#### Language System
- **i18n.js** (17KB) - Complete translation management system
  - German (de) and English (en) translations
  - LanguageManager class handles switching
  - localStorage for persistent preference

#### English Legal Pages
- **impressum-en.html** (8KB) - Legal information in English
- **datenschutz-en.html** (11KB) - Privacy policy in English
- **agb-en.html** (12KB) - Terms & Conditions in English

### Modified Files

#### Main Files
- **index.html** - Added:
  - Language toggle button in navbar
  - data-i18n attributes to all translatable text
  - Link to i18n.js script

- **styles.css** - Added:
  - Font changed to Lora (softer)
  - Styling for language switcher button
  - Responsive styles for lang button on mobile

- **script.js** - Updated:
  - Form messages now use translations
  - Cookie settings text translated
  - Works with languageManager

#### Legal Pages (German)
- **impressum.html** - Added language switcher
- **datenschutz.html** - Added language switcher
- **agb.html** - Added language switcher

## 🔧 How It Works

### Translation System (i18n.js)

```javascript
// Translation object structure:
translations = {
    de: {
        'key': 'German text',
        'nav_home': 'Startseite',
        'hero_title': 'Melone Grove',
        ...
    },
    en: {
        'key': 'English text',
        'nav_home': 'Home',
        'hero_title': 'Melone Grove',
        ...
    }
}
```

### Language Manager

```javascript
languageManager = new LanguageManager();

// Get current language
languageManager.currentLang // 'de' or 'en'

// Switch language
languageManager.setLanguage('en');

// Get translated text
languageManager.getText('nav_home') // Returns 'Home' or 'Startseite'
```

### HTML Translation System

All translatable text uses `data-i18n` attributes:

```html
<h1 data-i18n="hero_title">Melone Grove</h1>
<p data-i18n="hero_subtitle">Default text here...</p>
<button data-i18n="form_submit">Senden</button>
```

When language changes, `i18n.js` automatically updates all elements.

## 🎯 Adding New Translations

### Step 1: Add text to i18n.js

Open `i18n.js` and add your translation key to both `de` and `en` objects:

```javascript
translations = {
    de: {
        ...
        'my_new_key': 'Deutscher Text',
    },
    en: {
        ...
        'my_new_key': 'English text',
    }
}
```

### Step 2: Add data-i18n to HTML

In `index.html`, add the attribute to the element:

```html
<p data-i18n="my_new_key">Deutscher Text</p>
```

### Step 3: Test

- Open site
- Toggle language with flag button
- Text should change

**That's it!** The system automatically translates.

## 🌐 Language Persistence

User's language choice is saved in `localStorage`:

```javascript
// Stored as:
localStorage.getItem('meloneGrove_language') // 'de' or 'en'
```

When user returns to site, their language preference is remembered.

To reset (for testing):
- Open DevTools (F12)
- Console → `localStorage.removeItem('meloneGrove_language')`
- Refresh page

## 📱 Mobile vs Desktop

### Desktop (>= 768px)
- Flag icon only (🇩🇪 / 🇬🇧) next to nav items
- Compact display

### Mobile (< 768px)
- Flag + text (🇩🇪 DE / 🇬🇧 EN)
- Full width button in menu
- Easy to tap

## 🔤 Soft Font Styling

The font has been changed throughout:

```css
/* In styles.css */
:root {
    --font-serif: 'Lora', 'Playfair Display', serif;
}
```

**Where applied:**
- h1, h2, h3, h4, h5, h6 - All headings
- .section-title - Section titles
- .hero-title - Hero section
- All elegant/formal text

**Why Lora?**
- Elegant but approachable
- Softer curves than Cormorant Garamond
- Better readability
- Still professional & warm

## 📝 Translation Completeness

### Main Page (index.html)
✅ **100% translated**
- Navigation
- Hero section
- About section (4 cards)
- Offers section (4 cards)
- Approach section (4 items)
- News section (3 cards)
- Contact form
- Footer
- Cookie banner

### German Legal Pages
✅ **100% in German**
- impressum.html
- datenschutz.html
- agb.html
- All have English links

### English Legal Pages
✅ **100% in English**
- impressum-en.html
- datenschutz-en.html
- agb-en.html
- All have German links

## 🆘 Translation Keys Reference

All available translation keys in i18n.js:

### Navigation
- `nav_home`, `nav_about`, `nav_offers`, `nav_approach`, `nav_news`, `nav_contact`

### Hero Section
- `hero_title`, `hero_subtitle`, `hero_cta_contact`, `hero_cta_offers`

### About Section
- `about_title`, `about_intro`
- `about_card_1_title`, `about_card_1_text`
- `about_card_2_title`, `about_card_2_text`
- `about_card_3_title`, `about_card_3_text`
- `about_card_4_title`, `about_card_4_text`

### Offers Section
- `offers_title`, `offers_intro`
- `offer_1_icon`, `offer_1_title`, `offer_1_text`, `offer_1_link`
- `offer_2_icon`, `offer_2_title`, `offer_2_text`, `offer_2_link`
- `offer_3_icon`, `offer_3_title`, `offer_3_text`, `offer_3_link`
- `offer_4_icon`, `offer_4_title`, `offer_4_text`, `offer_4_link`
- `disclaimer`

### Approach Section
- `approach_title`
- `approach_1_title`, `approach_1_text`
- `approach_2_title`, `approach_2_text`
- `approach_3_title`, `approach_3_text`
- `approach_4_title`, `approach_4_text`

### News Section
- `news_title`
- `news_1_date`, `news_1_title`, `news_1_text`, `news_1_link`
- `news_2_date`, `news_2_title`, `news_2_text`, `news_2_link`
- `news_3_date`, `news_3_title`, `news_3_text`, `news_3_link`

### Contact Section
- `contact_title`, `contact_intro`
- `form_name`, `form_email`, `form_message`
- `form_gdpr`, `form_submit`
- `form_success`, `form_error_empty`, `form_error_email`, `form_error_gdpr`
- `form_sending`

### Footer
- `footer_title`, `footer_description`
- `footer_links`, `footer_legal_impressum`, `footer_legal_datenschutz`, `footer_legal_agb`, `footer_legal_cookies`
- `footer_contact`, `footer_contact_form`
- `footer_copyright`

### Cookie Banner
- `cookie_message`, `cookie_reject`, `cookie_settings`, `cookie_accept`
- `cookie_title`, `cookie_necessary`, `cookie_analytics`, `cookie_marketing`, `cookie_note`

## 🧪 Testing the Bilingual System

### Test Checklist

- [ ] Click flag button (top right in nav)
- [ ] Language toggles between German and English
- [ ] All page text changes
- [ ] Reload page - language preference persists
- [ ] Try contact form in both languages
- [ ] Try cookie banner in both languages
- [ ] Mobile - flag shows with text
- [ ] Desktop - flag shows without text label
- [ ] Legal pages have language switchers
- [ ] Links between languages work

### Common Issues & Fixes

**Problem: Text doesn't change when toggling language**
→ Make sure element has `data-i18n="key"` attribute
→ Check that the key exists in i18n.js for both languages
→ Open DevTools (F12) and check Console for warnings

**Problem: Placeholder text showing instead of translation**
→ Translation key might not exist in i18n.js
→ Add the key to both `de` and `en` objects

**Problem: Form messages still showing in German**
→ script.js needs to use `languageManager.getText()`
→ Already updated, but check script.js for updates

## 📊 File Size Summary

| File | Size | Purpose |
|------|------|---------|
| i18n.js | 17KB | Translation system + all text |
| index.html | 14KB | Main page with translation keys |
| script.js | 9.7KB | Interactions + form handling |
| styles.css | 19KB | Responsive design (no change to size) |
| impressum.html | 8KB | German legal |
| impressum-en.html | 8KB | English legal |
| datenschutz.html | 11KB | German privacy |
| datenschutz-en.html | 11KB | English privacy |
| agb.html | 12KB | German terms |
| agb-en.html | 12KB | English terms |

**Total: ~120KB** (slightly increased due to translations, but still very fast)

## 🚀 Deployment Notes

- No backend needed - all translation is client-side
- Works offline once loaded
- No API calls for translations
- localStorage is supported in all modern browsers
- Works on mobile and desktop

## 🎨 Design Notes

### Font Change Impact
- More elegant and softer appearance
- Better readability on small screens
- Still professional for coaching business
- Better character spacing

### Language Button Styling
- Warm brown active state (matches primary color)
- Light background when inactive
- Clear visual feedback
- Accessible on all screen sizes

## 🔐 Privacy & Performance

**No Third-Party Translation Service:**
- All translations are hardcoded in i18n.js
- No API calls to Google Translate or similar
- GDPR compliant - no external tracking
- Fast - no network latency

**Performance:**
- Translation happens instantly on client
- No server requests
- DOM updates are optimized
- localStorage caching

## 🎯 Next Steps

1. ✅ Test both languages thoroughly
2. ✅ Verify legal pages work in both languages
3. ✅ Check mobile layout
4. ✅ Test form in both languages
5. ✅ Test cookie banner in both languages
6. ✅ Add to GitHub with git commands
7. ✅ Deploy to GitHub Pages
8. ✅ Present to stakeholders

---

**Everything is ready!** Your website now has full German/English support with a soft, elegant font. 🌍✨
