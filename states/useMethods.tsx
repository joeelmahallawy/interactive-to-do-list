import { useMethods } from "react-use";

export const initState = { todo: [], inProgress: [], done: [] };

export default function createMethods(state) {
  return {
    clearToDo() {
      state.todo.splice(0, state.todo.length);
      state.done.splice(0, state.done.length);
      return state;
    },
    addToDo(el) {
      state.todo.push(el);
      return state;
    },
    addNext(el) {
      if (state.inProgress.length == 0) {
        state.todo.splice(state.todo.indexOf(el), 1);
        state.inProgress.push(el);
      } else {
        let recentTask = state.inProgress.pop();
        state.todo.splice(state.todo.indexOf(el), 1);
        state.inProgress.push(el);
        // console.log(recentTask);
        state.todo.push(recentTask);
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
    doNextTask() {
      state.todo.length == 0
        ? (() => {
            let prevTask = state.inProgress.pop();
            state.done.push(prevTask);
          })()
        : (() => {
            let lastTask = state.inProgress.pop();
            state.inProgress.push(state.todo.shift());
            state.done.push(lastTask);
          })();

      return state;
    },
    removeFinishedTask(el) {
      state.done.splice(state.done.indexOf(el), 1);
      return state;
    },
    finishTask(el) {
      let lastTask = state.inProgress.pop();
      state.done.push(lastTask);
      return state;
    },
  };
}
