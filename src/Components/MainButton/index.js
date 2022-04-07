import React from 'react'
import { WideCircle } from '../../Constants/Icons'
import { Text } from '../index'
import "../../Styles/Components/Button.css"

const MainButton = ({ children: text }) => {
    return (
        <div className='container__relative'>
            <WideCircle />
            <span className='align__center'>
                <Text size="large">{text}</Text>
            </span>
        </div>
    )
}

export default MainButton