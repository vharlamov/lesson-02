import React from "react"
import "bootstrap/dist/css/bootstrap.css"

const Counter = props => {

  const formValue = () => {
    return props.value === 0 ? "Ноль" : props.value
  }

  const getBageClasses = () => {
    let classes = "badge m-2 bg-"
    classes += props.value === 0 ? "danger" : "primary"
    return classes
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBageClasses()}>{formValue()}</span>

      <button
        onClick={() => props.increment(props.id)}
        className="btn btn-secondary btn-sm m-1"
      >
        Increment
      </button>

      <button
        onClick={() => props.decrement(props.id)}
        className="btn btn-secondary btn-sm m-1"
        disabled={!props.value}
      >
        Decrement
      </button>
      <button 
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Counter
