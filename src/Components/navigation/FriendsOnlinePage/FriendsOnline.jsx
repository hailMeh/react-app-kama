import s from './FriendsOnline.module.css'



const FriendsOnline = (props) => {

    return <div className={s.friends__align}>

        <div className={s.friends__favorite}>
            <div className={s.friends__favorite_img}></div>

        </div>
        <div className={s.friends__favorite}>
            <div className={s.friends__favorite_online}> {props.person}</div>

        </div>
    </div> }
    export default FriendsOnline;