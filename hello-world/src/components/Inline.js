import React from 'react'

function Inline() {
    
    const heading = {
        fontSize: "72px",
        color: "blue"
    }

    return(
        <div>
            <h1 className={style.sucess}>Sucess</h1>
            <h1 className="error">Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline;