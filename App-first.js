import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ControlButtons from './src/components/ControlButtons';
import Laps from './src/components/Laps';
import Timer from './src/components/Timer';
import {formatTime} from './src/modules/formatTime';
import colors from './src/utils/colors';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [lapTime, setLapTime] = useState(null);
  const [laps, setLaps] = useState([]);

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

  const _handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const _togglePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const _handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setLaps([]);
  };
  const _handleLap = () => {
    let formattedTime = `${formatTime(timer).minutes}:${
      formatTime(timer).seconds
    }.${formatTime(timer).ms}`;
    if (formatTime(timer).hours > 0)
      formattedTime = `${formatTime(timer).hours}:${formattedTime}`;

    setLapTime(formattedTime);
  };

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
        <Laps laps={laps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    color: colors.gray,
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 18,
  },
});
