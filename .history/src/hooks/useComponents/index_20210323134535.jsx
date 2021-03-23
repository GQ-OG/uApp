import React from 'react'

const UseComponents = (status) => (props) => {
    const { content } = props
    console.log(props, "props")
    return (
        <>
            {/* {!!status && ( content )}
            { !status && ( <></> ) } */}
        </>
    )
}

export default UseComponents