import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseCountainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Togle display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseCountainer
