import post from './post.module.css'

const NewPost = (props) => {
    return <div>
        <div className={post.profile__img}>
            <p className={post.profile__MyNews}>{props.message} {props.messagetry}
            </p>
        </div>

    </div>
}
export default NewPost