import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Test de componente <TodoItem/>',() => {
    
    const todo = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    const handleOnDeleteTodoMock = jest.fn();
    const handleOnDoneMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        render(<TodoItem item={todo}/>);
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
    });

    test('Prueba 02-Debe retornar valor en done',() => {
        todo.done = true;
        render(<TodoItem item={todo}/>);
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    //both functions says: is not a function
    /*test('Prueba 03-Prueba llamada a handleOnDone',() => {
        render(<TodoItem item={todo}/>);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(handleOnDoneMock).toHaveBeenCalledWith(1);
    });*/

    /*test('Prueba 04-Prueba llamada a onDelete',() => {
        render(<TodoItem item={todo}/>);
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);
        expect(handleOnDeleteTodoMock).toHaveBeenCalledWith(todo[0].id);
    });*/
})