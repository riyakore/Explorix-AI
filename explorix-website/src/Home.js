import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to My Travel Planner</h1>
      <p>Your adventure starts here!</p>
      <button onClick={() => window.location.href = '/chatbot'}>Start!</button>
    </div>
  );
}

export default Home;

