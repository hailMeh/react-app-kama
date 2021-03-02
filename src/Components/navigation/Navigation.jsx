import navi from './navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={navi.navigation}>
            <ul className={navi.list}>
                <li><NavLink to='/profile/profile.jsx' activeClassName={navi.activeLink}>Profile </NavLink></li>
                <li><NavLink to='/dialogs/dialogs.jsx' activeClassName={navi.activeLink}>Messages</NavLink></li>
                <li>News</li>
                <li>Music</li>
                <li className={navi.settings}>Settings</li>
            </ul>
        </div>
    )
}
export default Navigation;