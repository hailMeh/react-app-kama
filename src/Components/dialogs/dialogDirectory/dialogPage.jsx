import s from './dialogPage.module.css';
import {NavLink} from "react-router-dom";

const DialogPage = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item + ' ' + s.activelink}><NavLink to={'/dialogs/dialogs.jsx/' + props.id}>{props.person}</NavLink></div>

        </div>


    )
}

export default DialogPage;