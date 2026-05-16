export const SUPPORTED_EXTENSIONS = {
  video: ["mp4", "webm"],
  audio: ["mp3", "wav"],
  photo: ["jpg", "jpeg", "png"],
};

export const SUPPORTED_MIME_TYPES = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "audio/mpeg": "mp3",
  "audio/wav": "wav",
  "image/jpeg": "jpg",
  "image/png": "png",
};

export type MediaType = "video" | "audio" | "photo" | "unknown";

export function getMediaTypeFromExtension(ext: string): MediaType {
  const normalized = ext.toLowerCase().replace(".", "");
  
  if (SUPPORTED_EXTENSIONS.video.includes(normalized)) return "video";
  if (SUPPORTED_EXTENSIONS.audio.includes(normalized)) return "audio";
  if (SUPPORTED_EXTENSIONS.photo.includes(normalized)) return "photo";
  
  return "unknown";
}

export function getMediaTypeFromContentType(contentType: string): MediaType {
  if (contentType.startsWith("video/")) return "video";
  if (contentType.startsWith("audio/")) return "audio";
  if (contentType.startsWith("image/")) return "photo";
  return "unknown";
}

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
