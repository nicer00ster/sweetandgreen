import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';
import { onLogout } from '../auth';

// class Profile extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Profile',
//     drawerIcon: ({ tintColor }) => <Icon name="menu" />
//   }
//   render() {
//     return (
//       <View>
//         <Text>
//           Profile Page
//         </Text>
//       </View>
//     )
//   }
// }
//
// export default Profile;

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="John Doe">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={() => onLogout().then(() => navigation.navigate("Login"))} // NEW LOGIC
      />
    </Card>
  </View>
);
