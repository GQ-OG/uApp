import React from  'react'

const UseComponents = (e) => (props) => {
    const {
        isHide
    } = props
    console.log(props, e)
    return (
        <>
            {isHide ? <></> : props?.content}
        </>
    )
}

export default UseComponents