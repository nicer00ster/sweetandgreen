import React from 'react';
import { Platform, StatusBar, Animated, Easing, ScrollView, Image, Dimensions, Text, View } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createTabNavigator, createSwitchNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon, Divider, Avatar, Button } from 'react-native-elements';

import Restaurants from './components/Restaurants';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AuthRouter from './components/AuthRouter';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  fontFamily: 'sans-serif-thin',
  fontSize: 36,
  fontWeight: '200',
  textAlign: 'center',
  color: "#10ac84",
  margin: 5,
  padding: 5,
  // height: 100
};


export const DrawerScreen = props => (
   <ScrollView>
     <View style={{ height: Dimensions.get('window').height }}>
       <Image
         style={{ flex: 1, position: 'absolute', top: 0, height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
         opacity={0.5}
         source={require('./drawer.jpg')}
         resizeMode='cover'
       />
       <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} forceInset={{ top: 'always', horizontal: 'never' }}>
         <Text style={headerStyle}>Sweet & Green</Text>
         <Avatar
           medium
           rounded
           // source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylex/128.jpg' }}
           onPress={() => alert('You touched me!')}
           activeOpacity={0.7}
           title='AB'
           containerStyle={{
             // alignItems: "center",
             // justifyContent: "center",
             alignSelf: "flex-start",
             margin: 10,
             padding: 10
           }}
         />
         <Divider />
         <DrawerItems {...props} />
       </SafeAreaView>
     </View>
   </ScrollView>
)

export const notAuthed = createSwitchNavigator({
  Login: {
    screen: AuthRouter,
    navigationOptions: {
      title: 'Login',
      headerStyle
    }
  },
  Register: {
    screen: AuthRouter,
    navigationOptions: {
      title: 'Register',
      headerStyle
    }
  }
}, {
  ...createTabNavigator.Presets.AndroidTopTabs,
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
      flex: 1,
      width: '100%',
      height: '25%',
      padding: 25,
      position: 'absolute',
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
    },
    activeTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'transparent',
      borderRadius: 100,
      borderWidth: 2,
      borderBottomWidth: 3,
      height: 0,
      alignSelf: 'center',
      flex: 1
    },
    labelStyle: {
      fontSize: 14,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    inactiveBackgroundColor: '#000'
  }
});

export const isAuthed = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'HOME',
      drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
    }
  },
  Restaurants: {
    screen: Restaurants,
    navigationOptions: {
      drawerLabel: 'RESTAURANTS',
      drawerIcon: ({ tintColor }) => <Icon name="restaurant-menu" color={tintColor} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'PROFILE',
      drawerIcon: ({ tintColor }) => <Icon name="menu" color={tintColor} />
    }
  }
}, {
  // drawerBackgroundColor: 'transparent',
  contentComponent: DrawerScreen,
  contentOptions: {
    activeTintColor: '#10ac84',
    inactiveTintColor: '#88dac5',
    style: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    itemsContainerStyle: {
      flex: 1
    }
  },
})

export const rootNav = ( authed = false ) => {
  return createSwitchNavigator({
    notAuthed: {
      screen: notAuthed
    },
    isAuthed: {
      screen: isAuthed
    }
  }, {
    initialRouteName: authed ? "isAuthed" : "notAuthed"
  })
}
