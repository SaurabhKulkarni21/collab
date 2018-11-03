import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

let optionsSelect = [
  
];

const customStyles = {
  container: (base) => ({
    ...base,
    paddingTop:'6px'
  }),
  valueContainer: (base) => ({
    ...base,
    height:'45px'
  })
}


class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    gitlink: '',
    selectedOption: null
  }

  
  handleSubmit = (e) => {
    console.log("This is e", e)
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/')
  }
  handleChangeSelect = (selectedOption) => {
    this.setState({
      ...this.state,
      selectedOption: selectedOption
    })

    for(var i=0; i< selectedOption.length;i++){
      console.log(selectedOption[i].value);
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }



  render() {
    const { auth , users} = this.props;
    let options = []
    {users && users.map(item => {
      options.push({'value':`${item.firstName} ${item.lastName}`, 'label':`${item.firstName} ${item.lastName}`})
      console.log("This are the optons", options);
    })} 
    const { selectedOption } = this.state;
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

                <div id="select-box">
                  <label htmlFor="collaborators" style={{'fontSize':'15.5px'}}>Collaborators</label>
                  <span> 
                      <Select
                        styles = {customStyles}
                        value={selectedOption}
                        onChange={this.handleChangeSelect}
                        options={options}
                        isMulti='true'
                      />
                  </span>
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
    auth: state.firebase.auth,
    users: state.firestore.ordered.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default compose(connect(mapStateToProps,mapDispatchToProps), firestoreConnect(
    [
    {collection: 'users'}
    ]
)
)(CreateProject)
