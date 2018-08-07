import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import { listMenuItems } from '../../reducers';

import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import Layout from '../Layout';
import ListScreen from './ListScreen';


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared={`image${this.props.navigation.state.params.index}`}>
          <Image
            style={styles.largeImage}
            source={{ uri: this.props.navigation.state.params.item.url }}
          />
        </Transition>
        <Transition anchor={`image${this.props.navigation.state.params.index}`}>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.caption}>Image URI:</Text>
              <Text>{this.props.navigation.state.params.item.url}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </Transition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ECECEC',
    borderColor: '#CCC',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: '#EEE',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
    elevation: 3,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 18,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  largeImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  bottomContainer: {
    backgroundColor: '#ECECEC',
    flex: 1,
    padding: 20,
  },
  button: {
    padding: 12,
    backgroundColor: '#CECECE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Navigator = FluidNavigator({
  list: { screen: ListScreen },
  details: { screen: DetailsScreen },
}, {
  navigationOptions: {
    gesturesEnabled: true,
  },
});

class Menu extends React.Component {
  static router = Navigator.router;
  async componentWillMount() {
    const res = this.props.listMenuItems(7);
    const data = await res.json();
  }
  render() {
    return (
        <Navigator navigation={this.props.navigation} />
    );
  }
}

const mapStateToProps = state => {
  // let storedMenuItems = state.menuItems.map(item => ({ key: item.id, ...item }));
  let products = state.menuItems.products;
  return { menuItems: products }
};

const mapDispatchToProps = { listMenuItems };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);