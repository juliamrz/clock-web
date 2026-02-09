import './Switch.css';

interface SwitchProps {
  label?: string;
}

const Switch = (props: SwitchProps) => {
  const { label } = props;

  return (
    <label className="Switch">
      {label}
      <div className="Switch__button">
        <input type="checkbox" role="switch" id="toggleSwitch"/>
        <div className="slider">
          <div className="sun"></div>
          <div className="moon"></div>
        </div>
      </div>
    </label>
  )
}

export default Switch;
