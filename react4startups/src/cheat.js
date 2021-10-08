switch (action.type) {
    case 'ADD':
        return {
            ...state,
            items: [...state.items, action.payload],
        };
    case 'REMOVE':
        return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload),
        };
    case 'MODAL':
        return {
            ...state,
            isModalOpen: action.payload,
        };
    case 'MODAL_CONTENT':
        return {
            ...state,
            modalContent: action.payload,
        };
    default:
        return state;
}
