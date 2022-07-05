import React from 'react'
export default function Nums(props) {
    return <div onClick={props.click} className="btns">{props.symbol}</div>
}