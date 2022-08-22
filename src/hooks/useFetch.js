import { useEffect, useState } from "react"

export const useFetch = (url = 'https://www.breakingbadapi.com/api/quotes/1') => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true
        });
        try {
            const respAPi =  await fetch(url);
            const data = await respAPi.json();
            setState({
                ...state,
                data,
                isLoading: false
            });   
        } catch (error) {
            setState({
                ...state,
                hasError: true
            });  
        }
    }
    
    useEffect(() => {
        getFetch();
    },[url]);

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}