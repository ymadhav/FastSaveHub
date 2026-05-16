"use client";

import { useState } from "react";
import UrlInputForm from "./UrlInputForm";
import LoadingState from "./LoadingState";
import ErrorMessage from "./ErrorMessage";
import DownloadResultCard from "./DownloadResultCard";

interface HeroDownloaderProps {
  title?: string;
  subtitle?: string;
  formats?: string;
}

export default function HeroDownloader({ 
  title = "Online Media Downloader",
  subtitle = "Paste a direct media link and download files you own or have permission to use.",
  formats = "Supported formats: MP4, WEBM, MP3, WAV, JPG, PNG"
}: HeroDownloaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleResolve = async (url: string) => {
    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/resolve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Failed to resolve the URL. Please make sure it's a direct media link.");
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError(err.message || "A network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="max-w-3xl mx-auto">
          <UrlInputForm onSubmit={handleResolve} isLoading={isLoading} />
          
          <p className="mt-4 text-sm text-slate-500 font-medium">
            {formats}
          </p>
        </div>

        {/* Dynamic States */}
        <div className="min-h-[250px] transition-all">
          {isLoading && <LoadingState />}
          {error && <ErrorMessage message={error} />}
          {result && <DownloadResultCard data={result} />}
        </div>
      </div>
    </section>
  );
}
