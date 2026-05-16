import PageHero from "@/components/PageHero";
import StepCard from "@/components/StepCard";

export const metadata = {
  title: "How It Works",
  description: "Learn how to easily download direct media files using FastSaveHub.",
};

export default function HowItWorksPage() {
  return (
    <div>
      <PageHero title="How FastSaveHub Works" description="A simple, 3-step process to download your media safely." />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <StepCard 
            number="01"
            title="Find your direct media link"
            description="Locate the exact URL of the media file you want to download. This link must point directly to the file itself and typically ends in an extension like .mp4, .mp3, or .jpg."
          />
          <StepCard 
            number="02"
            title="Paste and validate"
            description="Paste the link into the input box on our homepage and click Download. Our servers will instantly send a lightweight request to the link to verify its size, type, and availability."
          />
          <StepCard 
            number="03"
            title="Save to your device"
            description="If the link is valid and safe, you'll see a preview of your media along with a secure download button. Click it to save the file straight to your computer or phone."
          />
        </div>
      </div>
    </div>
  );
}
