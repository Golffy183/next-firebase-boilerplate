import CryptoJS from 'crypto-js';

const getKey = () => {
  const key = process.env.ENV_ENCRYPTION_KEY;
  if (!key || key.length > 32) {
    throw new Error('Invalid encryption key');
  }
  return key;
};

const key = getKey();

export const Encrypted = (text: string) => {
  try {
    const encoded = CryptoJS.AES.encrypt(text, key).toString();
    const encodedKey = `${encoded}${key}`;
    const encoded2 = btoa(encodedKey);
    return encoded2;
  } catch (error: any) {
    throw new Error(`Encryption failed: ${error.message}`);
  }
};

export const Decrypted = (text: string) => {
  try {
    if (!text) {
      throw new Error('No text provided for decryption');
    }
    const decoded = atob(text);
    const decodedKey = decoded.replace(key, '');
    const decoded2 = CryptoJS.AES.decrypt(decodedKey, key).toString(CryptoJS.enc.Utf8);
    return decoded2;
  } catch (error: any) {
    throw new Error(`Decryption failed: ${error.message}`);
  }
};
