import {dateRange} from '~/common/constants/constants';

const checkDate = (chosenDate: Date) => {
  return chosenDate < dateRange.min
    ? dateRange.min
    : chosenDate > dateRange.max
    ? dateRange.max
    : chosenDate;
};

export {checkDate};
