import React from "react";

const LifeAmbitions = () => {
  return (
    <div id="life-ambitions" className="p-8">
      <h2 className="text-2xl mb-8">Life Ambitions</h2>
      <ul className="list-disc list-inside">
        <li className="font-bold mb-4">Achieved</li>
        <ul className="list-disc list-inside ml-6">
          <li>Graduating with a Computer Science degree</li>
          <li>Becoming proficient in Programming</li>
        </ul>
        <li className="font-bold mt-4 mb-4">Struggling</li>
        <ul className="list-disc list-inside ml-6">
          <li>Contributing to open-source projects</li>
          <li>Reading books to increase my knowledge</li>
          <li>Improving public speaking skills</li>
        </ul>
      </ul>
    </div>
  );
};

export default LifeAmbitions;
