import '../Styles/description.css';
const Descriptions = (props:any):any => {

    const {id, title, desc, deadline, priority } = props;

    return(
    <>
    <div className="description">
        {priority} {desc} {desc} {desc} {String(deadline)}
    </div>
    
    </>)


}

export default Descriptions;