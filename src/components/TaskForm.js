import React, { Component } from "react";
import { connect } from "react-redux";

import {
  onToggleForm,
  addTasks,
  onCloseForm,
  onOpenForm,
} from "./../actions/todoAction";

import "./TaskForm.css";

export class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      status: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checker : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClear = (numb) => {
    this.setState({
      name: "",
      status: false,
    });

    this.props.onOpenForm();
  };

  onSubmit(e) {
    e.preventDefault();

    this.props.addTasks(this.state);
    this.onClear(0);
    this.props.onCloseForm();
  }

  onToggleForm = () => {
    this.props.onToggleForm();
  };

  componentWillMount() {
    if (this.props.onUpdateItem && this.props.onUpdateItem.id !== "") {
      this.setState({
        id: this.props.onUpdateItem.id,
        name: this.props.onUpdateItem.name,
        status: this.props.onUpdateItem.status,
      });
    } else {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.onUpdateItem) {
      this.setState({
        id: nextProps.onUpdateItem.id,
        name: nextProps.onUpdateItem.name,
        status: nextProps.onUpdateItem.status,
      });
    } else {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }

  render() {
    var { isDisplayForm, onUpdateItem } = this.props;

    var { id } = this.state;
    var content = isDisplayForm ? (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              <span>{id ? "Cập nhật công việc" : "Thêm Công Việc"}</span>
              <i
                className="fas fa-window-close iconX"
                onClick={this.onToggleForm}
              ></i>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên :</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  name="name"
                  value={this.state.name}
                  placeholder={onUpdateItem.name}
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                className="form-control"
                required="required"
                onChange={this.onChange}
                name="status"
                value={this.state.status}
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Lưu
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => this.onClear()}
                >
                  Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  isDisplayForm: state.isDisplayForm,
  onUpdateItem: state.onUpdateItem,
});

export default connect(mapStateToProps, {
  onToggleForm,
  addTasks,
  onCloseForm,
  onOpenForm,
})(TaskForm);
