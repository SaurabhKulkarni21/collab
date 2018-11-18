import React, { Component } from 'react'
// import Collapsible from 'react-collapsible';

class ViewCommit extends Component{

    
    state = {
        viewCommitsClicked: false
      }

    handleViewCommitClick= () => {
        this.setState({
            viewCommitsClicked: !this.state.viewCommitsClicked
        })
    }
    
    render(){
        return(
            <div className="view-commits">
                <button className="btn grey darken-2" onClick={this.handleViewCommitClick}>
                    View Commits
                </button>
                {this.state.viewCommitsClicked ? 
                    <div className="content">
                        <p>Hey i am being printed because the button was clicked</p>
                    </div> : 
                        <div></div>
                }
                {/* <Collapsible trigger="here" triggerClassName="btn">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible> */}
            </div>
        );
    }
      
    }

export default ViewCommit;

