import React from 'react'
import projectData from '../projectData.js'
import linking from '../imgs/linking.png'

import './portfolio.css'


const Portfolio = () => {
    return (
        <div className='about-container'>
            <p className='sub-title'>Portfolio</p>
            <div className='project-list'>
                {projectData.map((x, ind) => {
                    return (<>
                        <div className='card' id={ind}>
                            <div className='img-container'>
                                <img alt="imgg" src={x.img}></img>
                            </div>
                            <div className='card-info'>
                                <div className='card-details'>
                                    <h2>{x.title}</h2>
                                    <p>{x.desc}</p>
                                    <p>{x.stack}</p>
                                </div>
                                <div className='card-links'>
                                    <div className='btns'>
                                        <a target='#' href={x.link}>Website <img alt="imgg" src={linking}></img></a>
                                        <a target='#' href={x.gitHubLink}>Source Code <img alt="imgg" src={linking}></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Portfolio