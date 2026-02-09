import type {FormSchema} from '@s-chat/form-manager';

export type ClockSettingsData = {
  // timeServer: string;
  updateEffect: string;
  backlightEffect: string;
  dayNightMode: string;
  autoUpdate: string;
};

export const clockSettingsFormSchema: FormSchema<ClockSettingsData> = {
  // timeServer: {
  //   type: 'string',
  //   label: 'Сервер часу',
  //   validationRules: ['required', 'string'],
  // },
  updateEffect: {
    type: 'select',
    label: 'Ефект оновлення часу',
    defaultValue: 'randomScan',
    validationRules: ['required', 'string'],
    options: [
      { label: 'Без ефекту', value: 'noEffect' },
      { label: 'Випадковий перебір', value: 'randomScan' },
      { label: 'Поганий контакт', value: 'badContact' },
    ],
  },
  backlightEffect: {
    type: 'select',
    label: 'Ефект підсвічування',
    defaultValue: 'slowWave',
    validationRules: ['required', 'string'],
    options: [
      { label: 'Повільна хвиля', value: 'slowWave' },
      { label: 'Постійна підсвітка', value: 'constantBacklight' },
    ],
  },
  dayNightMode: {
    type: 'switch',
    label: 'Режим день / ніч',
    defaultValue: 'day',
    validationRules: ['required', 'string'],
  },
  autoUpdate: {
    type: 'checkbox',
    label: 'Автооновлення',
    defaultValue: 'true',
    validationRules: ['boolean'],
  },
};
