import {useState} from 'react';
import clsx from 'clsx';
import './Range.css';

const MIN_RANGE_VALUE: number = 0;
const MAX_RANGE_VALUE: number = 100;
const RANGE_STEP: number = 1;

const Range = () => {
  const [value, setValue] = useState<number>(25);

  return (
    <div className={clsx('Range')}>
      <p className='Range__label'>Яскравість індикаторів <span>({value}%)</span></p>
      <input
        type="range"
        className={clsx('win10-thumb')}
        min={MIN_RANGE_VALUE}
        max={MAX_RANGE_VALUE}
        value={value}
        step={RANGE_STEP}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className='Range__values'>
        <p>{MIN_RANGE_VALUE}%</p>
        <p>{MAX_RANGE_VALUE}%</p>
      </div>
    </div>
  );
};

export default Range;
