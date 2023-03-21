import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/AboutUs";
import Contact from "../src/pages/ContactUs";
import Nav from "./pages/layout/Nav";
import {AnimatePresence} from "framer-motion";
const App: React.FC = () => {
  return (
      <Router>
        <div>
          <Nav/>
            <AnimatePresence mode='wait'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </AnimatePresence>
        </div>
      </Router>
  );
};

export default App;
