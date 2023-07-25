import { useState } from "react"

function ClickablePicture({img, imgClicked}) {

    const [imageToDisplay, setImage] = useState(img)
    const changeImage = ()=>{
        if(imageToDisplay === img){
            setImage(imgClicked)
        }else if(imageToDisplay === imgClicked){
            setImage(img)
        }
    }
    return (
        <button onClick={changeImage}><img src={imageToDisplay} alt="image" /></button>
        
    )
}

export default ClickablePicture