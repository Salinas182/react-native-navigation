import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface ButtonProps {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({onPress, label}: ButtonProps) => {
  return (
    <Pressable
      style={globalStyles.primaryButton}
      onPress={() => onPress()}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
