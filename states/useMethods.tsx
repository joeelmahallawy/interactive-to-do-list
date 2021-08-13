import { useMethods } from "react-use";

export const initState = { todo: [], inProgress: [], done: [] };

export default function createMethods(state) {
  return {
    clearToDo() {
      return initState;
    },
    addToDo(el) {
      state.todo.push(el);
      return state;
    },
    addInProgress(el) {
      state.todo.splice(state.todo.indexOf(el), 1);
      state.inProgress.push(el);
      return state;
    },
  };
}
