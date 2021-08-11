import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';
interface ISkyllProps extends TouchableOpacityProps {
  name: string;
}
export const SkyllCard: React.FC<ISkyllProps> = ({name, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.buttonTitle}>{name}</Text>
    </TouchableOpacity>
  );
};
