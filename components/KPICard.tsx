import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  colorClass?: string;
}

export function KPICard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend = "neutral",
  colorClass = "text-slate-50"
}: KPICardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-400">
          {title}
        </CardTitle>
        <Icon className={cn("h-4 w-4", colorClass)} />
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold font-mono", colorClass)}>
          {value}
        </div>
        {subtitle && (
          <p className={cn(
            "text-xs mt-1",
            trend === "up" ? "text-emerald-500" : 
            trend === "down" ? "text-rose-500" : 
            "text-slate-400"
          )}>
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
