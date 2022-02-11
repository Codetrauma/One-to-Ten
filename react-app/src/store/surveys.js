//action types
const LOAD_SURVEYS = 'survey/LOAD';

//action creators
const loadSurveys = (surveys) => ({
    type: LOAD_SURVEYS,
    surveys
});

//thunks
export const getSurveys = () => async dispatch => {
    const response = await fetch(`/api/surveys/`);

    if (response.ok) {
        const surveys = await response.json();

        dispatch(loadSurveys(surveys))
    }
};

export const getOneSurvey = (id) => async dispatch => {
    const response = await fetch(`/api/surveys/${id}/`);

    if (response.ok) {
        const survey = await response.json()
        dispatch(loadSurveys(survey))
    }
};

//reducer

const initialState = { };

const surveyReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_SURVEYS: {
            newState = { ...state };

            newState = action.surveys.surveys.reduce((surveys, survey) => {
                surveys[survey.id] = survey;
                return surveys;
            }, {});

            return newState;
        }
        default:
            return state;
    }
}

export default surveyReducer;
