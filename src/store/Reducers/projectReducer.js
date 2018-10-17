const initState = {
    projects: [{id:'1', title:'ML Project', content:'More ML Code', gitlink:'www.github.com/SaurabhKulkarni21'},
                {id:'2', title:'DS Project', content:'More DS Code', gitlink:'www.github.com/VivekShetye27'}
            ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) 
    {
        case 'CREATE_PROJECT':
            console.log("This is the created project", action.project)
    }
    return state
}

export default projectReducer