import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

// class Register extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Register</Text>
//       </View>
//     )
//   }
// }
//
// export default Register;
export default ({ navigation }) => (
  <React.Fragment>
    {/* <Image
      source={require('../greens.jpg')}
      style={styles.background}
      resizeMode="cover"
      opacity={.5}
    /> */}
    <View style={styles.container}>
      <Card>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="CREATE ACCOUNT"
          // onPress={() => {
          //   onLogin()
          //   .then(() => navigation.navigate('Home'));
          // }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Already have an account? Login!"
          onPress={() => navigation.navigate("Login")}
        />
      </Card>
  </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'relative',
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    // alignSelf: 'stretch',
    position: 'absolute',
    // justifyContent: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  }
});
