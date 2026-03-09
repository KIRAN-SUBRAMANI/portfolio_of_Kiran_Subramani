// lib/timeAgo.js

const UNITS = [
  { name: "year",   ms: 365 * 24 * 60 * 60 * 1000 },
  { name: "month",  ms: 30  * 24 * 60 * 60 * 1000 },
  { name: "day",    ms: 24  * 60 * 60 * 1000 },
  { name: "hour",   ms: 60  * 60 * 1000 },
  { name: "minute", ms: 60  * 1000 },
  { name: "second", ms: 1000 },
];

function pluralize(value, unit) {
  return value === 1 ? unit : `${unit}s`;
}

export function timeAgo(isoDate, nowMs = Date.now()) {
  const date = new Date(isoDate);
  const timeMs = date.getTime();

  if (Number.isNaN(timeMs)) return "";

  const diffMs = nowMs - timeMs;
  const absMs = Math.abs(diffMs);

  if (absMs < 5000) return "just now";

  for (const unit of UNITS) {
    if (absMs >= unit.ms) {
      const value = Math.floor(absMs / unit.ms);
      return `${value} ${pluralize(value, unit.name)} ago`;
    }
  }

  return "just now";
}