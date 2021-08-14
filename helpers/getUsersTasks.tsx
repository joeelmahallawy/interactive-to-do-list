import { useMethods, useUpdate } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function getUsersTasks(task, time) {
  console.log(task);
  console.log(time);
  return { task: `${task}`, time: `${time}` };
}
