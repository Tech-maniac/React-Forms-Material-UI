function SignedIn(){
    return <h1> You have signed in</h1>
}

function SignedOut(){
    return <h1> You have signed Out</h1>
}

function CheckSignIn(abc)
{
    const check = abc.signInStatus1;

    //If else condition : 
    // if(check=="true")
    // {
    //     return <SignedIn/>
    // }
    // else
    // {
    //     return <SignedOut/>
    // }

    //Ternary operator : 
    return(
        <>
           {(check=="true") ?  <SignedIn/> : <SignedOut/>}
        </>
    )
}

export default CheckSignIn;





