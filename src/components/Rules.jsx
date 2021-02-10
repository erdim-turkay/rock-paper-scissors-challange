import RulesTable from '../assets/img/rules-table.svg'
import CloseIcon from '../assets/img/close-icon.svg'
import React,{ useState } from 'react'

const Rules = () => {
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div className="rules-footer">
            <button onClick={() => setOpen(!isOpen)}>RULES</button>
        </div>

      { 
      isOpen ?
      <div className="rules-wrapper">
            <div className="rules-card">
                <div className="rules-card-top">
                    <h1>RULES</h1>
                    <img onClick={() => setOpen(!isOpen)} src={CloseIcon} alt="close-icon" />
                </div>
                <div className="rules-card-image">
                    <img src={RulesTable} alt="rules-table" />
                </div>
            </div>
            <div onClick={() => setOpen(!isOpen)} className="rules-bg">
            </div>
        </div>
        : null
        }
        </>
    )
}

export default Rules