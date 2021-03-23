import React from  'react'

const UseComponents = (props) => {
    const {
        isHide
    } = props
    return (
        <>
            {isHide ? <></> : props?.content}
        </>
    )
}

export default UseComponents