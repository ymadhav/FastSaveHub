import { isSafeUrl } from "../security";
import { getMediaTypeFromContentType, getMediaTypeFromExtension } from "../media";

export async function resolveDirectMedia(url: string) {
  if (!isSafeUrl(url)) {
    throw new Error("Invalid or unsafe URL provided.");
  }

  try {
    // We use a HEAD request to fetch metadata without downloading the whole file
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const response = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      headers: {
        "User-Agent": "FastSaveHub-Validator/1.0",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to access URL: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type") || "";
    const contentLength = response.headers.get("content-length");
    const size = contentLength ? parseInt(contentLength, 10) : 0;

    // Extract filename and extension early to use as fallback for media type
    let fileName = "downloaded_media";
    const urlObj = new URL(url);
    const pathnameParts = urlObj.pathname.split("/");
    const lastPart = pathnameParts[pathnameParts.length - 1];
    
    if (lastPart && lastPart.includes(".")) {
      fileName = decodeURIComponent(lastPart);
    } else {
      const ext = contentType.split("/")[1]?.split(";")[0] || "bin";
      fileName = `media_${Date.now()}.${ext}`;
    }

    const extensionMatches = fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
    const extension = extensionMatches ? extensionMatches[1].toLowerCase() : "";

    let mediaType = getMediaTypeFromContentType(contentType);
    
    // Fallback to checking the extension if the server sent application/octet-stream or similar
    if (mediaType === "unknown" && extension) {
      mediaType = getMediaTypeFromExtension(extension);
    }

    if (contentType.includes("text/html")) {
      throw new Error(`This link points to a web page rather than a direct media file. Please right-click the video/image and select "Copy video/image address" to get the direct file link.`);
    }

    if (mediaType === "unknown") {
      throw new Error(`The URL does not point to a supported media type (Video, Audio, or Image). Detected type: ${contentType || extension}`);
    }

    const MAX_MB = parseInt(process.env.MAX_FILE_SIZE_MB || "500", 10);
    if (size > MAX_MB * 1024 * 1024) {
      throw new Error(`File is too large. Maximum supported size is ${MAX_MB}MB.`);
    }

    return {
      success: true,
      url,
      fileName,
      extension,
      contentType,
      size,
      previewType: mediaType,
      downloadUrl: url, // For direct providers, the direct URL is the download URL
    };
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. The server took too long to respond.");
    }
    throw new Error(error.message || "Failed to resolve media.");
  }
}
