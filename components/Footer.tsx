import Link from "next/link";
import { Download } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Download className="w-5 h-5 text-primary" />
              <span className="font-bold text-xl">FastSaveHub</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Download your own media files quickly and safely from direct URLs. No login, no storage.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/video-downloader" className="hover:text-primary transition-colors">Video Downloader</Link></li>
              <li><Link href="/audio-downloader" className="hover:text-primary transition-colors">Audio Downloader</Link></li>
              <li><Link href="/photo-downloader" className="hover:text-primary transition-colors">Photo Downloader</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="hover:text-primary transition-colors">DMCA / Copyright</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {year} FastSaveHub. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Please respect copyright. Only download files you own.</p>
        </div>
      </div>
    </footer>
  );
}
