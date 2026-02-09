// Internal deps
import Card from '@/components/ui/Card';
import CardListItem from '@/components/ui/CardListItem';
import CardTitle from '@/components/ui/CardTitle';
import WifiIcon from '@/components/ui/Icons/WifiIcon';
import espState from "@/state/esp.ts";
import {formatUptime} from '@/utils/formatUptime.ts';

const EspConnectionCard = () => {

  return (
    <Card>
      <CardTitle title="Налаштування мережі" icon={<WifiIcon />} />
      <CardListItem
        label="Режим роботи"
        title={espState.mode === 'network' ? 'Підключення до мережі' : espState.mode}
      />

      <CardListItem
        label="Час безперервної роботи"
        title={formatUptime(espState.uptime.seconds)}
      />

      {espState.wifi.connected && (
        <>
          <CardListItem label="SSID" title={espState.wifi.ssid ?? '—'} />
          <CardListItem label="IP адреса" title={espState.wifi.ip ?? '—'} />

          {espState.wifi.password && (
            <CardListItem
              label="Wi-Fi пароль"
              title={espState.wifi.password}
            />
          )}
        </>
      )}
    </Card>
  )
};

export default EspConnectionCard;
