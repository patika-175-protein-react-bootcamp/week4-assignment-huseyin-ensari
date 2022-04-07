import { BlackBoard } from '../../Constants/Icons'
import "../../Styles/Components/QuestionBoard.css"
import { Text } from '../../Components'

const QuestionBoard = ({ children: text }) => {
    return (
        <div id='board'>
            <BlackBoard size={650} />
            <span id='question'>
                <Text size={"xlarge"}>{text}</Text>
            </span>
        </div>
    )
}

export default QuestionBoard