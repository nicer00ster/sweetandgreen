import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage, Icon } from 'react-native-elements';

export default ({ navigation }) => (
    <View style={styles.container}>
      <Image
        source={require('../greens.jpg')}
        style={styles.background}
        resizeMode="cover"
        opacity={.5}
      />
      <Card containerStyle={{ borderRadius: 3 }} style={styles.card} elevation={7}>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <FormLabel>Confirm Password</FormLabel>
        <FormInput secureTextEntry />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#78e08f", fontWeight: '600' }}
          title="CREATE ACCOUNT"
          // onPress={() => {
          //   onLogin()
          //   .then(() => navigation.navigate('Home'));
          // }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#78e08f", fontWeight: '200' }}
          title="Already have an account? Login!"
          onPress={() => navigation.navigate("Login")}
        />
      </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 20
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
});
