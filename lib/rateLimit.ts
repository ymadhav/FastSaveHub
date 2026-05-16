// Basic in-memory rate limiting for MVP
// In production with Vercel/Next.js, consider @upstash/ratelimit and Redis

type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const store = new Map<string, RateLimitEntry>();

export function rateLimit(
  ip: string,
  maxRequests: number,
  windowSeconds: number
): boolean {
  const now = Date.now();
  const entry = store.get(ip);

  // If entry exists and is not expired
  if (entry && entry.resetTime > now) {
    if (entry.count >= maxRequests) {
      return false; // Rate limited
    }

    entry.count += 1;
    store.set(ip, entry);
    return true;
  }

  // Set new entry or reset expired entry
  store.set(ip, {
    count: 1,
    resetTime: now + windowSeconds * 1000,
  });

  return true;
}

// Cleanup interval to prevent memory leaks in long-running processes
setInterval(() => {
  const now = Date.now();

  for (const [ip, entry] of Array.from(store.entries())) {
    if (entry.resetTime <= now) {
      store.delete(ip);
    }
  }
}, 60000);