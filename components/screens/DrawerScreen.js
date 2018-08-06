import React from 'react';
import { StyleSheet, Platform, StatusBar, ScrollView, Image, View, Text, Dimensions } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Avatar, Divider } from 'react-native-elements';

export const DrawerScreen = props => (
   <ScrollView>
     <View style={{ height: Dimensions.get('window').height }}>
       <Image
         style={styles.drawerImage}
         opacity={0.5}
         source={require('../../drawer.jpg')}
         resizeMode='cover'
       />
       <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} forceInset={{ top: 'always', horizontal: 'never' }}>
         <Text style={styles.header}>Sweet & Green</Text>
         <Avatar
           medium
           rounded
           onPress={() => alert('You touched me!')}
           activeOpacity={0.7}
           title='AB'
           containerStyle={{
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
);

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontFamily: 'sans-serif-thin',
    fontSize: 36,
    fontWeight: '200',
    textAlign: 'center',
    color: "#10ac84",
    margin: 5,
    padding: 5
  },
  drawerImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});
