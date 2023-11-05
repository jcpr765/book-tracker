"use client";

import { Book, BookList } from "../common/types";
import Image from "next/image";

export default function BookSearchList({ bookData }: { bookData: BookList }) {
  if (bookData) {
    return (
      <>
        <p>Total Books: {bookData.totalItems}</p>
        <ul>
          {bookData.items.map((book: Book) => {
            return (
              <li key={book.id}>
                <div className="border-2 border-solid border-white rounded">
                  {book.volumeInfo.imageLinks?.thumbnail ? (
                    <Image
                      className="mw-100%"
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={`Thumbnail image for ${book.volumeInfo.title}`}
                      height={50}
                      width={50}
                    />
                  ) : null}
                  <span className="text-white block text-center text-sm max-w-100 text-ellipsis">
                    {book.volumeInfo.title}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return null;
}
