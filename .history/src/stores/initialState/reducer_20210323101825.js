import ACTIONS from './action'

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    const { type, data } = action
    switch(type) {
        case ACTIONS.SETSTATE: {
            return {
                ...state,
                ...data
            }
        }
    }
}

export {
    reducer,
    initialState
}