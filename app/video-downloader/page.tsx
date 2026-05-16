import HeroDownloader from "@/components/HeroDownloader";

export const metadata = {
  title: "Online Video Downloader",
  description: "Download MP4 and WEBM videos safely from direct URLs.",
};

export default function VideoDownloaderPage() {
  return (
    <div>
      <HeroDownloader 
        title="Online Video Downloader"
        subtitle="Download MP4 and WEBM video files safely from direct URLs."
        formats="Supported video formats: MP4, WEBM"
      />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose dark:prose-invert">
        <h2>Fast and Free Video Downloader</h2>
        <p>
          Our video downloader tool allows you to safely and quickly validate direct video links (such as .mp4 or .webm) and save them to your device. Whether you need a video for offline viewing or a project you are working on, FastSaveHub makes the process simple.
        </p>
        <h3>How to download videos</h3>
        <ol>
          <li>Find the direct URL of the video file (it must end in .mp4 or .webm).</li>
          <li>Paste the link into the box above.</li>
          <li>Click Download and save the file.</li>
        </ol>
      </div>
    </div>
  );
}
