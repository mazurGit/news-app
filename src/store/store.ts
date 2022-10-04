import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import * as extraArgument from '~/services/services';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    });
    return defaultMiddleware;
  },
});

export {store, extraArgument};
