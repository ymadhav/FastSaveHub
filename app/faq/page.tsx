import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to the most common questions about FastSaveHub.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is FastSaveHub?",
      answer: "FastSaveHub is a free online tool that lets you validate direct media URLs (video, audio, photo) and download them safely to your device."
    },
    {
      question: "Is FastSaveHub free?",
      answer: "Yes, our service is 100% free. We don't have premium plans or hidden fees."
    },
    {
      question: "Do I need to install any software?",
      answer: "No. FastSaveHub works entirely in your web browser. You don't need to install any apps or extensions."
    },
    {
      question: "Why did my link fail to download?",
      answer: "This usually happens if the link is not a direct media file, the file is too large (over 500MB), the server blocking our requests, or if it requires a login."
    },
    {
      question: "Is it legal to download files?",
      answer: "It is legal to download files that you own, are royalty-free, or if you have explicit permission from the copyright holder. You are responsible for ensuring you have the right to download the content."
    }
  ];

  return (
    <div>
      <PageHero title="Frequently Asked Questions" description="Everything you need to know about FastSaveHub." />
      <div className="container mx-auto px-4 py-16">
        <FAQAccordion items={faqs} />
        
        {/* Schema.org FAQ Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  );
}
