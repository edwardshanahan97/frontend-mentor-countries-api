type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
};

const books: Book[] = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    available: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    available: false,
  },
];

type BookListsProps = {
  books: Book[];
};

const BookList = ({ books }: BookListsProps) => {
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.available ? "Available" : "Not available"}</div>
        </div>
      ))}
    </>
  );
};

const PracticeTypeScript = () => {
  return <BookList books={books} />;
};

export default PracticeTypeScript;
