import { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import FlipCard from 'react-countdown-flip-card'

import './App.css'

function App() {
  const [second, setSecond] = useState<number>(0)
  const [minute, setMinute] = useState<number>(0)
  const [hour, setHour] = useState<number>(0)
  const [day, setDay] = useState<number>(0)
  const interval = useRef<any>()

  useEffect(() => {
    interval.current = setInterval(() => extractDuration(), 1000)
    return () => {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [])

  const extractDuration = () => {
    let duration = dayjs().endOf('M').diff(dayjs(), 's')
    setDay(Math.floor(duration / 86400))
    duration = duration % 86400
    setHour(Math.floor(duration / 3600))
    duration = duration % 3600
    setMinute(Math.floor(duration / 60))
    duration = duration % 60
    setSecond(duration)
  }

  return (
    <div className='container'>
      <div className='group'>
        <FlipCard digit={String(hour).padStart(2, '0')[0]} width={60} height={80} />
        <FlipCard digit={String(hour).padStart(2, '0')[1]} width={60} height={80} />
      </div>
      <div className='divider'>:</div>
      <div className='group'>
        <FlipCard digit={String(minute).padStart(2, '0')[0]} width={60} height={80} />
        <FlipCard digit={String(minute).padStart(2, '0')[1]} width={60} height={80} />
      </div>
      <div className='divider'>:</div>
      <div className='group'>
        <FlipCard digit={String(second).padStart(2, '0')[0]} width={60} height={80} />
        <FlipCard digit={String(second).padStart(2, '0')[1]} width={60} height={80} />
      </div>
    </div>
  );
}

export default App;
