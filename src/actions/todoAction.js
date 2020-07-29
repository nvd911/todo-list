import {
  ADD_TASKS,
  ON_TOGGLE_FORM,
  ON_CLOSE_FORM,
  ON_OPEN_FORM,
  ON_UPDATE_STATUS,
  ON_DELETE,
  ON_UPDATE_ITEM,
  FILTER_TABLE,
  SEARCH,
  SORT,
} from "./../constants/index";

export const addTasks = (tasks) => (dispatch) => {
  dispatch({
    type: ADD_TASKS,
    tasks,
  });
};

export const onToggleForm = () => (dispatch) => {
  dispatch({
    type: ON_TOGGLE_FORM,
  });
};

export const onOpenForm = () => (dispatch) => {
  dispatch({
    type: ON_OPEN_FORM,
  });
};

export const onCloseForm = () => (dispatch) => {
  dispatch({
    type: ON_CLOSE_FORM,
  });
};

export const onUpdateStatus = (id) => (dispatch) => {
  dispatch({
    type: ON_UPDATE_STATUS,
    id,
  });
};

export const onDelete = (id) => (dispatch) => {
  dispatch({
    type: ON_DELETE,
    id,
  });
};

export const onUpdate = (tasks) => (dispatch) => {
  dispatch({
    type: ON_UPDATE_ITEM,
    tasks,
  });
};

export const filterTable = (tasks) => (dispatch) => {
  dispatch({
    type: FILTER_TABLE,
    tasks,
  });
};

export const search = (name) => (dispatch) => {
  dispatch({
    type: SEARCH,
    name,
  });
};

export const sort = (sort) => (dispatch) => {
  dispatch({
    type: SORT,
    sort,
  });
};
