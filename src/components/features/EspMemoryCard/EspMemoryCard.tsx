import clsx from 'clsx';
import Card from "@/components/ui/Card";
import CardTitle from '@/components/ui/CardTitle';
import MemoryIcon from '@/components/ui/Icons/MemoryIcon';
import LinearProgress from "@/components/ui/LinearProgress";
import {getMemoryInfo} from "@/utils/getMemoryInfo.ts";
import espState from "@/state/esp.ts";

// Local deps
import './EspMemoryCard.css';

interface EspMemoryCardProps {
  className?: string;
};

const EspMemoryCard = (props: EspMemoryCardProps) => {
  const { className } = props;

  const heapUsed = espState.memory.heap.used;
  const heapTotal = espState.memory.heap.total;
  const heapPercent = Math.round((heapUsed / heapTotal) * 100);

  const psramUsed = espState.memory.psram?.used ?? 0;
  const psramTotal = espState.memory.psram?.total ?? 0;
  const psramPercent =
    espState.memory.psram ? Math.round((psramUsed / psramTotal) * 100) : 0;

  const heapMemory = getMemoryInfo(
    espState.memory.heap.used,
    espState.memory.heap.total
  );

  const psramMemory = espState.memory.psram
    ? getMemoryInfo(espState.memory.psram.used, espState.memory.psram.total)
    : null;

  return (
    <Card className={clsx('EspMemoryCard', className)}>
      <CardTitle title="Память" icon={<MemoryIcon />} />
      <div className="EspMemoryCard__item">
        <h3>HEAP памʼять</h3>
        <span>total: {heapMemory.total} kb</span>
        <LinearProgress value={heapPercent}/>
        <div className="EspMemoryCard__row">
          <span>{heapMemory.used} used</span>
          <span>{heapMemory.free} free</span>
        </div>
      </div>
      {psramMemory && (
        <div className="EspMemoryCard__item">
          <h3>PSRAM памʼять</h3>
          <span>total: {psramMemory.total} kb</span>
          <LinearProgress
            value={psramPercent}
            color='#0E78F8'
            backgroundColor='rgb(52, 57, 75)'
          />
          <div className="EspMemoryCard__row">
            <span>{psramMemory.used} used</span>
            <span>{psramMemory.free} free</span>
          </div>
        </div>
      )}
    </Card>
  )
};

export default EspMemoryCard;
