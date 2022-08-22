import { useState } from "react";

export const useForm = (initialValue = {
    username: '',
    email: ''
    }) => {

    const [formState,setFormState] = useState(initialValue);

    const handleChangeForm = ({target}) => {
        const{name,value} = target;
        setFormState({
            ...formState,
            [ name ] : value
         });
    }

    const clearForm = () => {
        setFormState(initialValue);
    }

    return{
        ...formState,
        formValue: formState,
        handleChangeForm,
        clearForm
    };
}
