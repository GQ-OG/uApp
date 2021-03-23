import React from 'react'

const UseComponents = (status) => (props) => {
    console.log(props, "props", content)
    const { content } = props
    return (
        <>
            {!!status && ( content )}
            { !status && ( <></> ) }
        </>
    )
}

export default UseComponents