import HeroDownloader from "@/components/HeroDownloader";

export const metadata = {
  title: "Online Audio Downloader",
  description: "Download MP3 and WAV audio files safely from direct URLs.",
};

export default function AudioDownloaderPage() {
  return (
    <div>
      <HeroDownloader 
        title="Online Audio Downloader"
        subtitle="Download MP3 and WAV audio files safely from direct URLs."
        formats="Supported audio formats: MP3, WAV"
      />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose dark:prose-invert">
        <h2>Fast and Free Audio Downloader</h2>
        <p>
          Our audio downloader tool allows you to safely and quickly validate direct audio links (such as .mp3 or .wav) and save them to your device. Ideal for sound effects, royalty-free tracks, and voice recordings.
        </p>
      </div>
    </div>
  );
}
