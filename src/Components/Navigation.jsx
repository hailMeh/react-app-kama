import navi from './navigation.module.css';
const Navigation = () => {
    return(
        <div className={navi.navigation}>
            <ul className={navi.list}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li className={navi.settings}>Settings</li>
            </ul>
        </div>
    )
}
export default Navigation;