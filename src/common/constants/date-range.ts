import dayjs from 'dayjs';
const todaysDate = dayjs();

const dateRange = {
  MIN: todaysDate.subtract(30, 'days').toDate(),
  MAX: todaysDate.toDate(),
};

export {dateRange};
