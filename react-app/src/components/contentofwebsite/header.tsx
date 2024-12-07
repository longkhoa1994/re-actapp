function Header(props: any)
{
    console.log(props);
    
    if(props.callBack){
        props.callBack('Value from Header');
    }

    return (
        <>
            <h1> Header {props.prop1} </h1>
        </>  
    )
}
export default Header;