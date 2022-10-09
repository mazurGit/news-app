import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import {errorHandler} from './middlewares/middlewares';
import * as extraArgument from '~/services/services';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument,
      },
    }).concat(errorHandler);
    return defaultMiddleware;
  },
});

export {store, extraArgument};
