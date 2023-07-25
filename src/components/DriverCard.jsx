import Rating from "./Rating"

function DriverCard({name, rating, img, car}) {
    return (
        <div>
            <img src={img} alt={name} style={{height : '100px'}}/>
            <ul>
                <li>{name}</li>
                <li><Rating>{rating}</Rating></li>
                <li>{car.model}-{car.licensePlate}</li>
            </ul>
        </div>
    )
}

export default DriverCard