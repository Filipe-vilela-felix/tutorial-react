import React from 'react'
import Person from './Person';

function NameList() {
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

    const personList = persons.map(person => <Person person={person} />);

    return personList;
}

export default NameList