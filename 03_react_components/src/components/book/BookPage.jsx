// BookPage.js
import { useState } from "react";
import { Layout } from "antd";
import Header from "./Header";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./book.css";
import BookDetailPanel from "./BookDetailPanel";

const BookPage = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "C++ Primer Plus",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/C%2B%2B.png",
      author: "Stephen Prata",
      publisher: "Addison-Wesley Professional",
    },
    {
      id: 2,
      name: "三体",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E4%BD%93.png",
      author: "刘慈欣",
      publisher: "重庆出版社",
    },
    {
      id: 3,
      name: "明朝那些事儿",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E6%98%8E%E6%9C%9D%E9%82%A3%E4%BA%9B%E4%BA%8B%E5%84%BF.png",
      author: "当年明月",
      publisher: "中国海关出版社",
    },
    {
      id: 4,
      name: "三国演义",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89.png",
      author: "罗贯中",
      publisher: "人民文学出版社",
    },
    {
      id: 5,
      name: "红楼梦",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E7%BA%A2%E6%A5%BC%E6%A2%A6.png",
      author: "曹雪芹",
      publisher: "人民文学出版社",
    },
    {
      id: 6,
      name: "西游记",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E8%A5%BF%E6%B8%B8%E8%AE%B0.png",
      author: "吴承恩",
    },
    {
      id: 7,
      name: "水浒传",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E6%B0%B4%E6%B5%92%E4%BC%A0.png",
      author: "施耐庵",
      publisher: "人民文学出版社",
    },
    {
      id: 8,
      name: "C++ Primer Plus",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/C%2B%2B.png",
      author: "Stephen Prata",
      publisher: "Addison-Wesley Professional",
    },
    {
      id: 9,
      name: "三体",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E4%BD%93.png",
      author: "刘慈欣",
      publisher: "重庆出版社",
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null); // 用于 BookDetailPanel
  const [editingBook, setEditingBook] = useState(null); // 用于 BookDetail
  // 定义 addBook 函数
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  // 处理查看详情
  const handleDetailClick = (book) => {
    setSelectedBook(book);
  };

  // 处理编辑详情
  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  // 处理删除图书
  const handleDelete = (book) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
  };

  // 关闭详情面板
  const handleDetailClose = () => {
    setSelectedBook(null);
  };

  // 关闭编辑面板
  const handleEditClose = () => {
    setEditingBook(null);
  };

  // 更新图书信息
  const handleUpdateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null); // 关闭编辑面板
  };

  return (
    <Layout>
      <Header addBook={addBook} />
      <BookList
        books={books}
        onDetailClick={handleDetailClick}
        onEditClick={handleEditClick}
        onDelete={handleDelete}
      />
      {selectedBook && (
        <BookDetailPanel book={selectedBook} onClose={handleDetailClose} />
      )}
      {editingBook && (
        <BookDetail
          book={editingBook}
          onClose={handleEditClose}
          onSubmit={handleUpdateBook}
        />
      )}
    </Layout>
  );
};

export default BookPage;
