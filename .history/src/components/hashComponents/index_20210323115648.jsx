import React from  'react'

const UseComponents = (props) => {
    const {
        isHide
    } = props
    console.log(props, "props")
    return (
        <>
            {isHide ? <></> : props?.content}
        </>
    )
}

export default UseComponents