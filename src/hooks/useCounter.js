import { useState } from "react";

export const useCounter = (initialValue = 1) => {

    const [counter,setCounter] = useState(initialValue);

    const increment = (valorIncrement = 1) => {
        setCounter((c) => c + valorIncrement );
    }

    const decrement = (valorDecrement = 1) => {
        if(counter <= 0) return;
        setCounter((c) => c - valorDecrement  );
    }

    const reset = () => {
        setCounter(initialValue );
    }

    return({
        counter,
        increment,
        decrement,
        reset});
}