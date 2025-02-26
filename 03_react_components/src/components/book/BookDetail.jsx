// BookDetail.js
import "./BookDetail.css";
const BookDetail = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="book-detail-overlay">
      <div className="book-detail">
        <div className="book-detail-header">
          <h3>{book.name}</h3>
          <button className="close-btn" onClick={onClose}>
            关闭
          </button>
        </div>
        <img
          src={book.cover}
          alt={`${book.name} cover`}
          className="book-cover"
        />
        <div className="book-info">
          <p>作者: {book.author}</p>
          <p>出版社: {book.publisher}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
