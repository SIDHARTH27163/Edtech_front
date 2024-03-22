import React from 'react'

function Custom_h1(props) {
    return (
        <h1 className={`my-2`+props.className}>{props.text}</h1>
    )
}

export default Custom_h1
