import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth , profile } = props;
    console.log(profile);
    const links = auth.uid ? <SignedInLinks profile= {profile}/> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper teal" >
            <div className="container" style={{width:'80%'}}>
                <Link to= '/'>
                    <img src={require("../../images/logo-collab2.png")} alt="Logo"/>
                </Link>
                <Link to = '/' className="brand-logo" styles={{paddingRight:'30px'}}>C O L L A B</Link>
                { links }
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)