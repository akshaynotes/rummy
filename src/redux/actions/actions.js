import * as actions from "../constants/actionTypes";
import axios from "axios";

//action creater returns the object ...we call this in dispatch action
export const createRoom = () => {
  return {
    type: actions.CREATE_ROOM,
  };
};

export const createRoomSuccess = (roomid) => {
  return {
    type: actions.CREATE_ROOM_SUCCESS,
    payload: roomid,
  };
};

export const createRoomFailure = (error) => {
  return {
    type: actions.CREATE_ROOM_FAILURE,
    payload: error,
  };
};

export const addUser = (username) => {
  return {
    type: actions.ADD_USER,
    payload: username,
  };
};

export const addCards = (cards) => {
  return {
    type: actions.ADD_CARDS,
    payload: cards,
  };
};

export const initializeGame = (playername) => {
  return function (dispatch) {
    dispatch(createRoom());
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => {
        const roomid = response.data.deck_id;
        console.log(roomid);
        dispatch(createRoomSuccess(roomid));
        //response.data is the array of users
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(createRoomFailure(error.message));
      });
    dispatch(addUser(playername));
  };
};

export const startGame = (gameid) => {
  return function (dispatch) {
    const uri = `https://deckofcardsapi.com/api/deck/${gameid}/draw/?count=13`;
    console.log(uri);
    axios
      .get(uri)
      .then((response) => {
        const cards = response.data.cards;
        console.log(cards);
        dispatch(addCards(cards));
        //response.data is the array of users
      })
      .catch((error) => {
        // error.message is the error description
        console.log("Something went wrong", error.message);
      });
  };
};
