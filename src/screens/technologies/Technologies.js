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
import {SiCplusplus} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiOracle} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'

function getIcon(name) {
    if (name ==='IoLogoGithub') {
        return <IoLogoGithub size={40}></IoLogoGithub>
    } else if (name ==='FaGitlab') {
        return <FaGitlab size={40}></FaGitlab>
    } else if (name ==='SiJavascript') {
        return <SiJavascript size={40}></SiJavascript>
    } else if (name ==='SiOracle') {
        return <SiOracle size={40}></SiOracle>
    } else if (name ==='SiCss3') {
        return <SiCss3 size={40}></SiCss3>
    } else if (name ==='SiRabbitmq') {
        return <SiRabbitmq size={40}></SiRabbitmq>
    } else if (name ==='SiPrometheus') {
        return <SiPrometheus size={40}></SiPrometheus>
    } else if (name ==='SiGrafana') {
        return <SiGrafana size={40}></SiGrafana>
    } else if (name ==='FaPython') {
        return <FaPython size={40}></FaPython>
    } else if (name ==='SiSpringboot') {
        return <SiSpringboot size={40}></SiSpringboot>
    } else if (name ==='SiKubernetes') {
        return <SiKubernetes size={40}></SiKubernetes>
    } else if (name ==='SiInfluxdb') {
        return <SiInfluxdb size={40}></SiInfluxdb>
    } else if (name ==='SiVirtualbox') {
        return <SiVirtualbox size={40}></SiVirtualbox>
    } else if (name ==='SiVagrant') {
        return <SiVagrant size={40}></SiVagrant>
    } else if (name ==='SiApachemaven') {
        return <SiApachemaven size={40}></SiApachemaven>
    } else if (name ==='FaReact') {
        return <FaReact size={40}></FaReact>
    } else if (name ==='FaHtml5') {
        return <FaHtml5 size={40}></FaHtml5>
    } else if (name ==='FaAws') {
        return <FaAws size={40}></FaAws>
    } else if (name ==='FaJenkins') {
        return <FaJenkins size={40}></FaJenkins>
    } else if (name ==='FaBootstrap') {
        return <FaBootstrap size={40}></FaBootstrap>
    } else if (name ==='GrVmware') {
        return <GrVmware size={40}></GrVmware>
    } else if (name ==='FaDocker') {
        return <FaDocker size={40}></FaDocker>
    } else if (name === 'SiGnubash') {
        return <SiGnubash size={40}></SiGnubash>
    } else if (name === 'SiCplusplus') {
        return <SiCplusplus size={40}></SiCplusplus>
    } else if (name === 'SiJava') {
        return <SiJava size={40}></SiJava>
    } else if (name === 'SiPostgresql') {
        return <SiPostgresql size={40}></SiPostgresql>
    } else if (name === 'SiMysql') {
        return <SiMysql size={40}></SiMysql>
    } else if (name === 'SiMongodb') {
        return <SiMongodb size={40}></SiMongodb>
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
