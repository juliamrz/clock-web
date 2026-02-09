import type {EspStateType} from "@/types/EspState.ts";

const espState: EspStateType = {
  mode: 'network',
  uptime: {
    seconds: 27393,
  },
  wifi: {
    connected: true,
    ssid: 'ESP32-229501',
    ip: '192.168.0.103',
    password: '4pr4N9RRsr',
  },
  time: {
    autoUpdate: true,
    ntpServer: '0.ua.pool.ntp.org',
    updateEffect: 'random',
  },
  display: {
    lightEffect: 'slow_wave',
    dayNightMode: 'night',
    brightness: 100,
  },

  memory: {
    heap: {
      used: 93968,
      total: 260800,
    },
    psram: {
      used: 17203,
      total: 2077440,
    },
  },
};

export default espState;
