'use client';

import { middlewareFirebase } from '@/core/middlewares/firebase';
import APIGlobal from '@/globals/api';
import { HelperSecurity, HelperTime } from '@/globals/helpers';
import { GetMethodStoreGlobalPersist } from '@/globals/stores/persist';

export const FirebaseLogin = async (props: {
  username: string;
  password: string;
  setIsLoading: (isLoading: boolean) => void;
  setErrorMessage: (name: any, error: any) => void;
  setIsLoginSuccess: (isLoginSuccess: boolean) => void;
}) => {
  const res = await middlewareFirebase.Auth.SignInWithEmailAndPassword(
    props.username,
    props.password,
  );

  const firebaseErrorCode = res.errorCode;

  if (!firebaseErrorCode) {
    await setUserProfile(res.res);
    await HelperTime.WaitForMilliSecond(800);
    props.setIsLoading(false);
    props.setIsLoginSuccess(true);
    return;
  }

  switch (firebaseErrorCode) {
    case 'auth/invalid-credential':
      await HelperTime.WaitForMilliSecond(800);
      props.setErrorMessage('root', {
        type: 'custom',
        message: 'Form.validate.userOrPasswordWrong',
      });
      props.setIsLoading(false);
      return;
    case 'auth/too-many-requests':
      await HelperTime.WaitForMilliSecond(800);
      props.setErrorMessage('root', {
        type: 'custom',
        message: 'Form.validate.tooManyRequest',
      });
      props.setIsLoading(false);
      return;
  }
};

const setUserProfile = async (userAuth: any) => {
  const { setUserData } = GetMethodStoreGlobalPersist();

  const resProfile = await APIGlobal.ReadUserProfile({ userId: userAuth.user.uid });

  setUserData({
    uid: HelperSecurity.Encrypted(userAuth.user.uid),
  });

  return;
};
