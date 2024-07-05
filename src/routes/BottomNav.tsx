import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home_Screen" component={HomeScreen} />
    </Tab.Navigator>
  );
}
