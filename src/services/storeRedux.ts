import { configureStore, createAction } from '@reduxjs/toolkit';

const initialState = {
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADMIN':
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};

const storeRedux = configureStore({
  reducer: reducer
});

export default storeRedux;

export const setAdmin = createAction<{ admin: string }>('setAdmin')

