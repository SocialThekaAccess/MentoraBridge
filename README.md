# Mentora Bridge — Test Portal
## Setup Guide (Step by Step)

---

## STEP 1 — WooCommerce REST API Keys Banao

1. WordPress Admin → WooCommerce → Settings → Advanced → REST API
2. "Add Key" dabao
3. Description: "Mentora Portal"
4. Permissions: "Read/Write"
5. "Generate API Key" dabao
6. **Consumer Key** aur **Consumer Secret** copy karo

Phir `src/utils/verifyToken.js` aur `src/utils/submitResponses.js` mein:
```
const WC_KEY = 'ck_...'      ← apna key paste karo
const WC_SECRET = 'cs_...'   ← apna secret paste karo
const WC_URL = 'https://mentorabridge.com'
```

---

## STEP 2 — WordPress Plugin Install Karo

1. `mentora-test-link-sender.php` file lo
2. WordPress Admin → Plugins → Add New → Upload Plugin
3. File upload karo → Install → Activate
4. Plugin file mein `$product_test_map` update karo:
   ```php
   $product_test_map = [
       YOUR_PRODUCT_ID_1 => 'class7-8',
       YOUR_PRODUCT_ID_2 => 'class9-10',
       // etc...
   ];
   ```
   Product IDs milenge: WooCommerce → Products → Product ke naam pe hover karo → ID dikhegi

5. Admin email update karo: `submitResponses.js` mein:
   ```
   const ADMIN_EMAIL = 'your@email.com'
   ```

---

## STEP 3 — React App Build Karo

```bash
cd mentora-portal
npm install
npm run build
```

`dist/` folder ban jaayega.

---

## STEP 4 — GoDaddy pe Upload Karo

1. GoDaddy cPanel → File Manager
2. `public_html/portal/` folder banao (agar nahi hai)
3. `dist/` folder ke andar ki saari files → `/portal/` mein upload karo
4. Test karo: `mentorabridge.com/portal/`

---

## STEP 5 — Test Karo

1. WooCommerce mein ek test order banao (manually "Completed" karo)
2. Email check karo — link aana chahiye
3. Link click karo → terms page dikhna chahiye
4. Test complete karo → result page dikhna chahiye
5. Admin email mein responses aane chahiye

---

## Test Types & URLs

| Product | Test Type | URL Parameter |
|---------|-----------|---------------|
| Class 7-8 | class7-8 | `?token=ORDER_ID&type=class7-8` |
| Class 9-10 | class9-10 | `?token=ORDER_ID&type=class9-10` |
| Class 11-12 Science | class11-12-science | `?token=ORDER_ID&type=class11-12-science` |
| Class 11-12 Commerce | class11-12-commerce | `?token=ORDER_ID&type=class11-12-commerce` |
| Class 11-12 Arts | class11-12-arts | `?token=ORDER_ID&type=class11-12-arts` |
| Graduate | graduate | `?token=ORDER_ID&type=graduate` |
| Professional | professional | `?token=ORDER_ID&type=professional` |

---

## Questions Kaise Update Kare

`src/data/testsData.js` file open karo. Har test mein sections hain, har section mein questions hain.

Rating question format:
```js
{ id: 1, text: 'Aapka question yahan', type: 'rating' }
```

MCQ question format:
```js
{
  id: 2,
  text: 'Aapka question yahan',
  type: 'mcq',
  options: {
    A: 'Option A',
    B: 'Option B',
    C: 'Option C',
    D: 'Option D',
  }
}
```

Questions update karne ke baad `npm run build` dobara run karo.

---

## File Structure

```
mentora-portal/
├── src/
│   ├── App.jsx                    — Routing
│   ├── index.css                  — Global styles
│   ├── main.jsx                   — Entry point
│   ├── data/
│   │   └── testsData.js           — Saare 7 tests ke questions ⭐ yahan edit karo
│   ├── pages/
│   │   ├── VerifyPage.jsx/css     — Token verify karta hai
│   │   ├── TermsPage.jsx/css      — Terms + consent page
│   │   ├── QuizPage.jsx/css       — Main test engine
│   │   ├── ResultPage.jsx/css     — Submission complete
│   │   └── StatusPages.jsx/css   — Expired / Used / Invalid screens
│   └── utils/
│       ├── verifyToken.js         — WooCommerce se token check
│       └── submitResponses.js     — WooCommerce + email submit
├── mentora-test-link-sender.php   — WordPress plugin ⭐
├── package.json
├── vite.config.js
└── index.html
```

---

## Support

Kisi bhi problem ke liye apne developer se share karo yeh file.
