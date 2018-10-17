import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="card project-summary">
            <div className="card-content grey-text">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p>{project.gitlink}</p>
            </div>          
        </div>
    )
}

export default ProjectSummary