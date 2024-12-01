import Message from "./components/ConditionWithSimpleMessage";
import ListGroup from "./components/ShowListGroup";
import loggerArrowSynctax from "./components/ArrowFunctionSyntax";
import { createRoot } from 'react-dom/client';
import React from 'react';

function HeaderDemoInSideFileApp()
{
  return (
    <>
      <h1> Header </h1>
      <img src="/react.svg" alt="React Logo"/>
    </> 
    )
}

function App() {
  return (
    <>
      <HeaderDemoInSideFileApp/>
      
    </>
  );
}

export default App;