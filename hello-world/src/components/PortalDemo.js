import React from 'react';
import { createPortal } from 'react-dom' 

function PortalDemo() {
    return createPortal (
        <h1>
            Portals demo
        </h1>,
        document.body
    )
}

export default PortalDemo