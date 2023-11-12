import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Menu from '../components/Menu'; // Import the MainLandingPage component

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        
        {/* Add the MainLandingPage screen to the drawer navigator */}
        <Drawer.Screen name="Menu" component={Menu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
