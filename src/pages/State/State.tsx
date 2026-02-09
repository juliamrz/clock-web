// Internal deps
import EspConnectionCard from '@/components/features/EspConnectionCard';
import EspSystemSettingsCard from '@/components/features/EspSystemSettingsCard';
import EspMemoryCard from '@/components/features/EspMemoryCard';
import TempChart from '@/components/features/TempChart';

// Local deps
import './State.css';

const State = () => {
  return (
    <div className="State">
      <TempChart className='State__tempChart' />
      <EspMemoryCard className='State__espMemoryCard' />
      <div className='State__settings'>
        <EspConnectionCard/>
        <EspSystemSettingsCard/>
      </div>
    </div>
  )
};

export default State;
