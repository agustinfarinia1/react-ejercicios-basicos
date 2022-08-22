import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodo } from "../../hooks";

jest.mock('../../hooks/useTodo');

describe('Test de componente <TodoApp/>',() => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, nombre: 'Todo #1', done: false },
            { id: 2, nombre: 'Todo #2', done: true },
        ], 
        todosCount: 2, 
        todosCountPending: 1, 
        handleOnDeleteTodo: jest.fn(), 
        handleOnDone: jest.fn(), 
        handleOnNewTodo: jest.fn()
    });

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        render(<TodoApp/>);
        expect(screen.getAllByLabelText('span').length).toBe(2);
    });
})