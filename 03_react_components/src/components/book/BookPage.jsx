// BookPage.js
import { useState } from "react";
import { Layout } from "antd";
import Header from "./Header";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./book.css";

const layoutStyle = {
  borderRadius: 8,
};

const BookPage = () => {
  const [books, setBooks] = useState([
    {
      name: "C++ Primer Plus",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/C%2B%2B.png",
      author: "Stephen Prata",
      publisher: "Addison-Wesley Professional",
    },
    {
      name: "三体",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E4%BD%93.png",
      author: "刘慈欣",
      publisher: "重庆出版社",
    },
    {
      name: "明朝那些事儿",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E6%98%8E%E6%9C%9D%E9%82%A3%E4%BA%9B%E4%BA%8B%E5%84%BF.png",
      author: "当年明月",
      publisher: "中国海关出版社",
    },
    {
      name: "三国演义",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89.png",
      author: "罗贯中",
      publisher: "人民文学出版社",
    },
    {
      name: "红楼梦",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E7%BA%A2%E6%A5%BC%E6%A2%A6.png",
      author: "曹雪芹",
      publisher: "人民文学出版社",
    },
    {
      name: "西游记",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E8%A5%BF%E6%B8%B8%E8%AE%B0.png",
      author: "吴承恩",
    },
    {
      name: "水浒传",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E6%B0%B4%E6%B5%92%E4%BC%A0.png",
      author: "施耐庵",
      publisher: "人民文学出版社",
    },
    {
      name: "C++ Primer Plus",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/C%2B%2B.png",
      author: "Stephen Prata",
      publisher: "Addison-Wesley Professional",
    },
    {
      name: "三体",
      cover:
        "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E4%BD%93.png",
      author: "刘慈欣",
      publisher: "重庆出版社",
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDetailClick = (book) => {
    setSelectedBook(book);
  };

  const handleDetailClose = () => {
    setSelectedBook(null);
  };

  return (
    <Layout style={layoutStyle}>
      <Header addBook={addBook} />
      <BookList books={books} onDetailClick={handleDetailClick} />
      <BookDetail book={selectedBook} onClose={handleDetailClose} />
    </Layout>
  );
};

export default BookPage;
