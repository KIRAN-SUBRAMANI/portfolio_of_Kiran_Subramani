"use client";

import { useEffect, useMemo, useState } from "react";
import { timeAgo } from "@/lib/timeAgo";

export function useTimeAgo(isoDate, refresh = true) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!refresh) return;

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, [refresh]);

  return useMemo(() => timeAgo(isoDate, now), [isoDate, now]);
}