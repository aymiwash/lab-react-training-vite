function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) {
    let securedNumber
    if(number){
        securedNumber = "************" + number.slice(-4)
    }
    return (
        <div style={{backgroundColor: bgColor, color: color}}>
            <p>{type}</p>
            <h2>{securedNumber}</h2>
            <p>Expires {expirationMonth}/{expirationYear}</p> 
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard