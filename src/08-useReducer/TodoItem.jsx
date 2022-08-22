
export const TodoItem = ({item = {},handleOnDeleteTodo,handleOnDone}) => {

  return (
  <li 
      key={item.id}
      className='list-group-item d-flex justify-content-between'>
      <span
        aria-label='span' 
        className={`align-self-center ${item.done ?'text-decoration-line-through' : ''}`}
        onClick={() => handleOnDone(item.id)}>
          {item.nombre} - {item.edad}
      </span>
      <button 
        className='btn btn-danger'
        onClick={() => handleOnDeleteTodo(item.id)}>Borrar</button>
  </li>
  )
}
