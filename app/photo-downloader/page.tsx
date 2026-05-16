import HeroDownloader from "@/components/HeroDownloader";

export const metadata = {
  title: "Online Photo Downloader",
  description: "Download JPG and PNG images safely from direct URLs.",
};

export default function PhotoDownloaderPage() {
  return (
    <div>
      <HeroDownloader 
        title="Online Photo Downloader"
        subtitle="Download JPG and PNG image files safely from direct URLs."
        formats="Supported image formats: JPG, JPEG, PNG"
      />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose dark:prose-invert">
        <h2>Fast and Free Photo Downloader</h2>
        <p>
          Need to grab an image from a direct URL quickly? FastSaveHub lets you preview and download high-quality JPG and PNG files without any hassle.
        </p>
      </div>
    </div>
  );
}
