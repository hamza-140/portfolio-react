import React from 'react';

const EducationalHistory = () => {
  return (
    <section id="educational-history" className="p-8">
      <h2 className="text-2xl mb-4">Educational History</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Degree Title</th>
            <th className="border p-2 text-center">Passing Year</th>
            <th className="border p-2 text-center">Total Marks</th>
            <th className="border p-2 text-center">Obtained Marks</th>
            <th className="border p-2 text-center">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2">Bachelor's in Computer Science</td>
            <td className="border p-2 text-center">2024</td>
            <td className="border p-2 text-center">4.0</td>
            <td className="border p-2 text-center">3.6</td>
            <td className="border p-2 text-center">{3.60/4.0*100}%</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">2</td>
            <td className="border p-2">FSc. Pre-Engineering</td>
            <td className="border p-2 text-center">2020</td>
            <td className="border p-2 text-center">1100</td>
            <td className="border p-2 text-center">890</td>
            <td className="border p-2 text-center">{(890/1100*100).toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default EducationalHistory;
