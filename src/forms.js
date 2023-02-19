import { useState } from "react";

const Form =()=>{

    const [name,setName] = useState("");
    const [finalName, setFinalName] = useState("");

    const inputElement=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit =()=>{
        setFinalName(name);
    }

    return(
        <>
            <h2> Hello : {finalName}</h2>
            <input type="text" placeholder="Enter your name : " onChange={inputElement} value={name}/>
            <button onClick={onSubmit}> Click here </button>
        </>
    )
}

export default Form;