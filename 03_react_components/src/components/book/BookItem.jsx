// BookItem.jsx
import "./BookItem.css";

const BookItem = ({
  coverSlot,
  titleSlot,
  authorSlot,
  publisherSlot,
  onDetailClick,
}) => {
  return (
    <div className="card" onClick={onDetailClick}>
      <div className="card-cover">{coverSlot}</div>
      <div className="card-body">
        <div className="all">
          <div className="title">{titleSlot}</div>
          <div className="author">{authorSlot}</div>
          <div className="publisher">{publisherSlot}</div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
