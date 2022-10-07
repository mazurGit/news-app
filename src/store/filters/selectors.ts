import {RootState} from '~/common/types/types';

const selectFilters = (state: RootState) => state.filtersReducer;

export {selectFilters};
