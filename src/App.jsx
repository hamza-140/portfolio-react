import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header></Header>
      <Navbar></Navbar>
      {/* Navigation Menu */}
      <nav className="navigation">
        <ul>
          <li>
            <a href="#educational-history">Educational History</a>
          </li>
          <li>
            <a href="#professional-skills">Professional Skills</a>
          </li>
          <li>
            <a href="#professional-projects">Professional Projects</a>
          </li>
          <li>
            <a href="#hobbies">Hobbies</a>
          </li>
          <li>
            <a href="#life-ambitions">Life Ambitions</a>
          </li>
          <li>
            <a href="#efforts-for-country">Efforts for Country</a>
          </li>
          <li className="contact">
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>

      {/* Educational History Section */}
      <section id="educational-history">
        <h2>Educational History</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Degree Title</th>
              <th>Passing Year</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>{/* Add your educational history data here */}</tbody>
        </table>
      </section>

      {/* Professional Skills Section */}
      <section id="professional-skills">
        <h2>Professional Skills</h2>
        <ul>{/* List your skills here */}</ul>
      </section>

      {/* Professional Projects Section */}
      <section id="professional-projects">
        <h2>Professional Projects</h2>
        <ul>{/* List your projects here */}</ul>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies">
        <h2>Hobbies</h2>
        <ul>{/* List your hobbies here */}</ul>
      </section>

      {/* Life Ambitions Section */}
      <section id="life-ambitions">
        <h2>Life Ambitions</h2>
        <ul>
          <li>
            <strong>Achieved</strong>
          </li>
          {/* List your achieved ambitions here */}
          <li>
            <strong>Struggling</strong>
          </li>
          {/* List your struggling ambitions here */}
        </ul>
      </section>

      {/* Efforts for Country Section */}
      <section id="efforts-for-country">
        <h2>Efforts for Country</h2>
        <ul>
          <li>
            <strong>Succeeded</strong>
          </li>
          {/* List your succeeded efforts here */}
          <li>
            <strong>Struggling</strong>
          </li>
          {/* List your struggling efforts here */}
        </ul>
      </section>
      <Footer></Footer>
      {/* Footer Section */}
    </div>
  );
}

export default App;
