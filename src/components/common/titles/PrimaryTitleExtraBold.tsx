import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
  },
});
