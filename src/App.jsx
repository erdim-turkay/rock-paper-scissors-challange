import React, {useEffect, useState} from 'react'
import {ScoreTable, Rock, Paper, Scissors,Spock, Lizard, Rules, Draw} from './components'

const App = () => {
    const [score, setScore] = useState()
    const [playerPick, setPlayerPick] = useState("")
    const [computerPick, setComputerPick] = useState("")
    const [game, setGame] = useState("")
    const [result, setResult] = useState("")

  
    useEffect(() => {
      const score = localStorage.getItem("score")
      if(score == null) {
        localStorage.setItem("score", 0)
      }
      setTimeout(() => {
        setScore(JSON.parse(localStorage.getItem("score"))) 
      },1000)
    },[result])

    useEffect(() => {
      setScore(JSON.parse(localStorage.getItem("score"))) 
    },[])
 

    useEffect(() => { 
      if(!playerPick == ""){
        const getRandomPick = (min,max) => {
          return Math.random() * (max - min) + min;
        }
       const RandomPick = Math.floor(getRandomPick(0,5))
       switch (RandomPick) {
         case 0: 
          setComputerPick("rock");
          break
         case 1:
          setComputerPick("paper")
          break
         case 2:
          setComputerPick("scissors")
          break
         case 3:
          setComputerPick("lizard")
          break
         case 4: 
          setComputerPick("spock")
          break
       }
      }
    }, [playerPick])


    useEffect(() => {
      if(!computerPick == "" || !playerPick == ""){
        setGame({player: playerPick, computer: computerPick})
      }
    },[computerPick])

    useEffect(() => {
      if(!game == ""){

        const win = () => {
          setResult("win")
          const getScore = JSON.parse(localStorage.getItem("score"))
          
          setTimeout(() => {
            localStorage.setItem("score" , getScore + 1)
          }, 1000)
        }
        
        const lose = () => {
          setResult("lose")
        }

        const tie = () => {
          setResult("tie")
        }

        switch(true){

          //PAPER WIN 
          case game.player == "paper" && game.computer == "rock":
            win()
            break
          case game.player == "paper" && game.computer == "spock":
            win()
            break
          // PAPER LOSE
          case game.player == "paper" && game.computer == "lizard":
            lose()
            break
          case game.player == "paper" && game.computer == "scissors":
            lose()
            break

          // ROCK WIN
          case game.player == "rock" && game.computer == "lizard":
            win()
            break
          case game.player == "rock" && game.computer == "scissors":
            win()
            break
          // ROCK LOSE
          case game.player == "rock" && game.computer == "spock":
            lose()
            break
          case game.player == "rock" && game.computer == "paper":
            lose()
            break

          // SCISSORS WIN
          case game.player == "scissors" && game.computer == "paper":
            win()
            break
          case game.player == "scissors" && game.computer == "lizard":
            win()
            break
          // SCISSORS LOSE
          case game.player == "scissors" && game.computer == "spock":
            lose()
            break
          case game.player == "scissors" && game.computer == "rock":
            lose()
            break

           // SPOCK WIN
           case game.player == "spock" && game.computer == "scissors":
            win()
            break
          case game.player == "spock" && game.computer == "rock":
            win()
            break
           // SPOCK LOSE
           case game.player == "spock" && game.computer == "paper":
            lose()
            break
          case game.player == "spock" && game.computer == "lizard":
            lose()
            break
            // LIZARD WIN
            case game.player == "lizard" && game.computer == "spock":
              win()
              break
            case game.player == "lizard" && game.computer == "paper":
              win()
              break
             // LIZARD LOSE
             case game.player == "lizard" && game.computer == "rock":
              lose()
              break
            case game.player == "lizard" && game.computer == "scissors":
              lose()
              break
          
          // TIE
        
          case game.player == "scissors" && game.computer == "scissors":
          tie()
          break

          case game.player == "rock" && game.computer == "rock":
          tie()
          break

          case game.player == "paper" && game.computer == "paper":
          tie()
          break

          case game.player == "lizard" && game.computer == "lizard":
          tie()
          break
          
          case game.player == "spock" && game.computer == "spock":
          tie()
          break
        }
      }
    },[game])

    const resetGame = () => {
        setPlayerPick("")
        setComputerPick("")
        setGame("")
        setResult("")
    }

    return(
        <>
        <ScoreTable score={score}/>
      { 
      playerPick == "" && computerPick == "" ? 
        <div className="hand-select-wrapper">
          <div className="hand-select-top">
            <Scissors click={() => setPlayerPick("scissors")}/>
          </div>
          <div className="hand-select-center">
            <Spock click={() => setPlayerPick("spock")}/>
            <Paper click={() => setPlayerPick("paper")}/>
          </div>
          <div className="hand-select-bottom">
            <Lizard click={() => setPlayerPick("lizard")}/>
            <Rock click={() => setPlayerPick("rock")}/>
          </div>
        </div> : 
        <Draw playAgain={() => resetGame()} result={result} playerPick={playerPick} computerPick={computerPick}/>
        }
        <Rules/>
        </>
    )
}

export default App