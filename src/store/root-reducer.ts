import {reducer as newsReducer} from './news/reducer';
import {reducer as filtersReducer} from './filters/reducer';

const rootReducer = {
  newsReducer,
  filtersReducer,
};

export {rootReducer};
