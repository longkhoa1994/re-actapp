import React from 'react';
import Message from "./components/ConditionWithSimpleMessage";
import ListGroup from "./components/ShowListGroup";
import loggerArrowSynctax from "./components/ArrowFunctionSyntax";
import { createRoot } from 'react-dom/client';
import ContentOfWebsite from "./components/contentofwebsite/index";

function HeaderDemoInSideFileApp()
{
  var hearObject = <h1> Hear function Object </h1>;
  return (
    <>
      {hearObject}  
    </> 
    )
}

class HeaderContent extends React.Component {
  render() {
    return (
      <>
        <h1> Header HeaderContent : React.Component </h1>
      </>
    );
  }
}

function App() {

  
  function callBack(){
    console.log("Button clicked in App()");
  }

  const appRender = (
    <div>
       {/* <HeaderContent/>
       <HeaderDemoInSideFileApp/>
        */}

        <ContentOfWebsite />

    </div>
  );

  return appRender;
  
}

export default App;