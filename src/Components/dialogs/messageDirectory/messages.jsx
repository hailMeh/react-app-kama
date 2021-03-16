import s from './messages.module.css';

const MessagesChat = (props) => {

    return (

        <div className={s.message}>
            <div className={s.message_item}>{props.message}</div>


        </div>


    )
}
export default MessagesChat;