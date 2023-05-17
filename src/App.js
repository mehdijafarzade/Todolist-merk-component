import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function App() {
  useEffect( ()=>{
    console.log('app component mount');
  } , [])
  
  return (
    <>
      <TodoList />
      
    </>
  );
}
export default App;
