import React from 'react'

export default class Search extends React.Component {

    state = {
      searchTerm: ""
    }

    handleInputChange(e) {
      this.setState({searchTerm: e.target.value});
    }

    render() {
      return (
        <div>
          <form onSubmit={(e) => this.props.handleFormSubmit(e, this.state.searchTerm)}>
            <label htmlFor="search">Search: </label>
            <input onChange={(e) => this.handleInputChange(e)} type="text" id="search" placeholder="Search for a book (i.e. Harry Potter)" required/>
            <button type="submit">Search</button> 
          </form>
        </div>
      )
  }
}
