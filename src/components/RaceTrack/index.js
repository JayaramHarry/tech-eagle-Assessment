import React, { useEffect, useState } from 'react';
import RaceResultsPopup from '../RaceResultsPopup';
import './style.css';

const RaceTrack = ({ participants, onRestart }) => {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [raceResults, setRaceResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [participantPositions] = useState([]);

  useEffect(() => {
    setStartTime(Date.now());

    const raceInterval = setInterval(() => {
      setElapsedTime((time) => time + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(raceInterval);
  }, [participants]);

  useEffect(() => {
    if (elapsedTime > 0 && !showResults) {
      const results = participants.map((participant, index) => {
        const completionTime = (400 / participant.speed).toFixed(2);
        const endTime = startTime + completionTime * 1000;
        return { ...participant, completionTime, startTime, endTime };
      });

      results.sort((a, b) => a.completionTime - b.completionTime);
      setRaceResults(results);

      const allCompleted = results.every((result) => result.endTime <= Date.now());

      if (allCompleted) {
        setShowResults(true);
      }
    }
  }, [participants, startTime, elapsedTime, showResults]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleRestart = () => {
    setStartTime(Date.now());
    setElapsedTime(0);
    setRaceResults([]);
    setShowResults(false);
  };

  useEffect(() => {
    // Function to generate track styles
    const generateTrackStyles = (numParticipants) => {
      let styles = '';
      for (let i = 1; i <= numParticipants; i++) {
        styles += `
          .track-${i} {
            height: ${30 + i * 5}%;
            width: ${34 + i * 3}%;
          }
        `;
      }
      return styles;
    };

    // Apply styles to a style tag
    const dynamicStyles = generateTrackStyles(participants.length);

    const styleTag = document.createElement('style');
    styleTag.textContent = dynamicStyles;
    document.head.appendChild(styleTag);

    // Cleanup function to remove the added style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [participants.length, participantPositions]);

  return (
    <div>
      {!showResults ? (
        <div className="dynamic-oval-race-track">
          <div className="start-line" />
          {participants.map((participant, index) => (
            <div key={index} className={`track track-${index + 1}`}>
              <div className="participant-name">{participant.name}</div>
            </div>
          ))}
          <div className='timer-container'>
            <p className='elapsed-time'>Elapsed Time</p>
            {formatTime(elapsedTime)}
            <p>Track length 400m</p>
          </div>
        </div>
      ) : (
        <RaceResultsPopup results={raceResults} onGoBack={handleRestart} onRestart={onRestart} />
      )}
    </div>
  );
};

export default RaceTrack;

