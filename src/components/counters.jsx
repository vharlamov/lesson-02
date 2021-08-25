import React, { useState } from 'react'
import Counter from './counter'

const Counters = () => {

  const initialState = [
    {value: 0, id: 1, name: 'Ложка'}, 
    {value: 0, id: 2, name: 'Вилка'}, 
    {value: 0, id: 3, name: 'Тарелка'},
    {value: 0, id: 4, name: 'Стартовый набор минималиста'}, 
    {value: 0, id: 5, name: 'Премиум набор'}, 
    {value: 0, id: 6, name: 'Ненужные вещи'},
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = id => {
    setCounters(counters.filter(c => c.id !== id))
  }
  
  const handlereset = () => {
    setCounters([...initialState])
  }

  const handleIncrement = id => {
    const newCounters = [...counters]
    newCounters.find(c => c.id === id).value += 1

    setCounters(newCounters)
  }
  
  const handleDecrement = id => {
    const newCounters = [...counters]
    newCounters.find(c => c.id === id).value -= 1

    setCounters(newCounters)
  }
  
  return ( 
    <div>
      <button 
        className="btn-primary btn-sm m-2"
        onClick={handlereset}
      >
        Сброс
      </button>
      {counters.map(cntr => <Counter
        {...cntr}
        key={cntr.id}
        delete={handleDelete}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
      )}
    </div>
  )
}
 
export default Counters;