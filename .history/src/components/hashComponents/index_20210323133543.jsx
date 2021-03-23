import React from  'react'

const UseComponents = (e) => (props) => {
    const {
        isHide
    } = props
    console.log(props, e, "111111")
    return (
        <>
            {isHide ? <></> : props?.content}
        </>
    )
}

export default UseComponents