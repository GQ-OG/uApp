import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query
} from '@hooks'
import HashComponent from '@components/hashComponents'

const Test = (props) => {
    const [store] = useApp()
    return (
        <>
            <HashComponent
            isHide={true}
            content={(
                <div>111111</div>
            )}
            />
        </>
    )
}

export default Test