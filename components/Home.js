import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';

export default class Home extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerIcon: ({ tintColor }) => <Icon name="home" />
  // }
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
            rightComponent={{ icon: 'menu', color: '#10ac84', size: 36, onPress: () => navigation.openDrawer() }}
          />
          <Text style={{ padding: 25, fontWeight: '800', fontSize: 36 }}>Good afternoon, Alex.</Text>
          <View style={styles.content}>
            <Text style={{ margin: 10, fontSize: 16 }}>Tap "Order Now" to get started!</Text>
            <ListItem
              leftIcon={{ name: 'loyalty', color: '#10ac84' }}
              containerStyle={styles.listItem}
              title="CREDITS & REWARDS"
            />
            <ListItem
              leftIcon={{ name: 'favorite', color: '#10ac84' }}
              containerStyle={styles.listItem}
              title="MY ORDERS & FAVORITES"
            />
            <ListItem
              leftIcon={{ name: 'credit-card', color: '#10ac84' }}
              containerStyle={styles.listItem}
              title="SCAN TO PAY"
            />
            <ListItem
              containerStyle={styles.listItemOrder}
              subtitleStyle={{ color: '#fff' }}
              titleStyle={{ color: '#fff' }}
              title="Order Now"
              subtitle="Find a Sweet & Green"
            />
          </View>
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
  },
  listItemOrder: {
    justifyContent: 'center',
    backgroundColor: '#10ac84',
    borderTopWidth: .5,
    borderColor: '#999',
    height: 75
  }
});
