import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onUpdateStatus,
  onDelete,
  onUpdate,
  onOpenForm,
  addTasks,
} from "./../actions/todoAction";

export class TaskItem extends Component {
  onUpdateStatus = (id) => {
    this.props.onUpdateStatus(id);
  };

  onDelete = (id) => {
    this.props.onDelete(id);
  };

  onUpdateItem = (tasks) => {
    this.props.onOpenForm();
    this.props.onUpdate(tasks);
  };
  render() {
    var { tasks, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{tasks.name}</td>
        <td className="text-center">
          <span
            className={
              tasks.status ? "label label-success" : "label label-warning"
            }
            onClick={() => this.onUpdateStatus(tasks.id)}
          >
            {tasks.status ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.onUpdateItem(tasks)}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(tasks.id)}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  task: state.onUpdateItem,
});

export default connect(mapStateToProps, {
  onUpdateStatus,
  onDelete,
  onUpdate,
  onOpenForm,
  addTasks,
})(TaskItem);
