import { useLayoutEffect, useRef } from "react"

export const Quote = ({quote,author,increment}) => {
    
    const pRef = useRef();

    return(
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display:'flex',
                        flexDirection:'column'}}>
                <p 
                    ref={pRef}
                    className="mb-3">
                    {quote}
                </p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <button 
            className="btn btn-primary mt-2" 
            onClick={() => increment()}>
                Next Quote
            </button>
        </>
    );
}