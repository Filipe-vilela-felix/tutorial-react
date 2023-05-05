import React from 'react'

const Hello = () => {
    /*
    return (
        <div class="dummyClass">
            <h1>Hello Vishwas</h1>
        </div>
    )
    */
   return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, "Hello Vishwas"));
}

export default Hello