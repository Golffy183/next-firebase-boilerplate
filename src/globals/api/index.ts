import APIFirebase from './firebase';
import APIRealtimeDatabase from './firebase';
import { TypeRepositoryPattern } from './repository-pattern';

const APIGlobal: TypeRepositoryPattern = {
  ...APIFirebase,
  ...APIRealtimeDatabase,
};

export default APIGlobal;
