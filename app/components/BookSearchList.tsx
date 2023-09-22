"use client";

export default function BookSearchList({ bookData }: { bookData: any }) {
  if (bookData) {
    return (
      <>
        <p>Total Books: {bookData.totalItems}</p>
        <ul>
          {bookData.items.map((book: any) => {
            return (
              <li key={book.id}>
                <span className="text-white">{book.volumeInfo.title}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return null;
}
