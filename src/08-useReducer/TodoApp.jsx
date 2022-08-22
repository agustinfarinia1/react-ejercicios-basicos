import { TodoAdd,TodoList,useTodo } from "./";


export const TodoApp = () => {

    const {     
        todos,
        todosCount,
        todosCountPending,
        handleOnNewTodo,
        handleOnDeleteTodo,
        handleOnDone
    } = useTodo();

  return (
    <>
        <h1>TodoApp: {todosCount}- Pendientes: {todosCountPending}</h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                {todos && <TodoList list={todos} handleOnDeleteTodo={handleOnDeleteTodo} handleOnDone={handleOnDone}/>}
            </div>
            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd handleOnNewTodo={handleOnNewTodo} todoSize={todos.length}/>
            </div>
        </div>
    </>
  )
}
