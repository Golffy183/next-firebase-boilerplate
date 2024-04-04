import { HelperSecurity } from '@/globals/helpers';

export default function EnvConverter(obj: any, type?: boolean | false) {
  if (obj) {
    const key = Object.keys(obj);
    const objEn: any = {};
    if (!type) {
      key.map((value) => {
        objEn[value.toString()] = HelperSecurity.Encrypted(obj[value]);
      });
      return objEn;
    }
    if (type) {
      key.map((value) => {
        objEn[value.toString()] = HelperSecurity.Decrypted(obj[value]);
      });
      return objEn;
    }
  }
  return;
}
