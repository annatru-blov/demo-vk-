const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Sasha" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your" },
    { id: 3, message: "s" },
    { id: 4, message: "rg" },
    { id: 5, message: "Sassgvsha" },
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY: 
    return {
      ...state,
      newMessageBody: action.body
    };
    
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };
    }
    default: return state;
}

};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer