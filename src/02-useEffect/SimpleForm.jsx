import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState,setFormState] = useState({
        username: '',
        email: ''
    });

    const {username,email} = formState;

    const handleChangeForm = (event) => {
        const{name,value} = event.target;
        setFormState({
            ...formState,
            [ name ] : value
         });
    }

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <input
                type='text'
                className='form-control'
                placeholder='Username...'
                name='username'
                value={username}
                onChange={handleChangeForm}/>
            <input
                type='email'
                className='form-control mt-2'
                placeholder='Ej: user@gmail.com'
                name='email'
                value={email}
                onChange={handleChangeForm}/>
                {(username === 'asd') && <Message/>}
        </>
    );
}