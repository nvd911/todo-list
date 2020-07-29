import { SEARCH } from "./../constants/index";
var initialState = {
  name: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return action;
    default:
      return state;
  }
}
