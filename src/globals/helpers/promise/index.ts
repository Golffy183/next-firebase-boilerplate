import { TypeHandleResponse } from '../type';

export const HandleResponse = async (promiseAPI: any): Promise<TypeHandleResponse> => {
  try {
    const res = await promiseAPI;
    return { res: res, error: null };
  } catch (error) {
    return { res: null, error: error as Error };
  }
};

export const HandleToThrowResponse = async (promise: Promise<TypeHandleResponse>) => {
  try {
    const resPromise = await promise;
    return resPromise.res;
  } catch (error) {
    console.log('error :', error);
    throw error;
  }
};
