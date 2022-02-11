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
    const res = await fetch(`/api/users/${userId}/surveys/`);

    if (res.ok) {
        const surveyResponses = await res.json();

        dispatch(loadSurveyResponses(surveyResponses))
    }
};

export const removeSurveyResponse = (surveyId, userId) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}/`, {
        method: "DELETE"
    });

    if (res.ok) {
        const surveyResponse = await res.json();
        dispatch(deleteSurveyReponse(surveyId, userId));
        return surveyResponse;
    }
};

export const createSurveyResponse = (surveyResponse, surveyId, userId) => async dispatch => {

    let responseArr = Object.entries(Object.values(surveyResponse)[0])
    let responseObj = responseArr.map(response => {
        return {
            question_id: response[0],
            value: response[1]
        }
    })

    console.log(responseObj)

    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}/responses/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(responseObj)
    })

    if (res.ok) {
        console.log('res is oka on reducer', res)
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
