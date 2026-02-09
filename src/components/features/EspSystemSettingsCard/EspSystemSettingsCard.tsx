import Card from "@/components/ui/Card";
import CardListItem from "@/components/ui/CardListItem";
import CardTitle from '@/components/ui/CardTitle';
import Label from "@/components/ui/Label";
import espState from "@/state/esp.ts";
import ClockIcon from "@/components/ui/Icons/ClockIcon";

const EspSystemSettingsCard = () => {
  return (
    <Card>
      <CardTitle title="Налаштування годинника" icon={<ClockIcon />} />
      <CardListItem
        label="Автооновлення"
        title={
          espState.time.autoUpdate
            ? <Label text='enabled' />
            : <Label text='disabled' />
        }
      />

      <CardListItem
        label="Сервер часу"
        title={espState.time.ntpServer}
      />

      <CardListItem
        label="Ефект оновлення часу"
        title={
          espState.time.updateEffect === 'random'
            ? 'Випадковий перебір'
            : 'Послідовний'
        }
      />

      <CardListItem
        label="Ефект підсвічування"
        title={
          espState.display.lightEffect === 'slow_wave'
            ? 'Повільна хвиля'
            : espState.display.lightEffect
        }
      />

      <CardListItem
        label="Режим день / ніч"
        title={espState.display.dayNightMode === 'night' ? 'Ніч' : 'День'}
      />

      <CardListItem
        label="Яскравість індикаторів"
        title={`${espState.display.brightness}%`}
      />
    </Card>
  )
}

export default EspSystemSettingsCard;
