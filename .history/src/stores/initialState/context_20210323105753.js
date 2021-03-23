import React, { useReducer, useContext, createContext, Component } from 'react'
import { reducer, initialState } from './reducer'

const AppContext = createContext()

const appProvider = Component => props => {
    const store = useReducer(reducer, initialState)
    console.log(props, "types")
    return (
        <AppContext.Provider value={store}>
            <Component {...props} />
        </AppContext.Provider>
    )
}

const useApp = (type) => {
    return useContext(AppContext)
}
export {
    appProvider, useApp
}