import dayjs from 'dayjs';
const todaysDate = dayjs();

const dateRange = {
  min: todaysDate.subtract(30, 'days').toDate(),
  max: todaysDate.toDate(),
};

export {dateRange};
