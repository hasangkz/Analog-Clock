import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const secondDegree = date.getSeconds() / 60;
      const minuteDegree = (secondDegree + date.getMinutes()) / 60;
      const hourDegree = (minuteDegree + date.getHours()) / 12;
      setSecond(secondDegree * 360);
      setMinute(minuteDegree * 360);
      setHour(hourDegree * 360);
    }, 1000);
  }, []);

  return (
    <div className='clock'>
      <div
        className='line hour'
        style={{ transform: `rotate(${hour}deg)` }}
      ></div>
      <div
        className='line minute'
        style={{ transform: `rotate(${minute}deg)` }}
      ></div>
      <div
        className='line second'
        style={{ transform: `rotate(${second}deg)` }}
      ></div>
      {numbers.map((value) => (
        <div
          key={value}
          className='number'
          style={{
            transform: `rotate(${value * 30}deg)`,
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
export default App;
