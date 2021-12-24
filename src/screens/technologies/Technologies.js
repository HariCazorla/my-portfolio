import React from 'react'
import {technologies} from '../../helpers/technologies' 
import './technologies.css'
import { IoLogoGithub } from 'react-icons/io';
import { FaGitlab } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { SiRabbitmq } from 'react-icons/si';
import { SiPrometheus } from 'react-icons/si';
import { SiGrafana } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { SiKubernetes } from 'react-icons/si';
import { SiInfluxdb } from 'react-icons/si';
import { SiVirtualbox } from 'react-icons/si';
import { SiVagrant } from 'react-icons/si';
import { SiApachemaven } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaJenkins } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { GrVmware } from 'react-icons/gr';
import {SiGnubash} from 'react-icons/si'

function getIcon(name) {
    if (name ==='IoLogoGithub') {
        return <IoLogoGithub size={80}></IoLogoGithub>
    } else if (name ==='FaGitlab') {
        return <FaGitlab size={80}></FaGitlab>
    } else if (name ==='SiRabbitmq') {
        return <SiRabbitmq size={80}></SiRabbitmq>
    } else if (name ==='SiPrometheus') {
        return <SiPrometheus size={80}></SiPrometheus>
    } else if (name ==='SiGrafana') {
        return <SiGrafana size={80}></SiGrafana>
    } else if (name ==='FaPython') {
        return <FaPython size={80}></FaPython>
    } else if (name ==='SiSpringboot') {
        return <SiSpringboot size={80}></SiSpringboot>
    } else if (name ==='SiKubernetes') {
        return <SiKubernetes size={80}></SiKubernetes>
    } else if (name ==='SiInfluxdb') {
        return <SiInfluxdb size={80}></SiInfluxdb>
    } else if (name ==='SiVirtualbox') {
        return <SiVirtualbox size={80}></SiVirtualbox>
    } else if (name ==='SiVagrant') {
        return <SiVagrant size={80}></SiVagrant>
    } else if (name ==='SiApachemaven') {
        return <SiApachemaven size={80}></SiApachemaven>
    } else if (name ==='FaReact') {
        return <FaReact size={80}></FaReact>
    } else if (name ==='FaHtml5') {
        return <FaHtml5 size={80}></FaHtml5>
    } else if (name ==='FaAws') {
        return <FaAws size={80}></FaAws>
    } else if (name ==='FaJenkins') {
        return <FaJenkins size={80}></FaJenkins>
    } else if (name ==='FaBootstrap') {
        return <FaBootstrap size={80}></FaBootstrap>
    } else if (name ==='GrVmware') {
        return <GrVmware size={80}></GrVmware>
    } else if (name ==='FaDocker') {
        return <FaDocker size={80}></FaDocker>
    } else if (name === 'SiGnubash') {
        return <SiGnubash size={80}></SiGnubash>
    }
}

function Technologies() {
    return (
        <div className='technologies__container' id='technologies'>
            <div>
                <h1 style={{textAlign: 'center'}}>I am familiar with the following Technologies</h1>
            </div>
            <div className='cards__container'>
                {
                    technologies.map((object, idx) => {
                        return (
                            <div key={idx} className='cards'>
                            {
                                getIcon(object.iconName)
                            }
                            <span style={{margin:'5px', fontSize:'1.5rem'}}>{object.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Technologies
