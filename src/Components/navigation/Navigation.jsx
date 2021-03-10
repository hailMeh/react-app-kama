import navi from './navigation.module.css';
import {NavLink} from "react-router-dom";
import FriendsOnline from "./FriendsOnlinePage/FriendsOnline";
import s from "./FriendsOnlinePage/FriendsOnline.module.css";

const Navigation = (props) => {
    let FriendsOnlineArray = props.state.FriendsOnlineData.map(p => <FriendsOnline id={p.id} person={p.person}/>)
    return (
        <div className={navi.navigation}>
            <ul className={navi.list}>
                <li><NavLink to='/profile/profile.jsx' activeClassName={navi.activeLink}>Profile </NavLink></li>
                <li><NavLink to='/dialogs/dialogs.jsx' activeClassName={navi.activeLink}>Messages</NavLink></li>
                <li>News</li>
                <li>Music</li>
                <li className={navi.settings}>Settings</li>
                <div className={navi.friends}>Friends online</div>
                {FriendsOnlineArray}
            </ul>
        </div>
    )
}
export default Navigation;