import './ToDoItem.css';

function ToDoItem() {
  return (
    <div className='todo-item'>
      <div>March 28 2021</div>
      <div className='todo-item__description'>
        <h4>To Do #1</h4>
        <div className='todo-item__priority'>High</div>
      </div>
    </div>
  );
}

export default ToDoItem;
