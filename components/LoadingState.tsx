import { Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center p-8 bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800" aria-live="polite">
      <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
      <p className="text-slate-600 dark:text-slate-400 font-medium">Checking your link...</p>
      <p className="text-sm text-slate-500 mt-2 text-center">We are validating the direct media URL. This might take a few seconds.</p>
    </div>
  );
}
