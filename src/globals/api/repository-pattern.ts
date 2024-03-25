import { HelperType } from '../../../core/universal-helper';

export type TypeRepositoryPattern = {
  ReadUserProfile: () => Promise<HelperType.TypeAPIDataHandleResponse>;
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

// const fetchData = async () => {
//   setIsLoading(true);
//   const resData = await API.findAssessmentFromOrganizationID(
//     userData.profile.organizationID,
//   );
//   if (resData.error) {
//     console.log('error :', resData.error);
//     setIsLoading(false);
//     return;
//   }
//   setIsLoading(false);
//   // console.log('resData', resData.res);

//   setContent(resData.res.data);
// };
