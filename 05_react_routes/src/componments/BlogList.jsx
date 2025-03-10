import React, { useState } from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";

const BlogList = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const cardStyle = {
    backgroundColor: "#7799cc",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "100%",
    marginBottom: "20px",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
  };

  const imageStyle = {
    width: "160px",
    height: "100%",
    objectFit: "cover",
    marginRight: "20px",
  };

  const contentStyle = {
    flex: 1,
    padding: "15px",
  };

  const linkStyle = {
    display: "block",
    color: "#fff",
    textDecoration: "none",
  };

  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const pageButtonStyle = {
    padding: "10px 20px",
    margin: "0 5px",
    backgroundColor: "#5a7db1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Blog List</h2>
      <div style={cardContainerStyle}>
        {currentItems.map((blog, index) => (
          <div key={index} style={cardStyle}>
            <img src={blog.image} alt={blog.title} style={imageStyle} />
            <div style={contentStyle}>
              <Link to={`/blog/${indexOfFirstItem + index}`} style={linkStyle}>
                <h3>{blog.title}</h3>
                <p>
                  <strong>Author:</strong> {blog.author}
                </p>
                <p>
                  <strong>Tags:</strong> {blog.tags.join(", ")}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div style={paginationStyle}>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            style={{
              ...pageButtonStyle,
              ...(currentPage === number + 1
                ? { backgroundColor: "#4c6ba1" }
                : {}),
            }}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
