import { StackNavigator } from 'react-navigation';

import Restaurant from './components/Restaurant';
import Home from './components/Home';

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    },
  },
  Restaurants: {
    screen: Restaurant,
    navigationOptions: {
      title: 'Restaurants',
      headerBackTitle: 'Back'
    },
  }
})
