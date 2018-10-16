import React, { Component } from 'react'

class CreateProject extends Component {

  state = {
    title: '',
    content: '',
    gitLink: ''
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
            <h5 className ="grey-text text-darken-3">Create New Project</h5>

            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor="content">Project Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>

            <div className="input-field">
                <label htmlFor="gitlink">Github Link</label>
                <input type="text" id="gitLink" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <button className="btn grey darken-2">Create Project</button>
            </div>
            </form>
            </div>
        </div>
        
      </div>
    )
  }
}

export default CreateProject
