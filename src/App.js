import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Filters from './Filters';
import BookList from './BookList';

class App extends Component {

  state = {
    loading: false,
    error: null,
    searchTerm: null,
    printFilter: null,
    bookFilter: null,
    results: []
  }

  handleFormSubmit = (e,searchTerm) => {
    e.preventDefault();

    let printFilterValue = this.state.printFilter ? `&printType=${this.state.printFilter}` : '';
    let bookFilterValue = this.state.bookFilter ? `&filter=${this.state.bookFilter}` : '';
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?&q=intitle:${searchTerm}` + printFilterValue + bookFilterValue;

    fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => this.setState({results: responseJson.items}))
    .catch(err => console.log('Error:', err));
  }

  handlePrintTypeFilterChange = (value) => {
    console.log('print type:', value);
    this.setState({printFilter: value});
  }

  handleBookTypeFilterChange = (value) => {
    console.log('book type', value);
    this.setState({bookFilter: value});
  }

  render() {
    let listOutput = undefined;
    
    if (this.state.loading) {
      listOutput = (<div>Loading...</div>)
    } else {
      listOutput = <BookList results={this.state.results} />
    }
    
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search
          searchTerm={this.state.searchTerm}
          handleFormSubmit={(e,searchTerm) => this.handleFormSubmit(e,searchTerm)} />
        <Filters
          printFilter={this.state.printFilter}
          bookFilter={this.state.bookFilter}
          handlePrintTypeFilterChange={(value) => this.handlePrintTypeFilterChange(value)}
          handleBookTypeFilterChange={(value) => this.handleBookTypeFilterChange(value)} />
        {listOutput}
      </div>
    );
  }
}

export default App;
