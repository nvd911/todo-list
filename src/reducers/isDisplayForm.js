import {
  ON_TOGGLE_FORM,
  ON_OPEN_FORM,
  ON_CLOSE_FORM,
} from "./../constants/index";

var initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_TOGGLE_FORM:
      return !state;
    case ON_OPEN_FORM:
      return true;
    case ON_CLOSE_FORM:
      return false;

    default:
      return state;
  }
}
