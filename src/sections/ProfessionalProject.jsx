import React from 'react';

const ProfessionalProject = () => {
  return (
    <section id="professional-projects" className="p-8">
      <h2 className="text-2xl mb-8">Professional Projects</h2>
      <ul className="list-decimal list-inside">
        <li>
          <strong>Kids Learning App</strong> - FYP
          <ul className="list-disc list-inside ml-6">
            <li>Firebase</li>
            <li>React Native</li>
            <li>React Dashboard</li>
          </ul>
        </li>
        <li>
          <strong>Map Tracker</strong> - Mobile App
          <ul className="list-disc list-inside ml-6">
            <li>Track movement on map</li>
            <li>MongoDB</li>
            <li>User Login Credentials</li>
            <li>React Native</li>
          </ul>
        </li>
        <li>
          <strong>Bugzilla</strong> - Web App
          <ul className="list-disc list-inside ml-6">
            <li>MVC</li>
            <li>Project Management tool</li>
            <li>Ruby on Rails</li>
            <li>Role based authorization</li>
          </ul>
        </li>
        <li>
          <strong>Bank Churner App</strong> - Desktop App
          <ul className="list-disc list-inside ml-6">
            <li>Identify Customer using ML Model</li>
            <li>PyQt6</li>
          </ul>
        </li>
      </ul>
      <p className="mt-8">
        You can find more of my projects on my GitHub: 
        <a 
          href="https://github.com/hamza-140"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          hamza-140
        </a>
      </p>
    </section>
  );
};

export default ProfessionalProject;
