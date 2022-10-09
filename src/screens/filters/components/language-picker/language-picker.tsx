import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useState, useAppDispatch, useAppSelector} from '~/hooks/hooks';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from '~/components/components';
import {SectionTitle} from '../components';
import {FilterSectionTitle, Languages} from '~/common/enums/enums';
import {languagesMenuSelectionData} from '~/common/constants/constants';
import {styles} from './styles';
import {filtersActions} from '~/store/actions';
import {selectFilters} from '~/store/selectors';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const LanguagePicker: FC<Props> = ({contentContainerStyle}) => {
  const dispatch = useAppDispatch();
  const {language} = useAppSelector(selectFilters);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(language);
  const onChangeValue = (lang: string | null) => {
    if (lang) {
      dispatch(filtersActions.updateFilter({language: lang as Languages}));
    }
  };

  return (
    <View style={contentContainerStyle}>
      <SectionTitle title={FilterSectionTitle.LANGUAGE} />
      <DropDownPicker
        placeholder="Select Language"
        listMode="SCROLLVIEW"
        open={open}
        value={value}
        items={languagesMenuSelectionData}
        setOpen={setOpen}
        onChangeValue={onChangeValue}
        setValue={setValue}
        placeholderStyle={styles.placeholderStyle}
        style={styles.labelContainerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        labelStyle={styles.labelStyle}
        listItemLabelStyle={styles.labelContainerStyle}
      />
    </View>
  );
};

export {LanguagePicker};
