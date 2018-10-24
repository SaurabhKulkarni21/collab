import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import makeAnimated from 'react-select/lib/animated';
import Select from 'react-select'



const optionsSelect = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
  input: styles => {
    return {
      ...styles,
      height: '2.5em'

  };
}
}


class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    gitlink: '',
    collaborators: []
  }

  
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      collaborators: [e]
    })

    console.log(this.state)
    // this.setState({
    //     [e.target.id]: e.target.value
    // })
  }

  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to ='/signin' />
    return (
      <div className = "container" style={{height:'992px'}}>
        <div className="card" style= {{marginTop:'20px'}}>
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
            <label htmlFor="collaborators">Github Link</label>
            <Select isMulti 
                    components={makeAnimated()}
                    options={optionsSelect}
                    closeMenuOnSelect={false}
                    styles={customStyles}
                    placeholder='Select collaborators for this project'  
                    onChange={this.handleChange}
            />
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
const  mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
