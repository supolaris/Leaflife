import React, {useCallback} from 'react';

import {useFocusEffect} from '@react-navigation/native';
import {UseAppNavigation} from '../@types/AppNavigation';

import First from '../components/screensUi/First';

const FirstScreen = () => {
  const navigation = UseAppNavigation();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate('OnBoarding_Screen');
      }, 1000 * 1);
    }, []),
  );

  return <First />;
};

export default FirstScreen;
