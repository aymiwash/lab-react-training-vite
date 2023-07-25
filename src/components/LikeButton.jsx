import { useState } from "react"

function LikeButton() {
    const [likes, setLikes] = useState(0)
    const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"]
    let background = colorsArray[likes % colorsArray.length]
    const handleClick = ()=>{ 
        setLikes(likes + 1)
    }

    return (
        <button onClick={handleClick} style={{backgroundColor : background, color : "white"}}>{likes} Likes</button>
    )
}

export default LikeButton