import React from 'react'

import Counter from './Counter'
import Button from './Button'

const CounterCard = () => {
  return (
    <div className='card'>
      <div className='upper'>
        <Counter/>
      </div>
      <div className='lower'>
        <Button type={'minus'}/>
        <Button type={'plus'}/>
      </div>
    </div>
  )
}

export default CounterCard
