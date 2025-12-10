# NIKAH - Premium Wedding Photography

A high-end, SEO-optimized wedding photography portfolio and booking engine built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```
The optimized production files will be output to the `dist` directory.

---

## ☁️ Deployment (Netlify)

This project is optimized for deployment on Netlify.

### Build Settings
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### Netlify CMS Setup
To enable the admin panel (`/admin`):
1. Go to your Netlify Dashboard > **Site Settings** > **Identity**.
2. Click **Enable Identity**.
3. Scroll down to **Git Gateway** and click **Enable Git Gateway**.
4. You can now access `yoursite.com/admin/` to manage content.

---

## 📁 Project Structure

- **`/src`**: Application source code (React components, pages, context).
- **`/public`**: Static assets, including the `admin/` folder for CMS config.
- **`/content`**: JSON and Markdown files acting as the database for the CMS.
  - `home.json`: Homepage content.
  - `gallery.json`: Portfolio images.
  - `reviews.json`: Client testimonials.
  - `blog/`: Markdown blog posts.

## 🛠 Technologies

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, Framer Motion
- **Typography:** EB Garamond (Serif), Bodoni Moda (Subheadings), Montserrat (Sans)
- **CMS:** Netlify CMS (Decap CMS)
