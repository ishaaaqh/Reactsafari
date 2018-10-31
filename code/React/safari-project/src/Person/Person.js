import React from 'react'; 
import './Person.css';

const person = (props) => {
    var changed =(props.name)?props.name :"new User";
    return (
        <div className="Person">
            <p onClick={props.click}>I'm  {changed + ' sir'} and i am  {props.age} Years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;