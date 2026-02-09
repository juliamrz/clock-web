import clsx from 'clsx';
import type { FieldOptionType } from '@s-chat/form-manager';
import Select from '@/components/ui/Select';
import Switch from '@/components/ui/Switch';
import Checkbox from '@/components/ui/Checkbox';
import Range from '@/components/ui/Range';
import Password from '@/components/ui/Password';

import './FormField.css'

interface FormFieldProps {
  className?: string;
  label?: string;
  value?: string;
  bind: {
    name: string;
    type: string;
    onChange: (newValue: string | number) => void;
  },
  field?: {
    options?: FieldOptionType[];
  },
}

const FormField = (props: FormFieldProps) => {
  const {
    className,
    label,
    value,
    bind,
    field,
  } = props;
  console.debug('debug props: ====', props);
  const isRenderLabel = bind.type !== 'switch' && bind.type !== 'checkbox';

  return (
    <div className={clsx("FormField", className)}>
      {isRenderLabel && (
        <label htmlFor={bind.name} className="FormField__label">
          {label}
        </label>
      )}
      {bind.type === 'select' && (
        <Select
          name={bind.name}
          value={value || ''}
          options={field?.options || []}
          onChange={bind.onChange}
          // onChange={(value) => bind.onChange({ target: { value } })}
        />
      )}
      {bind.type === 'switch' && (
          <Switch label={props.label} />
      )}
      {bind.type === 'checkbox' && (
        <Checkbox id={bind.name} label={label} />
      )}
      {bind.type === 'range' && (
        <Range />
      )}
      {bind.type === 'password' && (
        <Password value={value || ''} name={bind.name} onChange={bind.onChange} />
      )}
    </div>
  )
};

export default FormField;
