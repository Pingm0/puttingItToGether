import React,{useState} from "react";

function PersonCard(props){
    const [age , setAge] = useState(props.age);
    const handleClick = () => {
        console.log("Clicked")
        setAge( age + 1);
    }
    return (
        <div>
            <h1>
                {props.lName} , {props.fName} 
            </h1>
            <p>Age: {age}</p>
            <p> hair Color: {props.color}</p>
            <button onClick={ handleClick}> Birthday Button for {props.fName} {props.lName}</button>
        </div>
    )
}

export default PersonCard;