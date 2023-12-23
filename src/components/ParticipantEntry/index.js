import React, { useState } from 'react';
import "./style.css"

const ParticipantEntryPage = ({ onParticipantsSubmit }) => {
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState('');
  const [participantSpeed, setParticipantSpeed] = useState('');

  const handleNameChange = (e) => {
    setParticipantName(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setParticipantSpeed(e.target.value);
  };

  const handleAddParticipant = () => {
    if (participants.length < 10 && participantName && participantSpeed) {
      setParticipants([...participants, { name: participantName, speed: participantSpeed }]);
      setParticipantName('');
      setParticipantSpeed('');
    }
  };

  const handleSubmit = () => {
    onParticipantsSubmit(participants);
  };

  return (
    <div className='entry-bg-container'>
     <div className='form-container'>
      <h2>Participant Entry Page</h2>
      <form>
        <label>
          Name:
          <input type="text" value={participantName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Speed:
          <input type="number" value={participantSpeed} onChange={handleSpeedChange} />
        </label>
        <br />
        <button className='add-button' type="button" onClick={handleAddParticipant}>
          Add Participant +
        </button>
      </form>
      </div>

      <div className='participants-bg-container'> 
          <h3>Participant List:</h3>
               <table>
                 <thead>
                   <tr>
                    <th>Name</th>
                    <th>Speed (m/s)</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                  {participants.map((participant, index) => (
                  <tr key={index}>
                  <td>{participant.name}</td>
                  <td>{participant.speed}</td>
                  <td>{participant.startTime ? new Date(participant.startTime).toLocaleTimeString() : '-'}</td>
                  <td>{participant.endTime ? new Date(participant.endTime).toLocaleTimeString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='start-race'>
            <button type="button" onClick={handleSubmit}>
            Start Race
            </button>
          </div>
        </div>
    </div>
  );
};

export default ParticipantEntryPage;
