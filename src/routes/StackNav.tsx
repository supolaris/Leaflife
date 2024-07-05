import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import FirstScreen from '../screens/FirstScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import {BottomNav} from './BottomNav';

const Stack = createStackNavigator();

export function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="First_Screen" component={FirstScreen} />
        <Stack.Screen name="OnBoarding_Screen" component={OnBoardingScreen} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
