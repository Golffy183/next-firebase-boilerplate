import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { HelperPromise } from '@/globals/helpers';

let auth: Auth;
export const AuthInit = async (app: FirebaseApp) => {
  auth = getAuth(app);
  // await setPersistence(auth, browserLocalPersistence);
};

export const GetAuth = (): Auth => {
  return auth;
};

// ================================================

const SignInWithEmailAndPassword = (sEmail: string, sPassword: string) => {
  return HelperPromise.HandleResponse(
    signInWithEmailAndPassword(auth, sEmail, sPassword),
  );
};

const CreateUserWithEmailAndPassword = (sEmail: string, sPassword: string) => {
  return HelperPromise.HandleResponse(
    createUserWithEmailAndPassword(auth, sEmail, sPassword),
  );
};

const DeleteUser = () => {
  return auth.currentUser ? deleteUser(auth.currentUser) : null;
};

const SignOut = () => {
  return signOut(auth);
};

const authMethods = {
  SignInWithEmailAndPassword,
  CreateUserWithEmailAndPassword,
  DeleteUser,
  SignOut,
  GetAuth,
};

export default authMethods;
