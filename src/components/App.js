/*jshint esversion: 6 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import 'antd/dist/antd.css';
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import Contacts from "./pages/Contacts";

function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
