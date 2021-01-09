import React, { useState, useEffect } from "react"
import classes from "./GamePage.module.scss"
import cards from "../../data/cardInfo"
import Card from "../../components/Card/Card"
import Player from "../../components/Player/Player"

function GamePage() {
  const [allCards, setAllCards] = useState([])
  // shuffle cards function
  const shuffle = (array) => {
    let arrayLength = array.length,
      randomIndex,
      tempItem
    for (let i = arrayLength - 1; i >= 0; i--) {
      randomIndex = Math.floor(Math.random() * (i + 1))
      tempItem = array[randomIndex]
      array[randomIndex] = array[i]
      array[i] = tempItem
    }
    return array
  }

  useEffect(() => {
    let dubbleCards = cards.concat(cards)
    console.log(dubbleCards)
    setAllCards(shuffle(dubbleCards))
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.title}>Memory Card </div>
      <p style={{ color: "grey" }}>Alpha v0.1</p>
      <div className={classes.gameWindow}>
        {allCards.map((card, i) => {
          return <Card image={card.image} key={i} />
        })}
      </div>
      <div className={classes.playerone}>
        <Player player={"player1"} score={"1"} />
      </div>
      <div className={classes.playertwo}>
        <Player player={"player2"} score={"10"} />
      </div>
    </div>
  )
}

export default GamePage
