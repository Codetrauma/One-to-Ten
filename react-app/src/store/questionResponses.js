
//action types
const LOAD_QUESTION_RESPONSES = 'question_responses/LOAD';
const ADD_QUESTION_RESPONSE = 'question_response/ADD';
const UPDATE_QUESTION_RESPONSE = 'question_response/UPDATE';
const DELETE_QUESTION_RESPONSE = 'question_response/DELETE';

//action creators
const loadQuestionsResponses = (questionResponses) => ({
    type: LOAD_QUESTION_RESPONSES,
    questionResponses
});

const addQuestionResponses = (questionResponse) => ({
    type: ADD_QUESTION_RESPONSE,
    questionResponse
});

const updateQuestionResponses = (questionResponse) => ({
    type: UPDATE_QUESTION_RESPONSE,
    questionResponse
})

const deleteQuestionResponses = (surveyId) => ({
    type: DELETE_QUESTION_RESPONSE,
    surveyId
})

//thunks
export const getQuestionResponses = (surveyId, userId) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`);

    if (res.ok) {
        const questionResponses = await res.json();

        dispatch(loadQuestionsResponses(questionResponses))
    }
};

export const createQuestionResponses = (surveyId, userId, payload) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newQuestionResponses = await res.json();
        dispatch(addQuestionResponses(newQuestionResponses));
        return newQuestionResponses;
    }
};

export const editQuestionResponses = (surveyId, userId, payload) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const edittedQuestionResponses = await res.json();

        dispatch(updateQuestionResponses(edittedQuestionResponses));
        return edittedQuestionResponses;
    }
};

export const removeQuestionResponses = (surveyId, userId) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        const questionResponses = await res.json();
        dispatch(deleteQuestionResponses(questionResponses));
        return questionResponses;
    }
};


//reducers
const questionResponsesReducer = () => {

    switch (action.type) {
        case LOAD_QUESTION_RESPONSES: {

        }
        case ADD_QUESTION_RESPONSE: {

        }
        case UPDATE_QUESTION_RESPONSE: {

        }
        case ADD_QUESTION_RESPONSE: {

        }
        default:
            return state;
    }
};

export default questionResponsesReducer;
