import React from 'react'
import CountDownTimer from './CountdownTimer'

function Timer({start}) {

  const now = new Date().getTime()/1000
  const hoursRemaining = (start-now)/(60*60)
  const minutesRemaining = ((start-now)/(60))-(Math.floor(hoursRemaining)*60)
  const secondsRemaining = ((start-now))-(Math.floor(hoursRemaining)*60*60+Math.floor(minutesRemaining)*60)


  console.log("start",secondsRemaining)

    const hoursMinSecs = {hours:Math.floor(hoursRemaining), minutes: Math.floor(minutesRemaining), seconds: Math.floor(secondsRemaining)}
  return (
    <div>
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
    </div>
    
  )
}

export default Timer