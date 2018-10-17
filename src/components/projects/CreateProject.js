import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {

  state = {
    title: '',
    content: '',
    gitlink: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
    
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
                <input type="text" id="gitlink" onChange={this.handleChange}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
