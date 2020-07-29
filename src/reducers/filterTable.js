import { FILTER_TABLE } from "./../constants/index";
var initialState = {
  filterName: "",
  filterStatus: -1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FILTER_TABLE:
      console.log(action.tasks);
      return action.tasks;
    default:
      return state;
  }
}
