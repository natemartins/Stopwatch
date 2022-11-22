import React from 'react';
import {View, Dimensions, Text, StyleSheet, ScrollView} from 'react-native';
import colors from '../utils/colors';

const screenWidth = Dimensions.get('screen').width;

const Laps = ({laps}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{...styles.lapsContainer}}>
      {laps?.map((item, index) => (
        <View key={index} style={{...styles.lapsItem}}>
          <Text
            style={{...styles.lapsItemText, fontSize: 14, color: colors.gray}}>
            LAP {laps.length - index}
          </Text>
          <Text style={{...styles.lapsItemText}}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lapsContainer: {
    position: 'absolute',
    bottom: 25,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  lapsItem: {
    width: screenWidth / 2.8,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.background,
    borderRadius: 15,
    marginHorizontal: 10
  },
  lapsItemText: {
    fontFamily: 'Electrolize',
    fontSize: 17,
    color: colors.black,
    padding: 4,
  },
});

export default Laps;
