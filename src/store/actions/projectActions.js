export const createProject = (project) => {
    return (dispatch, getState) => {
        // Make async calls to database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};