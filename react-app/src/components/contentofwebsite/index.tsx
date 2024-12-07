import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import { useCallback } from "react";

function ContentOfWebsite() {
    function callBackContentOfWebsite(prodValueForCallBack: string){
        console.log("Button clicked in ContentOfWebsite() " + prodValueForCallBack);
    }
  return (
    <>
      <Header 
        prop1="prop1 Header 1" 
        prop2="def"
        callBack = {(prodValueForCallBack: string) => { return callBackContentOfWebsite(prodValueForCallBack); } }
       />
       <Header 
        prop1="prop1 Header 2" 
        prop2="def"
      
       />
      <Main />
      <Footer />
    </>
  );
}
export default ContentOfWebsite;
