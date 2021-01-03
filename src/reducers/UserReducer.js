export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.payload],
                isLoading: false
            }

        case 'SET_PERSONAL':
            return {
                ...state,
                personal: {...action.payload},
                isLoading: false
            }

        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }

        default: return state;
    }
}