import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import colors from '../utils/colors';

const ControlButtons = ({start, pause, lap, reset, isActive, isPaused}) => {
  return (
    <View style={{...styles.buttonsContainer}}>
      {!isActive ? (
        <Pressable
          onPress={start}
          style={({pressed}) => [
            styles.button,
            {
              backgroundColor: pressed ? `${colors.primary}25` : 'transparent',
            },
          ]}>
          <Image
            source={require('../assets/images/play.png')}
            style={{width: 40, height: 40}}
          />
        </Pressable>
      ) : (
        <>
          <Pressable
            onPress={lap}
            style={({pressed}) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? `${colors.primary}25`
                  : 'transparent',
              },
            ]}>
            <Image
              source={require('../assets/images/flag.png')}
              style={{...styles.buttonIcon}}
            />
          </Pressable>
          <Pressable
            onPress={pause}
            style={({pressed}) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? `${colors.primary}25`
                  : 'transparent',
              },
            ]}>
            <Image
              source={
                isPaused
                  ? require('../assets/images/play.png')
                  : require('../assets/images/pause.png')
              }
              style={{...styles.buttonIcon}}
            />
          </Pressable>
          <Pressable
            onPress={reset}
            style={({pressed}) => [
              styles.button,
              {
                backgroundColor: pressed ? `${colors.red}25` : 'transparent',
              },
            ]}>
            <Image
              source={require('../assets/images/reset.png')}
              style={{...styles.buttonIcon}}
            />
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    margin: 5,
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
});

export default ControlButtons;
