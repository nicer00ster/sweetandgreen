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


class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Layout openMenu={() => this.props.navigation.openDrawer()}>
          <FlatList
            data={this.props.menuItems}
            renderItem={this.renderItem}
            keyExtractor={(_, index) => `${index}`}
          />
        </Layout>
      </View>
    );
  }
  renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => { this.props.navigation.navigate('details', { item, index }); }}
    >
      <Transition shared={`image${index}`}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </Transition>
      <View style={styles.textContainer}>
        <Text style={styles.caption}>Image URI:</Text>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
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

const mapStateToProps = state => {
  let products = state.menuItems.products;
  return { menuItems: products }
};

export default connect(mapStateToProps, null)(ListScreen);
