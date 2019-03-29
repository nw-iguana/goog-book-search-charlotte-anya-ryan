import React from 'react'
import Book from './Book';

export default function BookList(props) {

  let list = props.results.filter((book) => {
    if (props.printFilter && (props.printFilter === book.volumeInfo.printType)) {
      return true;
    } else if (!props.printFilter || props.printFilter === "all") {
      return true;
    }
    return false;
  })

  let outputList = list.map((book) => {
    return <Book 
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
            description={book.searchInfo ? book.searchInfo.textSnippet : 'No Description'}
            link={book.volumeInfo.infoLink} />
  });

  // console.log('list', list);
  // console.log('outputList', outputList)

  return (
    <div>
      <h2>Book List</h2>
      {outputList}
    </div>
  )
}