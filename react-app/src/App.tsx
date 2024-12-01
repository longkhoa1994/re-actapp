import Message from "./components/ConditionWithSimpleMessage";
import ListGroup from "./components/ShowListGroup";
import loggerArrowSynctax from "./components/ArrowFunctionSyntax";
function App() {
  return (
    <>
      <h1> App </h1>
      <Message></Message>
      <Message />   <Message />
      {loggerArrowSynctax('abc')}
    </>
  );
}

export default App;