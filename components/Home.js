import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name="home" />
  }
  state = {
    loading: false
  }
  compponentDidMount() {
    this.setState({ loading: true })
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('../greens.jpg')}
          style={styles.background}
          resizeMode="cover"
          opacity={.5}
        />
        <Header
          backgroundColor={'transparent'}
          outerContainerStyles={{ borderBottomWidth: 0 }}
          innerContainerStyles={{ margin: 5 }}
          leftComponent={{ icon: 'menu', color: '#10ac84', size: 36, onPress: () => navigation.openDrawer() }}
          // rightComponent={{ icon: 'home', color: '#10ac84', size: 36 }}
          rightComponent={<Text style={{ color: '#10ac84', fontSize: 24 }}>{navigation.state.routeName}</Text>}
        />
        <View style={styles.content}>
          <Text style={{ padding: 25 }}>Explore our menu to get started!</Text>
          <ListItem
            leftIcon={{ name: 'redo', color: '#78e08f' }}
            style={{ backgroundColor: '#fefefe' }}
            title="Login to get started!"
          />
          <ListItem
            leftIcon={{ name: 'restaurant-menu', color: '#78e08f' }}
            title="Check out the menu!"
          />
        </View>
        <Header
          backgroundColor={'#c6ffdd'}
          outerContainerStyles={{ borderBottomWidth: 0, height: 140 }}
          innerContainerStyles={{ alignItems: 'center' }}
          // leftComponent={{ icon: 'menu', color: '#f7797d' }}
          centerComponent={{ text: 'SUPERGREEN', style: { color: '#f7797d' } }}
          // rightComponent={{ icon: 'home', color: '#f7797d' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignSelf: 'stretch',
    position: 'absolute',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  }
});
