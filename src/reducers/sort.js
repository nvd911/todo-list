import { SORT } from "./../constants/index";
var initialState = {
  by: "",
  value: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SORT:
      return action.sort;
    default:
      return state;
  }
}
