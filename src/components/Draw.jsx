import ScissorsIcon from '../assets/img/scissors.svg'
import PaperIcon from '../assets/img/paper.svg'
import RockIcon from '../assets/img/rock.svg'
import LizardIcon from '../assets/img/lizard.svg'
import SpockIcon from '../assets/img/spock.svg'
import React, { useEffect, useState } from 'react'

const Draw = (props) => {
    const [time, setTime] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTime(true)
        },1000)
    })
  

    return(
        <div className="draw-wrapper">
            <div className={`draw-col ${props.result == "win" && time ? "win-circle": null}`}>
                <h1>YOU PICKED</h1>
                {
                props.playerPick == "rock" ? 
                <img src={RockIcon} /> : 
                props.playerPick == "paper" ? 
                <img src={PaperIcon} /> :
                props.playerPick == "scissors" ? 
                <img src={ScissorsIcon} /> : 
                props.playerPick == "lizard" ? 
                <img src={LizardIcon} /> : 
                props.playerPick == "spock" ? 
                <img src={SpockIcon} /> : 
                null
                }
            </div>
            { time ? <div className="draw-result">
                <h2>{
                props.result == "win" ? "YOU WIN" :
                props.result == "lose" ? "YOU LOSE" :
                props.result == "tie" ? "TIE GAME": 
                null   
                }
                </h2>
                <button onClick={props.playAgain}>PLAY AGAIN</button>
            </div> : null}
            <div className={`draw-col ${props.result == "lose" && time ? "win-circle": null}`}>
                <h1>THE HOUSE PICKED</h1>
                {time ?
                props.computerPick == "rock" ? 
                <img src={RockIcon} /> : 
                props.computerPick == "paper" ? 
                <img src={PaperIcon} /> :
                props.computerPick == "scissors" ? 
                <img src={ScissorsIcon} /> : 
                props.computerPick == "lizard" ? 
                <img src={LizardIcon} /> : 
                props.computerPick == "spock" ? 
                <img src={SpockIcon} /> : 
                null
                : 
                <div className="pick-circle"></div>
                 }
            </div>
        </div>
    )
}

export default Draw