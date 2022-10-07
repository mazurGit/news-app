import React from 'react';
import {ScreenWrapper} from '~/components/components';
import {
  LanguagePicker,
  SortBySection,
  DateRangeSection,
} from './components/components';
import {styles} from './styles';

const Filters = () => {
  return (
    <ScreenWrapper style={styles.wrapper}>
      <SortBySection />
      <DateRangeSection />
      <LanguagePicker />
    </ScreenWrapper>
  );
};

export {Filters};
