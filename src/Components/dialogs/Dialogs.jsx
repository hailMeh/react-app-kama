import s from './Dialogs.module.css'
import DialogPage from './dialogDirectory/dialogPage'
import MessagesChat from "./messageDirectory/messages";


const Dialogs = (props) => {
    return (
        <div className={s.messages__container}>
            <div className={s.dialogs_wrapper}>
                <DialogPage id={'/dialogs/dialogs.jsx/1'} person={'Josh'}/>
                <DialogPage id={'/dialogs/dialogs.jsx/2'} person={'Fred'}/>
                <DialogPage id={'/dialogs/dialogs.jsx/3'} person={'Chris'}/>
                <DialogPage id={'/dialogs/dialogs.jsx/4'} person={'Amilie'}/>
                <DialogPage id={'/dialogs/dialogs.jsx/5'} person={'Steve'}/>
                <DialogPage id={'/dialogs/dialogs.jsx/6'} person={'Daizy'}/>
                <DialogPage id={'/dialogs/dialogs.jsx/7'} person={'Maria'}/>
            </div>
            <div className={s.messages_wrapper}>
                <MessagesChat message={'Hello'}/>
                <MessagesChat message={'How are you today?'}/>
                <MessagesChat message={'Ok'}/>
                <MessagesChat message={'Morning'}/>
            </div>
        </div>
    )
}

export default Dialogs;