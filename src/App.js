import React, { useState } from 'react';
import './App.css';
import PollOption from './components/PollOption';

function App() {
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rat', count: 0 },
  ]);

  const handleVote = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].count += 1;
    setOptions(updatedOptions);
  };

  const getLeader = () => {
    return options.reduce((leader, current) =>
      current.count > leader.count ? current : leader
    );
  };

  const leader = getLeader();

  return (
    <div className="App">
      <h1>Vote for Your Favorite Pet!</h1>
      {options.map((option, index) => (
        <PollOption
          key={index}
          label={option.option}
          count={option.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <h2>Current Leader: {leader.option} ({leader.count} votes)</h2>
    </div>
  );
}

export default App;