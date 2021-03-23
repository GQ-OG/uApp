import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'

const Test = (props) => {
    const [store] = useApp()
    console.log(store, "store")
    return (
        <>
        111111
        </>
    )
}

export default Test