import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const styles = {
    fontSize: '18px'
}
const SignedInLinks = (props) => {
    const initials = props.profile.initials;

    return (
        <ul className="right">
            <li><NavLink to ='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to ='/' className='btn btn-floating grey darken-2' style = {styles}>{ initials }</NavLink></li>
        </ul>
    )

}


const  mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)