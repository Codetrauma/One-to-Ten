//action types
const LOAD_SURVEY_RESPONSES = 'survey_responses/LOAD';
const DELETE_SURVEY_RESPONSE = 'survey_reponse/DELETE';
const ADD_SURVEY_RESPONSE = 'survey_response/ADD';

//action creators
const loadSurveyResponses = (surveyResponses) => ({
    type: LOAD_SURVEY_RESPONSES,
    surveyResponses
});

const deleteSurveyReponse = (surveyId) => ({
    type: DELETE_SURVEY_RESPONSE,
    surveyId
});

const addSurveyResponse = (surveyResponse) => ({
    type: ADD_SURVEY_RESPONSE,
    surveyResponse
});

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
};

export const createSurveyResponse = (surveyResponse) => async dispatch =>{
    const res = await fetch(`/api/surveys/${surveyResponse.surveyId}/users/${surveyResponse.userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(surveyResponse)
    })

    if (res.ok) {
        const newSurveyResponse = await res.json();
        dispatch(addSurveyResponse(newSurveyResponse));
        return newSurveyResponse;
    }
};


//reducer
const initialState = { bySurveyId: {} };

const surveyResponseReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_SURVEY_RESPONSES: {
            newState = { ...state }

            newState.bySurveyId = action.surveyResponses.survey_responses.reduce((surveyResponses, response) => {
                surveyResponses[response.survey_id] = response;
                return surveyResponses
            }, {})
            
            return newState;
        }
        case DELETE_SURVEY_RESPONSE: {
            newState = { ...state };
            delete newState.bySurveyId[action.surveyId]

            return newState;

        }
        case ADD_SURVEY_RESPONSE: {
            newState = { ...state }
            newState.bySurveyId[action.surveyResponse.survey_id] = action.surveyResponse

            return newState;
        }
        default:
            return state;
    }
};

export default surveyResponseReducer;
