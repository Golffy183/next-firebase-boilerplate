import { FirebaseApp, initializeApp } from 'firebase/app';

import { HelperSecurity } from '@/globals/helpers';
import Auth, { AuthInit } from './auth';
import { FirestoreInit } from './firestore';

const firebaseConfig = {
  apiKey: HelperSecurity.Decrypted(process.env.ENV_FIREBASE_CRED_APIKEY || '') as string,
  authDomain: HelperSecurity.Decrypted(
    process.env.ENV_FIREBASE_CRED_AUTHDOMAIN_MAJOR || '',
  ) as string,
  databaseURL: HelperSecurity.Decrypted(
    process.env.ENV_FIREBASE_CRED_DATABASEURL_MAJOR || '',
  ) as string,
  projectId: HelperSecurity.Decrypted(
    process.env.ENV_FIREBASE_CRED_PROJECTID_MAJOR || '',
  ) as string,
  storageBucket: HelperSecurity.Decrypted(
    process.env.ENV_FIREBASE_CRED_STORAGEBUCKET_MAJOR || '',
  ) as string,
  messagingSenderId: HelperSecurity.Decrypted(
    process.env.ENV_FIREBASE_CRED_MESSAGINGSENDERID_MAJOR || '',
  ) as string,
  appId: HelperSecurity.Decrypted(
    process.env.ENV_FIREBASE_CRED_APPID_MAJOR || '',
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
