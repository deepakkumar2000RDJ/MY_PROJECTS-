import { useState } from "react";

function AddTodo({onNewItem}) {

  const [ todoName, setTodoName] = useState();
  const [ dueDate, setDueDate] = useState();

  const handleNameChange = (event) => { 
    setTodoName(event.target.value) // seting the new value.
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value)  // seting the new value.
  };
   
  // this will execute when user clicked on Add Button.
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate) // this will call the parent function "onNewItem" and pass the two properties to the parants of this components.
    setTodoName(""); // setting back the input field as blank.
    setDueDate(""); // setting back the input field as blank.
  }


  return (
    <div class="container text-center">
      <div class="row updaterow">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo"
          value={todoName}
          onChange={handleNameChange} // calling the function on changing the input.
          />
        </div>

        <div class="col-4">
          <input type="date"
          value={dueDate}
          onChange={handleDueDateChange} // calling the function on changing the input.
          />
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-success update-button"
          onClick={handleAddButtonClicked} // calling the function.
          
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
