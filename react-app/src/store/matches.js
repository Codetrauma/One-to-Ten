// action types
const LOAD_MATCHES = 'match/LOAD';
const DELETE_MATCH = 'match/DELETE';

// action creators
const loadMatches = (matches) => ({
    type: LOAD_MATCHES,
    matches
});

const deleteMatch = (match) => ({
    type: DELETE_MATCH,
    match
});

// thunks
export const getMatches = (userId) => async dispatch => {
    const response = await fetch(`/api/matches/${userId}`);

    if (response.ok) {
        const matches = await response.json();
        dispatch(loadMatches(matches));
    }
}

// export const deleteMatch = (matchedUserId) => {

// }

// reducer
const initialState = { matches: {} };

const matchReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_MATCHES:
            newState = { ...state };
            newState.matches['byUserId'] = action.matches.user_matches.reduce((matches, match) => {
                matches[match.id] = match;
                return matches;
            }, {})
            return newState;

        case DELETE_MATCH:
            newState = { ...state };
            return newState;
        default:
            return state
    }
}

export default matchReducer;
