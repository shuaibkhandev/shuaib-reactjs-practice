import { useEffect, useState } from "react";

const TodoDateTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDate(date);
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2 className="date-time">
        {date} - {time}
      </h2>
    </div>
  );
};

export default TodoDateTime;
