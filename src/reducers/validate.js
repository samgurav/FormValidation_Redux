const validateState = { user: [] }
export const valState = (state = validateState, action) => {
    switch (action.type) {
        case "VAL":
            return { user: [...state.user, action.payload] };
        case "ERR":
            return state
        default: return state;
    }
}