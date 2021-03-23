import React, { useReducer, useContext, createContext, Component } from 'react'
import { reducer, initialState } from './reducer'

const AppContext = createContext()

const appProvider = Component => props => {
    const store = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={store}>
            <Component {...props} />
        </AppContext.Provider>
    )
}

const useApp = () => useContext(AppContext)
export {
    appProvider, useApp
}