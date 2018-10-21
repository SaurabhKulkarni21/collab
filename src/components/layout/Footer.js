import React from 'react'
import { SocialIcon } from 'react-social-icons'

const stylesHr = {
    opacity:'0.3',
    marginLeft:'30px',
    marginRight:'30px',

}

const Footer = () => {
    return (
        
        <div className="wrap" style={{height:'60px'}}>
            <hr style={stylesHr}/>
            <p className="center" >
                <SocialIcon style={{ height: 35, width: 35 }} url="https://github.com/SaurabhKulkarni21/collab" />
                <SocialIcon style={{ height: 35, width: 35, marginLeft:'12px'}} url="https://linkedin.com" />
                
            </p>
            
        </div>
        
        
    )
}

export default Footer