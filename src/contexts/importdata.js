import PouchDB from 'pouchdb';
import { RECENT_CONTACT } from '../constants';
const recentContactDB = new PouchDB('recentContact');

recentContactDB.bulkDocs({ docs: RECENT_CONTACT }, function (err, response) {
   if (err) {
      console.log(err);
   } else {
      console.log('recent contacts saved');
   }
});
