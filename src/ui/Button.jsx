import React from 'react'

export default function Button({typeButton, name}) {
    return (
        <button className="btn btn-lg btn-primary btn-block" type={typeButton}>{name}</button>
    )
}
