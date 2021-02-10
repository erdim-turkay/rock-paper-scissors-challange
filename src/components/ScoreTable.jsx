import Logo from '../assets/img/logo.svg'

const ScoreTable = (props) => {
    return(
        <div className="score-table">
            <img src={Logo} alt={"logo"} />
            <div className="score-card">
                <h2>SCORE</h2>
                <h1>{props.score}</h1>
            </div>
        </div>
    )
}

export default ScoreTable