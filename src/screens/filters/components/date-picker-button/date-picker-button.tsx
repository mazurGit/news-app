import React, {FC} from 'react';
import dayjs from 'dayjs';
import {useState, useAppDispatch, useAppSelector} from '~/hooks/hooks';
import {DatePicker, Text, Button, View} from '~/components/components';
import {DatePickerSelector} from '~/common/enums/enums';
import {styles} from './styles';
import {SectionTitle} from '../components';
import {selectFilters} from '~/store/selectors';
import {filtersActions} from '~/store/actions';
import {checkDate} from '~/helpers/helpers';

type Props = {
  type: DatePickerSelector;
};

const DatePickerButton: FC<Props> = ({type}) => {
  const isBtnFrom = type === DatePickerSelector.FROM;
  const dispatch = useAppDispatch();
  const {from, to} = useAppSelector(selectFilters);
  const [open, setOpen] = useState(false);
  const date = dayjs(isBtnFrom ? from : to).format('ll');
  const onButtonPress = () => {
    setOpen(prevState => !prevState);
  };
  const onConfirm = (chosenDate: Date) => {
    const newDate = checkDate(chosenDate);
    if (isBtnFrom) {
      dispatch(filtersActions.updateFilter({from: newDate}));
    } else {
      dispatch(filtersActions.updateFilter({to: newDate}));
    }
  };

  return (
    <View>
      <SectionTitle
        title={isBtnFrom ? DatePickerSelector.FROM : DatePickerSelector.TO}
      />
      <Button onPress={onButtonPress} style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </Button>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={isBtnFrom ? from : to}
        onConfirm={chosenDate => {
          setOpen(false);
          onConfirm(chosenDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export {DatePickerButton};
