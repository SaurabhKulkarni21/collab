import React from 'react'
import ProjectSummary from './ProjectSummary'
import Link from 'react-router-dom/Link';

const drawDivs = (projects) => {
   const projectList = projects ? projects : [];
   console.log("This is firstProject", projectList[0]);
   const divList = [];
   const length = projects && projects.length;
   console.log("This is length",length);
   let rowCount = Math.floor(length/2) + (length % 2); 
   console.log("This is the row count", rowCount);
   let pivot = 0;

   for(var i=0; i<= rowCount-1; i++){
       console.log("This is the current iteration", i);
       console.log("This is the pivot", pivot);

       if(i == rowCount-1 && (length % 2) !== 0){
        console.log("Yes the row count is equal to the end")
        divList.push(
           <div className="row">
               <div className = "col" style = {{width:"50%"}} id={projectList[pivot].id}>
                    <Link to ={'/projects/'+projectList[pivot].id} key={projectList[pivot].id}>
                    <ProjectSummary project={projectList[pivot]}></ProjectSummary>
                    </Link>
               </div>
           </div>
        );
       }
       else{
        
        divList.push(
            <div className= "row">
                <div className = "col" style = {{width:"50%"}} id={projectList[pivot].id}>
                    <Link to ={'/projects/'+projectList[pivot].id} key={projectList[pivot].id}>
                    <ProjectSummary project={projectList[pivot]}></ProjectSummary>
                    </Link>
                </div>

                <div className = "col" style = {{width:"50%"}} id={projectList[pivot+1].id}>
                    <Link to ={'/projects/'+projectList[pivot+1].id} key ={projectList[pivot+1].id}>
                    <ProjectSummary project={projectList[pivot+1]}></ProjectSummary>
                    </Link>
                </div>
            </div>
       );
       }
       
       pivot=pivot+2;
   }

   return divList
}

const ProjectList = ({projects}) => {
    return(
        <div>
            {drawDivs(projects)}
        </div>
        
    )
}

export default ProjectList;

// <div className="project-list section">
// {projects && projects.map(project => {
//     return(
        
//         <div className="project-content" key={"key"+project.id}style={{width:"40%"}}>
//             <Link to ={'/projects/' + project.id}  key={project.id}  >
//             <ProjectSummary project={project}/>
//             </Link> 
//         </div>    
//     )
    
// })
// }
// </div> 