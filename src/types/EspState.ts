export type MemorySegmentType = {
  total: number;
  free: number;
  used: number;
  minFree?: number;
  largestBlock?: number;
};

export type RawMemorySegmentType = {
  size: number;
  free: number;
  minFree: number;
  largestBlock: number;
}

export type MemoryLayout = {
  heap: MemorySegmentType;
  psram?: MemorySegmentType;
}

export type RawMemorySegment = {
  HEAP: RawMemorySegmentType;
  PSRAM?: RawMemorySegmentType;
};

export type Stats = {
  upTimeS: number;
  cpuTemp: number;
  memory: MemoryLayout;
  wifi: {
    ssid: string;
    rssi: number;
    ip: string;
  };
  crashReason?: string;
}

export type RawStats = {
  upTimeS: number;
  cpuTemp: number;
  memory: RawMemorySegment;
  wifi: {
    ssid: string;
    rssi: number;
    ip: string;
  };
  crashReason?: string;
};

export interface EspStateType {
  mode: 'network' | 'ap' | 'offline';

  uptime: {
    seconds: number;
  };

  wifi: {
    connected: boolean;
    ssid: string | null;
    ip: string | null;
    password?: string | null;
  };

  time: {
    autoUpdate: boolean;
    ntpServer: string;
    updateEffect: 'random' | 'sequential';
  };

  display: {
    lightEffect: 'slow_wave' | 'pulse' | 'static';
    dayNightMode: 'day' | 'night' | 'auto';
    brightness: number;
  };

  memory: {
    heap: {
      used: number;   // bytes
      total: number;  // bytes
    };
    psram?: {
      used: number;
      total: number;
    };
  };
}
