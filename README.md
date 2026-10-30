# 📊 Data Analyst & Business Intelligence Portfolio

A modern, responsive portfolio website built specifically for **Data Analysts & BI Specialists** to showcase **dashboards, SQL data pipelines, predictive models, and business case studies**.

---

## 🚀 Quick Start (View Right Now)

You can preview your portfolio immediately:
- Simply double-click **`index.html`** in this folder to open it in Chrome, Edge, or Firefox!
- Or, if you prefer a local development server, run:
  ```bash
  npx serve .
  ```
  and open `http://localhost:3000` in your browser.

---

## 🖼️ How to Add Your Own Images & Dashboard Screenshots

1. Take a screenshot of your dashboard in Power BI, Tableau, Excel, or Python (press `Win + Shift + S`).
2. Save your image into the folder:
   ```
   assets/images/
   ```
   *(e.g., `assets/images/my-sales-dashboard.png`)*
3. Open **`js/projects-data.js`** in any text editor.
4. Locate the project you want to update and change the `image` path:
   ```javascript
   image: "assets/images/my-sales-dashboard.png",
   ```
5. Refresh your browser! The image will appear with full click-to-zoom (lightbox) support.

---

## 🎥 How to Add Video Walkthroughs or Loom Clips

Hiring managers love 60-second video walkthroughs. You can add them in two ways in **`js/projects-data.js`**:

### Option A: Loom or YouTube Video Embed (Recommended)
1. Record a short video on [Loom.com](https://www.loom.com/) showing your dashboard slicers and key insights.
2. Copy the embed URL and set it in `projects-data.js`:
   ```javascript
   loomUrl: "https://www.loom.com/embed/YOUR_VIDEO_ID",
   ```

### Option B: Local MP4 Screen Recording
1. Record a 10–15s clip using Windows Game Bar (`Win + Alt + R`) or [ScreenToGif](https://www.screentogif.com/).
2. Save the file into `assets/videos/` (e.g. `assets/videos/sales-demo.mp4`).
3. Set the video path in `projects-data.js`:
   ```javascript
   video: "assets/videos/sales-demo.mp4",
   ```

---

## ✏️ How to Edit Your Bio, Resume, & Links

All your profile data is conveniently organized in one file: **`js/projects-data.js`**:
- **Name & Title:** Change `portfolioProfile.name` and `portfolioProfile.title`.
- **Email, LinkedIn, & GitHub:** Update `portfolioProfile.email`, `portfolioProfile.linkedin`, and `portfolioProfile.github`.
- **Resume:** Drop your `resume.pdf` into `assets/` and set `resumeUrl: "assets/resume.pdf"`.
- **Projects & Case Studies:** You can edit the business problems, metrics, insights, and recommendations directly in the `projectsData` array.

---

## 🌐 How to Deploy for Free (In Under 2 Minutes)

### Method 1: GitHub Pages (Free forever)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial data analyst portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and save. Your site is live at `https://YOUR_USERNAME.github.io/portfolio/`!

### Method 2: Netlify Drop (Zero command-line, 30 seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this `portfolio` folder directly into the browser window.
3. Your portfolio is immediately live with a free custom SSL link!

