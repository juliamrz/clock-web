import clsx from 'clsx';
import './Checkbox.css';

type CheckboxProps = {
  id: string;
  label?: string;
  className?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    id,
    label,
    className,
  } = props;

  return (
    <div className={clsx('Checkbox', className)}>
      <input type='checkbox' name={id} id={id} className={clsx('Checkbox__input')}/>
      <label htmlFor={id} className={clsx('Checkbox__label')}>{label}</label>
    </div>
  );
}

export default Checkbox;
