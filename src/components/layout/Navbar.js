import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <Link to = '/' className="brand-logo">C O L L A B</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    console.log(state);
    
    return{

    }
}
export default connect(mapStateToProps)(Navbar)