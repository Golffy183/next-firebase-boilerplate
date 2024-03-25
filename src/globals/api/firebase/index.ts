import * as APIFirebaseFirestore from './firestore';
// import * as APIFirebaseFunction from './functions';
import * as APIFirebaseRealtimeDatabase from './realtimedb';

const APIFirebase = {
  ...APIFirebaseFirestore,
  ...APIFirebaseRealtimeDatabase,
};

const defaultExport = {
  ...APIFirebase,
};

export default defaultExport;
