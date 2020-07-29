import { ADD_TASKS, ON_UPDATE_STATUS, ON_DELETE } from "./../constants/index";
import randomId from "random-id";

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

export default function (state = initialState, action) {
  var id = "";
  var index = -1;

  var len = 30;
  var pattern = "aA0";
  var id = randomId(len, pattern);

  switch (action.type) {
    case ADD_TASKS:
      var tasks = {
        id: action.tasks.id,
        name: action.tasks.name,
        status: action.tasks.status === "true" ? true : false,
      };
      var index = findIndex(state, action.tasks.id);

      if (tasks.id) {
        state[index] = tasks;
      } else {
        tasks.id = id;
        state.push(tasks);
      }
      localStorage.setItem("tasks", JSON.stringify(state));

      return [...state];
    case ON_UPDATE_STATUS:
      var id = action.id;
      var index = findIndex(state, id);
      var cloneTask = { ...state[index] };
      cloneTask.status = !cloneTask.status;
      state[index] = cloneTask;
      return [...state];
    case ON_DELETE:
      var index = findIndex(state, action.id);
      state.splice(index, 1);
      return [...state];

    default:
      return state;
  }
}

var findIndex = (tasks, id) => {
  var result = null;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
