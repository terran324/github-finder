import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    search: "" // The name of this key has to be equal to the name of the component that will be affected.
    // In this case, it is the form, with the name of 'search'
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    // The `this` keyword works differently with arrow functions!
    e.preventDefault();
    this.props.searchUsers(this.state.search);
    this.setState({ text: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="search"
            placeholder="Search Users..."
            value={this.state.search}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
