import React from 'react'
import ProjectSummary from './ProjectSummary'
import Link from 'react-router-dom/Link';

const drawDivs = (projects) => {
   const divList = [];
   const length = projects && projects.length;
   console.log(length);
   let count = length/2;
   
   for(var i = 0, pivot=0; i < count; i++, pivot=pivot+2)
   
   {
        divList.push(
        <div className = "row">
            <div className = "col" style= {{width:"50%"}}>
                <Link to ={'/projects/' + projects && projects[pivot].id}  key={ projects && projects[pivot].id }>
                <ProjectSummary project={projects && projects[pivot]}/>
                </Link>
            </div>

            <div className= "col" style= {{width:"50%"}}>
                <Link to ={'/projects/' + projects && projects[pivot+1].id}  key={ projects && projects[pivot+1].id }>
                <ProjectSummary project={projects && projects[pivot+1]}/>
                </Link>
            </div>
        </div>
        
         
        );
       
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