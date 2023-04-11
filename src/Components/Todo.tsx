import { useState } from 'react';
import '../Styles/button.css';
import Descriptions from "./Description";
import Edit from './Edit';

const Todo= (props:any): any => {
    const {id, title, desc, deadline , priority, deleteHandler, editHandler } = props;
    // console.log(text);
    //console.log(props);
    const [showResult,setShowResult] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleDescToggle = () => {
        if(!showResult)
        setShowResult(true);
        else
        setShowResult(false);
    }

    const handleEditToggle = () => {

        if(!showEdit)
        setShowEdit(true);
        else
        setShowEdit(false);

    }

    return (
    <div>
    <button className="button" onClick={handleDescToggle}>{priority} {title}</button>
    <button className="button remove" onClick={()=>{
        deleteHandler(id);
        }}> Delete </button>
    <button className='button edit' onClick={handleEditToggle}> Edit </button>
    {showResult ? <Descriptions key={Math.random()} title={title} desc={desc} deadline={deadline} priority={priority} /> : <div></div>}
    {showEdit ? <Edit toggle={handleEditToggle} key={Math.random()} id={id} title={title} desc={desc} deadline={deadline} priority={priority} editHandler={editHandler} deleteHandler={deleteHandler} />:<div></div>}
    </div>
    );
    
};

export default Todo