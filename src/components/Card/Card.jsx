import React, { useState } from "react"
import classes from "./Card.module.scss"

function Card({ image }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={classes.container}
      onClick={() => handleClick()}
      style={
        !isOpen
          ? {
              backgroundImage: `url(${
                require("../../images/cardBack.jpg").default
              })`,
            }
          : { backgroundImage: `url(${image.default})` }
      }
    ></div>
  )
}

export default Card
