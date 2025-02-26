import "./BookItem.css";

const BookItem = ({
  coverSlot,
  titleSlot,
  authorSlot,
  publisherSlot,
  onDetailClick,
  onEditClick,
  onDelete,
}) => {
  return (
    <div className="card">
      <div className="card-cover" onClick={onDetailClick}>
        {coverSlot}
      </div>
      <div className="card-body">
        <div className="all">
          <div className="title">{titleSlot}</div>
          <div className="author">{authorSlot}</div>
          <div className="publisher">{publisherSlot}</div>
        </div>
      </div>
      <div className="card-actions">
        <button onClick={onEditClick}>编辑信息</button>
        <button onClick={onDelete}>删除</button>
      </div>
    </div>
  );
};

export default BookItem;
