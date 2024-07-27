import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const target = new Date(targetDate);

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = target - now;

      if (timeDifference <= 0) {
        setCountdown('Countdown Ended');
        return;
      }

      // Calculating days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(`${days}D : ${hours}H : ${minutes}M : ${seconds}S`);
    };

    // Updating countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return countdown;
};

export default useCountdown;
