import Link from "next/link";
import { Download, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Download className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">FastSaveHub</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/video-downloader" className="text-sm font-medium hover:text-primary transition-colors">Video</Link>
          <Link href="/audio-downloader" className="text-sm font-medium hover:text-primary transition-colors">Audio</Link>
          <Link href="/photo-downloader" className="text-sm font-medium hover:text-primary transition-colors">Photo</Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <button className="md:hidden p-2 text-foreground/70 hover:text-foreground">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
