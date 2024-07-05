import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NavigationParams} from './NavigationParams';

export const UseAppNavigation = () => {
  return useNavigation<NavigationProp<NavigationParams>>();
};
