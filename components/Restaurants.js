import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class Restaurants extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Restaurants',
    drawerIcon: ({ tintColor }) => <Icon name="restaurant-menu" />
  }
  render() {
    return (
      <View>Restaurant Page</View>
    )
  }
}

export default Restaurants;
