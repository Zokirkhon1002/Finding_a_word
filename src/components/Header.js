import React from 'react'

const Header = ({wrongLetters}) => {
    return (
        <>
            <h1>Finding a word</h1>
            <p>Find the hidden word in 10 attempts - Enter a letter</p>
            {wrongLetters.length ? <p>{wrongLetters.length} attempts</p>:''}
        </>
    )
}

export default Header
