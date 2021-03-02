import navi from './navigation.module.css';
const Navigation = () => {
    return(
        <div className={navi.navigation}>
            <ul className={navi.list}>
                <li><a href={"/profile/profile.jsx"}>Profile </a></li>
                <li><a href={"/dialogs/dialogs.jsx"}>Messages</a></li>
                <li>News</li>
                <li>Music</li>
                <li className={navi.settings}>Settings</li>
            </ul>
        </div>
    )
}
export default Navigation;