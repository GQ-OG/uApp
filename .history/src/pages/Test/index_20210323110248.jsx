import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation, useParams } from 'react-router-dom'

const Test = (props) => {
    const [store] = useApp()
    console.log(store, "store")
    return (
        <>
        </>
    )
}

export default Test