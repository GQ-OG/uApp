import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    useParams
} from '@hooks'

const Test = (props) => {
    const [store] = useApp()
    return (
        <>
        </>
    )
}

export default Test