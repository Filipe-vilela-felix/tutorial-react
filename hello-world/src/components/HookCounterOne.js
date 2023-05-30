import React, { useState, useEffect } from "react";

function HookCounterOne() {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log("useEffect()")
    })
    
    return (
        <div>
            <button onClick={() => setCount((prevState) => prevState +  1)}>
                Click {count} times
            </button>
        </div>
    )
}

export default HookCounterOne