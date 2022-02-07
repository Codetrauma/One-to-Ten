

//action types
const LOAD_USERS = 'user/LOAD';
const UPDATE_USER = 'user/UPDATE';

//action creators
const loadUsers = (users) => ({
    type: LOAD_USERS,
    users
});


const updateUser = (user) => ({
    type: UPDATE_USER,
    user
});


//thunks
export const getUsers = () => async dispatch => {
    const response = await fetch(`/api/users/`)

    if (response.ok) {
        const users = await response.json();

        dispatch(loadUsers([users]))
    }
}

export const getOneUser = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}`);

    if (response.ok) {
        const user = await response.json()
        dispatch(loadUsers([user]))
    }
};

export const changeUser = (payload, id) => async dispatch => {

    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const updatedUser = await response.json();
        dispatch(updateUser(updatedUser));
        return updatedUser;
    }
};


//reducer
const initialState = { users: {} }

const userReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_USERS: {
            newState = { ...state };
            newState.users = action.users.reduce((users, user) => {
                // console.log(user)
                users[user.id] = user;
                return users
            }, {});

            return newState;
        }

        case UPDATE_USER: {
            newState = { ...state }
            newState.users.userId = action.user

            return newState;
        }
        default:
            return state;
    }
};

export default userReducer;
