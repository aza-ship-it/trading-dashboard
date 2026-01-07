"use client";

import { AppLayout } from "@/components/AppLayout";
import { mockTrades } from "@/data/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function JournalPage() {
  // Trier les trades par date décroissante
  const sortedTrades = [...mockTrades].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-50">Journal de Trading</h1>
          <p className="text-slate-400 mt-1">
            Historique complet de vos trades
          </p>
        </div>

        {/* Trade Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-50">Tous les Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Instrument</TableHead>
                  <TableHead>Setup</TableHead>
                  <TableHead>Direction</TableHead>
                  <TableHead className="text-right">Entry</TableHead>
                  <TableHead className="text-right">Exit</TableHead>
                  <TableHead className="text-right">R:R</TableHead>
                  <TableHead className="text-right">P&L</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTrades.map((trade) => (
                  <TableRow key={trade.id}>
                    <TableCell className="font-medium text-slate-300">
                      {format(new Date(trade.date), "dd MMM yyyy", { locale: fr })}
                    </TableCell>
                    <TableCell className="font-medium text-slate-50">
                      {trade.instrument}
                    </TableCell>
                    <TableCell className="text-slate-400">
                      {trade.setup}
                    </TableCell>
                    <TableCell>
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium",
                        trade.direction === "long"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : "bg-rose-500/10 text-rose-500"
                      )}>
                        {trade.direction.toUpperCase()}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-mono text-slate-300">
                      {trade.entryPrice.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-slate-300">
                      {trade.exitPrice.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-slate-300">
                      {trade.riskReward.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        {trade.pnl >= 0 ? (
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 text-rose-500" />
                        )}
                        <span className={cn(
                          "font-mono font-medium",
                          trade.pnl >= 0 ? "text-emerald-500" : "text-rose-500"
                        )}>
                          {trade.pnl >= 0 ? "+" : ""}{trade.pnl.toFixed(2)}€
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
