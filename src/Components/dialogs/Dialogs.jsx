import s from './Dialogs.module.css'
import DialogPage from './dialogDirectory/dialogPage'
import MessagesChat from "./messageDirectory/messages";


let DialogsData = [
    {id: 1, person: 'Josh'},
    {id: 2, person: 'Fred'},
    {id: 3, person: 'Chris'},
    {id: 4, person: 'Amilie'},
    {id: 5, person: 'Steve'},
    {id: 6, person: 'Daizy'},
    {id: 7, person: 'Maria'},
]

let DialogsElementsArray = DialogsData.map(p => <DialogPage id={p.id} person={p.person}/>)

let MessagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you today?'},
    {id: 3, message: 'Ok'},
    {id: 4, message: 'Morning'},

]

let MessagesElementsArray = MessagesData.map(m => <MessagesChat message={m.message}/>)

const Dialogs = (props) => {
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