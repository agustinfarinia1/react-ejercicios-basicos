import { useCounter,useFetch } from "../hooks";
import { LoadingQuote,Quote } from "./";

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter();
    
    const {
        data,
        isLoading,
        hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        const {author,quote} = !!data && data[0];

    return (
        <>
            <h1 aria-label="titulo-principal">Breaking Bad Quotes</h1>
            <hr/>
            {isLoading
                ? <LoadingQuote/>
                : <Quote quote={quote} author={author} increment={increment}/>
            }
        </>
    );
}