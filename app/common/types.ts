export type Book = {
  id: string;
  selfLink: string;
  volumeInfo: {
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    pageCount: number;
    publisher: string;
    subtitle: string;
    title: string;
  };
};

export type BookList = {
  items: Book[];
  kind: string;
  totalItems: number;
};
