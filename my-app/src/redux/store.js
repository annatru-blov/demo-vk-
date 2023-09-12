import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 12 },
        { id: 2, message: "My first post", likesCount: 11 },
        { id: 3, message: "How are you", likesCount: 12 },
        { id: 4, message: "rg", likesCount: 12 },
        { id: 5, message: "Sassgvsha", likesCount: 12 },
      ],
      newPostText: "Hello",
    },
    dialogsPage: {
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
    },
    sidebar:{}
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("state");
  },
  
  dispatch(action){
   
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  }
};


export default store;
