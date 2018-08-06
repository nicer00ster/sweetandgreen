import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button, Card, Avatar } from 'react-native-elements';
import { onLogout } from '../auth';

class Profile extends React.Component {
  // static navigationOptions = {
    // drawerLabel: 'Profile',
    // drawerIcon: ({ tintColor }) => <Icon name="menu" />
  // }
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title="Alex Busch">
          <Avatar
            large
            rounded
            // source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylex/128.jpg' }}
            onPress={() => alert('You touched me!')}
            activeOpacity={0.7}
            title='AB'
            containerStyle={{
              // backgroundColor: "#bcbec1",
              alignItems: "center",
              justifyContent: "center",
              // width: 80,
              // height: 80,
              // borderRadius: 40,
              alignSelf: "center",
              // marginBottom: 20
            }}
          >
            <Text style={{ color: "white", fontSize: 28 }}>AB</Text>
          </Avatar>
          <Button
            backgroundColor="#03A9F4"
            title="SIGN OUT"
            onPress={() => onLogout().then(() => this.props.navigation.navigate("Login"))} // NEW LOGIC
          />
        </Card>
      </View>
    )
  }
}

export default Profile;
