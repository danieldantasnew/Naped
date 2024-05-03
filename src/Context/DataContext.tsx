import React from 'react';
import useFetch from '../Hooks/useFetch';

type Category = "animes" | "movies" | "games" | "series";

export interface Naped {
  id: number;
  title: string;
  info: string;
  moreInfo: string;
  date: string;
  clicks: number;
  images: string[];
  category: Category;
}

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
  const requestData = useFetch<Naped[]>('../api/data.json');

  return (
    <Context.Provider value={{...requestData}}>
      {children}
    </Context.Provider>
  )
}
