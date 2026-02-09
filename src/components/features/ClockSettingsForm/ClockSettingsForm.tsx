import type {FormEvent} from 'react';
import {useFormManager} from '@s-chat/form-manager';
import clsx from "clsx";
import type {ClockSettingsData} from './clockSettings.form.ts';
import {clockSettingsFormSchema} from './clockSettings.form.ts';
import FormField from '@/components/ui/FormField';
import Range from '@/components/ui/Range';
import Button from '@/components/ui/Button';
import './ClockSettingsForm.css';

const ClockSettingsForm = () => {
  const { fields } = useFormManager<ClockSettingsData>(clockSettingsFormSchema);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={clsx('ClockSettingsForm')}>
      {fields.map((field) => {
        console.debug('debug field:', field);
        return (
          <FormField key={field.name} {...field} />
        )
      })}
      <Range />
      <Button type="submit" className={clsx('ClockSettingsForm__button')}>ЗБЕРЕГТИ</Button>
    </form>
  );
}

export default ClockSettingsForm;
