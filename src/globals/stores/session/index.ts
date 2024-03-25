import { createWithEqualityFn } from 'zustand/traditional';

import { HelperZustand } from '@/globals/helpers';

export type TypeStoreGlobal = {
  isLoading: boolean;
  sI18NDomainName: string;
  menu: {
    sHeaderName: string;
    footer: string;
    iIconID: number;
  };
  menuUIIsShow: {
    isShowHeader: boolean;
    isShowI18n: boolean;
    isShowFooter: boolean;
  };
  menuHeader: JSX.Element | null;
};

export const StoreGlobal = createWithEqualityFn(
  (): TypeStoreGlobal => ({
    isLoading: false,
    sI18NDomainName: '',
    menu: {
      sHeaderName: '',
      footer: '',
      iIconID: 0,
    },
    menuUIIsShow: {
      isShowHeader: false,
      isShowI18n: false,
      isShowFooter: false,
    },
    menuHeader: null,
  }),
);

// ============ Method ==============
export type TypeMethodStoreGlobal = {
  setIsLoading: (isLoading: boolean) => void;
  setMenu: (sHeaderName: string, footer: string, iIconID: number) => void;
  setI18NDomainName: (sI18NDomainName: string) => void;
  setMenuUIIsShow: (
    isShowHeader: boolean,
    isShowI18n: boolean,
    isShowFooter: boolean,
  ) => void;
  setMenuHeader: (menuHeader: JSX.Element) => void;
};

const methodStoreGlobal: TypeMethodStoreGlobal = {
  setIsLoading: (isLoading: boolean) => {
    StoreGlobal.setState({ isLoading });
  },
  setMenu: (sHeaderName: string, footer: string, iIconID: number) => {
    StoreGlobal.setState({ menu: { sHeaderName, footer, iIconID } });
  },
  setI18NDomainName: (sI18NDomainName: string) => {
    StoreGlobal.setState({ sI18NDomainName: sI18NDomainName });
  },
  setMenuUIIsShow: (
    isShowHeader: boolean,
    isShowI18n: boolean,
    isShowFooter: boolean,
  ) => {
    StoreGlobal.setState({
      menuUIIsShow: { isShowHeader, isShowI18n, isShowFooter },
    });
  },
  setMenuHeader: (menuHeader: JSX.Element) => {
    StoreGlobal.setState({ menuHeader });
  },
};

// ============ Export ==============
export const UseStoreGlobal = (
  stateList: string[],
  isShallow?: boolean,
): TypeStoreGlobal => {
  return HelperZustand.StateMapping(stateList, StoreGlobal, isShallow) as TypeStoreGlobal;
};

export const GetMethodStoreGlobal = (): TypeMethodStoreGlobal => {
  return methodStoreGlobal;
};

export const GetStoreGlobal = () => StoreGlobal.getState();
export const SetStoreGlobal = (prop: any) => StoreGlobal.setState(prop);
