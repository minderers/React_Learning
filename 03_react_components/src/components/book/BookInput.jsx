import { useState } from "react";
import "./BookInput.css";
const BookInput = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    cover: "",
    author: "",
    publisher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h3>添加新图书</h3>
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
        <br />
        <label>
          封面:
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            required
          />
        </label>
        <br />
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
        <br />
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
        <br />
        <div className="btn">
          <button type="submit">保存</button>
          <button
            type="button"
            onClick={onClose}
            style={{ marginLeft: "10px" }}
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookInput;
