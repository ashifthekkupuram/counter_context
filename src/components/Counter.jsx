import {useContext} from 'react'

import { CounterContext } from '../contexts/counterContext'

const Counter = () => {

    const {count} = useContext(CounterContext)

  return (
    <div className='counter'>
      {count}
    </div>
  )
}

export default Counter
