"use client";

import { Sidebar } from "./Sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
