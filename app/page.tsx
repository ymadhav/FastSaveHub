import HeroDownloader from "@/components/HeroDownloader";
import FeatureCard from "@/components/FeatureCard";
import LegalNotice from "@/components/LegalNotice";
import FAQAccordion from "@/components/FAQAccordion";
import { Zap, Shield, Smartphone, Download } from "lucide-react";

export default function Home() {
  const faqs = [
    {
      question: "Is FastSaveHub free to use?",
      answer: "Yes, FastSaveHub is completely free to use. We do not charge any fees for resolving direct media links."
    },
    {
      question: "What formats do you support?",
      answer: "We support direct links to MP4, WEBM (Video), MP3, WAV (Audio), and JPG, PNG (Photos)."
    },
    {
      question: "Do you store my downloaded files?",
      answer: "No. FastSaveHub only validates the URL and provides a direct download link. Your media files are never stored on our servers."
    },
    {
      question: "Can I download from private social media accounts?",
      answer: "No. We only support public, direct media URLs. We do not bypass logins or privacy settings."
    }
  ];

  return (
    <div>
      <HeroDownloader />
      
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose FastSaveHub?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The simplest and safest way to validate and download direct media links.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="No wait times. We instantly validate your URL and provide the direct download link."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="100% Secure"
              description="No software to install. We never store your files or ask for passwords."
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile Friendly"
              description="Works perfectly on any device, whether you're on a phone, tablet, or desktop."
            />
            <FeatureCard 
              icon={<Download className="w-6 h-6" />}
              title="No Limits"
              description="Download as many files as you need, as long as you have the direct link and the rights."
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Copy Link</h3>
              <p className="text-slate-500">Copy the direct URL of the media file you want to download.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Paste Link</h3>
              <p className="text-slate-500">Paste the URL into the input box at the top of this page.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Download</h3>
              <p className="text-slate-500">Click download and save the file safely to your device.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <LegalNotice />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
