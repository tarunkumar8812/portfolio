import React from 'react'
import "./projectlist.css"
import linking from '../imgs/linking.png'
import projectData from '../projectData.js'

projectData.sort((a, b) => { return b.id - a.id })


const ProjectList = () => {
  return (
    <>
      <div className='pricing'>
        <div className='card-container'>
          {projectData.map((x, ind) => {
            return (
              <>
                <div key={ind} className='card'>
                  <div className='project-img'><img src={x.img} alt={x.title}></img></div>

                  <div className='details'>
                    <p >{x.stack}</p>
                    <p >{x.desc}</p>
                  </div>
                  <a className='project-link' href={x.link} > {x.title} <img src={linking} alt="link"></img></a>
                </div>
              </>
            )
          })
          }
        </div>
      </div>

    </>



  )
}

export default ProjectList
