import { Trade, KnowledgeArticle, Playbook, EquityPoint } from '@/types';

// Mock Trades Data
export const mockTrades: Trade[] = [
  {
    id: '1',
    date: new Date('2024-01-15'),
    instrument: 'EUR/USD',
    setup: 'Breakout & Retest',
    direction: 'long',
    entryPrice: 1.0950,
    exitPrice: 1.1020,
    stopLoss: 1.0920,
    positionSize: 10000,
    notes: 'Clean breakout du range, retest parfait du niveau. Volume confirmé.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 700,
    riskReward: 2.33
  },
  {
    id: '2',
    date: new Date('2024-01-16'),
    instrument: 'GBP/USD',
    setup: 'Double Top',
    direction: 'short',
    entryPrice: 1.2750,
    exitPrice: 1.2680,
    stopLoss: 1.2800,
    positionSize: 8000,
    notes: 'Formation double top claire, divergence RSI confirmée.',
    emotionalScore: 7,
    followedPlan: true,
    pnl: 560,
    riskReward: 1.4
  },
  {
    id: '3',
    date: new Date('2024-01-17'),
    instrument: 'BTC/USD',
    setup: 'Support/Resistance',
    direction: 'long',
    entryPrice: 42000,
    exitPrice: 41500,
    stopLoss: 41800,
    positionSize: 0.5,
    notes: "Faux signal, le support n'a pas tenu. Stop loss respecté.",
    emotionalScore: 6,
    followedPlan: true,
    pnl: -250,
    riskReward: -2.5
  },
  {
    id: '4',
    date: new Date('2024-01-18'),
    instrument: 'EUR/USD',
    setup: 'Trend Following',
    direction: 'long',
    entryPrice: 1.0980,
    exitPrice: 1.1050,
    stopLoss: 1.0950,
    positionSize: 12000,
    notes: 'Belle tendance haussière, entrée sur pullback EMA 20.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 840,
    riskReward: 2.33
  },
  {
    id: '5',
    date: new Date('2024-01-19'),
    instrument: 'USD/JPY',
    setup: 'Range Trading',
    direction: 'short',
    entryPrice: 148.50,
    exitPrice: 147.80,
    stopLoss: 149.00,
    positionSize: 10000,
    notes: 'Range bien défini, entrée au haut du range.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 700,
    riskReward: 1.4
  },
  {
    id: '6',
    date: new Date('2024-01-22'),
    instrument: 'AAPL',
    setup: 'Breakout & Retest',
    direction: 'long',
    entryPrice: 185.50,
    exitPrice: 183.20,
    stopLoss: 184.00,
    positionSize: 50,
    notes: "Breakout qui s'est révélé être un faux signal. Stop respecté.",
    emotionalScore: 5,
    followedPlan: true,
    pnl: -115,
    riskReward: -1.53
  },
  {
    id: '7',
    date: new Date('2024-01-23'),
    instrument: 'ETH/USD',
    setup: 'Support/Resistance',
    direction: 'long',
    entryPrice: 2450,
    exitPrice: 2580,
    stopLoss: 2400,
    positionSize: 2,
    notes: 'Rebond puissant sur support majeur, objectif atteint.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 260,
    riskReward: 2.6
  },
  {
    id: '8',
    date: new Date('2024-01-24'),
    instrument: 'EUR/GBP',
    setup: 'Trend Following',
    direction: 'short',
    entryPrice: 0.8550,
    exitPrice: 0.8500,
    stopLoss: 0.8580,
    positionSize: 15000,
    notes: 'Tendance baissière forte, continuation parfaite.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 750,
    riskReward: 1.67
  },
  {
    id: '9',
    date: new Date('2024-01-25'),
    instrument: 'TSLA',
    setup: 'Double Bottom',
    direction: 'long',
    entryPrice: 210.50,
    exitPrice: 218.30,
    stopLoss: 208.00,
    positionSize: 40,
    notes: 'Formation double bottom textbook, belle hausse.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 312,
    riskReward: 3.12
  },
  {
    id: '10',
    date: new Date('2024-01-26'),
    instrument: 'GBP/JPY',
    setup: 'Range Trading',
    direction: 'long',
    entryPrice: 188.20,
    exitPrice: 189.40,
    stopLoss: 187.70,
    positionSize: 8000,
    notes: 'Achat au bas du range, sortie au milieu du range.',
    emotionalScore: 7,
    followedPlan: true,
    pnl: 960,
    riskReward: 2.4
  },
  {
    id: '11',
    date: new Date('2024-01-29'),
    instrument: 'EUR/USD',
    setup: 'Breakout & Retest',
    direction: 'short',
    entryPrice: 1.0920,
    exitPrice: 1.0970,
    stopLoss: 1.0890,
    positionSize: 10000,
    notes: "Je n'ai pas attendu le retest complet. Erreur de patience.",
    emotionalScore: 4,
    followedPlan: false,
    pnl: -500,
    riskReward: -1.67
  },
  {
    id: '12',
    date: new Date('2024-01-30'),
    instrument: 'BTC/USD',
    setup: 'Support/Resistance',
    direction: 'long',
    entryPrice: 43500,
    exitPrice: 44800,
    stopLoss: 43000,
    positionSize: 0.5,
    notes: 'Résistance cassée, continuation haussière forte.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 650,
    riskReward: 2.6
  },
  {
    id: '13',
    date: new Date('2024-01-31'),
    instrument: 'AUD/USD',
    setup: 'Trend Following',
    direction: 'long',
    entryPrice: 0.6650,
    exitPrice: 0.6700,
    stopLoss: 0.6620,
    positionSize: 20000,
    notes: 'Belle tendance, entrée propre sur pullback.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 1000,
    riskReward: 1.67
  },
  {
    id: '14',
    date: new Date('2024-02-01'),
    instrument: 'NVDA',
    setup: 'Breakout & Retest',
    direction: 'long',
    entryPrice: 615.00,
    exitPrice: 630.50,
    stopLoss: 610.00,
    positionSize: 15,
    notes: 'Breakout puissant avec volume. Excellent setup.',
    emotionalScore: 10,
    followedPlan: true,
    pnl: 232.50,
    riskReward: 3.1
  },
  {
    id: '15',
    date: new Date('2024-02-02'),
    instrument: 'USD/CHF',
    setup: 'Double Top',
    direction: 'short',
    entryPrice: 0.8750,
    exitPrice: 0.8720,
    stopLoss: 0.8780,
    positionSize: 12000,
    notes: 'Formation confirmée, objectif partiel atteint.',
    emotionalScore: 7,
    followedPlan: true,
    pnl: 360,
    riskReward: 1.0
  },
  {
    id: '16',
    date: new Date('2024-02-05'),
    instrument: 'ETH/USD',
    setup: 'Support/Resistance',
    direction: 'short',
    entryPrice: 2600,
    exitPrice: 2550,
    stopLoss: 2630,
    positionSize: 1.5,
    notes: 'Rejet de résistance, belle baisse.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 75,
    riskReward: 1.67
  },
  {
    id: '17',
    date: new Date('2024-02-06'),
    instrument: 'EUR/USD',
    setup: 'Trend Following',
    direction: 'short',
    entryPrice: 1.0880,
    exitPrice: 1.0850,
    stopLoss: 1.0910,
    positionSize: 10000,
    notes: 'Sortie prématurée, le prix a continué à descendre.',
    emotionalScore: 6,
    followedPlan: false,
    pnl: 300,
    riskReward: 1.0
  },
  {
    id: '18',
    date: new Date('2024-02-07'),
    instrument: 'MSFT',
    setup: 'Range Trading',
    direction: 'long',
    entryPrice: 410.00,
    exitPrice: 418.50,
    stopLoss: 407.00,
    positionSize: 25,
    notes: 'Range bien respecté, objectif atteint.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 212.50,
    riskReward: 2.83
  },
  {
    id: '19',
    date: new Date('2024-02-08'),
    instrument: 'GBP/USD',
    setup: 'Double Bottom',
    direction: 'long',
    entryPrice: 1.2650,
    exitPrice: 1.2580,
    stopLoss: 1.2620,
    positionSize: 10000,
    notes: 'Faux signal, le prix n\'a pas rebondi comme prévu.',
    emotionalScore: 5,
    followedPlan: true,
    pnl: -700,
    riskReward: -2.33
  },
  {
    id: '20',
    date: new Date('2024-02-09'),
    instrument: 'BTC/USD',
    setup: 'Breakout & Retest',
    direction: 'long',
    entryPrice: 45000,
    exitPrice: 46500,
    stopLoss: 44500,
    positionSize: 0.5,
    notes: 'Breakout validé, excellent ratio risque/récompense.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 750,
    riskReward: 3.0
  },
  {
    id: '21',
    date: new Date('2024-02-12'),
    instrument: 'USD/JPY',
    setup: 'Support/Resistance',
    direction: 'long',
    entryPrice: 149.00,
    exitPrice: 150.20,
    stopLoss: 148.50,
    positionSize: 10000,
    notes: 'Support fort, continuation haussière.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 1200,
    riskReward: 2.4
  },
  {
    id: '22',
    date: new Date('2024-02-13'),
    instrument: 'AAPL',
    setup: 'Trend Following',
    direction: 'long',
    entryPrice: 187.50,
    exitPrice: 191.20,
    stopLoss: 186.00,
    positionSize: 50,
    notes: 'Tendance claire, entrée propre.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 185,
    riskReward: 2.47
  },
  {
    id: '23',
    date: new Date('2024-02-14'),
    instrument: 'EUR/GBP',
    setup: 'Range Trading',
    direction: 'short',
    entryPrice: 0.8580,
    exitPrice: 0.8540,
    stopLoss: 0.8600,
    positionSize: 12000,
    notes: 'Vente au haut du range, objectif atteint.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 480,
    riskReward: 2.0
  },
  {
    id: '24',
    date: new Date('2024-02-15'),
    instrument: 'TSLA',
    setup: 'Double Top',
    direction: 'short',
    entryPrice: 220.00,
    exitPrice: 224.50,
    stopLoss: 222.50,
    positionSize: 30,
    notes: 'Faux double top, le prix a continué à monter. Stop respecté.',
    emotionalScore: 6,
    followedPlan: true,
    pnl: -135,
    riskReward: -1.8
  },
  {
    id: '25',
    date: new Date('2024-02-16'),
    instrument: 'ETH/USD',
    setup: 'Breakout & Retest',
    direction: 'long',
    entryPrice: 2700,
    exitPrice: 2850,
    stopLoss: 2650,
    positionSize: 2,
    notes: 'Breakout majeur, belle continuation. Parfait setup.',
    emotionalScore: 10,
    followedPlan: true,
    pnl: 300,
    riskReward: 3.0
  },
  {
    id: '26',
    date: new Date('2024-02-19'),
    instrument: 'AUD/JPY',
    setup: 'Support/Resistance',
    direction: 'short',
    entryPrice: 97.50,
    exitPrice: 96.80,
    stopLoss: 98.00,
    positionSize: 15000,
    notes: 'Résistance claire, rejet propre.',
    emotionalScore: 8,
    followedPlan: true,
    pnl: 1050,
    riskReward: 1.4
  },
  {
    id: '27',
    date: new Date('2024-02-20'),
    instrument: 'EUR/USD',
    setup: 'Trend Following',
    direction: 'long',
    entryPrice: 1.0850,
    exitPrice: 1.0900,
    stopLoss: 1.0820,
    positionSize: 12000,
    notes: 'Trend robuste, entrée parfaite sur pullback.',
    emotionalScore: 9,
    followedPlan: true,
    pnl: 600,
    riskReward: 1.67
  },
  {
    id: '28',
    date: new Date('2024-02-21'),
    instrument: 'NVDA',
    setup: 'Double Bottom',
    direction: 'long',
    entryPrice: 720.00,
    exitPrice: 742.50,
    stopLoss: 712.00,
    positionSize: 10,
    notes: 'Formation parfaite, momentum fort.',
    emotionalScore: 10,
    followedPlan: true,
    pnl: 225,
    riskReward: 2.81
  },
  {
    id: '29',
    date: new Date('2024-02-22'),
    instrument: 'GBP/USD',
    setup: 'Range Trading',
    direction: 'long',
    entryPrice: 1.2600,
    exitPrice: 1.2650,
    stopLoss: 1.2570,
    positionSize: 10000,
    notes: 'Achat au bas du range, sortie conservatrice.',
    emotionalScore: 7,
    followedPlan: true,
    pnl: 500,
    riskReward: 1.67
  },
  {
    id: '30',
    date: new Date('2024-02-23'),
    instrument: 'BTC/USD',
    setup: 'Breakout & Retest',
    direction: 'long',
    entryPrice: 47500,
    exitPrice: 49800,
    stopLoss: 47000,
    positionSize: 0.5,
    notes: 'Excellent breakout, le retest a parfaitement tenu. Top trade!',
    emotionalScore: 10,
    followedPlan: true,
    pnl: 1150,
    riskReward: 4.6
  },
];

// Mock Equity Curve Data
export const mockEquityCurve: EquityPoint[] = [
  { date: '2024-01-01', equity: 10000 },
  { date: '2024-01-05', equity: 10000 },
  { date: '2024-01-10', equity: 10500 },
  { date: '2024-01-15', equity: 11200 },
  { date: '2024-01-20', equity: 11800 },
  { date: '2024-01-25', equity: 12500 },
  { date: '2024-01-30', equity: 13200 },
  { date: '2024-02-05', equity: 13800 },
  { date: '2024-02-10', equity: 13600 },
  { date: '2024-02-15', equity: 14200 },
  { date: '2024-02-20', equity: 15000 },
  { date: '2024-02-23', equity: 16150 },
];

// Mock Knowledge Base Articles
export const mockKnowledgeArticles: KnowledgeArticle[] = [
  {
    id: '1',
    title: 'Les Bases du Breakout & Retest',
    category: 'strategy',
    content: `# Breakout & Retest Strategy

## Qu'est-ce qu'un Breakout?

Un breakout se produit lorsque le prix franchit un niveau de support ou de résistance significatif avec conviction.

## Étapes clés

1. **Identification du niveau**: Repérer une zone de consolidation claire
2. **Confirmation du breakout**: Volume élevé + clôture au-delà du niveau
3. **Attente du retest**: Le prix revient tester le niveau cassé
4. **Entrée**: Quand le retest tient et que le prix repart

## Points d'attention

- Toujours attendre le retest pour confirmer
- Vérifier le volume lors du breakout
- Ne pas entrer si le retest casse le niveau à nouveau

## Risk Management

- Stop loss: Juste en dessous du niveau retesté
- Take profit: 2-3x le risque initial
- Position size: Max 2% du capital

## Exemple

\`\`\`
Prix consolidé entre 100 et 110
Breakout à 111 avec volume
Retest à 110.5
Entrée à 111 après confirmation
Stop à 109.5
Target à 115
\`\`\`
`,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    title: 'Gérer ses Émotions en Trading',
    category: 'psychology',
    content: `# La Psychologie du Trading

## L'importance de la discipline

Le trading est 80% psychologie et 20% technique. Sans discipline, même la meilleure stratégie échouera.

## Les émotions courantes

### La Peur
- Peur de perdre → Hésitation à entrer en position
- Peur de rater → FOMO (Fear Of Missing Out)

### La Cupidité
- Vouloir gagner plus → Ne pas prendre ses profits
- Overtrading → Multiplier les positions sans raison

### La Revanche
- Après une perte, vouloir "se refaire" rapidement
- Doubler la position suivante (très dangereux!)

## Techniques pour rester discipliné

1. **Suivre son plan de trading à la lettre**
2. **Tenir un journal** pour analyser ses erreurs
3. **Prendre des pauses** après une série de trades
4. **Méditation** avant les sessions de trading
5. **Accepter les pertes** comme partie du jeu

## Citation

> "Le marché peut rester irrationnel plus longtemps que vous ne pouvez rester solvable." - John Maynard Keynes
`,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    title: 'RSI: Relative Strength Index',
    category: 'technical-analysis',
    content: `# RSI - Relative Strength Index

## Introduction

Le RSI est un indicateur de momentum qui mesure la vitesse et l'ampleur des mouvements de prix.

## Calcul

Le RSI oscille entre 0 et 100:
- **RSI > 70**: Zone de surachat (potentiel retournement baissier)
- **RSI < 30**: Zone de survente (potentiel retournement haussier)

## Utilisation

### Signaux de base
1. **Surachat/Survente**: Attention aux retournements
2. **Divergences**: 
   - Prix fait un nouveau plus haut, RSI non → Baissier
   - Prix fait un nouveau plus bas, RSI non → Haussier
3. **Ligne centrale (50)**: Support/résistance dynamique

### Configuration optimale

\`\`\`
Période: 14 (standard)
Surachat: 70
Survente: 30
\`\`\`

## Erreurs à éviter

- Ne pas trader uniquement sur le RSI
- En tendance forte, le RSI peut rester longtemps en zone extrême
- Toujours confirmer avec le price action

## Combinaisons efficaces

- RSI + Support/Resistance
- RSI + Moyennes mobiles
- RSI + Volume
`,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '4',
    title: 'Support et Résistance: Les Fondamentaux',
    category: 'technical-analysis',
    content: `# Support et Résistance

## Définitions

### Support
Un niveau de prix où la demande est suffisamment forte pour empêcher le prix de baisser davantage.

### Résistance
Un niveau de prix où l'offre est suffisamment forte pour empêcher le prix de monter davantage.

## Types de niveaux

1. **Niveaux horizontaux**: Prix rond, plus haut/bas précédent
2. **Niveaux dynamiques**: Moyennes mobiles, lignes de tendance
3. **Niveaux psychologiques**: 1.0000, 100.00, etc.

## Comment les identifier

- Observer les points de retournement historiques
- Chercher les zones où le prix a rebondi plusieurs fois
- Les niveaux touchés souvent sont plus forts

## Trading les S/R

### À l'approche d'un support
- Chercher des signaux d'achat (chandelier, volume)
- Placer le stop juste en dessous
- Target: résistance suivante

### À l'approche d'une résistance
- Chercher des signaux de vente
- Placer le stop juste au-dessus
- Target: support suivant

## Concept clé: Le Flip

Quand un support est cassé, il devient résistance.
Quand une résistance est cassée, elle devient support.

\`\`\`
Résistance à 100
Prix casse à 102
Retest à 100 → Devenu support
\`\`\`
`,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
];

// Mock Playbooks
export const mockPlaybooks: Playbook[] = [
  {
    id: '1',
    name: 'Breakout & Retest',
    description: "Stratégie basée sur la cassure d'un niveau clé suivie d'un retest pour confirmation.",
    entryRules: [
      'Identifier une zone de consolidation claire (minimum 3 touches)',
      'Attendre le breakout avec volume supérieur à la moyenne',
      'Clôture au-delà du niveau sur timeframe H1 minimum',
      'Attendre le retest du niveau cassé (devenu support/résistance)',
      'Entrée à la confirmation de rebond sur le retest',
    ],
    exitRules: [
      'Stop loss: 1 ATR en dessous du niveau retesté',
      'Take profit 1: 2R (Risk/Reward ratio de 2:1)',
      'Take profit 2: 3R (laisser courir 50% de la position)',
      'Trailing stop après TP1 atteint',
      'Sortie immédiate si le niveau retesté est cassé à nouveau',
    ],
  },
  {
    id: '2',
    name: 'Double Top / Double Bottom',
    description: 'Pattern de retournement formé par deux sommets ou creux à peu près au même niveau.',
    entryRules: [
      'Identifier deux sommets (Double Top) ou creux (Double Bottom) à ~même niveau',
      'Vérifier la divergence RSI pour confirmation',
      'Attendre la cassure de la neckline',
      'Volume confirmé sur la cassure',
      'Entrée après clôture au-delà de la neckline',
    ],
    exitRules: [
      'Stop loss: Au-delà du deuxième sommet/creux + spread',
      'Take profit: Distance hauteur du pattern',
      'Sortie partielle à 50% de l\'objectif',
      'Laisser courir le reste avec trailing stop',
    ],
  },
  {
    id: '3',
    name: 'Support/Resistance Bounce',
    description: 'Trading des rebonds sur les niveaux clés de support et résistance.',
    entryRules: [
      'Identifier un niveau de S/R testé au moins 3 fois',
      'Attendre l\'approche du niveau avec momentum décroissant',
      'Chercher un pattern de chandelier de retournement (pin bar, engulfing)',
      'Confirmation par indicateur (RSI en zone extrême)',
      'Entrée à la clôture du chandelier de retournement',
    ],
    exitRules: [
      'Stop loss: 1.5x la taille du chandelier de retournement',
      'Take profit: Niveau S/R opposé',
      'Sortie partielle à 50% du mouvement',
      'Déplacer le stop au breakeven après 1R',
    ],
  },
  {
    id: '4',
    name: 'Trend Following',
    description: 'Stratégie pour capturer les mouvements dans une tendance établie.',
    entryRules: [
      'Identifier une tendance claire (série de HH/HL ou LH/LL)',
      'Prix au-dessus EMA 50 et EMA 200 pour tendance haussière',
      'Attendre un pullback vers EMA 20 ou zone de support',
      'Confirmation de rebond avec chandelier haussier',
      'Volume décroissant sur le pullback, croissant sur le rebond',
    ],
    exitRules: [
      'Stop loss: Sous le dernier swing low + buffer',
      'Take profit: Extension Fibonacci 161.8%',
      'Trailing stop basé sur EMA 20',
      'Sortie si cassure de la ligne de tendance',
    ],
  },
  {
    id: '5',
    name: 'Range Trading',
    description: 'Exploitation des mouvements dans un range horizontal bien défini.',
    entryRules: [
      'Identifier un range clair (min 3 touches haut et bas)',
      'Attendre que le prix atteigne le haut ou le bas du range',
      'Confirmation par oscillateur (RSI > 70 en haut, < 30 en bas)',
      'Pattern de retournement sur timeframe inférieur',
      'Entrée à la cassure du pattern de retournement',
    ],
    exitRules: [
      'Stop loss: Au-delà du range (haut+spread ou bas-spread)',
      'Take profit: Milieu du range (50%) puis opposé du range',
      'Sortie immédiate si cassure confirmée du range',
      'Réduire position size si range se rétrécit',
    ],
  },
  {
    id: '6',
    name: 'Divergence RSI',
    description: 'Exploitation des divergences entre le prix et l\'indicateur RSI.',
    entryRules: [
      'Identifier une divergence claire (bullish ou bearish)',
      'Divergence bullish: Prix fait LL, RSI fait HL',
      'Divergence bearish: Prix fait HH, RSI fait LH',
      'Attendre confirmation par pattern de chandelier',
      'Entrée après clôture du chandelier de confirmation',
    ],
    exitRules: [
      'Stop loss: Au-delà du dernier swing (high/low)',
      'Take profit 1: Retour vers niveau précédent',
      'Take profit 2: Extension si momentum fort',
      'Sortie si RSI entre dans zone opposée sans mouvement prix',
    ],
  },
];
