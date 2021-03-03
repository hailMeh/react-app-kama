import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogPage from './dialogsDirect/DialogPage'

const Dialogs = () => {
    return (
        <div className={s.messages__container}>
            <DialogPage />
            <div className={s.message}>
                <div className={s.message_item}>Hiho</div>
                <div className={s.message_item}>Let's rock</div>
                <div className={s.message_item}>oh my</div>
                <div className={s.message_item}>no thanks</div>
                <div className={s.message_item}>you sure?</div>
            </div>
        </div>
    )
}

export default Dialogs;