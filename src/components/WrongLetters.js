import React from 'react'

const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && "Wrong: "}
                <br />
                {wrongLetters.map((letter, index) => (
                <span key={index}>{letter}</span>
                ))
                .reduce((prev,curr)=> prev === null ? [curr]: [prev, ', ',curr], null)}
            </div>
        </div>
    )
}

export default WrongLetters
