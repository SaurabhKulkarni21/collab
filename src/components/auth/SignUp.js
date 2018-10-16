import React, { Component } from 'react'

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''

  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  render() {
    return (
      <div className = "container">
          <div className="card">
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
                    <button className="btn grey darken-2">Login</button>
                </div>
                </form>
              </div>
          </div>
        
      </div>
    )
  }
}

export default SignUp
