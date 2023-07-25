import { useState } from "react"

const giveRandomNum = () => {
    return Math.floor(Math.random() * 6 + 1)
}


function Dice() {
    let timeoutId
    const [faceDice, setDice] = useState(giveRandomNum)
    const handleDice = () => {
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        setDice(0)
        timeoutId = setTimeout(() => {
            setDice(giveRandomNum)
        }, 1000)
    }
    return (
        <button onClick={handleDice} ><img style={{height: "200px"}} src={`/dice${faceDice}.png`} alt="dice" /></button>
    )
}

export default Dice