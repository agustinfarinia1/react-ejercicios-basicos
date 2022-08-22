import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({handleOnNewTodo,todoSize}) => {

  const {
    name,
    edad,
    done,
    handleChangeForm,
    clearForm} = useForm({
    name:'',
    edad:'',
    done:false
    });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(name.length < 2 || parseInt(edad, 10) <= 0) return;
    const newTodo = 
      {
        id: todoSize + 1,
        nombre: name,
        edad: parseInt(edad, 10),
        done: false
      };
      handleOnNewTodo(newTodo);
      clearForm();
  };

  return (
  <form
    onSubmit={onFormSubmit}>
      <input
          type='text'
          className='form-control'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleChangeForm}/>
      <input
          type='number'
          className='form-control mt-1'
          placeholder='Edad'
          name='edad'
          value={edad}
          onChange={handleChangeForm}/>
      <button
        type='submit'
        className="btn btn-outline-primary mt-2">
        Agregar
      </button>
  </form>
)
}
