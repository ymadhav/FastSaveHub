import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div>
      <PageHero title="Terms of Service" description="Rules and guidelines for using FastSaveHub." />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose dark:prose-invert">
        <h2>Terms of Service</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h3>1. User Responsibility</h3>
        <p>By using FastSaveHub, you agree that you are solely responsible for the media you download. FastSaveHub only validates and resolves direct URLs provided by the user. We do not host or store any media.</p>
        
        <h3>2. Copyright Compliance</h3>
        <p>You must not use FastSaveHub to download copyrighted material unless you have explicit permission from the copyright owner or the download falls under fair use. We strictly prohibit the use of our tool for piracy.</p>
        
        <h3>3. Prohibited Use</h3>
        <p>You agree not to use FastSaveHub to abuse external servers, bypass DRM or paywalls, or scrape private data. We reserve the right to block access to our service if we detect abusive behavior.</p>

        <h3>4. No Platform Affiliation</h3>
        <p>FastSaveHub is an independent tool and is not affiliated with, endorsed by, or connected to any social media platform, file hosting service, or media network.</p>

        <h3>5. Service Availability</h3>
        <p>We do not guarantee that our service will be available 100% of the time. We may update, modify, or shut down the service at any time without prior notice.</p>
      </div>
    </div>
  );
}
