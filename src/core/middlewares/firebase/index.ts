import { FirebaseApp, initializeApp } from 'firebase/app';

import { HelperSecurity } from '@/globals/helpers';
import Auth, { AuthInit } from './auth';
import { FirestoreInit } from './firestore';

const firebaseConfig = {
  apiKey: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_APIKEY || '',
  ) as string,
  authDomain: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_AUTHDOMAIN || '',
  ) as string,
  databaseURL: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_DATABASEURL || '',
  ) as string,
  projectId: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_PROJECTID || '',
  ) as string,
  storageBucket: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_STORAGEBUCKET || '',
  ) as string,
  messagingSenderId: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_MESSAGINGSENDERID || '',
  ) as string,
  appId: HelperSecurity.Decrypted(process.env.ENV_FIREBASE_CRED_APPID || '') as string,
  measurementId: HelperSecurity.Decrypted(
    process.env.NEXT_PUBLIC_FIREBASE_CRED_MEASUREMENTID || '',
  ) as string,
};

let app: FirebaseApp;

export const GetFirebaseApp = (): FirebaseApp => {
  return app;
};

export const middlewareFirebaseInit = async () => {
  app = initializeApp(firebaseConfig);
  await AuthInit(app);
  FirestoreInit(app);
};

export const middlewareFirebase = {
  Auth,
};
