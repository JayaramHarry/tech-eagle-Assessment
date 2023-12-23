import React from 'react';
import "./style.css"

const RaceResultsPopup = ({ results, onGoBack, onRestart }) => {
  return (
    <div>
      <h2>Race Results</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Speed (m/s)</th>
            <th>Start Time</th>
            <th>Race End Time</th>
            <th>Completion Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{result.name}</td>
              <td>{result.speed}</td>
              <td>{new Date(result.startTime).toLocaleTimeString()}</td>
              <td>{new Date(result.endTime).toLocaleTimeString()}</td>
              <td>{result.completionTime} seconds</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onGoBack}>Go back</button>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default RaceResultsPopup;
