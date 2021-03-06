import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Counter = () => {
  const [count, setCount] = useState(1);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    return tags.length ? (
      tags.map((tag) => <li key={tag}>{tag}</li>)
    ) : (
      <h2>Тегов не найдено</h2>
    );
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = (e) => {
    if (count) setCount(count - 1);
  };

  return (
    <>
      {renderTags()}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={(e) => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-1"
      >
        Increment
      </button>
      <button
        onClick={(e) => handleDecrement(e)}
        className="btn btn-secondary btn-sm m-1"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
