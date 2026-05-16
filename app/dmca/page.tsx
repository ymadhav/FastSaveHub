import PageHero from "@/components/PageHero";

export const metadata = {
  title: "DMCA / Copyright",
};

export default function DMCAPage() {
  return (
    <div>
      <PageHero title="DMCA & Copyright Policy" description="Information for copyright owners." />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose dark:prose-invert">
        <h2>DMCA Takedown Policy</h2>
        
        <p>FastSaveHub is a URL validation and resolution tool. We <strong>do not host, store, or index any media files</strong> on our servers. All media is downloaded directly from the third-party source URL provided by the user.</p>
        
        <p>Because we do not host the files, we cannot remove them from the internet. If you are a copyright owner and wish to have a file removed, you must contact the platform or server that is actually hosting the content.</p>

        <h3>Blocking Specific Domains or URLs</h3>
        <p>If you believe your server or platform is being abused by our tool, you may request that we block your domain from being resolved by our service.</p>
        
        <p>To submit a request, please provide:</p>
        <ul>
          <li>Proof of authorization or ownership of the domain/content.</li>
          <li>The specific domain or IP range you wish to restrict.</li>
          <li>Your contact information.</li>
        </ul>

        <p>Please send these requests via our <a href="/contact">Contact Page</a>. We will review and implement reasonable blocking measures promptly.</p>
      </div>
    </div>
  );
}
