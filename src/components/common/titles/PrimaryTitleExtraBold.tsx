import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {LeafLifeColors} from '../../../constants/LeafLifeColors';
import {LeafLifeFonts} from '../../../constants/LeafLifeFonts';

interface Iprops {
  text: string;
}

const PrimaryTitleExtraBold = (props: Iprops) => {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default PrimaryTitleExtraBold;

const styles = StyleSheet.create({
  conatainer: {},
  text: {
    fontSize: 20,
    fontFamily: LeafLifeFonts.PoppinBold,
    color: LeafLifeColors.PrimaryGreenText,
  },
});
