import { middlewareFirebaseInit } from './firebase';

export const MiddlewareInit = async () => {
  await middlewareFirebaseInit();
};
