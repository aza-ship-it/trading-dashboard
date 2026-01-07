import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trade } from "@/types";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecentTradesProps {
  trades: Trade[];
  limit?: number;
}

export function RecentTrades({ trades, limit = 5 }: RecentTradesProps) {
  const recentTrades = trades.slice(0, limit);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-50">Derniers Trades</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTrades.map((trade) => (
            <div
              key={trade.id}
              className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-50">
                    {trade.instrument}
                  </span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded",
                    trade.direction === "long" 
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "bg-rose-500/10 text-rose-500"
                  )}>
                    {trade.direction.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-slate-400">
                    {format(new Date(trade.date), "dd MMM yyyy", { locale: fr })}
                  </p>
                  <span className="text-xs text-slate-500">•</span>
                  <p className="text-xs text-slate-400">
                    {trade.setup}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {trade.pnl >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-rose-500" />
                )}
                <span className={cn(
                  "font-mono font-medium",
                  trade.pnl >= 0 ? "text-emerald-500" : "text-rose-500"
                )}>
                  {trade.pnl >= 0 ? "+" : ""}{trade.pnl.toFixed(2)}€
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
