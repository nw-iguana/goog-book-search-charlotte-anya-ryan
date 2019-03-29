import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <h2>Filter Results:</h2>
        <label htmlFor="print-type">Print Type: </label>  
        <select 
          id="print-type"
          onChange={(e) => this.props.handlePrintTypeFilterChange(e.target.value)}>
            <option value="all">All</option>
            <option value="BOOK">Books</option>
            <option value="MAGAZINE">Magazines</option>
        </select>

        <label htmlFor="book-type">Book Type: </label>
        <select 
          id="book-type"
          onChange={(e) => this.props.handleBookTypeFilterChange(e.target.value)}>
            <option value="null">No Filter</option>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="free-ebooks">Free Ebooks</option>
            <option value="paid-ebooks">Paid Ebooks</option>
            <option value="ebooks">Ebooks</option>
        </select>
      </div>
    )
  }
}