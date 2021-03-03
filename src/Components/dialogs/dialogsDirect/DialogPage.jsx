import s from './DialogPage.module.css'
import {NavLink} from "react-router-dom";

const DialogPage = () => {
    return (

            <div className={s.dialogs}>
                <div className={s.dialogs__item + ' ' + s.activelink}><NavLink to='/dialogs/dialogs.jsx/1'>Josh</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/dialogs.jsx/2'>Andrew</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/dialogs.jsx/3'>Chris</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/dialogs.jsx/4'>Chloe</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/dialogs.jsx/5'>Mark</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/dialogs.jsx/6'>Fil</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/dialogs.jsx/7'>Juun</NavLink></div>
            </div>


    )
}

export default DialogPage;