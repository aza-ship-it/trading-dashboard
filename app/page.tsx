"use client";

import { AppLayout } from "@/components/AppLayout";
import { KPICard } from "@/components/KPICard";
import { EquityChart } from "@/components/EquityChart";
import { RecentTrades } from "@/components/RecentTrades";
import { DailyRules } from "@/components/DailyRules";
import { TrendingUp, DollarSign, Target, Activity } from "lucide-react";
import { mockTrades, mockEquityCurve } from "@/data/mockData";

export default function Home() {
  // Calculer les KPIs
  const totalTrades = mockTrades.length;
  const winningTrades = mockTrades.filter(t => t.pnl > 0).length;
  const winRate = ((winningTrades / totalTrades) * 100).toFixed(1);
  
  const totalPnL = mockTrades.reduce((sum, t) => sum + t.pnl, 0);
  
  const grossProfit = mockTrades
    .filter(t => t.pnl > 0)
    .reduce((sum, t) => sum + t.pnl, 0);
  const grossLoss = Math.abs(mockTrades
    .filter(t => t.pnl < 0)
    .reduce((sum, t) => sum + t.pnl, 0));
  const profitFactor = grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : "∞";

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-50">Dashboard</h1>
          <p className="text-slate-400 mt-1">
            Vue d'ensemble de votre activité de trading
          </p>
        </div>

        {/* KPIs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Win Rate"
            value={`${winRate}%`}
            subtitle={`${winningTrades}/${totalTrades} trades gagnants`}
            icon={Target}
            trend="up"
            colorClass="text-emerald-500"
          />
          <KPICard
            title="Profit Factor"
            value={profitFactor}
            subtitle="Ratio gains/pertes"
            icon={Activity}
            colorClass="text-blue-500"
          />
          <KPICard
            title="P&L Total"
            value={`${totalPnL.toFixed(2)}€`}
            subtitle={totalPnL >= 0 ? "En profit" : "En perte"}
            icon={DollarSign}
            trend={totalPnL >= 0 ? "up" : "down"}
            colorClass={totalPnL >= 0 ? "text-emerald-500" : "text-rose-500"}
          />
          <KPICard
            title="Nombre de Trades"
            value={totalTrades}
            subtitle="Total depuis le début"
            icon={TrendingUp}
            colorClass="text-slate-50"
          />
        </div>

        {/* Equity Chart */}
        <EquityChart data={mockEquityCurve} />

        {/* Recent Trades & Daily Rules */}
        <div className="grid gap-4 md:grid-cols-2">
          <RecentTrades trades={mockTrades.slice().reverse()} limit={5} />
          <DailyRules />
        </div>
      </div>
    </AppLayout>
  );
}
