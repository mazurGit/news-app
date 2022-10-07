import React, {FC} from 'react';
import {ViewStyle, StyleProp} from 'react-native';
import {View, TouchableOpacity, Text} from '../components';
import {styles} from './styles';

type Props = {
  isSelected: boolean;
  size?: number;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const RadioButton: FC<Props> = ({
  isSelected = false,
  size = 21,
  label,
  onPress,
  style,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity
        style={[styles.buttonContainer, {width: size, height: size}]}
        onPress={onPress}>
        {isSelected && (
          <View
            style={[styles.filler, {width: size * 0.6, height: size * 0.6}]}
          />
        )}
      </TouchableOpacity>
      <Text>{label}</Text>
    </View>
  );
};

export {RadioButton};
