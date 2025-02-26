// BookDetail.jsx
import { useState, useEffect } from "react";
import "./BookDetail.css";

const BookDetail = ({ book, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    cover: "",
    author: "",
    publisher: "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        name: book.name,
        cover: book.cover,
        author: book.author,
        publisher: book.publisher,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...book, ...formData });
  };

  return (
    <div className="book-detail-overlay">
      <div className="book-detail">
        <h3>编辑图书信息</h3>
        <form onSubmit={handleSubmit}>
          <label>
            图书名称:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            封面链接:
            <input
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            作者:
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            出版社:
            <input
              type="text"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
              required
            />
          </label>
          <div className="btn">
            <button type="submit">保存</button>
            <button type="button" onClick={onClose}>
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDetail;
