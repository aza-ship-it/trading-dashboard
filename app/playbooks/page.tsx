"use client";

import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { mockPlaybooks } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, CheckCircle2, XCircle } from "lucide-react";

export default function PlaybooksPage() {
  const [selectedPlaybookId, setSelectedPlaybookId] = useState<string | null>(null);
  const selectedPlaybook = mockPlaybooks.find(p => p.id === selectedPlaybookId);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-50">Playbooks</h1>
          <p className="text-slate-400 mt-1">
            Vos setups de trading et règles d'exécution
          </p>
        </div>

        {/* Playbook Grid */}
        {!selectedPlaybook ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockPlaybooks.map((playbook) => (
              <Card 
                key={playbook.id}
                className="cursor-pointer transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
                onClick={() => setSelectedPlaybookId(playbook.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-emerald-500" />
                    <CardTitle className="text-slate-50 text-lg">
                      {playbook.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    {playbook.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlaybookId(playbook.id);
                    }}
                  >
                    Voir les règles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Playbook Detail */
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedPlaybookId(null)}
              className="text-slate-400 hover:text-slate-50"
            >
              ← Retour aux playbooks
            </Button>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-emerald-500" />
                  <CardTitle className="text-slate-50 text-2xl">
                    {selectedPlaybook.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-slate-400 text-base">
                  {selectedPlaybook.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Entry Rules */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-slate-50">
                      Règles d'Entrée
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedPlaybook.entryRules.map((rule, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-slate-300 bg-slate-900/50 p-3 rounded-lg"
                      >
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exit Rules */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-5 w-5 text-rose-500" />
                    <h3 className="text-lg font-semibold text-slate-50">
                      Règles de Sortie
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedPlaybook.exitRules.map((rule, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-slate-300 bg-slate-900/50 p-3 rounded-lg"
                      >
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
