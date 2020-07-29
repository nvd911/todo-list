import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import onUpdateItem from "./onUpdateItem";
import filterTable from "./filterTable";
import search from "./search";
import sort from "./sort";

export default combineReducers({
  tasks,
  isDisplayForm,
  onUpdateItem,
  filterTable,
  search,
  sort,
});
