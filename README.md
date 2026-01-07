# Trading Dashboard & Base de Connaissances

Une application moderne de trading dashboard et base de connaissances personnelle, construite avec Next.js 14+, Tailwind CSS et Shadcn UI.

## 🎯 Fonctionnalités

### 📊 Dashboard
- **KPIs en temps réel** : Win Rate, Profit Factor, P&L Total, Nombre de Trades
- **Courbe d'Équité** : Visualisation graphique de l'évolution du capital avec Recharts
- **Derniers Trades** : Affichage des 5 derniers trades avec indicateurs visuels
- **Règles du Jour** : Rappel des règles importantes de trading

### 📖 Journal de Trading
- **Tableau complet** : Liste de tous les trades avec filtrage
- **Colonnes détaillées** : Date, Instrument, Setup, Direction, Entry/Exit, R:R, P&L
- **Indicateurs visuels** : Codes couleur pour Long/Short et gains/pertes
- **Données réalistes** : 30 trades fictifs avec résultats variés

### 📚 Base de Connaissances
- **Organisation par catégories** : Stratégies, Psychologie, Analyse Technique
- **Interface type Notion** : Liste d'articles à gauche, contenu à droite
- **Support Markdown** : Titres, listes, code snippets, citations
- **4 articles préchargés** : Contenu éducatif complet

### 🎯 Playbooks (Setups)
- **Galerie de cartes** : 6 setups prédéfinis
- **Vue détaillée** : Règles d'entrée et de sortie pour chaque setup
- **Setups inclus** :
  - Breakout & Retest
  - Double Top / Double Bottom
  - Support/Resistance Bounce
  - Trend Following
  - Range Trading
  - Divergence RSI

## 🎨 Design

### Thème Dark Mode
- **Fond** : Slate-950/Black pour un style terminal financier
- **Accents** :
  - 🟢 Vert émeraude (#10b981) pour les gains
  - 🔴 Rouge rose (#f43f5e) pour les pertes
- **Typographie** :
  - Police principale : System fonts pour le texte
  - Police monospace : System monospace pour les chiffres
- **Style** : Terminal financier moderne type Bloomberg

## 🛠️ Stack Technique

- **Framework** : Next.js 14+ avec App Router
- **Styling** : Tailwind CSS 4
- **Composants UI** : Shadcn UI (Card, Table, Button, etc.)
- **Graphiques** : Recharts
- **Icônes** : Lucide React
- **Langage** : TypeScript (strict mode)
- **Dates** : date-fns avec locale française

## 📁 Structure du Projet

```
trading-dashboard/
├── app/
│   ├── page.tsx              # Dashboard principal
│   ├── journal/
│   │   └── page.tsx          # Journal de trading
│   ├── knowledge/
│   │   └── page.tsx          # Base de connaissances
│   ├── playbooks/
│   │   └── page.tsx          # Setups de trading
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── ui/                   # Composants Shadcn UI
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   └── button.tsx
│   ├── Sidebar.tsx           # Navigation latérale
│   ├── AppLayout.tsx         # Layout avec sidebar
│   ├── KPICard.tsx           # Carte KPI
│   ├── EquityChart.tsx       # Graphique d'équité
│   ├── RecentTrades.tsx      # Widget derniers trades
│   └── DailyRules.tsx        # Widget règles du jour
├── data/
│   └── mockData.ts           # Données fictives
├── types/
│   └── index.ts              # Types TypeScript
└── lib/
    └── utils.ts              # Utilitaires (cn function)
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd trading-dashboard

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour Production

```bash
# Build l'application
npm run build

# Démarrer le serveur de production
npm start
```

## 📊 Données Mock

L'application utilise actuellement des données fictives définies dans `data/mockData.ts` :
- **30 trades** avec résultats variés (gains/pertes)
- **Courbe d'équité** sur 3 mois (Jan-Fév 2024)
- **4 articles** de base de connaissances
- **6 playbooks** avec règles détaillées

## 🎯 Interfaces TypeScript

```typescript
interface Trade {
  id: string;
  date: Date;
  instrument: string;
  setup: string;
  direction: 'long' | 'short';
  entryPrice: number;
  exitPrice: number;
  stopLoss: number;
  positionSize: number;
  screenshot?: string;
  notes?: string;
  emotionalScore?: number;
  followedPlan: boolean;
  pnl: number;
  riskReward: number;
}

interface KnowledgeArticle {
  id: string;
  title: string;
  category: 'strategy' | 'psychology' | 'technical-analysis';
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Playbook {
  id: string;
  name: string;
  description: string;
  entryRules: string[];
  exitRules: string[];
  imageUrl?: string;
}
```

## 🔮 Évolutions Futures

- [ ] Intégration d'une vraie base de données (Supabase, PostgreSQL)
- [ ] Authentification utilisateur
- [ ] Ajout/Édition de trades via formulaire
- [ ] Upload de screenshots
- [ ] Filtrage et recherche avancés
- [ ] Export de données (CSV, PDF)
- [ ] Graphiques de performance supplémentaires
- [ ] Mode multi-utilisateur
- [ ] API REST pour intégrations externes

## 📝 License

MIT

## 👨‍💻 Développement

Ce projet a été créé comme un dashboard personnel de trading. N'hésitez pas à le forker et à l'adapter à vos besoins !

---

**Note** : Cette application est un outil de suivi personnel et ne constitue pas un conseil en investissement. Tradez de manière responsable.
