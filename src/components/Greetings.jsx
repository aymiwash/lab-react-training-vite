function Greetings({ lang, children }) {
    let greetingMessage
    switch (lang) {
        case "de": greetingMessage = "Hallo"
            break;
        case "en": greetingMessage = "Hello"
            break;
        case "es": greetingMessage = "Hola"
            break;
        case "fr": greetingMessage = "Bonjour"
            break;
    }

    return (
        <h1>{greetingMessage} {children} !</h1>
    )
}

export default Greetings