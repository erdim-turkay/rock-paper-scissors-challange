import ScissorsIcon from '../assets/img/scissors.svg'
import PaperIcon from '../assets/img/paper.svg'
import RockIcon from '../assets/img/rock.svg'
import LizardIcon from '../assets/img/lizard.svg'
import SpockIcon from '../assets/img/spock.svg'


const Rock = (props) => {
    return (
        <img src={RockIcon} onClick={props.click} alt={"rock-icon"}/>
    )
}

const Scissors = (props) => {
    return (
        <img src={ScissorsIcon} onClick={props.click} alt={"scissors-icon"}/>
    )
}

const Paper = (props) => {
    return (
        <img src={PaperIcon} onClick={props.click} alt={"paper-icon"}/>
    )
}

const Spock = (props) => {
    return (
        <img src={SpockIcon} onClick={props.click} alt={"spock-icon"}/>
    )
}

const Lizard = (props) => {
    return (
        <img src={LizardIcon} onClick={props.click} alt={"lizard-icon"}/>
    )
}

export {Rock, Scissors, Paper, Spock, Lizard}