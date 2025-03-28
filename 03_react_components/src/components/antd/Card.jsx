import "./antd.css";
const Card = ({ coverSlot, avatarSlot, titleSlot, descSlot }) => {
  return (
    <div>
      <div className="card">
        <div className="card-cover">{coverSlot}</div>
        <div className="card-body">
          <div className="left">{avatarSlot}</div>
          <div className="right">
            <div className="title">{titleSlot}</div>
            <div className="desc">{descSlot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
