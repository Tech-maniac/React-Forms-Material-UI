const firstName = "John";
const lastName = "Doe";

//Name of component that we created
function Expressions(p)
{
    return(
        <>
            <h2>
                {/* String/Template Literals */}
                {`My name is : ${firstName}`}
            </h2>

            <h2>
                My last name is : {lastName}
            </h2>

            <h2>
                Sum is :{4*5} 
            </h2>

            <h1> 
                Number 1 you entered is : {p.num1}
            </h1>

            <h1> 
                Number 2 you entered is : {p.num2}
            </h1>
        </>
    )
}

//Name of component that we exported.
export default Expressions;

export {firstName,lastName};
