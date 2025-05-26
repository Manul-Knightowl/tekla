"use client";

import Navbar from "@/components/molecules/navbar";

export function LayoutContent({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
      </div>
    );

}