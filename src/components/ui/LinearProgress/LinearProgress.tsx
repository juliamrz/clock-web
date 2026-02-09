import './LinearProgress.css';

interface LinearProgressProps {
  value: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const LinearProgress = (props: LinearProgressProps) => {
  const {
    value,
    height = 8,
    color = 'rgb(220, 126, 16)',
    backgroundColor = 'rgb(220, 126, 16, 0.31)',
    // backgroundColor = 'rgb(52, 57, 75)',
  } = props;

  return (
    <div
      className="LinearProgress__container"
      style={{height, backgroundColor}}
    >
      <div
        className="LinearProgress__bar"
        style={{width: `${value}%`, backgroundColor: color}}
      />
    </div>
  );
};

export default LinearProgress;
