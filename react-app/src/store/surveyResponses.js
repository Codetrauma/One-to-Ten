//action types
const LOAD_SURVEY_RESPONSES = 'survey_responses/LOAD';
const DELETE_SURVEY_RESPONSE = 'survey_reponse/DELETE';

//action creators
const loadSurveyResponses = (surveyResponses) => ({
    type: LOAD_SURVEY_RESPONSES,
    surveyResponses
});

const deleteSurveyReponse = (surveyId) => ({
    type: DELETE_SURVEY_RESPONSE,
    surveyId
})

//thunks
export const getSurveyResponses = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}/surveys`);

    if (res.ok) {
        const surveyResponses = await res.json();

        dispatch(loadSurveyResponses(surveyResponses))
    }
};

export const removeSurveyResponse = (surveyId, userId) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        const surveyResponse = await res.json();
        dispatch(deleteSurveyReponse(surveyId, userId));
        return surveyResponse;
    }
}


//reducer
const initialState = { };

const surveyResponseReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_SURVEY_RESPONSES: {
            newState = { ...state }

            
        }
        case DELETE_SURVEY_RESPONSE: {

        }
        default:
            return state;
    }
};

export default surveyResponseReducer;
