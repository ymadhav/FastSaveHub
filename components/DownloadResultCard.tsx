import { FileVideo, FileAudio, FileImage, File, Download, ExternalLink } from "lucide-react";
import { formatBytes } from "@/lib/media";

interface DownloadResultCardProps {
  data: {
    url: string;
    fileName: string;
    extension: string;
    contentType: string;
    size: number;
    previewType: string;
    downloadUrl: string;
  };
}

export default function DownloadResultCard({ data }: DownloadResultCardProps) {
  const getIcon = () => {
    switch (data.previewType) {
      case "video": return <FileVideo className="w-8 h-8 text-blue-500" />;
      case "audio": return <FileAudio className="w-8 h-8 text-purple-500" />;
      case "photo": return <FileImage className="w-8 h-8 text-green-500" />;
      default: return <File className="w-8 h-8 text-slate-500" />;
    }
  };

  return (
    <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        
        {/* Preview / Icon Area */}
        <div className="w-full sm:w-auto flex-shrink-0">
          {data.previewType === "photo" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.url} alt={data.fileName} className="w-full sm:w-32 h-32 object-cover rounded-xl bg-slate-100 dark:bg-slate-800" />
          ) : data.previewType === "video" ? (
            <video src={data.url} className="w-full sm:w-32 h-32 object-cover rounded-xl bg-slate-100 dark:bg-slate-800" controls preload="metadata" />
          ) : data.previewType === "audio" ? (
            <div className="w-full sm:w-32 h-32 flex items-center justify-center bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              {getIcon()}
            </div>
          ) : (
            <div className="w-full sm:w-32 h-32 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl">
              {getIcon()}
            </div>
          )}
        </div>

        {/* Info Area */}
        <div className="flex-1 min-w-0 w-full">
          <h3 className="font-semibold text-lg truncate mb-2" title={data.fileName}>
            {data.fileName}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Type</span>
              <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-medium text-slate-700 dark:text-slate-300">
                {data.extension.toUpperCase() || "UNKNOWN"}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Size</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {data.size > 0 ? formatBytes(data.size) : "Unknown Size"}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* The primary download action uses native a tag with download attribute for same-origin or direct downloads.
                Since it's a direct URL, target blank is also safe. */}
            <a 
              href={data.downloadUrl} 
              download={data.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-4 rounded-xl font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download File
            </a>
            
            <a 
              href={data.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-foreground py-2.5 px-4 rounded-xl font-medium transition-colors sm:w-auto w-full"
              title="Open Link"
            >
              <ExternalLink className="w-4 h-4" />
              Open
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-center text-slate-400">
        By downloading, you agree to our terms and confirm you have the right to download this content.
      </div>
    </div>
  );
}
