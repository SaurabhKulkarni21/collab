import React from 'react'

const ProjectDetails = (props) => {
  let id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card">
            <div className="card-content">
                <span className="card-title">Project Title- {id}</span>
                <p>This is the information about the project that will be displayed</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted By Saurabh Kulkarni</div>
                <div>3rd October, 2018</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
