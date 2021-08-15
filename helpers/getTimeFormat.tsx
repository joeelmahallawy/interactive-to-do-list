export default function getTimeFormat(
  hoursSeconds,
  minutesSeconds,
  timeForSeconds
) {
  const hour = Math.floor((hoursSeconds + minutesSeconds) / 3600);
  const minutes = ((hoursSeconds + minutesSeconds) / 60) % 60;
  const seconds = (timeForSeconds / 1000) % 60;

  // return `${hour < 10 ? "0" + hour : hour}:${
  //   minutes < 10 ? "0" + minutes : minutes
  // }:${seconds < 10 ? "0" + seconds : seconds}`;
  return hour == 0
    ? `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`
    : `${hour < 10 ? "0" + hour : hour}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;
}
