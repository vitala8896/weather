import * as React from "react";
import { BrowserRouter as  Routes, Route } from "react-router-dom"
// @ts-ignore
import { HomePage } from './Pages/HomePage.tsx'
// @ts-ignore
import  ActiveCity from './components/Active.tsx';


const App = () => {
  return (
    <>      
      <Routes>        
        <Route path="/city/:city" component={ActiveCity} /> 
        <Route path="/" exact component={HomePage} />        
      </Routes>
    </>      	
  );
}

export default App;
