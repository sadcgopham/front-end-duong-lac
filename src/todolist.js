import { useState} from "react";
import './todolists.scss';

const Todo = () => {
    
    const [adress, setadress] = useState('')
    const [todos, settodos] = useState([
        {id :'one', title :'toddo',type : 'c'},
        {id :'two', title :'toddooo',type : 'c'},
        {id :'three', title :'toddoooo',type : 'c'}
        ])
    const handleonclick = () => {
        const newtodo = {id:Math.floor(Math.random() * 100), title:adress, type:'c1' } 
        settodos([...todos,newtodo])
        setadress('')
    }

    const handleinput = (e) => {
       setadress(e.target.value)
    }
    const deletetodo = (id) => {
        const deletes=todos.filter((latetodo) => latetodo.id !== id);
         settodos(deletes)
    }
    return (
        <>
        <div className="todo">
            <input
            className="inputt"
              type="text"
              value={adress}
              onChange={(e) => handleinput(e) }
              
            />
            <button
             onClick={(e) => handleonclick(e)}
            >click
            </button>
            <div>
                {todos.map(latetodo => {
                    return(
                       <li className="todos" key={latetodo.id}>  {latetodo.title} <button onClick={() => deletetodo(latetodo.id)}>X</button> </li>
                    )
                })}
            </div>
        </div>
        
       </>
    );
}
export default Todo;