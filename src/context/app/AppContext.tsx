// External deps
import {createContext, type Dispatch, type SetStateAction} from 'react';

type AppContextPropsType = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: AppContextPropsType = {
  isDrawerOpen: true,
  setIsDrawerOpen: () => {},
};

export const AppContext = createContext<AppContextPropsType>(defaultValue);
