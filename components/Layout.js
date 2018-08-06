import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, List, ListItem, Icon } from 'react-native-elements';

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Image
          source={require('../greens.jpg')}
          style={styles.background}
          resizeMode="cover"
          opacity={.35}
        />
        <View style={styles.container}>
          <Header
            backgroundColor={'transparent'}
            outerContainerStyles={{ borderBottomWidth: 0 }}
            innerContainerStyles={{ margin: 5 }}
            rightComponent={{ icon: 'menu', color: '#10ac84', size: 36, onPress: this.props.openMenu }}
          />
          {React.cloneElement(this.props.children, { ...this.props })}
        </View>
      </React.Fragment>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
