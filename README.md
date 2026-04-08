---

# 🍫 Power Chocolet

A modern, responsive React-based website for **Power Chocolet**, built with **React**, **TailwindCSS**, **Redux Toolkit**, and **Vite**.
The project showcases products, reviews, news, and an interactive UI with smooth animations and reusable components.

---

## Live Link: https://power-chocolate-web-app.vercel.app/

---

## 📂 Project Structure

```
Chocolet_Page/
└── power_chocolet/
    ├── public/          # Static assets (images, icons, favicon)
    ├── src/
    │   ├── assets/      # Extra assets like vite.svg
    │   ├── components/  # React UI components
    │   ├── lib/         # Axios configuration
    │   ├── pages/       # Route pages (Home, Login, Register)
    │   └── redux/       # Redux store and slices
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## ⚡ Features

* Responsive layout with **TailwindCSS**
* State management using **Redux Toolkit**
* Routing with **React Router DOM**
* API calls handled using **Axios**
* Components for hero section, product showcase, reviews, newsletter, and OTP verification
* Modern UI icons with **Lucide React**
* Notifications using **React Hot Toast**

---

## 🛠 Tools & Packages Used

### Core Libraries:

* **React 19** – Frontend framework
* **React DOM 19** – React rendering
* **TailwindCSS 4** – Utility-first CSS framework
* **Redux Toolkit** – State management
* **React Router DOM 7** – Routing
* **Axios** – API requests
* **Lucide React** – Icons
* **React Hot Toast** – Notifications

### Development Tools:

* **Vite 8** – Development server & build tool
* **ESLint** – Code linting
* **@vitejs/plugin-react** – React plugin for Vite
* **TypeScript types for React** – `@types/react`, `@types/react-dom`

---

## 🛠 Project Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone <repository_url>
cd Chocolet_Page/power_chocolet
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🔧 ESLint & Code Quality

Lint all files to ensure clean code:

```bash
npm run lint
```

---

## 📝 Additional Notes

* All images and icons are stored in the `public` folder.
* Components are reusable and organized in `src/components`.
* State management and API logic are separated for maintainability.
* Uses **Vite** for faster builds and hot module replacement.

---

## 📜 License

This project is **private** and cannot be redistributed without permission.

---
