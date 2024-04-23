import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import EducationalHistory from "./sections/EducationalHistory";
import Skills from "./sections/Skills";
import ProfessionalProject from "./sections/ProfessionalProject";
import Hobbies from "./sections/Hobbies";
import LifeAmbitions from "./sections/LifeAmbitions";
import EffortsForCountry from "./sections/EffortsForCountry";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <EducationalHistory></EducationalHistory>
      <Skills></Skills>
      <ProfessionalProject></ProfessionalProject>
      <Hobbies></Hobbies>
      <LifeAmbitions></LifeAmbitions>
      <EffortsForCountry></EffortsForCountry>
      <Footer></Footer>
    </div>
  );
}

export default App;
