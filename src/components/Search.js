import React, { Component } from "react";
import { connect } from "react-redux";

import { search } from "./../actions/todoAction";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checker : target.value;

    this.setState({
      name: value,
    });
  };

  search = () => {
    this.props.search(this.state.name);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            onChange={this.onChange}
            name="name"
            value={this.state.name}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.search}
            >
              <span className="fa fa-search mr-5"></span>Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { search })(Search);
