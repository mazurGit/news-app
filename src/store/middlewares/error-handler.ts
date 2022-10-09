import {notification} from '~/services/services';
import {AppDispatch} from '~/common/types/types';
import {Middleware, AnyAction} from '@reduxjs/toolkit';
import {errors} from '~/common/constants/errors';

const errorHandler: Middleware =
  () => (next: AppDispatch) => (action: AnyAction) => {
    if (action.error) {
      const {
        error: {message},
      } = action;
      if (message === '429') {
        notification.error(errors[429], `Error : ${message}`);
      } else {
        notification.error(errors.COMMON, `Error : ${message}`);
      }
    }
    return next(action);
  };

export {errorHandler};
