# 📖 Smart Reading Mode - Browser Extension

## 🚀 Overview
Smart Reading Mode is a **browser extension** that provides a distraction-free reading experience by extracting and summarizing the main content from web pages. It leverages a **React (Vite) frontend** for the extension UI and an **ASP.NET Core Web API backend** for content processing.

## ✨ Features
✅ **Distraction-Free Mode** - Extracts and cleans up webpage content for easy reading.
✅ **AI-Powered Summarization** - Uses ML.NET or external APIs to summarize text.
✅ **Dark Mode Support** - Enhances reading comfort.
✅ **Custom Font & Theme Options** - Adjustable reading settings.
✅ **Offline Mode** - Saves extracted content for later reading.

---

## 📂 Folder Structure
```
smart-reading-mode-extension/
│── backend/                     # .NET Backend (ASP.NET Core API)
│   ├── SmartReader.API/         # Web API Project
│   ├── SmartReader.Tests/       # Backend Tests
│── extension/                   # React + Manifest V3 Extension
│   ├── public/                  # Static Files (Icons, Manifest)
│   ├── src/                     # React Source Code
│   │   ├── background/          # Background Worker
│   │   ├── content/             # Content Scripts
│   │   ├── components/          # UI Components
│   │   ├── pages/               # Popup & Settings Page
│   │   ├── utils/               # Helper Functions
│   ├── package.json             # Frontend Dependencies
│── README.md                    # Project Documentation
```

---

## 🏗 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/smart-reading-mode-extension.git
cd smart-reading-mode-extension
```

### **2️⃣ Backend Setup (ASP.NET Core API)**
```sh
cd backend
# Install dependencies
 dotnet restore
# Run the API
 dotnet run
```
The API will be available at `http://localhost:5000/api/readability/extract`.

### **3️⃣ Frontend Setup (React + Manifest V3)**
```sh
cd ../extension
# Install dependencies
npm install
# Build the extension
npm run build
```

### **4️⃣ Load the Extension in Chrome**
1. Open **chrome://extensions/**.
2. Enable **Developer Mode**.
3. Click **Load Unpacked** and select the `extension/dist` folder.

---

## 🚀 Usage Guide
- Click on the extension icon to enable **Reading Mode**.
- Click **Summarize Page** to get an AI-generated summary.
- Customize fonts and theme via **Settings**.

---

## 🛠 Tech Stack
- **Frontend**: React (Vite), WebExtension APIs, Tailwind CSS
- **Backend**: ASP.NET Core Web API, ML.NET (for AI summarization)
- **Database**: (Optional) SQLite for storing user preferences
- **Build Tools**: Vite, Webpack

---

## 🤝 Contribution Guide
1. **Fork** this repository.
2. Create a **new branch**: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Added new feature"`
4. Push branch: `git push origin feature-name`
5. Submit a **Pull Request** 🚀

---

## 📝 License
This project is licensed under the **MIT License**. Feel free to use and modify!

---

## ⭐ Show Your Support
If you find this project helpful, **star the repo** and share it! 🌟

For any issues or feature requests, open an **issue** on GitHub.

---

🎉 **Happy Reading!**

