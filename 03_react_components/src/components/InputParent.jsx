import Input from "./input";
import { useState } from "react";
const InputParent = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  return (
    <div>
      <h2>输入的值是：{inputValue}</h2>
      <Input onInputChange={handleInputChange} />
    </div>
  );
};
export default InputParent;
