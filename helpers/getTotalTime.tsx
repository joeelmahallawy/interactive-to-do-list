import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function getTotalTime(state) {
  const totalSecondsInProgressArray =
    Number(state.inProgress[0].time.slice(0, 2)) * 3600 +
    Number(state.inProgress[0].time.slice(3, 5)) * 60;
  let acc = 0;
  if (state.todo !== []) {
    state.todo.forEach((task) => {
      acc = acc + task.time.slice(0, 2) * 3600 + task.time.slice(3, 5) * 60;
    });
  }
  const totalSeconds = acc + totalSecondsInProgressArray;
  console.log(totalSeconds);
  const hour = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  console.log(minutes);

  return `Total: ${hour}hrs ${minutes < 10 ? "0" + minutes : minutes}mins`;
}
