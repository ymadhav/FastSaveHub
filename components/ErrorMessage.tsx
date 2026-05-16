import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  
  return (
    <div className="mt-6 w-full max-w-2xl mx-auto bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-start gap-3 text-left" role="alert" aria-live="assertive">
      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold mb-1">Error</h4>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
