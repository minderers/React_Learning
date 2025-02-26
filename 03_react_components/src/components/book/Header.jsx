import { useState } from "react";
import BookInput from "./BookInput";
import "./book.css";
const Header = ({ addBook }) => {
  const [isBookInputVisible, setIsBookInputVisible] = useState(false);

  const handleOpen = () => {
    setIsBookInputVisible(true);
  };

  const handleClose = () => {
    setIsBookInputVisible(false);
  };

  const handleSubmit = (newBook) => {
    addBook(newBook);
    handleClose();
  };

  return (
    <div>
      <div className="flex banner">
        <div className="title">图书管理系统</div>
        <div className="setting">
          <button className="btn" onClick={handleOpen}>
            添加图书
          </button>
        </div>
      </div>
      {isBookInputVisible && (
        <div className="overlay">
          <div className="book-input-container">
            <BookInput onClose={handleClose} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
