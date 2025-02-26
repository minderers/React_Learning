import "./BookDetailPanel.css";

const BookDetailPanel = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="book-detail-overlay">
      <div className="book-detail-panel">
        <div className="book-detail-content">
          <img src={book.cover} alt={`${book.name} cover`} />
          <div className="book-info">
            <h3>{book.name}</h3>
            <p>作者: {book.author}</p>
            <p>出版社: {book.publisher}</p>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          关闭
        </button>
      </div>
    </div>
  );
};

export default BookDetailPanel;
