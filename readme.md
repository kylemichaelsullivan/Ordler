# React Native Expo + NativeWind

This is a mobile application built using **React Native**, **Expo**, and **NativeWind**. This setup provides a streamlined development environment for building cross-platform apps with Tailwind CSS styling through NativeWind.

## Features

- **React Native** with Expo for seamless cross-platform development
- **NativeWind** for Tailwind CSS styling in React Native
- **Expo** for easy setup and fast development with managed workflows
- **TypeScript** support for type-safe code (if enabled)

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or newer)
- **npm** package manager
- **Expo CLI**: Install via `npm install -g expo-cli`

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kylemichaelsullivan/Ordler
cd Ordler
```

### 2. Install Dependencies

Use `npm` to install the necessary dependencies:

```bash
npm install
```

### 3. Start the Development Server

Launch the Expo development server with:

```bash
npm start
```

This will start the Expo development environment, where you can preview the app on an emulator or physical device.

## Project Structure

```plaintext
.
├── App.jsx             # Main application entry
├── assets/            # Asset files (images, fonts, etc.)
├── components/        # Reusable components
├── screens/           # Screen components for navigation
└── tailwind.config.js # Tailwind CSS configuration for NativeWind
```

## Configuration

### Tailwind CSS with NativeWind

1. Configure **Tailwind CSS** in `tailwind.config.js`:

   ```js
   // tailwind.config.js
   module.exports = {
   	content: ['./App.js', './screens/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
   	theme: {
   		extend: {},
   	},
   	plugins: [],
   };
   ```

2. **NativeWind** is already configured to support Tailwind classes in your React Native components. Use Tailwind classes as usual in your components.
3. _Optional_ you can install **Tailwind CSS IntelliSense** Extension in VSCode

## Scripts

- **`npm start`** - Start the Expo development server
- **`npm build`** - Build the app for production
