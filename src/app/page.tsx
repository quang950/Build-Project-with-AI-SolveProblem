import Header from '@/components/Header';
import { Sparkles, Code2, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-darkIde">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Input Form */}
          <section className="glass-card flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-neonPurple" />
              <h2 className="text-xl font-semibold text-white">Input Details</h2>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Project Description</label>
                <textarea 
                  className="w-full h-32 bg-black/40 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-neonPurple/50 focus:ring-1 focus:ring-neonPurple/50 transition-all"
                  placeholder="Paste your project info or resume snippets here..."
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Target Role</label>
                <input 
                  type="text"
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-neonPurple/50 transition-all"
                  placeholder="e.g. Frontend Developer, Data Analyst"
                />
              </div>

              <button className="w-full py-4 bg-neonPurple/20 border border-neonPurple/50 text-neonPurple font-bold rounded-lg hover:bg-neonPurple hover:text-white transition-all flex items-center justify-center gap-2 group">
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Generate Brand Assets
              </button>
            </div>
          </section>

          {/* Right Column: AI Output Result */}
          <section className="glass-card flex flex-col gap-6 border-neonCyan/20 min-h-[500px]">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-neonCyan" />
              <h2 className="text-xl font-semibold text-white">AI Output Result</h2>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/5 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-neonCyan/5 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-neonCyan opacity-20" />
              </div>
              <p className="text-gray-500 max-w-xs text-sm">
                Fill out the form on the left to see your AI-generated personal branding content here.
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neonCyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neonPurple/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
