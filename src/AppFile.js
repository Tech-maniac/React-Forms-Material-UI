// Creating an App Component

//Alias/Nickname : Exp (It can be anything)
//./expressions => File name

import { BrowserRouter,Routes, Route } from "react-router-dom";

import Exp from "./expressions";

import './styles.css'

import {firstName,lastName} from "./expressions";

import CheckSignIn from "./conditionals";

import UncontrolledExample from "./carousel";

import Hooks from "./hooks";
import Form from "./forms";
import FormWithFormElement from "./formsWithformElement"
import Homepage from "./homepage";

const heading2 = {
    color : "red",
    textAlign : "center",
    backgroundColor : "pink"
}

function App()
{
    return(
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="/aboutus" element={<Hooks/>}></Route>
                    <Route path="/form" element={<FormWithFormElement/>}></Route>

                    <Route path="*" element={<h1>404 : Page not found..!!!</h1>}></Route>

                </Routes>
            </BrowserRouter>





            {/* <Hooks/>  */}

            {/* <Form/> */}

            {/* <FormWithFormElement/> */}

            
            

           

        </>
    )
}

export default App;

