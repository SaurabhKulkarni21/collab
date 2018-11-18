import React from 'react'
import { SocialIcon } from 'react-social-icons'

const stylesHr = {
    opacity:'0.3',
    marginLeft:'30px',
    marginRight:'30px'
}



const Footer = () => {
    return (
        
            <footer className="page-footer white">  
                <hr style={stylesHr}/>  
                <div className="col" style={{marginLeft:'47%', marginTop:'7px'}}>
                        <SocialIcon style={{ height: 35, width: 35}} url="https://github.com/SaurabhKulkarni21/collab" />
                        <SocialIcon style={{ height: 35, width: 35, marginLeft:'12px' }} url="https://linkedin.com" />        
                </div>
                
            </footer>
                
               
                
        
        
        
        
    )
}

export default Footer

