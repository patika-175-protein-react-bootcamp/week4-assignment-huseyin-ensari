import React from 'react'
import { Circle } from '../../Constants/Icons'
import { Text } from '../index'
import "../../Styles/Components/Button.css"

const AnswerButton = ({ children: text }) => {
    return (
        <div className='container__relative'>
            <Circle size={150} />
            <span className='align__center'>
                <Text size="large">{text}</Text>
            </span>
        </div>
    )
}

export default AnswerButton