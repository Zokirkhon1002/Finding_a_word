import React from 'react'

const Header = ({wrongLetters}) => {
    return (
        <>
            <h1>Finding a word</h1>
            <p>Find the hidden word in 10 attemps - Enter a letter</p>
            {wrongLetters.length ? <p>{wrongLetters.length} attemps</p>:''}
        </>
    )
}

export default Header
