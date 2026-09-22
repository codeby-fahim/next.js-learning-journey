import React from 'react';


export const generateStaticParams= async()=>{
  const res = await fetch('http://localhost:5000/books');
  const books = await res.json();
  return books.slice(0,3).map(book=>({bookId: book.id}))
}


const BookDetailPage = async({params}) => {
  const {bookId} = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();
  const {title, description} = book;
  return (
    <div>
      <h2>Books Detail:</h2>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3> Price: {book.price}</h3>
    </div>
  );
};

export default BookDetailPage;