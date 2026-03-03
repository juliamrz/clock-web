import {useEffect, useState} from "react";

interface Stats {
  upTimeS: number;
  cpuTemp: number;
  memory: {
    heapFree: number;
    heapMin: number;
  };
  wifi: {
    ssid: string;
    rssi: number;
    ip: string;
  };
  crashReason?: string;
}

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

      const data: Stats = await response.json();
      setStats(data);
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
