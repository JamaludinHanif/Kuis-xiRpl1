/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// libraries react
import React, { useState, useEffect } from 'react';

// libraries
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CountDownOtp = ({Akurasi, Point, Level}) => {
  const [seconds, setSeconds] = useState(300);

  // react roter dom
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Membersihkan timer ketika komponen di-unmount atau waktu habis
    if (seconds === 0) {
      clearInterval(timer);
      Swal.fire('Waktu Kamu Habis')
      navigate("/hasil", {
        state: {
          akurasi: Akurasi,
          skor: Point,
          level: Level
        },
      });
    }

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='bg-white flex justify-center items-center py-2 px-7 border-2 border-black'>
      <p className='text-lg'>{formatTime(seconds)}</p>
    </div>
  );
};

export default CountDownOtp;