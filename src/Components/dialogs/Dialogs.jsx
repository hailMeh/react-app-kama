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
let MessagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you today?'},
    {id: 3, message: 'Ok'},
    {id: 4, message: 'Morning'},

]

const Dialogs = (props) => {
    return (
        <div className={s.messages__container}>
            <div className={s.dialogs_wrapper}>
                <DialogPage id={DialogsData[0].id} person={DialogsData[0].person}/>
                <DialogPage id={DialogsData[1].id} person={DialogsData[1].person}/>
                <DialogPage id={DialogsData[2].id} person={DialogsData[2].person}/>
                <DialogPage id={DialogsData[3].id} person={DialogsData[3].person}/>
                <DialogPage id={DialogsData[4].id} person={DialogsData[4].person}/>
                <DialogPage id={DialogsData[5].id} person={DialogsData[5].person}/>
                <DialogPage id={DialogsData[6].id} person={DialogsData[6].person}/>
            </div>
            <div className={s.messages_wrapper}>
                <MessagesChat message={MessagesData[0].message}/>
                <MessagesChat message={MessagesData[1].message}/>
                <MessagesChat message={MessagesData[2].message}/>
                <MessagesChat message={MessagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs;