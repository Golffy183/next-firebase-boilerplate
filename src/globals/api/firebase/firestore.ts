import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  QuerySnapshot,
  setDoc,
} from 'firebase/firestore';

import { middlewareFirebase } from '@/core/middlewares/firebase';
import { GetFirestore } from '@/core/middlewares/firebase/firestore';
import { HelperPromise, HelperType } from '@/globals/helpers';

export const CreateUserProfile = async (payload: {
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
}): Promise<HelperType.TypeAPIDataHandleResponse> => {
  const { currentUser } = middlewareFirebase.Auth.GetAuth();
  if (!currentUser || !currentUser.uid) {
    return { res: null, error: null };
  }

  // ======== Organization ========
  const refOrganizationCollection = collection(GetFirestore(), 'organization');
  const refOrganizationDoc = doc(refOrganizationCollection, payload.organizationID);
  const resOrganizationQuery = await HelperPromise.HandleResponse(
    getDoc(refOrganizationDoc),
  );
  // const resOrganizationQuery = await getDoc(refOrganizationDoc);

  if (resOrganizationQuery.error) {
    return resOrganizationQuery;
  }

  // const docData = resOrganizationQuery.data();
  const resOrganization = (resOrganizationQuery.res as DocumentSnapshot).data();
  // console.log('docData', docData);
  // return { res: null, error: null };

  // ======== User ========
  const refUserCollection = collection(GetFirestore(), 'users');
  await setDoc(
    doc(refUserCollection, currentUser.uid),
    { profile: { ...payload } },
    { merge: true },
  );

  const res: HelperType.TypeAPIData = {
    data: {
      _id: currentUser.uid,
      profile: { ...payload },
      organization: {
        _id: payload.organizationID,
        ...resOrganization,
      },
    },
  };

  // console.log('user profile res :', res);

  return { res, error: null };
};

export const ReadUserProfile =
  async (): Promise<HelperType.TypeAPIDataHandleResponse> => {
    const { currentUser } = middlewareFirebase.Auth.GetAuth();
    if (!currentUser || !currentUser.uid) {
      return { res: null, error: null };
    }

    // ======== User ========
    const refUserCollection = collection(GetFirestore(), 'users');
    const refUserDoc = doc(refUserCollection, currentUser.uid);
    const resUserQuery = await HelperPromise.HandleResponse(getDoc(refUserDoc));
    // const resOrganizationQuery = await getDoc(refOrganizationDoc);

    if (resUserQuery.error) {
      return resUserQuery;
    }
    // const docData = resOrganizationQuery.data();
    const resUser = (resUserQuery.res as DocumentSnapshot).data();
    // console.log('resUser', resUser);

    const res: HelperType.TypeAPIData = {
      data: resUser,
    };

    // // ========== if no profile create user
    // if (!resUser || (resUser && !('profile' in resUser))) {
    //   console.log('no profile');
    //   await setDoc(doc(refUserCollection, currentUser.uid), {}, { merge: true });
    //   return { res: { data: { _id: currentUser.uid } }, error: null };
    // }

    // // ======== Organization ========
    // const refOrganizationCollection = collection(GetFirestore(), 'organization');
    // const refOrganizationDoc = doc(
    //   refOrganizationCollection,
    //   resUser?.profile.organizationID,
    // );
    // const resOrganizationQuery = await HelperPromise.HandleResponse(
    //   getDoc(refOrganizationDoc),
    // );
    // // const resOrganizationQuery = await getDoc(refOrganizationDoc);

    // if (resOrganizationQuery.error) {
    //   console.log('resOrganizationQuery error :', resOrganizationQuery.error);
    //   return resOrganizationQuery;
    // }
    // const resOrganization = (resOrganizationQuery.res as DocumentSnapshot).data();

    // const res: HelperType.TypeAPIData = {
    //   data: {
    //     _id: currentUser.uid,
    //     ...resUser,
    //     organization: {
    //       _id: resUser?.profile.organizationID,
    //       ...resOrganization,
    //     },
    //   },
    // };

    return { res, error: null };
  };

export const ReadAllUser = async (): Promise<HelperType.TypeAPIDataHandleResponse> => {
  const refUserCollection = collection(GetFirestore(), 'users');
  const resUserQuery = await HelperPromise.HandleResponse(getDocs(refUserCollection));

  if (resUserQuery.error) {
    return resUserQuery;
  }

  const resUser = (resUserQuery.res as QuerySnapshot).docs.map((doc) => {
    return { userID: doc.id, ...doc.data() };
  });

  const res: HelperType.TypeAPIData = {
    data: { userID: resUser },
  };

  return { res, error: null };
};

export const UpdateUserAcceptAgreement =
  async (): Promise<HelperType.TypeAPIDataHandleResponse> => {
    const { currentUser } = middlewareFirebase.Auth.GetAuth();
    if (!currentUser || !currentUser.uid) {
      return { res: null, error: null };
    }

    // ======== User ========
    const refUserCollection = collection(GetFirestore(), 'users');
    await setDoc(
      doc(refUserCollection, currentUser.uid),
      { isAcceptAgreement: true },
      { merge: true },
    );
    return { res: { data: { _id: 'aa' } }, error: null };
  };
