import { useMethods, useUpdate } from "react-use";
import createMethods, { initState } from "../states/useMethods";

export default function getUsersTasks(task, time) {
  return { task: `${task}`, time: `${time}` };
}
