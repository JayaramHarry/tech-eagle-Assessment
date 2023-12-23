import React from 'react';
import "./style.css"

// const RaceResultsPopup= ({ participants, raceEndTime }) => {
//   // Sort participants based on race finish time or any other relevant criteria
//   const sortedParticipants = participants.sort(/* Add sorting logic here */);

//   return (
//     <div>
//       <h2>Race Results</h2>
//       <div>
//         <p>Race End Time: {raceEndTime}</p>
//         <ul>
//           {sortedParticipants.map((participant, index) => (
//             <li key={index}>
//             {`#${index + 1} - ${participant.name} - Finish Time: ${participant.finishTime}`}
//           </li>

//           ))}
//         </ul>
//       </div>
//     </div>

//   );
// };

// export default RaceResultsPopup;

// const RaceResultsPopup = ({ results, onGoBack, onRestart }) => {
//   return (
//     <div>
//       <h2>Race Results</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Position</th>
//             <th>Name</th>
//             <th>Speed (m/s)</th>
//             <th>Start Time</th>
//             <th>Race End Time</th>
//             <th>Completion Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {results.map((result, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{result.name}</td>
//               <td>{result.speed}</td>
//               <td>{new Date(result.startTime).toLocaleTimeString()}</td>
//               <td>{new Date(result.endTime).toLocaleTimeString()}</td>
//               <td>{result.completionTime} seconds</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={onGoBack}>Go back</button>
//       <button onClick={onRestart}>Restart</button>
//     </div>
//   );
// };

// export default RaceResultsPopup;

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
