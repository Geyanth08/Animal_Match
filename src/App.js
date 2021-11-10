import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

const cardImages = [
  { 'src' : '/img/match-2.jpg', matched : false },
  { 'src' : '/img/match-5.jpg', matched : false },
  { 'src' : '/img/match-6.jpg', matched : false },
  { 'src' : '/img/match-7.jpg', matched : false },
  { 'src' : '/img/match-9.jpg', matched : false },
  { 'src' : '/img/match-10.jpg', matched : false },
  { 'src' : '/img/match-11.jpg', matched : false },
  { 'src' : '/img/match-12.jpg', matched : false },
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
