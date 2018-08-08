import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { fetchMenu } from '../../actions';

// import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import Layout from '../Layout';

class Menu extends React.Component {
  componentDidMount() {
    this.props.fetchMenu();
  }
  render() {
    return (
        <Layout openMenu={() => this.props.navigation.openDrawer()}>
          <Text>Menu Page</Text>
        </Layout>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu.menu
});

const mapDispatchToProps = { fetchMenu }

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
