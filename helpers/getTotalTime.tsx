import { useState } from "react";
import { useMethods } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function getTotalTime(state, timeLeft) {
  timeLeft = timeLeft / 1000;
  const totalSecondsInProgressArray =
    Number(state.inProgress[0].time.slice(0, 2)) * 3600 +
    Number(state.inProgress[0].time.slice(3, 5)) * 60;
  let acc = 0;
  if (state.todo !== []) {
    state.todo.forEach((task) => {
      acc = acc + task.time.slice(0, 2) * 3600 + task.time.slice(3, 5) * 60;
    });
  }

  let totalSeconds;
  if (timeLeft == 0) {
    totalSeconds = acc + totalSecondsInProgressArray;
  } else {
    totalSeconds = acc + timeLeft;
  }

  const hour = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds / 60) % 60);

  return `Total: ${hour}hrs ${minutes < 10 ? "0" + minutes : minutes}mins`;
}
