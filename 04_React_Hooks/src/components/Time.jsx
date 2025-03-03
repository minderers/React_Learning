import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 定时器
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]); // 依赖项为time，当time变化时，重新执行useEffect
  // 格式化时间，确保每个数字都是两位数
  const realTime = `${String(time.getHours()).padStart(2, "0")}:${String(
    time.getMinutes()
  ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;
  return (
    <div>
      <p>当前时间为{realTime}</p>
    </div>
  );
};

export default Time;
