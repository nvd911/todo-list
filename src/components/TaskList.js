import React, { Component } from "react";
import { connect } from "react-redux";

import TaskItem from "./TaskItem";
import { filterTable } from "./../actions/todoAction";

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checker : target.value;
    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    this.props.filterTable(filter);
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks, filter, search, sort } = this.props;

    if (filter.name) {
      var tasks = tasks.filter((task, index) => {
        return (
          task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        );
      });
    } else if (search.name) {
      var tasks = tasks.filter((task, index) => {
        return (
          task.name.toLowerCase().indexOf(search.name.toLowerCase()) !== -1
        );
      });
    }

    if (filter.status) {
      var tasks = tasks.filter((task, index) => {
        if (filter.status === -1 || filter.status === "-1") {
          return task;
        } else if (filter.status === "1") {
          return task.status === true;
        } else if (filter.status === "0") {
          return task.status === false;
        }
      });
    }

    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sort.value;
        } else if (a.name < b.name) {
          return -sort.value;
        } else {
          return 0;
        }
      });
    }

    if (sort.by === "status") {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sort.value;
        } else if (a.name < b.name) {
          return -sort.value;
        } else {
          return 0;
        }
      });
    }

    let content =
      tasks.length > 0
        ? tasks.map((task, index) => {
            return <TaskItem key={index} tasks={task} index={index}></TaskItem>;
          })
        : [];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  name="filterName"
                  value={this.state.filterName}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  onChange={this.onChange}
                  name="filterStatus"
                  value={this.state.filterStatus}
                >
                  <option value="-1">Tất Cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {content}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filterTable,
  search: state.search,
  sort: state.sort,
});

export default connect(mapStateToProps, { filterTable })(TaskList);
