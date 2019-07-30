// init reactN
import { setGlobal } from 'reactn';
import auth from './auth';

setGlobal({
  ...auth,
  extraData: null,
  notifications: [],
});
