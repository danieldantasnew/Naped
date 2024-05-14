import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { Naped } from '../../Types/types';

interface InterfaceContext {
  data: Naped[] | null;
  loading: boolean;
  error: string | null;
}

const Context = React.createContext<InterfaceContext | null>(null);

export const useDataContext = () => {
  const contextData = React.useContext(Context);
  if (!contextData) throw new Error('Você deve passar o contexto dentro do provider!!');

  return contextData;
}

export const DataContext = ({ children }: React.PropsWithChildren) => {
  const requestData = useFetch<Naped[]>('http://localhost:3000/naped/?_sort=name');

  return (
    <Context.Provider value={{...requestData}}>
      {children}
    </Context.Provider>
  )
}
