import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
    return (
        <div className="personal__info ">
            <h1>What am I?</h1>
            <Typed
                strings={
                    [
                        "A Software Engineer",
                        "Specialized in Distributed Systems"
                    ]}
                typeSpeed={40}
                backSpeed={40}
                loop
            />
        </div>
    )
}

export default Header