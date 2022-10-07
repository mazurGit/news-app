import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useState, useAppDispatch} from '~/hooks/hooks';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from '~/components/components';
import {SectionTitle} from '../components';
import {FilterSectionTitle, Languages} from '~/common/enums/enums';
import {languagesMenuSelectionData} from '~/common/constants/constants';
import {styles} from './styles';
import {filtersActions} from '~/store/actions';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const LanguagePicker: FC<Props> = ({contentContainerStyle}) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
        searchable={true}
        open={open}
        value={value}
        items={languagesMenuSelectionData}
        setOpen={setOpen}
        onChangeValue={onChangeValue}
        setValue={setValue}
        searchPlaceholder="Search Language"
        placeholderStyle={styles.placeholderStyle}
        style={styles.labelContainerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        searchTextInputStyle={styles.searchTextInputStyle}
        labelStyle={styles.labelStyle}
        listItemLabelStyle={styles.labelContainerStyle}
      />
    </View>
  );
};

export {LanguagePicker};
