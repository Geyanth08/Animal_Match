import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';
import match2 from './img/match-2.jpg';
import match5 from './img/match-5.jpg';
import match6 from './img/match-6.jpg';
import match7 from './img/match-7.jpg';
import match9 from './img/match-9.jpg';
import match10 from './img/match-10.jpg';
import match11 from './img/match-11.jpg';
import match12 from './img/match-12.jpg';

const cardImages = [
  { 'src' : match2 , matched : false },
  { 'src' : match5 , matched : false },
  { 'src' : match6 , matched : false },
  { 'src' : match7 , matched : false },
  { 'src' : match9 , matched : false },
  { 'src' : match10 , matched : false },
  { 'src' : match11 , matched : false },
  { 'src' : match12 , matched : false },
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null); 
  const [choice2, setChoice2] = useState(null); 
  const [disabled, setDisabled] = useState(false);

  // Shuffling Cards
  const shuffleCards = () => {
    const shuffle = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id : Math.random() }))
    
    setChoice1(null);
    setChoice2(null);
    setCards(shuffle);
    setTurns(0);
  }

  // Handling the TWO choices
  const handleTwoChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  }

  // Checking selected TWO choices
  useEffect(()=>{
    if(choice1 && choice2){
      setDisabled(true);
      if(choice1.src === choice2.src){

        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choice1.src){
              return {...card, matched : true}
            }else{
              return card
            }
          })
        })
        resetValues();
      }else{
        setTimeout(()=> resetValues(),1000);
      }
    }
  },[choice1,choice2]);

  // Reset Values
  const resetValues = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  // Start a new Game
  useEffect(()=>{
    shuffleCards();
  },[])

  return (
    <div className="app">
      <h1>Animal Match</h1>
      <div className="app__subheader">
        <button onClick={shuffleCards}>New Game</button>
        <p>Turns : {turns}</p>
      </div>

      <div className="app__cards">
        {cards.map(card => ( 
          <Card 
            key={card.id} 
            cardInfo={card} 
            handleChoices={handleTwoChoice} 
            flip={ card === choice1 || card === choice2 || card.matched }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
