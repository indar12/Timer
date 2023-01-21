import React from 'react'
import Header from './Header'
import Tasks from './Tasks';

const Timer = () => {
    const title = "Timer App";
  return (
    <div className='container'>
        <Header title={title}/>
        <Tasks/>
    </div>
  )
}

export default Timer;