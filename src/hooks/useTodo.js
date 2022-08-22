import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducers";

const initialApp = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer,initialApp,init);
    const [todosCount,setTodosCount] = useState();
    const [todosCountPending,setTodosCountPending] = useState();
    const [onNewTodo,setOnNewTodo] = useState();

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
        setTodosCount(countTodos(false));
        setTodosCountPending(countTodos(true));
    },[todos]);

    const countTodos = (valor) => {
        return todos.filter((t) => t.done != valor).length;
    }

    const handleOnNewTodo = (todo) => {
        setOnNewTodo(todo);
        const action = 
        {
            type:'ADD',
            payload: todo
        };
        dispatch(action);
    };

    const handleOnDeleteTodo = (id) => {
        dispatch(
        {
            type:'REMOVE',
            payload: id
        });
    }

    const handleOnDone = (id) => {
        dispatch( 
        {
            type:'DONE',
            payload: id
        });
    };

    return{
        todos,
        todosCount,
        todosCountPending,
        handleOnNewTodo,
        handleOnDeleteTodo,
        handleOnDone
    };
}