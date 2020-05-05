import React, { useState } from 'react'

const styles = {
    textAlign: 'center'
}

const Toggle = () => {

    const[isOn, setOn] = useState(false)

    const toggle = () => {
        setOn(!isOn)
    }

    const toggle2 = function() {
        setOn(!isOn)
    }

    return(
        <div style={styles}>
            <h3>{isOn ? "ON" : "OFF"}</h3>
            <button onClick={toggle2}>
                Toggle
            </button>
        </div>
    )    
}

export default Toggle;