import React, { Component } from "react";
import { connect } from "react-redux";

import { onToggleForm, onUpdate, onOpenForm } from "./../actions/todoAction";

export class NewBtnCV extends Component {
  onToggleForm = () => {
    if (this.props.onUpdateItem && this.props.onUpdateItem.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onUpdate({
      id: "",
      name: "",
      status: false,
    });
  };
  render() {
    var { onUpdateItem } = this.props;
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.onToggleForm}
      >
        <span className="fa fa-plus mr-5"></span>
        Thêm Công Việc
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  onUpdateItem: state.onUpdateItem,
});

export default connect(mapStateToProps, { onToggleForm, onUpdate, onOpenForm })(
  NewBtnCV
);
