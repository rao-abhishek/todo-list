import '../Styles/input.css';


const Input = (props:any):any => {
    const {name, onChange, value, type} = props
    return(
    <div>
    <p>Enter Todo {name}</p>
    <input required value={value} type={type==='date'?type:'text'} onChange={onChange} className="input" />
    </div>
    );
}

export default Input;