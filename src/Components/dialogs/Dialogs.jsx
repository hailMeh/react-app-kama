import s from './Dialogs.module.css'
import DialogPage from './dialogDirectory/dialogPage'
import MessagesChat from "./messageDirectory/messages";





const Dialogs = (props) => {
    let DialogsElementsArray = props.state.DialogsData.map(p => <DialogPage id={p.id} person={p.person}/>)
    let MessagesElementsArray = props.state.MessagesData.map(m => <MessagesChat message={m.message}/>)
    return (
        <div className={s.messages__container}>
            <div className={s.dialogs_wrapper}>
                {DialogsElementsArray}
            </div>
            <div className={s.messages_wrapper}>
                {MessagesElementsArray}
            </div>
        </div>
    )
}

export default Dialogs;