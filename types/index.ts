// Types pour le Trading Dashboard

export interface Trade {
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
  emotionalScore?: number; // 1-10
  followedPlan: boolean;
  // Calculated fields
  pnl: number;
  riskReward: number;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: 'strategy' | 'psychology' | 'technical-analysis';
  content: string; // Markdown
  createdAt: Date;
  updatedAt: Date;
}

export interface Playbook {
  id: string;
  name: string;
  description: string;
  entryRules: string[];
  exitRules: string[];
  imageUrl?: string;
}

export interface EquityPoint {
  date: string;
  equity: number;
}
