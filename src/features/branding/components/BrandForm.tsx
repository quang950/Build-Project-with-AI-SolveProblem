"use client";

import { Send, Loader2, Code2 } from 'lucide-react';

interface BrandFormProps {
  description: string;
  setDescription: (val: string) => void;
  role: string;
  setRole: (val: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function BrandForm({ 
  description, 
  setDescription, 
  role, 
  setRole, 
  onSubmit, 
  isLoading 
}: BrandFormProps) {
  return (
    <section className="glass-card flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Code2 className="w-5 h-5 text-neonPurple" />
        <h2 className="text-xl font-semibold text-white">Input Details</h2>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-400">Project Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 bg-black/40 border border-white/10 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-neonPurple/50 focus:ring-1 focus:ring-neonPurple/50 transition-all"
            placeholder="Paste your project info or resume snippets here..."
          ></textarea>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-400">Target Role</label>
          <input 
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-neonPurple/50 transition-all"
            placeholder="e.g. Frontend Developer, Data Analyst"
          />
        </div>

        <button 
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full py-4 bg-neonPurple/20 border border-neonPurple/50 text-neonPurple font-bold rounded-lg hover:bg-neonPurple hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Generate Brand Assets
            </>
          )}
        </button>
      </div>
    </section>
  );
}
