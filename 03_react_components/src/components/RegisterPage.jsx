import RegisterForm from "./RegisterForm";
import { useState } from "react";
import "./Register.css";
const RegisterPage = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange1 = (value) => {
    setInputValue1(value);
  };

  const handleInputChange2 = (value) => {
    setInputValue2(value);
  };

  const handleFormSubmit = () => {
    setSubmittedData({ name: inputValue1, email: inputValue2 });
  };

  return (
    <div className="register-page">
      <h1>用户登录</h1>
      <RegisterForm
        onInputChange1={handleInputChange1}
        onInputChange2={handleInputChange2}
        onSubmit={handleFormSubmit}
      />
      {submittedData && (
        <div className="submitted-data">
          <div>用户姓名是：{submittedData.name}</div>
          <div>用户邮箱是：{submittedData.email}</div>
        </div>
      )}
    </div>
  );
};
export default RegisterPage;
