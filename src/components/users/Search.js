import React, { Component } from 'react'

export class Search extends Component {
  state = {
    search: '' // The name of this key has to be equal to the name of the component that will be affected.
               // In this case, it is the form, with the name of 'search'
  };

  onSubmit = (e) => { // The `this` keyword works differently with arrow functions!
    e.preventDefault();
    console.log(this.state.search);
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input 
            type="text" 
            name="search" 
            placeholder="Search Users..." 
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
      </div>
    )
  }
}

export default Search
