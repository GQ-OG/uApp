import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query,
    useComponent
} from '@hooks'
import {
    Button
} from 'antd-mobile'
import request from 'umi-request'

const Test = (props) => {
    useEffect(() => {
        request.post("/test-api/hhhhhh")
        request.post("/test-api/aaaaaa")
    })
    const [store] = useApp()
    const Com1 = useComponent(true)
    return (
        <>
        </>
    )
}

export default Test