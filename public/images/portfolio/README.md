# How to Add Real Website Screenshots

## Quick Instructions

### Step 1: Take Screenshots

1. **Open each website in your browser:**
   - https://ganeshresthouse.online/
   - https://acttravelcompany.online/
   - http://13.51.196.215/user/

2. **Take full-page screenshots:**
   - **Windows**: Press `Win + Shift + S` and select area, OR use browser's built-in screenshot tool
   - **Chrome/Edge**: Press `F12` → Click the three dots (⋮) → "Capture screenshot" → "Capture full size screenshot"
   - **Firefox**: Right-click → "Take Screenshot" → "Save full page"

3. **Save the screenshots as:**
   - `ganesh-resthouse.jpg` or `.png`
   - `act-travel.jpg` or `.png`
   - `user-portal.jpg` or `.png`

### Step 2: Add to Project

1. **Navigate to the folder:**
   ```
   TECHMAWA SITE\public\images\portfolio\
   ```

2. **Copy your screenshot files into this folder**

3. **The website will automatically load them!**

### Step 3: Update File Extensions (if needed)

If you saved as PNG instead of JPG, update the HTML:

Open `index.html` and change lines 198, 208, 218:
- Change `.svg` to `.png` or `.jpg` depending on your file format

## Current Status

✅ Folder structure is ready: `public/images/portfolio/`
✅ HTML is configured to load images
✅ CSS styling is applied for hover effects
✅ Fallback gradients will show until you add real images

## Tips for Best Results

- **Resolution**: 1920x1080 or higher
- **Format**: JPG (smaller file size) or PNG (better quality)
- **File size**: Keep under 500KB for fast loading
- **Aspect ratio**: 16:9 (landscape orientation)

Once you add the screenshots, refresh your browser and the portfolio will display the actual website images!
