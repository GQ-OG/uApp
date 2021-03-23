import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'

const Test = (props) => {
    const [store] = useApp()
    console.log(store, "store", useLocation())
    return (
        <>
        </>
    )
}

export default Test