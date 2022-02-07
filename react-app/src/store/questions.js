//action types
const LOAD_QUESTIONS = 'questions/LOAD';

//action creators
const loadQuestions = (questions) => ({
    type: LOAD_QUESTIONS,
    questions
});

//thunks
export const getQuestions = (surveyId) => async dispatch => {
    const response = await fetch(`/api/surveys/${surveyId}/questions`);

    if (response.ok) {
        const questions = await response.json();

        dispatch(loadQuestions(questions))
    }
}

//reducer
const initialState = {}

const questionReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_QUESTIONS: {
            newState = { ...state };

            newState = action.questions.questions.reduce((questions, question) => {
                questions[question.id] = question;
                return question;
            }, {});

            return newState;

        }
        default:
            return state;
    }
}

export default questionReducer;
