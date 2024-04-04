import Dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';

export const WaitForMilliSecond = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export const IsJsonFirestoreTimeStamp = (object: any) => {
  return 'seconds' in object && 'nanoseconds' in object;
};

export const ConvertJsonFirestoreTimeStampToDate = ({
  seconds,
  nanoseconds,
}: {
  seconds: number;
  nanoseconds: number;
}) => {
  return new Date(seconds * 1000 + nanoseconds / 1000000);
};

export const ParseDate = (object: any) => {
  switch (Object.getPrototypeOf(object)) {
    case Date.prototype:
      return object;
    case Dayjs.prototype:
      return object.toDate();
    case Timestamp.prototype:
      return object.toDate();
    default:
      if (IsJsonFirestoreTimeStamp(object)) {
        return ConvertJsonFirestoreTimeStampToDate(object);
      }
      return object;
  }
};
