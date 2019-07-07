import React, { Component } from 'react'

export class Search extends Component {
  state = {
    search: '' // The name of this key has to be equal to the name of the component that will be affected.
               // In this case, it is the form, with the name of 'search'
  };

  onChange = (e) => {
    console.log("event target name:" + e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <form className="form">
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
