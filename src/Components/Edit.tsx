import { useState } from "react";
import Input from "./Input";
import '../Styles/edit.css';

interface Todo {
    id: number;
    title: string;
    desc: string;
    deadline: Date;
    priority: Number;
  }


const Edit = (props:any) => {


    const {id, title, desc, deadline, priority, editHandler, toggle} = props

    const [newtitle, setTitle] = useState(title);
    const [newdesc, setDesc] = useState(desc);
    const [newdate, setDate] = useState(deadline);
    const [newpriority, setPriority] = useState(priority);
 
    const handleTitle = (e: any) => {
        setTitle(e.target.value);
      }
    
    const handleDesc = (e: any) => {
        setDesc(e.target.value);
      }
    
    const handlePriority = (e:any) => {
      setPriority(e.target.value);
    }

    const handleDate = (e:any) => {
        setDate(e.target.value);
      }
    const handleSubmit = () => {
        //const newTodo: Todo = {id: Date.now(), title, desc, deadline: new Date(date)};
        //setTodos(prevTodos => [...prevTodos, newTodo]);
        setTitle('');
        setDesc('');
        setDate('');
      }

    return(
        <div className="edit-wrapper"> 
        <Input name="Title" value={newtitle} onChange={handleTitle}/>
        <Input name="Description" value={newdesc} onChange={handleDesc}/>
        <Input name="date" type="date" value={newdate} onChange={handleDate}/>
        <Input name="Priority" type="number" value={newpriority} onChange={handlePriority}/>
        <button className="submit" type='submit' onClick={()=>{
            const newTodo: Todo = {id: id, priority:newpriority, title:newtitle, desc:newdesc, deadline: new Date(newdate)};
            console.log(newTodo);
            editHandler(newTodo);
            toggle();
            //deleteHandler(id);

        }}> Submit </button>
        </div>
    )

}

export default Edit;