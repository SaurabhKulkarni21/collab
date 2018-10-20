import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if(!auth.uid) return <Redirect to ='/' />
  if(project){
      return(
        <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{ project.title }</span>
                    <p>{ project.content }</p>
                    <p>{ project.gitlink }</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                    <div>3rd October, 2018</div>
                </div>
            </div>
        </div>
      )
  }
  else{
    return (
        <div className="container center">
            Loading project .......
        </div>
        )
  }
  
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects =  state.firestore.data.projects;
    const project = projects ? projects[id]: null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
 