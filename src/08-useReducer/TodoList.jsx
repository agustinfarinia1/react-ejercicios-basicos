import { TodoItem } from "./TodoItem"

export const TodoList = ({
    list = [],
    handleOnDeleteTodo,
    handleOnDone
}) => {
  return (
  <ul className="list-group">
      {
          list && list.map( item => (
              <TodoItem 
                key={item.id} 
                item={item} 
                handleOnDeleteTodo={handleOnDeleteTodo}
                handleOnDone={handleOnDone}/>
          ))
      }
  </ul>
  )
}
