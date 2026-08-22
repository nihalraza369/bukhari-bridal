# Expert Bridal Dress — Website

Next.js + React website banaya gaya hai aapki dukaan "Expert Bridal Dress" (Sharara,
Gharara, Lehnga, Saree, Party Wear — Karachi) ke liye. Theme: white & gold/yellow,
bridal hero image ke saath.

## Chalane ka tareeqa (How to run)

1. Node.js install karein (version 18 ya us se upar): https://nodejs.org
2. Terminal mein is folder ke andar jayein aur likhein:

   ```
   npm install
   npm run dev
   ```

3. Browser mein kholein: http://localhost:3000

## Production ke liye build

```
npm run build
npm run start
```

## Kya edit karna hai (What you'll likely want to change)

- **`app/siteData.js`** — sara business data (naam, phone, address, hours, categories,
  gallery images) is ek file mein hai. Yahan se number, address ya timings change karein.
- **Photos** — abhi Pexels ki free stock photos use ho rahi hain (bridal wear ke liye).
  Apni dukaan ki asli photos lagane ke liye `app/siteData.js` mein image URLs ko apni
  photo ke path se replace karein (e.g. `/gallery-1.jpg` — file `public/` folder mein
  daalni hogi).
- **Reviews** — `app/components/Reviews.js` mein sample/placeholder testimonials hain,
  inhein apne asli Google reviews se replace kar dein.
- **Colours** — `app/globals.css` ke top par `:root { ... }` mein saare colours
  (gold/white) defined hain — wahan se palette adjust ho sakti hai.

## Deploy kahan karein

Sabse asaan tareeqa **Vercel** (Next.js banane walon ki company) hai:
1. GitHub par is code ko push karein
2. https://vercel.com par sign up karke apna GitHub repo import karein — deploy khud ho
   jayega.

Ya phir kisi bhi Node.js hosting (Hostinger, DigitalOcean, etc.) par `npm run build`
aur `npm run start` chala kar bhi host kar sakte hain.
