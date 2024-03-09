import React from 'react';
import './App.css';

// Import the JSON data
import teamsData from './CollegeBasketballTeams.json';

// Heading Component
const Heading = () => {
  return <h1>Welcome to NCAA Basketball College Information</h1>;
};

// TeamCard Component
interface TeamCardProps {
  school: string;
  mascot: string;
  location: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ school, mascot, location }) => {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {mascot}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// TeamList Component
const TeamList = () => {
  return (
    <div className="team-list">
      {teamsData.teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          location={`${team.city}, ${team.state}`}
        />
      ))}
    </div>
  );
};

// App Component
function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
      <main>
        <TeamList />
      </main>
    </div>
  );
}

export default App;
