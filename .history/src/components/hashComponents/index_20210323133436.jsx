import React from  'react'

const UseComponents = (e) => (props) => {
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