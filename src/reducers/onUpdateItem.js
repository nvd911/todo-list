import { ON_UPDATE_ITEM } from "./../constants/index";
var initialState = {
  id: "",
  name: "",
  status: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_UPDATE_ITEM:
      return action.tasks;

    default:
      return state;
  }
}
