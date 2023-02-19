import { useState } from "react";
import Button from '@mui/material/Button';

const FormWithFormElement =()=>{

    const [fullName,setFullName] = useState({
        fName : "",
        lName : "",
        qualification : "",
        email : ""
    });

    const inputElement=(event)=>
    {
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        // "name" 
        // For Dynamic values use []
        // 1st input field => fName
        // 2nd input field => lName

        setFullName((preValue)=>{

            console.log(preValue);

            return{
                ...preValue,
                [name] : value
            }

            // if(name == "fName"){
            //     return{
            //         fName : value,
            //         lName : preValue.lName
            //     }
            // }
            // else if(name == "lName")
            // {
            //     return{
            //         fName : preValue.fName,
            //         lName : value
            //     }
            // }


        })        
    }

    const onSubmiting =(event)=>{

        event.preventDefault();

    }

    return(
        <>
            <form onSubmit={onSubmiting}>
                <h2> Hi : {fullName.fName} {fullName.lName} {fullName.qualification}</h2>
                <input type="text" name="fName" placeholder="Enter your first name : " onChange={inputElement} />
                <input type="text" name="lName" placeholder="Enter your last name : " onChange={inputElement} />
                
                <input type="text" name="qualification" placeholder="Enter your Qualification: " onChange={inputElement} />
                <input type="text" name="email" placeholder="Enter your email: " onChange={inputElement} />
                <button type="submit"> Click here </button>
                <Button variant="contained">Contained</Button>
            </form>
        </>
    )
}

export default FormWithFormElement;