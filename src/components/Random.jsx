function Random({ min, max }) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    return (
        <div>Random value between {min} and {max} = {randomNumber}</div>
    )
}

export default Random