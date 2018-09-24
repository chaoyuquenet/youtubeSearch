import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);  // super is to call parent class Component's constructor

    this.state = {term: ''}; // initialize state by a new object {term: ''}, term: search term
  }
  render() {
    //return <input onChange={this.onInputChange}/>;
    // when just one argument, can remove the braces
    // when just one result, can remove the curly braces
    //return <input onChange = {event => console.log(event.target.value)} />;
    return (
      <div>
        <input // input is a controlled component
        value={this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
   //replace {this.onInputChange with the function of event handler as below
/*
  onInputChange(event) {
    console.log(event.target.value);
  }
  */
}

export default SearchBar;
