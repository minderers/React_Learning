import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blog";

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  const containerStyle = {
    maxWidth: "800px",
    margin: "10px auto",
    padding: "20px",
    backgroundColor: "#7799cc", // Updated main color
    color: "#fff", // Updated text color
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "2em",
    color: "#fff", // Updated text color
    textAlign: "center",
    marginBottom: "20px",
  };

  const contentStyle = {
    fontSize: "1.2em",
    lineHeight: "1.6",
    color: "#fff", // Updated text color
    marginBottom: "20px",
  };

  const metaInfoStyle = {
    fontSize: "1em",
    color: "#e0e0e0", // Lighter text color for metadata
    marginBottom: "10px",
  };

  const tagsStyle = {
    fontSize: "1em",
    color: "#e0e0e0", // Lighter text color for metadata
    marginTop: "10px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#5a7db1", // Slightly darker shade of main color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginBottom: "20px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#4c6ba1", // Darker shade on hover
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Blog Details</h2>
      <h3 style={contentStyle}>{blog.title}</h3>
      <p style={metaInfoStyle}>
        <strong>Author:</strong> {blog.author}
      </p>
      <p style={metaInfoStyle}>
        <strong>Views:</strong> {blog.views}
      </p>
      <p style={metaInfoStyle}>
        <strong>Favorites:</strong> {blog.favorites}
      </p>
      <p style={metaInfoStyle}>
        <strong>Likes:</strong> {blog.likes}
      </p>
      <p style={tagsStyle}>
        <strong>Tags:</strong> {blog.tags.join(", ")}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <p style={contentStyle}>{blog.content}</p>
      <Link
        to="/"
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        返回
      </Link>
    </div>
  );
};

export default BlogDetails;
