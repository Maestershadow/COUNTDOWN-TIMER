import { useEffect, useState } from 'react';
import './App.css'
import TimerCard from './TimerCard';


function App() {
  const targetDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);

  const calculateTimeRemaining = () => {
    const now = new Date();

    const difference = targetDate.getTime() - now.getTime();
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((difference % (60 * 1000)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  const [isAnimated, setIsAnimated] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: true
  })

  useEffect(() => {
    const timerId = setInterval(() => {
      const value = calculateTimeRemaining(); 
      setTimeRemaining(value);

    }, 1000);
    return () => clearInterval(timerId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        <h1>WE'RE LAUNCHING SOON</h1>

        <div className='timer-div'>
          <TimerCard isAnimated={isAnimated.days} tail={"DAYS"} time={`${timeRemaining.days}`.length === 1 ? `0${timeRemaining.days}` : `${timeRemaining.days}`} />
          <TimerCard isAnimated={isAnimated.hours} tail={"HOURS"} time={`${timeRemaining.hours}`.length === 1 ? `0${timeRemaining.hours}` : `${timeRemaining.hours}`} />
          <TimerCard isAnimated={isAnimated.minutes} tail={"MINUTES"} time={`${timeRemaining.minutes}`.length === 1 ? `0${timeRemaining.minutes}` : `${timeRemaining.minutes}`} />
          <TimerCard isAnimated={isAnimated.seconds} tail={"SECONDS"} time={`${timeRemaining.seconds}`.length === 1 ? `0${timeRemaining.seconds}` : `${timeRemaining.seconds}`} />
        </div>
      </main>
      <div className='hill-img'>
       
        <div className='socio-icons'>
          <a href="#"> <img src="/images/icon-facebook.svg" alt="facebook" /></a>
          <a href="#"> <img src="/images/icon-pinterest.svg" alt="pinterest" /></a>
          <a href="#"> <img src="/images/icon-instagram.svg" alt="instagram" /></a>
        </div>
      </div>

    </>
  )
}

export default App
