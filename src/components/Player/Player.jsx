import classes from "./Player.module.scss"
import React from "react"

function Player(props) {
  return (
    <div className={classes.container}>
      <div className={classes.player_name}>{props.player}</div>
      <div className={classes.player_score}>score:{props.score}</div>
    </div>
  )
}

export default Player
