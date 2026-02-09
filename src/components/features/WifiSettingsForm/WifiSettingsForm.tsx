import type {FormEvent} from 'react';
import {useFormManager} from '@s-chat/form-manager';
import clsx from "clsx";
import './WifiSettingsForm.css';
import Button from "@/components/ui/Button";
import type {WifiSettingsData} from './wifiSettings.form.ts';
import {wifiSettingsFormSchema} from './wifiSettings.form.ts';
import FormField from '@/components/ui/FormField';

const WifiSettingsForm = () => {
  const { fields } = useFormManager<WifiSettingsData>(wifiSettingsFormSchema);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={clsx('WifiSettingsForm')}>
      {fields.map((field) => {
        console.debug('debug field:', field);
        return (
          <FormField key={field.name} {...field} />
        )
      })}
      <Button type="submit" className={clsx('WifiSettingsForm__button')}>ЗБЕРЕГТИ</Button>
    </form>
  );
}

export default WifiSettingsForm;
