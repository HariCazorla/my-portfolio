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
                <p>I am passionate about applying simple yet effective algorithms to solve real-world problems. With over 7 years of experience
        as a Software Engineer at leading companies such as Micro Focus, Dell, SAP, Fraunhofer IVI, and currently at 1&1, I have honed my skills
        in building scalable and efficient solutions. My specialization in Distributed Systems Engineering, backed by a Master’s degree from TU
        Dresden, has been a transformative experience that enables me to approach complex problems with a large-scale mindset.</p>

                <p>My primary focus is on developing robust distributed systems that ensure seamless scalability and resilience. I thrive on 
            challenging work and never hesitate to learn new technologies and methodologies. I enjoy being involved in all aspects of the software
                development lifecycle, from development and testing to CI/CD, ensuring that the solutions I build are both efficient and reliable.</p>
            </div>
        </div>
    )
}

export default About
