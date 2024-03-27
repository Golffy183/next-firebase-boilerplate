import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { HelperZustand } from '@/globals/helpers';

// ============ Store ==============
export type TypeStoreGlobalPersist = {
  userData: any;
  langData: {
    lang: string;
  };
};

// cant use method
export const StoreGlobalPersist = createWithEqualityFn(
  persist(
    (): TypeStoreGlobalPersist => ({
      userData: null,
      langData: {
        lang: '',
      },
    }),
    {
      name: 'storage-user',
    },
  ),
);

// ============ Method ==============

export type TypeMethodStoreGlobalPersist = {
  setUserData: (userData: any) => void;
  setLangData: (langData: { lang: string }) => void;
};

const methodStoreGlobalPersist: TypeMethodStoreGlobalPersist = {
  setUserData: (userData: any) => {
    StoreGlobalPersist.setState({ userData });
  },
  setLangData: (langData: { lang: string }) => {
    StoreGlobalPersist.setState({ langData });
  },
};

// ============ Export ==============

export const UseStoreGlobalPersist = (
  stateList: string[],
  isShallow?: boolean,
): TypeStoreGlobalPersist => {
  return HelperZustand.StateMapping(
    stateList,
    StoreGlobalPersist,
    isShallow,
  ) as TypeStoreGlobalPersist;
};

export const GetMethodStoreGlobalPersist = (): TypeMethodStoreGlobalPersist => {
  return methodStoreGlobalPersist;
};

export const GetStoreGlobalPersist = () => StoreGlobalPersist.getState();
export const SetGlobalStorePersist = (prop: any) => StoreGlobalPersist.setState(prop);
