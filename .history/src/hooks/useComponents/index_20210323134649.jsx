import React from 'react'
import { get } from 'lodash'

const UseComponents = (status) => (props) => {
    console.log(props, "props")
    const content = get(props, "content", <></>)
    return (
        <>
            {!!status && ( content )}
            { !status && ( <></> ) }
        </>
    )
}

export default UseComponents