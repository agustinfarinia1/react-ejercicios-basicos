import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {
        username,
        email,
        password,
        formValue,
        handleChangeForm,
        clearForm} = useForm();

    return (
        <>
            {formValue && 
                <>
                    <h1>Form with custom Hook</h1>
                    <hr/>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Username'
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
                    <input
                        type='password'
                        className='form-control mt-2'
                        placeholder="Password"
                        name='password'
                        value={password}
                        onChange={handleChangeForm}/>
                    <button className="btn btn-primary mt-2" onClick={clearForm}>Enviar</button>
                    {(username === 'asd') && <Message/>}
                </>}
        </>
    );
}