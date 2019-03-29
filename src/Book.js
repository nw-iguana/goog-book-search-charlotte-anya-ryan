import React from 'react';

function Book(props) {
  let {
    title,
    author,
    thumbnail,
    description,
    link
  } = props;

  return (
    <div>
      <div className="book-image">
        <img src={thumbnail} alt={`${title} cover`} />
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <h4>By {author}</h4>
        <p>{description}</p>
        <p><a href={link} target="_blank" rel="noopener noreferrer">More Info</a></p>
      </div>
    </div>
  )
}


export default Book;