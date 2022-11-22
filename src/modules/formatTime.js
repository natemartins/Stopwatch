export const formatTime = milliseconds => {
  const ms = Math.floor((milliseconds / 10) % 100)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((milliseconds / 1000) % 60)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60)
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24)
    .toString()
    .padStart(2, '0');

  return {hours, minutes, seconds, ms};
};
