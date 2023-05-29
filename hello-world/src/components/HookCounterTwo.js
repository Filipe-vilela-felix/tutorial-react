import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

{/* 
    const incrementFive= () => {
        for(let i = 0; i < 5; i ++) {
            setCount(count + 1)
        }
    }        
*/}

    const incremenetFive = () => {
        for(let i = 0; i < 5; i ++) {
            setCount((prevCount) => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <div>
            {/* 
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(count + 1}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            */}
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
                <button onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
                <div>
                    <button onClick={incremenetFive}>Increment by 5</button>
                </div>
            </div>
        </div>
    )
}

export default HookCounter