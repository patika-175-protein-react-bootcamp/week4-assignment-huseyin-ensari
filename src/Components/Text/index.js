import "../../Styles/Components/Text.css"

const Text = ({ size, children: text }) => {
    let textStyle = "text__white "
    switch (size) {
        case "title":
            textStyle = "text__title"
            break;
        case "large":
            textStyle += "text__large"
            break;
        case "normal":
            textStyle += "text__normal"
            break
        case "xxlarge":
            textStyle += "text__xxlarge"
            break
        case "xlarge":
            textStyle += "text__xlarge"
            break
        case "small":
            textStyle += "text__small"
            break
    }

    return (
        // <span className={textStyle}>{text}</span>
        <span className={textStyle}>{text}</span>
    )
}

export default Text