import "./TodoItem.css";
import { useEffect } from "react";

function TodoItem(props) {

  useEffect( ()=>{

    console.log('TodoItem component mount' , props.id);

    return () => {
      console.log('TodoItem unMount' , props.id);
    }

  } , [])


  return (

    <div className="todoItemContainer">
      <p>{props.title}</p>
      
      <button onClick={props.onRemove}>delete Todo</button>
    </div>

  );
}

export default TodoItem;
