import {useEffect, useState} from "react";
import type {RawMemorySegmentType, MemorySegmentType, RawStats, Stats} from "@/types/EspState.ts";

const normalizeMemorySegment = (rawMemorySegment: RawMemorySegmentType): MemorySegmentType => {
  return {
    total: rawMemorySegment.size,
    free: rawMemorySegment.free,
    used: rawMemorySegment.size - rawMemorySegment.free,
    minFree: rawMemorySegment.minFree,
    largestBlock: rawMemorySegment.largestBlock,
  };
};

const normalizeStats = (rawStats: RawStats): Stats => {
  return {
    upTimeS: rawStats.upTimeS,
    cpuTemp: rawStats.cpuTemp,
    memory: {
      heap: normalizeMemorySegment(rawStats.memory.HEAP),
      psram: rawStats.memory.PSRAM ? normalizeMemorySegment(rawStats.memory.PSRAM) : undefined,
    },
    wifi: {...rawStats.wifi},
    crashReason: rawStats.crashReason
  };
};

const API_URL = "http://192.168.10.246/api/stats";

const useStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async (signal?: AbortSignal) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL, { signal });
      if(!response.ok) {
        setError(`HTTP error ${response.status}`);
        return;
      }

      const rawStats: RawStats = await response.json();
      const normalizedStats = normalizeStats(rawStats);
      setStats(normalizedStats);
    } catch {
      setError('Unknown error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    fetchStats(controller.signal);

    return () => {
      controller.abort();
    }
  }, []);

  return {
    stats, loading, error,
  }
}

export default useStats;
