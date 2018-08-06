import React from 'react';
import { View, Text } from 'react-native';

export const Label = props => (
  <View
    onPress={props.onPress}
    style={{
      backgroundColor: props.background,
      width: 100,
      height: props.size,
      borderTopLeftRadius: props.size / 2,
      borderTopRightRadius: props.size / 2,
      margin: 14,
      paddingTop: 8 }}
    >
    <Text style={{textAlign: 'center', color: '#10ac84', fontWeight: '200'}}>
      {props.routeName}
    </Text>
  </View>
);
