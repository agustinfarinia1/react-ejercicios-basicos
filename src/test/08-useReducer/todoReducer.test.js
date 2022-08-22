import { todoReducer } from "../../reducers";

describe('Test de todoReducer',() => {
    
    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('Prueba 01-Debe retornar los valores por defecto',() => {
        const newState = todoReducer(initialState,{});
        expect(newState).toBe(initialState);
    });

    test('Prueba 02-Debe retornar los valores por defecto',() => {

        const action = {
            type: 'ADD',
            payload: {
                id: 2,
                description: 'prueba add',
                done: false
            }
        };

        const newState = todoReducer(initialState,action);
        expect(newState).toContain(action.payload);
    });

    test('Prueba 03-Debe eliminar la tarea ordenada',() => {

        const action = {
            type: 'REMOVE',
            payload: 1
        };

        const newState = todoReducer(initialState,action);
        expect(newState.length).toBe(0);
    });

    test('Prueba 04-Debe cambiar a done la tarea ordenada',() => {

        const action = {
            type: 'DONE',
            payload: 1
        };
        const newState = todoReducer(initialState,action);
        expect(newState[0].done).toBeTruthy();
    });
})