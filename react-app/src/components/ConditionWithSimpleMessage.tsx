
//Create show simple text hello world 
function Message(){
  const name = "USER NAME";
  if(name)
    return <h1> Hello world {name}</h1>;
  return <h1> Hello world </h1>
}

export default Message;