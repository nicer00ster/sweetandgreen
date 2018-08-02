import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Transition } from 'react-navigation-fluid-transitions';
import { onLogin } from '../auth';

export default ({ navigation }) => {
  return (

    <React.Fragment>
      {console.log(navigation)}
      <Image
        source={require('../greens.jpg')}
        style={styles.background}
        resizeMode="cover"
        opacity={.5}
      />
      <View style={styles.container}>
        <Transition shared="circle">
          <Card>
            <FormLabel>Email</FormLabel>
            <FormInput/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>Password</FormLabel>
            <FormInput/>
            <FormValidationMessage>Error message</FormValidationMessage>
            { navigation.state.routeName === 'Register'
            ? <React.Fragment><FormLabel>Confirm Password</FormLabel>
            <FormInput/>
            <FormValidationMessage>Error message</FormValidationMessage></React.Fragment>
            : null
          }
          { navigation.state.routeName === 'Register'
          ? <React.Fragment><Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Register"
            onPress={() => {
              onLogin()
              .then(() => navigation.navigate('Home'));
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Already have an account? Login!"
            onPress={() => navigation.navigate("Login")}
          /></React.Fragment>
          :  <React.Fragment><Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Login"
            onPress={() => {
              onLogin()
              .then(() => navigation.navigate('Home'));
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="No account? Create one here!"
            onPress={() => navigation.navigate("Register", { route: 'register' })}
          /></React.Fragment>
        }
      </Card>

        </Transition>
    </View>
  </React.Fragment>
  )
}


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
  }
});
