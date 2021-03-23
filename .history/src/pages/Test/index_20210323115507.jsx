import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query
} from '@hooks'
import HashComponent from '@components/HashComponent'

const Test = (props) => {
    const [store] = useApp()
    return (
        <>
        </>
    )
}

export default Test