export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                isModalOpen: true,
                modalContent: 'Item added successfully',
                items: [...state.items, action.payload],
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                isModalOpen: true,
                modalContent: 'Item removed',
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case 'CLEAR_LIST':
            return {
                ...state,
                isModalOpen: true,
                modalContent: 'All items removed successfully',
                items: [],
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                isModalOpen: false,
                modalContent: '',
            };
        case 'NO_DATA':
            return {
                ...state,
                isModalOpen: true,
                modalContent: 'Please enter a value',
            };
        default:
            return state;
    }
    // throw new Error('no matching action type');
};
