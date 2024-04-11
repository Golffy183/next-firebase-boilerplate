import { HelperType } from '../helpers';

export type TypeRepositoryPattern = {
  ReadUserProfile: (payload: {
    userId: string;
  }) => Promise<HelperType.TypeAPIDataHandleResponse>;
  CreateUserProfile: (payload: {
    title: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    tel: string | null;
    experience: string;
    organizationID: string;
    signInFrom: string | null;
    photoURL: string | null;
  }) => Promise<HelperType.TypeAPIDataHandleResponse>;
  ReadAllUser: () => Promise<HelperType.TypeAPIDataHandleResponse>;
  UpdateUserAcceptAgreement: () => Promise<HelperType.TypeAPIDataHandleResponse>;
  GetAllData: () => Promise<HelperType.TypeAPIDataHandleResponse>;
  GetData: (payload: {
    dataID: string;
    callback: (data: any) => void;
  }) => Promise<HelperType.TypeAPIDataHandleResponse>;
  UnsubscribeCallback: () => Promise<HelperType.TypeAPIDataHandleResponse>;
};
