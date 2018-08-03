import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage, Icon, Divider } from 'react-native-elements';
import { onLogin } from '../auth';
import { Transition } from 'react-navigation-fluid-transitions';

const Circle = (props) => (
  <View style={{
    backgroundColor: props.background,
    width: props.size,
    height: props.size,
    borderRadius: props.size / 2,
    margin: 14,
    paddingTop: 20 }}
  />
);

export default ({ navigation }) => (
    <React.Fragment>
      <Image
        source={require('../greens.jpg')}
        style={styles.background}
        resizeMode="cover"
        opacity={.5}
      />
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.circlesContainer}>
          <Transition appear="horizontal" delay>
            <Circle background="#10ac84" size={40} />
          </Transition>
          <Transition appear="horizontal" delay>
            <Circle background="#10ac84" size={40} />
          </Transition>
          <Transition appear="horizontal" delay>
            <Circle background="#10ac84" size={40} />
          </Transition>
        </View>
        <Card containerStyle={{ width: '75%', alignSelf: 'center', borderRadius: 3 }} style={styles.card} elevation={7}>
          <Text style={styles.header}>Sweet & Green</Text>
          <Divider />
          <FormLabel>Email</FormLabel>
          <FormInput />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#10ac84", fontWeight: '600' }}
            title="LOGIN"
            onPress={() => {
              onLogin()
              .then(() => navigation.navigate('Home'));
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={styles.text}
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
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 20
  },
  circlesContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  circle: {
    height: 75,
    width: 75,
    backgroundColor: 'white',
    borderRadius: 100,
    alignSelf: 'center'
  },
  header: {
    fontFamily: 'sans-serif-thin',
    fontSize: 36,
    fontWeight: '200',
    textAlign: 'center',
    color: "#10ac84",
    margin: 5,
    padding: 5
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
  },
  text: {
    color: "#10ac84",
    fontWeight: '200',
    textAlign: 'center'
  }
});
