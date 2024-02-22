import { createContext, useContext } from 'react';

export type IContextValue = {
  theme: 'light' | 'dark';
};

export const Context = createContext<IContextValue>({} as IContextValue);

export const useSettingConfig = () => useContext(Context);
