import React, { useState } from "react"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

import "./style.scss"

const App = () => {
  const [level, setLevel] = useState(0)
  const [bonus, setBonus] = useState(0)
  const [modificators, setModificators] = useState(0)

  const levelUp = () => {
    setLevel((prevState) => prevState + 1)
  }

  const levelDown = () => {
    setLevel((prevState) => prevState - 1)
  }

  const bonusUp = () => {
    setBonus((prevState) => prevState + 1)
  }

  const bonusDown = () => {
    setBonus((prevState) => prevState - 1)
  }

  const modificatorsUp = () => {
    setModificators((prevState) => prevState + 1)
  }

  const modificatorsDown = () => {
    setModificators((prevState) => prevState - 1)
  }

  return (
    <div className="app">
      <div className="app__level">
        <ArrowBackIosIcon className="arrow-up" onClick={levelUp} />
        <div className="app__current">{level}</div>
        <div className="app__description">Level</div>
        <ArrowBackIosIcon className="arrow-down" onClick={levelDown} />
      </div>
      <div className="app__items">
        <ArrowBackIosIcon className="arrow-up" onClick={bonusUp} />
        <div className="app__current">{bonus}</div>
        <div className="app__description">Bonus</div>
        <ArrowBackIosIcon className="arrow-down" onClick={bonusDown} />
      </div>
      <div className="app__items">
        <ArrowBackIosIcon className="arrow-up" onClick={modificatorsUp} />
        <div className="app__current">{modificators}</div>
        <div className="app__description">Modificators</div>
        <ArrowBackIosIcon className="arrow-down" onClick={modificatorsDown} />
      </div>
    </div>
  )
}

export default App
