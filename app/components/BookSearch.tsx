"use client";

import { useState } from "react";
import { BookList } from "../common/types";
import BookSearchList from "./BookSearchList";

export async function fetchBooks(
  text: string,
  setBookData: (body: BookList) => void
) {
  try {
    const resp = await fetch(`api/fetchBooks?query=${text}`);

    const body = await resp.json();

    setBookData(body);

    return body;
  } catch (e) {
    console.log(e);
  }
}

export default function BookSearch() {
  const [text, setText] = useState("");

  const [bookData, setBookData] = useState<BookList | null>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchBooks(text, setBookData);
        }}
      >
        <input
          className="text-sm text-black mr-1"
          placeholder="Search for book titles"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          className="text-sm text-white border-solid border-2 border-white rounded px-1"
          type="submit"
          name="Search"
        />
      </form>
      {bookData ? <BookSearchList bookData={bookData} /> : null}
    </>
  );
}
