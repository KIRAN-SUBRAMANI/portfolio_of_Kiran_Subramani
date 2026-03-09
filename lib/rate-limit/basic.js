const requests = new Map();

export function rateLimit(key, { limit = 5, windowMs = 60_000 } = {}) {
  const now = Date.now();
  const current = requests.get(key);

  if (!current || now > current.resetAt) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (current.count >= limit) {
    return { ok: false };
  }

  current.count += 1;
  requests.set(key, current);
  return { ok: true };
}