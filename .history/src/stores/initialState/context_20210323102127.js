import React, { useReducer, useContext, createContext, Component } from 'react'
import { reducer, initialState } from './reducer'

const AppContext = createContext()

const appProvider = Comment => props => {
    const store = useReducer(reducer, initialState)
    return (
        <AppContext value={store}>
            <Component />
        </AppContext>
    )
}