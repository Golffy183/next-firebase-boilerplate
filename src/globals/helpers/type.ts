export type TypeHandleResponse = { res: any; error: Error | null; errorCode?: string };

export const ReturnInterfacePromise = (res: any): Promise<any> => {
  return Promise.resolve(res);
};

// confirm return with data
export type TypeAPIData = {
  data: any;
} & Record<string, any>;

export type TypeAPIDataHandleResponse = {
  res: TypeAPIData | null;
  error: Error | null;
};
