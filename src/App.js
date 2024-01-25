import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

import SectionData from "./data/SectionData";
import "./style.css"

const App = () =>{
    return (
        <div>
            <Navbar/>
            <About/>
            {SectionData.map(item =>{
                return (
                    <Section
                        title={item.title}
                        desc={item.description}
                    />
                )
            })}
            <Footer/>
        </div>
    )
}

export default App