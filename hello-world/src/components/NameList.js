import React from 'react'
import Person from './Person';

function NameList() {
    const names = ["Bruce", "Clarck", "Diana", "Bruce"]
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Clarck",
            age: 25,
            skill: "React"
        },
        {
            id: 3,
            name: "Diana",
            age: 28,
            skill: "React"
        }
    ]

    const nameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>);

    return <div>{nameList}</div>;
}

export default NameList