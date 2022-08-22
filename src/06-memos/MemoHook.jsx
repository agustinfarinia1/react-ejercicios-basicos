import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber) => {
    for(let i = 0 ; i < iterationNumber ; i++){
        console.log("ahi vamos...");
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter,increment} = useCounter();
    const [show,setShow] = useState(true);
    const memorizedValue = useMemo(() => {
        //Memoriza el resultado y solo lo ejecuta otra vez
        //cuando cambia el counter
        heavyStuff(counter);
    },[counter]);

    return (
        <>
            <h1>
                Counter: 
                <small>
                    {counter}
                </small>
            </h1>
            <hr/>
            <h4>
                {memorizedValue}
            </h4>
            <button
                className='btn btn-primary'
                onClick={() => increment()}>+1
            </button>
            <button
                className='btn btn-primary'
                onClick={() => setShow(!show)}>
                    Show/hide {JSON.stringify(show)}
            </button>
        </>
    );
}