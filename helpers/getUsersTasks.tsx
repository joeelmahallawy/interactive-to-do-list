import { useMethods, useUpdate } from "react-use";
import createMethods, { initState } from "../states/useMethods";
import parseTime from "./parseTime";

export default function getUsersTasks({ value }) {
  //   const [state, methods] = useMethods(createMethods, initState);
  //   const updateSelf = useUpdate();
  const filterArr = value.split(" ");
  parseTime(filterArr);
  console.log(filterArr);

  //   value != "" ? methods.addToDo(value) : null;
  //   updateSelf();

  return { task: "", time: "" };
}
