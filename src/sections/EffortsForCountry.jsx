import React from 'react';

const EffortsForCountry = () => {
  return (
    <div id="efforts-for-country" className="p-8">
      <h2 className="text-2xl mb-8">Efforts for Country</h2>
      <ul className="list-disc list-inside">
        <li className="font-bold mb-4">Succeeded</li>
        <ul className="list-disc list-inside ml-6">
          <li>Contributed to community welfare through <strong>TwinSpider Technologies</strong></li>
          <li>Engaged in environmental conservation efforts</li>
        </ul>
        <li className="font-bold mt-4 mb-4">Struggling</li>
        <ul className="list-disc list-inside ml-6">
          <li>Advocating for sustainable tech practices</li>
          <li>Working towards promoting gender equality in tech</li>
          <li>Raising awareness about mental well-being in tech communities</li>
        </ul>
      </ul>
    </div>
  );
};

export default EffortsForCountry;
