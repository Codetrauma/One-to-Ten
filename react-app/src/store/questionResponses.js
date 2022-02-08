
//action types
const LOAD_QUESTION_RESPONSES = 'question_responses/LOAD';
const ADD_QUESTION_RESPONSE = 'question_response/ADD';
// const UPDATE_QUESTION_RESPONSE = 'question_response/UPDATE';
const DELETE_QUESTION_RESPONSE = 'question_response/DELETE';

//action creators
const loadQuestionsResponses = (questionResponses, surveyId) => ({
    type: LOAD_QUESTION_RESPONSES,
    questionResponses,
    surveyId
});

const addQuestionResponses = (questionResponse, surveyId) => ({
    type: ADD_QUESTION_RESPONSE,
    questionResponse,
    surveyId
});

// const updateQuestionResponses = (questionResponse) => ({
//     type: UPDATE_QUESTION_RESPONSE,
//     questionResponse
// })

const deleteQuestionResponses = (surveyId) => ({
    type: DELETE_QUESTION_RESPONSE,
    surveyId
})

//thunks
export const getQuestionResponses = (surveyId, questionId, userId) => async dispatch => {
    const res = await fetch(`/api/questions/${questionId}/users/${userId}`);

    if (res.ok) {
        const questionResponses = await res.json();
        // console.log(`THUNKKKKKKKK`, surveyId)

        dispatch(loadQuestionsResponses(questionResponses, surveyId))
    }
};

export const createQuestionResponses = (surveyId, userId, payload) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}/responses`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newQuestionResponses = await res.json();
        dispatch(addQuestionResponses(newQuestionResponses, surveyId));
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

        dispatch(addQuestionResponses(edittedQuestionResponses, surveyId));
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
const initialState = { bySurveyId: {} }

const questionResponsesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_QUESTION_RESPONSES: {
            newState = { ...state }

            console.log(`BABABABABAA`, action.questionResponses)

            newState.bySurveyId[action.surveyId] = action.questionResponses

            // action.questionResponses.reduce((questionResponses, response) => {
            //     questionResponses[] = response;
            //     return questionResponses;
            // }, {})

            return newState;
        }
        case ADD_QUESTION_RESPONSE: {
            newState = { ...state }

            newState.bySurveyId[action.surveyId] = action.questionResponses

            return newState;
        }
        case DELETE_QUESTION_RESPONSE: {
            newState = { ...state }

            delete newState.bySurveyId[action.surveyId]

            return newState;
        }
        default:
            return state;
    }
};

export default questionResponsesReducer;
