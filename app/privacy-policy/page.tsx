import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero title="Privacy Policy" description="How we handle your data." />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose dark:prose-invert">
        <h2>Privacy Policy</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h3>1. Information We Collect</h3>
        <p>FastSaveHub operates as a direct link validation tool. We do not require you to create an account, and we do not collect personal identifying information (such as your name or email) unless you explicitly provide it through our contact form.</p>
        
        <h3>2. Log Data</h3>
        <p>We may log standard server information such as your IP address, browser type, and the time of your request to prevent abuse, enforce rate limits, and maintain security. We do not store the media files you download.</p>
        
        <h3>3. Cookies</h3>
        <p>We use minimal cookies necessary for the operation of the website, such as preventing abuse (CSRF protection) and basic analytics.</p>

        <h3>4. Data Sharing</h3>
        <p>We do not sell, trade, or otherwise transfer your information to outside parties. Your data is kept confidential and only used to operate the service securely.</p>
      </div>
    </div>
  );
}
