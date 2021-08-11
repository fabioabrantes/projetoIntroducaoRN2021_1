import React from 'react';

import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';

import {styles} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  remove?: boolean;
}
export const Button = ({title, remove, ...rest}: IButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={remove ? styles.buttonContainerRemove : styles.buttonContainer}
      {...rest}>
      <Text style={styles.buttonTitle}> {title}</Text>
    </TouchableOpacity>
  );
};
