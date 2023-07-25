function Rating({ children }) {
    let stars = ""
    const coloredStars = Math.round(children)
    if (coloredStars > 0) {
        for (let i = 0; i < 5; i++) {
            if (i < coloredStars) {
                stars += "★";
            } else {
                stars += "☆";
            }
        }
    }
    return (
        <div>{stars}</div>
    )
}

export default Rating