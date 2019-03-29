import React from 'react'
import Book from './Book';

export default function BookList(props) {
  console.log(props);
  const list = props.results.map((book) => {
    console.log(book);
    return <Book 
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            thumbnail={book.volumeInfo.imageLinks.thumbnail}
            description={book.searchInfo.textSnippet}
            link={book.volumeInfo.infoLink} />
  });

  return (
    <div>
      <h2>BookList</h2>
      {list}
    </div>
  )
}