import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query
} from '@hooks'

const Test = (props) => {
    const [store] = useApp()
    console.log(useParams)
    return (
        <>
        </>
    )
}

export default Test