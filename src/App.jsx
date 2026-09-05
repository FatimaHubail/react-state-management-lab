import { useState } from "react";
import FightersList from "./components/FightersList";
import './App.css';
import survivorImg from './assets/fighters/survivor.svg';
import scavengerImg from './assets/fighters/scavenger.svg';
import shadowImg from './assets/fighters/shadow.svg';
import trackerImg from './assets/fighters/tracker.svg';
import sharpshooterImg from './assets/fighters/sharpshooter.svg';
import medicImg from './assets/fighters/medic.svg';
import engineerImg from './assets/fighters/engineer.svg';
import brawlerImg from './assets/fighters/brawler.svg';
import infiltratorImg from './assets/fighters/infiltrator.svg';
import leaderImg from './assets/fighters/leader.svg';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [message, setMessage] = useState('');
  const [zombieFighters, setFighter] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: survivorImg,
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: scavengerImg,
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: shadowImg,
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: trackerImg,
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: sharpshooterImg,
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: medicImg,
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: engineerImg,
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: brawlerImg,
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: infiltratorImg,
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: leaderImg,
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      setMessage('Not enough money')
      return;
    }

    setMessage('');

    const updatedTeam = [...team, fighter];
    setTeam(updatedTeam);

    const updatedFighters = zombieFighters.filter(f => f.id !== fighter.id);
    setFighter(updatedFighters);

    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter(member => member.id !== fighter.id);
    setTeam(updatedTeam);

    const updatedFighters = [...zombieFighters, fighter];
    setFighter(updatedFighters);

    setMoney(money + fighter.price);
  };

  const calculateTotal = (team, isStrength) => {
    let total = team.reduce((accumulator, currentFighter) => {
      if (isStrength) return accumulator + currentFighter.strength;
      else return accumulator + currentFighter.agility;
    }, 0);

    return total
  };

  return (
    <>
      <h3>Pick Some Team Members</h3>

      <h1>Fighters</h1>

      <FightersList
        fighters={zombieFighters}
        buttonText="Add to your Team"
        onButtonClick={handleAddFighter}
      />

      <h1>Your Team</h1>

      <FightersList
        fighters={team}
        buttonText="Remove Fighter"
        onButtonClick={handleRemoveFighter}
        emptyMessage="Pick some team members!"
      />

      <hr />
      <p>Money: {money}</p>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <p>Current Team Strength: {calculateTotal(team, true)}</p>
      <p>Current Team Agility: {calculateTotal(team, false)}</p>


    </>
  );
}

export default App