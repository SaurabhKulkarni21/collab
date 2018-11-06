import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Random } from 'react-animated-text'

const styleWelcome = {
    align:'center',
    padding: '0em 1em 0em 11em',
    width: '80%',
    fontSize: '2.5rem',
    opacity:'0.3'
  }
  
  const styleContent = {
    marginBbottom:'1em',
    width:'90%',
    fontSize: '2.5rem',
    opacity:'0.3',
    paddingLeft:'120px'
  }

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''

  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state);
    
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  render() {
    const { auth } = this.props;
    if(auth.uid) return <Redirect to= '/' />
    return (
    <div className = "container" style={{height:'992px'}}>
        <div style={styleWelcome}>
            <Random
                text="COLLAB"
                effect="verticalFadeIn"
                effectDuration='0.8'
                iterations={1}
                effectDirection="up"
                effectChange={2.0}
            />
        </div>

        <div style={styleContent}>
            <Random
                text="One place to collaborate on your projects."
                effect="verticalFadeIn"
                effectDuration='0.8'
                iterations={1}
                effectDirection="up"
                effectChange={2.0}
            />
        </div>


        <div className="card" style= {{marginTop:'20px', width:'45%', marginLeft:'26%'}}>
            <div className="card-content">
            <form className="white" onSubmit= {this.handleSubmit}>
            <h5 className ="grey-text text-darken-3">Sign Up</h5>

            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <button className="btn grey darken-2">Sign up</button>
            </div>
            </form>
            </div>
        </div>
        
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
