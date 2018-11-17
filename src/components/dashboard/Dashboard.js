import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    
    render(){
        const { projects , auth, notifications, users } = this.props;
        console.log("This is the auth object", auth );
        if (!auth.uid) return <Redirect to= '/signin' />
        return (
            
                <div className = "row">
                    <div className = "col col-projects" style={{width:"60%", marginRight:"10%", marginLeft:"3%"}}>
                        <ProjectList projects = {projects} users={users}/>
                    </div>

                    <div className= "col col-notifications">
                        <Notifications notifications= {notifications}/>
                    </div>
                </div>
        )


    }



}

const  mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
        users: state.firestore.ordered.users
    }
}


export default compose(connect(mapStateToProps),firestoreConnect([
       { collection: 'projects' , orderBy: ['createdAt', 'desc']},
       { collection: 'notifications', limit:3, orderBy:['time', 'desc']},
       { collection: 'users' }
    ])
)(Dashboard)