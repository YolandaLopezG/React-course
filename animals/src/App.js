import './css/App.css'
import { useState } from "react";
import AnimalsShow from "./AnimalsShow";


function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalsShow type={animal} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;
