import React from 'react';
import s from './Dialogs.module.css'
import DialogNames from './dialogDirectory/dialogNames'
import MessagesChat from "./messageDirectory/messages";


const Dialogs = (props) => {
    let DialogsElementsArray = props.state.DialogsData.map(p => <DialogNames id={p.id} person={p.person} ava={p.ava}/>)
    let MessagesElementsArray = props.state.MessagesData.map(m => <MessagesChat message={m.message}/>)
    let chatElement = React.createRef()
    let addChatMessage = () => {

        props.addMessage();

    }
    let onMessageChange = () => {
        let text = chatElement.current.value;
        props.updateLockTextDialogs(text);

    }
    return (
        <div className={s.messages__container}>
            <div className={s.dialogs_wrapper}>

                {DialogsElementsArray}
            </div>

            <div className={s.messages_wrapper}>
                {MessagesElementsArray}
                <div className={s.dialogs__textarea}><textarea onChange={onMessageChange} ref={chatElement}
                                                               value={props.state.inputLockTextDialogs}/>
                    <button className={s.dialogs_button} onClick={addChatMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;