import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return(
        <div className="card project-summary">
            <div className="card-content grey-text">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p>{project.gitlink}</p>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">
                    { moment(project.createdAt.toDate()).calendar() }
                </p>
            </div>          
        </div>
    )
}

export default ProjectSummary