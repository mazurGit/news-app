import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useState} from '~/hooks/hooks';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from '~/components/components';
import {SectionTitle} from '../components';
import {FilterSectionTitle} from '~/common/enums/enums';
import {languagesMenuSelectionData} from '~/common/constants/constants';
import {styles} from './styles';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const LanguagePicker: FC<Props> = ({contentContainerStyle}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

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
