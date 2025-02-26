// BookList.jsx
import BookItem from "./BookItem";
import "./book.css";

const BookList = ({ books, onDetailClick }) => {
  return (
    <div className="bookList">
      {books.map((book, index) => (
        <BookItem
          key={index}
          coverSlot={<img src={book.cover} alt={`${book.name} cover`} />}
          titleSlot={book.name}
          authorSlot={`作者: ${book.author}`}
          publisherSlot={`出版社: ${book.publisher}`}
          onDetailClick={() => onDetailClick(book)}
        />
      ))}
    </div>
  );
};

export default BookList;
