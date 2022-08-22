export const todoReducer = (initialState = [],action={}) => {

    switch(action.type){
        case 'ADD':
            return [
                ...initialState,
                action.payload];
        break;
        case 'REMOVE':
            return initialState.filter(
                (s) => s.id != action.payload);
        break;
        case 'DONE':
            return initialState.map((todo) => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        break;
        default:
            return initialState;
        break;
    }
}