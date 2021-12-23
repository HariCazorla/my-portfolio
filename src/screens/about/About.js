import React from 'react'
import './about.css'
import person from '../../images/Me.jpg'

function About() {
    return (
        <div className='about__container' id='about-me'>
            <div>
                <img src={person} alt='Shree Hari icon'></img>
            </div>            
            <div className='about__text'>
                <h1>About Me</h1>
                <p>Applying simple, yet comprehensive algorithms to solve real-world problems fascinate me. Over the course of
time, I have enjoyed learning programming languages such as C++, JAVA, and Python. Currently, I am pursuing my
specialization in Distributed Systems Engineering and this has been a wonderful experience so far and it has
enabled me to think at scale in approaching any problem scenario.</p>

                <p>My primary area of focus is the development of scalable, highly available fault-tolerant services. I am someone who never
hesitates to learn new things and likes challenging work, and like to be a part of all aspects of the software
development process, ranging from development, testing and CI/CD aspects.</p>
            </div>
        </div>
    )
}

export default About
