import React from 'react';
import './Card.css';

function Card({cardInfo, handleChoices, flip, disabled }) {

    const handleClick = () => {
        if(!disabled){
            handleChoices(cardInfo);
        }
    }

    const flipStatus = flip ? "flipped" : "";
    
    return (
        <div className="card">
            <div className={"card__img " + flipStatus}>
              <img 
                src={cardInfo.src} 
                alt="card front" 
                className="card__front" 
              />
              <img 
                src="/img/card-back.jpg" 
                alt="card back" 
                className="card__back" 
                onClick={handleClick} 
              />
            </div>
        </div>
    )
}

export default Card;
