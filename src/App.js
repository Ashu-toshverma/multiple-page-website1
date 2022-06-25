import React from 'react'
import Home from './Home';
import{Route,Routes} from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from './pages/ERROR';

const App = () => {
    return (
        <>
        
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="service" element={<Service/>}/>
         <Route path="*" element={<Error/>}/>
       </Routes>
        </>
    )
}

export default App;  
 






