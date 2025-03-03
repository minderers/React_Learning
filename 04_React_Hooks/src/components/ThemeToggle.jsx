import { useState } from "react";

const ThemeToggle = () => {
  // 使用 useState 这个 Hook 来存储当前的主题状态
  // true 表示暗黑模式
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi
        ex, consequuntur, amet magnam dolorem pariatur corrupti alias saepe cum
        quia repellendus molestias odit! Sit veniam nihil illo inventore magnam!
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
