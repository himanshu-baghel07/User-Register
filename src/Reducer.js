import { ADD_USER, DELETE_USER, EDIT_USER } from "./actions.type";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: action.payload.id,
          email: action.payload.email,
          phone: action.payload.phone,
          name: action.payload.name,
        },
      ];

    case EDIT_USER:
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );

    case DELETE_USER:
      return state.filter((user) => user.id !== action.id);
    default:
      return state;
  }
};
export default Reducer;
