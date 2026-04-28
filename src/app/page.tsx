import Header from '@/components/shared/Header';
import { BrandGenerator } from '@/features/branding/components/BrandGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-darkIde">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <BrandGenerator />
      </main>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neonCyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neonPurple/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
