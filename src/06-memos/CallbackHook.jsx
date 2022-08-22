import { useCounter } from "../hooks/useCounter";
import { ShowIncrement } from "./ShowIncrement";
import { useCallback} from "react";

export const CallbackHook = () => {

    const {counter,increment} = useCounter();

    const incrementCallback = useCallback(() => {
        increment();
    },[]);

    return (
        <>
            <h1>
                Counter :{counter}
            </h1>
            <hr/>
            <ShowIncrement increment={incrementCallback}/>
        </>
    );
}