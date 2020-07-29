import React, { Component } from "react";

import { connect } from "react-redux";

import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import NewBtnCV from "./components/NewBtnCV";
import { onToggleForm } from "./actions/todoAction";

import "./App.css";

export class App extends Component {
  render() {
    var { isDisPlayForm } = this.props;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <TaskForm></TaskForm>
          <div
            className={
              isDisPlayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <NewBtnCV></NewBtnCV>
            <Control></Control>
            <div className="row mt-15">
              <TaskList></TaskList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isDisPlayForm: state.isDisplayForm,
});

export default connect(mapStateToProps)(App);
