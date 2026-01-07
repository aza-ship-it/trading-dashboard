"use client";

import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { mockKnowledgeArticles } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Brain, TrendingUp } from "lucide-react";
import ReactMarkdown from "react-markdown";

const categoryIcons = {
  strategy: TrendingUp,
  psychology: Brain,
  "technical-analysis": FileText,
};

const categoryLabels = {
  strategy: "Stratégies",
  psychology: "Psychologie",
  "technical-analysis": "Analyse Technique",
};

export default function KnowledgePage() {
  const [selectedArticleId, setSelectedArticleId] = useState(mockKnowledgeArticles[0].id);
  const selectedArticle = mockKnowledgeArticles.find(a => a.id === selectedArticleId);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-50">Base de Connaissances</h1>
          <p className="text-slate-400 mt-1">
            Articles et ressources pour améliorer votre trading
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Sidebar with article list */}
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-50 text-lg">Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockKnowledgeArticles.map((article) => {
                  const Icon = categoryIcons[article.category];
                  return (
                    <Button
                      key={article.id}
                      variant={selectedArticleId === article.id ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start text-left h-auto py-3",
                        selectedArticleId === article.id && "bg-slate-800"
                      )}
                      onClick={() => setSelectedArticleId(article.id)}
                    >
                      <div className="flex items-start gap-3 w-full">
                        <Icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-400" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-slate-50 truncate">
                            {article.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {categoryLabels[article.category]}
                          </div>
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Article content */}
          {selectedArticle && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  {categoryLabels[selectedArticle.category]}
                </div>
                <CardTitle className="text-slate-50 text-2xl">
                  {selectedArticle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-4">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-slate-50 mt-6 mb-4" {...props} />,
                      h2: ({ node, ...props }) => <h2 className="text-xl font-semibold text-slate-50 mt-5 mb-3" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="text-lg font-medium text-slate-50 mt-4 mb-2" {...props} />,
                      p: ({ node, ...props }) => <p className="mb-4 text-slate-300" {...props} />,
                      strong: ({ node, ...props }) => <strong className="font-semibold text-slate-100" {...props} />,
                      em: ({ node, ...props }) => <em className="italic" {...props} />,
                      code: ({ node, inline, ...props }: any) => 
                        inline ? (
                          <code className="bg-slate-900 px-2 py-0.5 rounded text-sm font-mono text-emerald-400" {...props} />
                        ) : (
                          <code className="text-sm font-mono text-emerald-400" {...props} />
                        ),
                      pre: ({ node, ...props }) => <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto my-4" {...props} />,
                      blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-slate-700 pl-4 italic text-slate-400 my-4" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 my-4" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 my-4" {...props} />,
                      li: ({ node, ...props }) => <li className="text-slate-300" {...props} />,
                    }}
                  >
                    {selectedArticle.content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
