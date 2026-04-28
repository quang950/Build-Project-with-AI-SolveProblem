"use client";

import { Sparkles, Loader2 } from 'lucide-react';

interface BrandOutputProps {
  output: string;
  isLoading: boolean;
}

export function BrandOutput({ output, isLoading }: BrandOutputProps) {
  return (
    <section className="glass-card flex flex-col gap-6 border-neonCyan/20 min-h-[500px]">
      <div className="flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-neonCyan" />
        <h2 className="text-xl font-semibold text-white">AI Output Result</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/5 rounded-xl bg-black/20 text-white">
        
        {!output && !isLoading && (
          <div className="text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-neonCyan/5 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-neonCyan opacity-20" />
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Fill out the form on the left to see your AI-generated personal branding content here.
            </p>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center gap-4 text-neonCyan">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="animate-pulse font-mono">AI is processing via Server Action...</p>
          </div>
        )}

        {output && !isLoading && (
          <div className="w-full h-full text-left font-mono text-sm leading-relaxed whitespace-pre-wrap text-neonCyan/90">
            {output}
          </div>
        )}

      </div>
    </section>
  );
}
