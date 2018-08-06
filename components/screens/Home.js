import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, List,  ListItem, Icon } from 'react-native-elements';

import Layout from '../Layout';

export default class Home extends React.Component {
  state = {
    loading: false
  }
  compponentDidMount() {
    this.setState({ loading: true })
  }
  render() {
    const { navigation } = this.props;
    return (
      <Layout openMenu={() => navigation.openDrawer()}>
        <React.Fragment>
        <Text style={styles.title}>Good afternoon, Alex!</Text>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Tap "Order Now" to get started!</Text>
          <ListItem
            leftIcon={{ name: 'favorite', color: '#10ac84' }}
            containerStyle={styles.listItem}
            title="MY ORDERS & FAVORITES"
            onPress={() => navigation.navigate('OrdersFavorites')}
          />
          <ListItem
            leftIcon={{ name: 'card-giftcard', color: '#10ac84' }}
            containerStyle={styles.listItem}
            title="CREDITS & REWARDS"
            onPress={() => navigation.navigate('CreditsRewards')}
          />
          <ListItem
            leftIcon={{ name: 'credit-card', color: '#10ac84' }}
            containerStyle={styles.listItem}
            title="SCAN TO PAY"
            onPress={() => alert('hey')}
          />
          <ListItem
            containerStyle={styles.listItemOrder}
            subtitleStyle={{ color: '#fff' }}
            titleStyle={{ color: '#fff' }}
            title="Order Now"
            subtitle="Find a Sweet & Green"
            onPress={() => alert('ordering')}
          />
        </View>
        </React.Fragment>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  title: {
    padding: 25,
    fontWeight: '200',
    fontSize: 36,
    fontFamily: 'sans-serif',
    color: '#000'
  },
  subtitle: {
    padding: 25,
    fontWeight: '200',
    fontSize: 20,
    color: '#000'
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
    height: 75,
    borderBottomWidth: 0
  },
  listItemOrder: {
    justifyContent: 'center',
    backgroundColor: '#10ac84',
    borderTopWidth: .5,
    borderColor: '#999',
    height: 75
  }
});
