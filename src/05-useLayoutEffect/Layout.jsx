import { LoadingQuote,Quote } from "../03-examples";
import { useCounter,useFetch } from "../hooks";

export const Layout = () => {

    const {counter,increment} = useCounter();
    
    const {
        data,
        isLoading,
        hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        const {author,quote} = !!data && data[0];

        console.log(hasError);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {isLoading
                ? <LoadingQuote/>
                : <Quote quote={quote} author={author} increment={increment}/>
            }
        </>
    );
}