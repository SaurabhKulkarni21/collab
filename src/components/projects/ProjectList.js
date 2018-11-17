import React from 'react'
import ProjectSummary from './ProjectSummary'
import Link from 'react-router-dom/Link';

const drawDivs = (projects, users) => {
   const tempUserLogged = "vicky shetye";
   console.log("This are the users", users);
   const projectList = projects ? projects : [];
   console.log("This is firstProject", projectList[0]);
   const divList = [];
   const length = projects && projects.length;
   console.log("This is length",length);
   var projectIndices = [];
   
   for(var i=0; i<= length-1; i++){
       console.log("This is the current iteration", i);
       console.log("This is the user that is logged in", tempUserLogged);

       if(projectList[i].collaborators[0].value === tempUserLogged){
            projectIndices.push(i);
       }
    }
    
    for(var j=0; j<= projectList.length-1; j++){
        divList.push(
            <div className ="row">
                <div className = "col" style = {{width:"50%"}} id={projectList[j].id}>
                     <Link to ={'/projects/'+projectList[j].id} key={projectList[j].id}>
                     <ProjectSummary project={projectList[j]}></ProjectSummary>
                     </Link>
                </div>
            </div>
        );
    }
    // let rowCount = Math.floor((allRowProj.lengt/2)) + (allRowProj % 2);

    // for(var j = 0; j<= rowCount-1; j++){
    //     divList.push(
    //         <div className = "row">
    //             {allRowProj[j]}
    //             {allRowProj[j+1]}
    //         </div>
    //     )
    // }

    //    if(i == rowCount-1 && (length % 2) !== 0){
    //     divList.push(
    //        <div className="row">
    //            <div className = "col" style = {{width:"50%"}} id={projectList[pivot].id}>
    //                 <Link to ={'/projects/'+projectList[pivot].id} key={projectList[pivot].id}>
    //                 <ProjectSummary project={projectList[pivot]}></ProjectSummary>
    //                 </Link>
    //            </div>
    //        </div>
    //     );
    //    }
       
    //     divList.push(
    //         <div className= "row">
    //             <div className = "col" style = {{width:"50%"}} id={projectList[pivot].id}>
    //                 <Link to ={'/projects/'+projectList[pivot].id} key={projectList[pivot].id}>
    //                 <ProjectSummary project={projectList[pivot]}></ProjectSummary>
    //                 </Link>
    //             </div>

    //             <div className = "col" style = {{width:"50%"}} id={projectList[pivot+1].id}>
    //                 <Link to ={'/projects/'+projectList[pivot+1].id} key ={projectList[pivot+1].id}>
    //                 <ProjectSummary project={projectList[pivot+1]}></ProjectSummary>
    //                 </Link>
    //             </div>
    //         </div>
    //    );
       
       
    //    pivot=pivot+2;


   return divList
}

const ProjectList = ({projects, users}) => {
    return(
        <div>
            {drawDivs(projects, users)}
        </div>
        
    )
}



export default ProjectList;
