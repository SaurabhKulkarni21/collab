import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <Link to = '/' className="brand-logo">C O L A B</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )

}

export default Navbar