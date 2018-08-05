import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

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
      <React.Fragment>
        <Image
          source={require('../greens.jpg')}
          style={styles.background}
          resizeMode="cover"
          opacity={.5}
        />
        <View style={styles.container}>
          <Header
            backgroundColor={'transparent'}
            outerContainerStyles={{ borderBottomWidth: 0 }}
            innerContainerStyles={{ margin: 5 }}
            leftComponent={{ icon: 'menu', color: '#10ac84', size: 36, onPress: () => navigation.openDrawer() }}
            // rightComponent={{ icon: 'home', color: '#10ac84', size: 36 }}
            rightComponent={<Text style={{ color: '#10ac84', fontSize: 24 }}>{navigation.state.routeName}</Text>}
          />
          <Text style={{ padding: 25, fontWeight: '800', fontSize: 36 }}>Good afternoon, Alex.</Text>
          <View style={styles.content}>
            <ListItem
              scaleProps={{
                friction: 90,
                tension: 100,
                activeScale: 0.95,
              }}
              linearGradientProps={{
                colors: ['#10ac84', '#fefefe'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              ViewComponent={LinearGradient}
              leftIcon={{ name: 'redo', color: '#78e08f' }}
              containerStyle={styles.listItem}
              title="Login to get started!"
            />
            <ListItem
              leftIcon={{ name: 'restaurant-menu', color: '#78e08f' }}
              containerStyle={styles.listItem}
              title="Check out the menu!"
            />
          </View>
          <Header
            backgroundColor={'#c6ffdd'}
            outerContainerStyles={{ borderBottomWidth: 0, height: 140 }}
            innerContainerStyles={{ alignItems: 'center' }}
            centerComponent={{ text: 'SUPERGREEN', style: { color: '#f7797d' } }}
          />
        </View>
      </React.Fragment>
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
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    borderTopWidth: .5,
    borderColor: '#999',
    height: 75
  }
});
