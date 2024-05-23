import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SettingsScreen</Text>

      <PrimaryButton
        label="Back"
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton
        label="Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
