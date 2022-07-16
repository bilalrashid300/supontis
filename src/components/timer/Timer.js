import React, { useState, useEffect } from "react";
import './timer.css'
import { useTranslation } from 'react-i18next';

function Timer() {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const { t } = useTranslation();
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("July 28,2022").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    }, []);


  return (
    <div className='timer'>
          <div className="timer-clock ">
             <section>
                <p>{timerDays}</p>
                <small>{t('days')}</small>
              </section>
                <span>.</span>
               <section>
                <p>{timerHours}</p>
                <small>{t('hours')}</small>
                </section>{" "}
                <span>.</span>
                <section>
                 <p>{timerMinutes}</p>
                 <small>{t('minutes')}</small>
                </section>{" "}
                <span>.</span>
                <section>
                <p>{timerSeconds}</p>
               <small>{t('seconds')}</small>
             </section>
          </div>
        
    </div>
  )
}

export default Timer;