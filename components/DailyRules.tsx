import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const dailyRules = [
  "Ne jamais risquer plus de 2% du capital par trade",
  "Toujours placer un stop loss avant d'entrer en position",
  "Respecter le plan de trading - pas de trades impulsifs",
  "Tenir le journal à jour après chaque trade",
  "Maximum 3 trades par jour",
];

export function DailyRules() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-50">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          Règles du Jour
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {dailyRules.map((rule, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
