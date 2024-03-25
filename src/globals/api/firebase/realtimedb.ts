import { child, onValue, ref } from 'firebase/database';

import { GetRealtimeDatabase } from '@/core/middlewares/firebase/realtime-database';
import { HelperType } from '@/globals/helpers';

export const GetAllData = async (): Promise<HelperType.TypeAPIDataHandleResponse> => {
  const rtdb = GetRealtimeDatabase();
  const refData = ref(rtdb, 'your-data');

  onValue(refData, (snapshot: any) => {
    const data = snapshot.val();
  });

  return { res: null, error: null };
};

let UnSub: any = null;

export const GetData = async (payload: {
  dataID: string;
  callback: (data: any) => void;
}): Promise<HelperType.TypeAPIDataHandleResponse> => {
  const rtdb = GetRealtimeDatabase();
  const refData = ref(rtdb, 'your-data');
  const refDataID = child(refData, payload.dataID);

  UnSub = onValue(refDataID, (snapshot: any) => {
    const data = snapshot.val();
    payload.callback(data);
  });

  return { res: null, error: null };
};

export const UnsubscribeCallback = async () => {
  if (UnSub) {
    await UnSub();
    UnSub = null;
  }

  return { res: null, error: null };
};
