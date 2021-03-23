import React from 'react'

const UseComponents = (status) => (props) => {
    const { content } = props
    return (
        <>
            {!!status && ( content )}
            { !status && ( <></> ) }
        </>
    )
}

export default UseComponents