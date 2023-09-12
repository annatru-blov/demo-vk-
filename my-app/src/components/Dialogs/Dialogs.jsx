import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';




const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let newMessageBody = state.newMessageBody;

let onSendMessageClick = () =>{
  props.sendMessageCreator();
}
let onNewMessageChange = (e)=>{
  let body = e.target.value;
  props.updateNewMessageBodyCreator(body);
}

if(!props.isAuth) return <Navigate to="/login" replace={true}/>;



  return (
  
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
<div>{messagesElements}</div>
      <div> <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter new message"></textarea></div>
      <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    </div>
  
  );
};
export default Dialogs;
