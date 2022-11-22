import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ControlButtons from './src/components/ControlButtons';
import Laps from './src/components/Laps';
import Timer from './src/components/Timer';
import {formatTime} from './src/modules/formatTime';
import colors from './src/utils/colors';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  // hide splashscreen after app initialisation
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // set local variables states
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [lapTime, setLapTime] = useState(null);
  const [laps, setLaps] = useState([]);

  // timer handler incrementor
  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimer(timer => timer + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  // start timer
  const _handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // toggle pause and resume timer
  const _togglePauseResume = () => {
    setIsPaused(!isPaused);
  };

  // reset timer
  const _handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setLaps([]);
  };

  // handle timer laps
  const _handleLap = () => {
    let formattedTime = `${formatTime(timer).minutes}:${
      formatTime(timer).seconds
    }.${formatTime(timer).ms}`;
    if (formatTime(timer).hours > 0)
      formattedTime = `${formatTime(timer).hours}:${formattedTime}`;

    setLapTime(formattedTime);
  };

  // update timer laps array after it set from the _handleLap() function
  useEffect(() => {
    if (lapTime === null) {
      return;
    }
    setLaps([lapTime, ...laps]);
  }, [lapTime]);

  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.title}}>Stopwatch</Text>
      <View style={{...styles.content}}>
        <Timer timer={timer} />
        <ControlButtons
          start={_handleStart}
          pause={_togglePauseResume}
          lap={_handleLap}
          reset={_handleReset}
          isActive={isActive}
          isPaused={isPaused}
        />
      </View>
      <Laps laps={laps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.primary}30`,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.gray,
    textTransform: 'uppercase',
    fontFamily: 'Electrolize',
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 16,
  },
});
