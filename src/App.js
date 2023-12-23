import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ParticipantEntryPage from './components/ParticipantEntry';
import RaceTrackPage from './components/RaceTrack';
import RaceResultsPopup from './components/RaceResultsPopup';

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleParticipantsSubmit = (participants) => {
    setParticipants(participants);
    setShowResults(false); // Resets results when participants change
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <BrowserRouter>
      {!participants.length ? (
        <ParticipantEntryPage onParticipantsSubmit={handleParticipantsSubmit} />
      ) : !showResults ? (
        <RaceTrackPage participants={participants} onShowResults={handleShowResults} />
      ) : (
        <RaceResultsPopup results={participants} onClose={handleCloseResults} />
      )}
    </BrowserRouter>
  );
};

export default App;
