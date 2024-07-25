import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const [todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} date:${itemDueDate}`);
    const newTodoItem = [...todoItems,{name:itemName, dueDate: itemDueDate}];// destructuring the original array and adding user entered data with it.
    setTodoItems(newTodoItem)
  };

  const handleDeleteItem = (deletdItem) => {
     const newTodoItems = todoItems.filter((item)=> item.name !== deletdItem);
     setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg/>}
      <TodoItems todoItems={todoItems} onDeleteClick ={handleDeleteItem} />
    </center>
  );
}

export default App;
