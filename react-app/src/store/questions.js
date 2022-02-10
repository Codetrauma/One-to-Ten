//action types
const LOAD_QUESTIONS = 'questions/LOAD';

//action creators
const loadQuestions = (questions) => ({
    type: LOAD_QUESTIONS,
    questions
});

//thunks
// export const getQuestions = (surveyId) => async dispatch => {
//     const response = await fetch(`/api/surveys/${surveyId}/questions`);

//     if (response.ok) {
//         const questions = await response.json();

//         dispatch(loadQuestions(questions))
//     }
// }


export const getQuestions = (surveyId, userId) => async dispatch => {
    const response = await fetch(`/api/surveys/${surveyId}/users/${userId}/questions`);

    if (response.ok) {
        const questions = await response.json();

        dispatch(loadQuestions(questions))
    }
}

//reducer
const initialState = { byId: {} }

const questionReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_QUESTIONS: {
            newState = { ...state };

            // console.log(`ACTION ACTION ACTION`, action)

            //newState.questions = action.questions.questions.map(question => question)

            // newState.questions = action.questions.questions
            // console.log(`nsnsnsnsnsnsnsnsnsns`, newState)
            newState.byId = action.questions.questions.reduce((questions, question) => {
                questions[question.id] = question;
                return questions;
            }, {})

            return newState;
        }
        default:
            return state;
    }
}

export default questionReducer;
