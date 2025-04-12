import React from 'react';

function PollOption({ label, count, onVote }) {
  return (
    <div className="poll-option">
      <span>
        {label}: {count} votes
      </span>
      <button onClick={onVote}>Vote</button>
    </div>
  );
}

export default PollOption;