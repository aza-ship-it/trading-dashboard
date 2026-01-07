# Trading Dashboard

Un tableau de bord de trading moderne et réactif construit avec Next.js, TypeScript et Tailwind CSS.

## Prérequis

- Node.js 18+ (version recommandée : 18.x ou supérieure)
- npm ou yarn

## Installation

### 1. Cloner le repository

```bash
git clone <repository-url>
cd trading-dashboard
```

### 2. Installer les dépendances

```bash
npm install
```

Ou si vous utilisez yarn :

```bash
yarn install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ou avec yarn :

```bash
yarn dev
```

L'application sera accessible sur **http://localhost:3000**

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement sur http://localhost:3000
- `npm run build` - Compile l'application pour la production
- `npm start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint

## Fonctionnalités

- 📊 Vue d'ensemble du portefeuille avec des statistiques en temps réel
- 💰 Suivi des profits et pertes
- 📈 Liste des positions actives
- 📉 Historique des trades récents
- 🌓 Support du mode sombre
- 📱 Design responsive (mobile, tablette, desktop)

## Technologies utilisées

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS 4** - Framework CSS utilitaire
- **React 19** - Bibliothèque UI

## Structure du projet

```
trading-dashboard/
├── src/
│   └── app/
│       ├── layout.tsx      # Layout principal
│       ├── page.tsx        # Page d'accueil (dashboard)
│       └── globals.css     # Styles globaux
├── public/                 # Fichiers statiques
├── package.json            # Dépendances et scripts
└── README.md              # Ce fichier
```

---

## English Version

A modern and responsive trading dashboard built with Next.js, TypeScript, and Tailwind CSS.

### Prerequisites

- Node.js 18+ (recommended version: 18.x or higher)
- npm or yarn

### Installation

#### 1. Clone the repository

```bash
git clone <repository-url>
cd trading-dashboard
```

#### 2. Install dependencies

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

#### 3. Start the development server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be accessible at **http://localhost:3000**

### Available Scripts

- `npm run dev` - Starts the development server on http://localhost:3000
- `npm run build` - Builds the application for production
- `npm start` - Runs the application in production mode
- `npm run lint` - Checks code with ESLint

### Features

- 📊 Portfolio overview with real-time statistics
- 💰 Profit and loss tracking
- 📈 Active positions monitoring
- 📉 Recent trades history
- 🌓 Dark mode support
- 📱 Responsive design (mobile, tablet, desktop)

### Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Static typing for JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - UI library
