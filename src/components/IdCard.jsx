function IdCard({lastName, firstName, gender, height, birth, picture}) {
    const formattedDate = birth.toDateString()
    return (
        <div>
            <img src={picture} alt={firstName} />
            <ul>
                <li>First name: {firstName}</li>
                <li>Last name: {lastName}</li>
                <li>Gender: {gender}</li>
                <li>Height: {height}</li>
                <li>Birth: {formattedDate}</li>
            </ul>
        </div>
    )
}

export default IdCard