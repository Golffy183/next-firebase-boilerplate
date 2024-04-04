'use client';

import { middlewareFirebase } from '@/core/middlewares/firebase';
import { HelperTime } from '@/globals/helpers';

export const FirebaseLogin = async (props: {
  username: string;
  password: string;
  setIsLoading: (isLoading: boolean) => void;
  setErrorMessage: (name: any, error: any) => void;
}) => {
  console.log('props', props.username);

  const res = await middlewareFirebase.Auth.SignInWithEmailAndPassword(
    props.username,
    props.password,
  );
  const firebaseErrorCode = res.errorCode;

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
