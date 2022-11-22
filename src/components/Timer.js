import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {formatTime} from '../modules/formatTime';
import colors from '../utils/colors';

const DisplayComponent = ({timer}) => {
  return (
    <View style={{...styles.container}}>
      {/* circles */}
      <View
        style={{
          ...styles.circle,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            ...styles.circle,
            height: 250,
            width: 250,
            backgroundColor: `${colors.primary}25`,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              ...styles.circle,
              height: 200,
              width: 200,
              backgroundColor: `${colors.primary}20`,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                ...styles.circle,
                height: 130,
                width: 130,
                backgroundColor: `${colors.primary}15`,
              }}></View>
          </View>
        </View>
      </View>

      {/* bubbles */}
      <View
        style={{
          ...styles.circle,
          height: 15,
          width: 15,
          backgroundColor: colors.red,
          position: 'absolute',
          top: '18%',
          right: '18%',
        }}></View>
      <View
        style={{
          ...styles.circle,
          height: 15,
          width: 15,
          backgroundColor: colors.primary,
          position: 'absolute',
          bottom: '20%',
          left: '25%',
        }}></View>
      <View
        style={{
          ...styles.circle,
          height: 12,
          width: 12,
          backgroundColor: colors.green,
          position: 'absolute',
          bottom: '35%',
          right: '25%',
        }}></View>
      <View
        style={{
          ...styles.circle,
          height: 8,
          width: 8,
          backgroundColor: colors.cyan,
          position: 'absolute',
          top: '30%',
          left: '40%',
        }}></View>

      {/* timer */}
      <View style={{...styles.timerContainer}}>
        <Text style={{...styles.timer}}>
          {formatTime(timer).hours}:{formatTime(timer).minutes}:
          {formatTime(timer).seconds}
        </Text>
        <Text
          style={{
            ...styles.timer,
            fontSize: 25,
            color: `${colors.black}70`,
          }}>
          {formatTime(timer).ms}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 60,
  },
  circle: {
    height: 300,
    width: 300,
    borderRadius: 300,
    backgroundColor: `${colors.primary}25`,
  },
  timerContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
  timer: {
    color: colors.black,
    fontFamily: 'Electrolize',
    fontSize: 45,
  },
});

export default DisplayComponent;
