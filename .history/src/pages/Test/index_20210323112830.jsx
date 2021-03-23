import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query
} from '@hooks'
import {
    Button
} from 'antd-mobile'

const Test = (props) => {
    const [store] = useApp()
    console.log(query)
    return (
        <>
            <Button>1111111</Button>
        </>
    )
}

export default Test