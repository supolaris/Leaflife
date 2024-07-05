import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {LeafLifeColors} from '../../constants/LeafLifeColors';
import {LeafLifeFonts} from '../../constants/LeafLifeFonts';

const First = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.textView}>
        <Text style={styles.firstText}>Go</Text>
        <Text style={styles.secondText}>Green</Text>
      </View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LeafLifeColors.PrimaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
  },
  firstText: {
    paddingRight: 5,
    fontSize: 64,
    color: '#E7E8E3',
    fontFamily: LeafLifeFonts.PoppinThinItalic,
  },
  secondText: {
    fontSize: 64,
    color: LeafLifeColors.SecondaryGreen,
    fontFamily: LeafLifeFonts.PoppinRegular,
  },
});
