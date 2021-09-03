export const initialState = {
  currentIndex: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: action.currentIndex
      };

    case 'INCREMENT_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      };

    case 'DECREMENT_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: state.currentIndex - 1
      };

    default:
      return initialState;
  }
};
