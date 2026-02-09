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
