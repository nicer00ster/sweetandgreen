import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { onLogin } from '../auth';
// class Login extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     )
//   }
// }
//
// export default Login;

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
          onPress={() => navigation.navigate("Register")}
        />
      </Card>
  </View>
  </React.Fragment>
)

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
