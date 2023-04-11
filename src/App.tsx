import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import Input from './Components/Input';

interface Item  {
  id: number;
  title: string;
  desc: string;
  deadline: Date;
  priority: number;
}

const data: Item[] = [
  {id:0, priority: 1, title:"Calculator App with JavaScript React", desc:"Calculator App with JavaScript React", deadline:new Date()},
  {id:1,  priority: 2, title:"Todo-list App with TypeScript React", desc:"Todo-list App with TypeScript React", deadline:new Date()},
  {id:2,  priority: 3, title:"Clock App with React", desc:"Clock App with React", deadline:new Date()},
];

const App = () => {

  const [todos, setTodos] = useState<Item[]>([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState(0);
  const [SortByDealine, setSortByDealine] = useState(false);
  const [SortByPriority, setSortByPriority] = useState(0);
  //setTodos(data)
  const handleSubmit = () => {
    const newTodo: Item = {id: Date.now(), priority, title, desc, deadline: new Date(date)};
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setTitle('');
    setDesc('');
    setDate('');
    setPriority(0);
    
  }

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  }

  const handlePriority = (e:any) => {
    setPriority(e.target.value);
  }

  const handleDesc = (e: any) => {
    setDesc(e.target.value);
  }

  const handleDescToggle = () => {
    console.log("Hello Robo");
  }

  const handleShowData = () => {
    console.log(todos);
  }

  const handleDate = (e:any) => {
    setDate(e.target.value);
  }


  const handleDelete = (id:number) => {
    console.log("Delete Function");
    console.log(id);
    setTodos(todos.filter(item => item.id!==id));
  }

  const handleEdit = (item:Item) => 
  {
    console.log(item);
    //setTodos([...todos,item]);
    const newTodos = [...todos];

    const itemInd = newTodos.findIndex((obj => obj.id===item.id));
    newTodos[itemInd].title = item.title 
    newTodos[itemInd].desc = item.desc
    newTodos[itemInd].deadline = item.deadline
    newTodos[itemInd].priority = item.priority
    //console.log(todos[itemInd]);
    setTodos(newTodos);
    //handleDelete(item.id);
    console.log(todos);
  }

  const sortByDate = (data:any):Item[] => {
    data = [...todos]
    data.sort((a:any, b:any) => a.deadline - b.deadline)
    return data;
  }

  const handleSortbyDate = () =>
  {
    console.log(todos);
    console.log(SortByDealine);
    setSortByDealine(!SortByDealine);
    setSortByPriority(0);
  }

  const handleSortByPriority = () => {

    console.log(todos);
    console.log(SortByPriority);
    SortByPriority===0?setSortByPriority(1):
    SortByPriority===1?setSortByPriority(2):
    setSortByPriority(0);
    setSortByDealine(false);

  }

  const sortByPriorityAscending = (data:any):Item[] => {
    data = [...todos]
    data.sort((a:any, b:any) => a.priority - b.priority)
    return data;
  }

  const sortByPriorityDescending = (data:any):Item[] => {
    data = [...todos]
    data.sort((a:any, b:any) => b.priority - a.priority)
    return data;
  }
  

  useEffect(() => {
    setTodos(data);
  },[]);

  var buttonList = SortByDealine ? sortByDate(todos).map(item => (
    <Todo  key={item.id} id={item.id} title={item.title} desc={item.desc} deadline={item.deadline} priority={item.priority} onclick={handleDescToggle}  deleteHandler={handleDelete} editHandler={handleEdit}  />
  )):SortByPriority===1 ? sortByPriorityAscending(todos).map(item => (
    <Todo  key={item.id} id={item.id} title={item.title} desc={item.desc} deadline={item.deadline} priority={item.priority} onclick={handleDescToggle}  deleteHandler={handleDelete} editHandler={handleEdit}  />
  )):SortByPriority===2 ? sortByPriorityDescending(todos).map(item => (
    <Todo  key={item.id} id={item.id} title={item.title} desc={item.desc} deadline={item.deadline} priority={item.priority} onclick={handleDescToggle}  deleteHandler={handleDelete} editHandler={handleEdit}  />
  )):todos.map(item => (
    <Todo  key={item.id} id={item.id} title={item.title} desc={item.desc} deadline={item.deadline} priority={item.priority} onclick={handleDescToggle}  deleteHandler={handleDelete} editHandler={handleEdit}  />
  ));

  // var buttonList = todos.map(item => (
  //   <Button  key={item.id} id={item.id} title={item.title} desc={item.desc} deadline={item.deadline} onclick={handleDescToggle}  deleteHandler={handleDelete} editHandler={handleEdit}  />
  // ));



  return (
    <div className='wrapper'>
      {buttonList}
      <Input name="Title" value={title} onChange={handleTitle}/>
      <Input name="Description" value={desc} onChange={handleDesc}/>
      <Input name="date" type="date" value={date} onChange={handleDate}/>
      <Input name="Priority" type="number" value={priority} onChange={handlePriority}/>
      <button className="submit" type='submit' onClick={handleSubmit} style={{backgroundColor:'lightblue'}}> Add Task </button>
      <button className="submit" onClick={handleShowData}>Show Data </button>
      <div className="mode-wrapper">
      <button className="modes" onClick={handleSortbyDate}>Sort by Date {String(SortByDealine)} </button> 
      <button className="modes" onClick={handleSortByPriority}>Sort by Priority {String(SortByPriority)}  {SortByPriority===1?"Ascending":SortByPriority===2?"Descending":"Default"}</button> 
      </div>
   </div>
  );
}

export default App;
