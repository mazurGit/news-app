import {dateRange, errors} from '~/common/constants/constants';
import {notification} from '~/services/services';

const checkDate = (chosenDate: Date) => {
  if (chosenDate < dateRange.MIN) {
    notification.error(errors.DATE_MIN);
    return dateRange.MIN;
  } else if (chosenDate > dateRange.MAX) {
    notification.error(errors.DATE_MAX);
    return dateRange.MAX;
  }
  return chosenDate;
};

export {checkDate};
