import React, {FC} from 'react';
import dayjs from 'dayjs';
import {useState} from '~/hooks/hooks';
import {DatePicker, Text, Button, View} from '~/components/components';
import {DatePickerSelector} from '~/common/enums/enums';
import {styles} from './styles';
import {SectionTitle} from '../components';

type Props = {
  type: DatePickerSelector;
};

const DatePickerButton: FC<Props> = ({type}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onButtonPress = () => {
    setOpen(prevState => !prevState);
  };

  const isBtnFrom = type === DatePickerSelector.FROM;

  return (
    <View>
      <SectionTitle
        title={isBtnFrom ? DatePickerSelector.FROM : DatePickerSelector.TO}
      />
      <Button onPress={onButtonPress} style={styles.dateContainer}>
        <Text style={styles.dateText}>{dayjs(date).format('ll')}</Text>
      </Button>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={chosenDate => {
          setOpen(false);
          setDate(chosenDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export {DatePickerButton};
