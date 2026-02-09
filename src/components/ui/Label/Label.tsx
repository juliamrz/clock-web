// External deps
import clsx from "clsx";

// Local deps
import './Label.css';

interface LabelProps {
  text: string;
  type?: 'success' | 'warning' | 'error';
}

const Label = (props: LabelProps) => {
  const {
    text,
    type = 'success',
  } = props;

  return (
    <div
      className={clsx('Label', {
        'Label--success': type === 'success',
        'Label--warning': type === 'warning',
        'Label--error': type === 'error',
      })}
    >
      <span>{text}</span>
    </div>
  )
}

export default Label;
