'use client'
import Link from 'next/link';
import React, { use } from 'react';
import { UserContext } from '../contexts/UserContext';

const BookCard = ({book}) => {
  const {id, title, description} = book;
  const user = use(UserContext);
  console.log('context bookcard', user);
  return (
    <div className="card bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title text-yellow-500">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
      <Link href={`/books/${id}`}>
      <button className="btn">Show Detail</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default BookCard;