"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { EquityPoint } from "@/types";

interface EquityChartProps {
  data: EquityPoint[];
}

export function EquityChart({ data }: EquityChartProps) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-slate-50">Courbe d'Équité</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis 
              dataKey="date" 
              stroke="#64748b"
              tick={{ fill: '#94a3b8' }}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#64748b"
              tick={{ fill: '#94a3b8' }}
              style={{ fontSize: '12px', fontFamily: 'var(--font-geist-mono)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                color: '#f1f5f9'
              }}
              labelStyle={{ color: '#94a3b8' }}
            />
            <Line 
              type="monotone" 
              dataKey="equity" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={{ fill: '#10b981', r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
