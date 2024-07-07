import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    return (
      <div className="flex items-center bg-n-8 rounded-xl h-16">
        <button
          onClick={handleDecrement}
          className="bg-n-8 px-3 py-1 rounded-lg "
        >
          -
        </button>
        <input
          type="text"
          value={count}
          readOnly
          className="bg-n-8 px-5 py-1 text-center border-l-0 border-r-0"
        />
        <button
          onClick={handleIncrement}
          className="bg-n-8 px-3 py-1 rounded-r-lg border-l-0"
        >
          +
        </button>
      </div>
    );
  };
  
  export default Counter;
