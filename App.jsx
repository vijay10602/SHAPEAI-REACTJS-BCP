import React from "react";
import Header from "./Header"; 
import Note from "./Note";
import Footer from "./Footer";
//header=heading,note=description,footer=copyright;
function App()
{
  return (
  <div> 
    <Header />
    <Note /> 
    <Footer />
  </div>);
} 
export default App;