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
    addNext(el) {
      if (state.inProgress.length == 0) {
        state.todo.splice(state.todo.indexOf(el), 1);
        state.inProgress.push(el);
      }
      return state;
    },
    removeTask(el) {
      state.todo.splice(state.todo.indexOf(el), 1);
      return state;
    },
    getTotalSum() {
      return (
        Number(state.inProgress[0].time.slice(0, 2)) +
        state.todo.reduce((acc, val) => acc + Number(val.time.slice(0, 2)))
      );
    },
    removeFromNextUp(el) {
      state.inProgress.pop();
      state.todo.push(el);

      return state;
    },
  };
}
