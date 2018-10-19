export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // Make async calls to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Saurabh",
            authorLastName: "Kulkarni",
            authorId: 9,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', project });
        })
        
    }
};