import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {LeafLifeColors} from '../../constants/LeafLifeColors';

const First = () => {
  return (
    <View style={styles.container}>
      <Text>First</Text>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LeafLifeColors.PrimaryGreen,
  },
});
