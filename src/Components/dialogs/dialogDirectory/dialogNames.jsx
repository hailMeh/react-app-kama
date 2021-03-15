import s from './dialogPage.module.css';
import {NavLink} from "react-router-dom";

const DialogNames = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item + ' ' + s.activelink}><NavLink to={'/dialogs/dialogs.jsx/' + props.id}> <img className={s.dialog__avatar} src={props.ava}/> <div className={s.dialog__names}> {props.person} </div></NavLink></div>

        </div>


    )
}

export default DialogNames;