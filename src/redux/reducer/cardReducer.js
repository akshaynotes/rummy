import * as actions from "../constants/actionTypes";

//reducer function ..this is where actual state management happens, these functions decides what will be the state when certain actions are dispatched

const initialState = {
  loading: false,
  cards: [],
  error: "",
  hostuser: "",
  roomid: "",
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_ROOM:
      return {
        ...state,
        loading: true,
      };
    case actions.CREATE_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        roomid: action.payload,
        error: "",
      };
    case actions.CREATE_ROOM_FAILURE:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };
    case actions.ADD_USER:
      return { ...state, hostuser: action.payload };
    case actions.ADD_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
}
