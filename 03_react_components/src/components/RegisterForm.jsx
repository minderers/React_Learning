import "./Register.css";

const RegisterForm = ({ onInputChange1, onInputChange2, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          onChange={(e) => onInputChange1(e.target.value)}
          placeholder="请输入姓名"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          onChange={(e) => onInputChange2(e.target.value)}
          placeholder="请输入邮箱"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="form-button">
          提交
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
