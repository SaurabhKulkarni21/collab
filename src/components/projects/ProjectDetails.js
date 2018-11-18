import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ViewCommit from './ViewCommit';

const ProjectDetails = (props) => {
  console.log(props);
  const { project, auth } = props;
  if(!auth.uid) return <Redirect to ='/' />
  if(project){
      return(
        <div className="container section project-details" style={{height:'992px'}}>
            <div className="card">
                {/* Div for card content */}
                <div className="card-content">
                    <span className="card-title">
                        <p className = "labels" style={{opacity:"0.45"}}>Title</p>
                        { project.title }
                    </span>

                    <span className ="card-title">
                        <p className = "labels" style={{opacity:"0.45"}}>Content</p>
                        <p style={{fontSize:"18px"}}>{ project.content }</p>
                    </span>
                
                    <span className ="card-title">
                        <p className = "labels" style={{opacity:"0.45"}}>Github Link</p>
                        <p><a href={"https://"+project.gitlink} style={{color:"teal"}}>{ project.gitlink }</a></p>
                    </span>
                </div>
                {/* Div for footer or actions of the card  */}
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                    <div className="row">
                        <span className="col" style={{paddingLeft:"0px"}}>
                            <p className = 'grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* View commits component */}
            <ViewCommit />
            
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
 