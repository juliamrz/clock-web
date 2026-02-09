import type {FormSchema} from '@s-chat/form-manager';

export type WifiSettingsData = {
  mode: 'string';
  availableNetworks: 'string';
  wifiPassword: 'string';
};

export const wifiSettingsFormSchema: FormSchema<WifiSettingsData> = {
  mode: {
    type: 'select',
    label: 'Режим роботи',
    validationRules: ['required', 'string'],
    options: []
  },
  availableNetworks: {
    type: 'select',
    label: 'Доступні мережі',
    validationRules: ['required', 'string'],
    options: []
  },
  wifiPassword: {
    type: 'password',
    label: 'Пароль',
    validationRules: ['required', 'string'],
    options: []
  },
}
