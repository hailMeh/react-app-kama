import post from './post.module.css'

const NewPost = (props) => {
    return <div className={post.post__wrapper}>
        <div className={post.profile__img}></div>
        <div className={post.profile__MyNews}>{props.post}</div>
        <div className={post.likes}><span>Like {props.likes}</span></div>
    </div>


}
export default NewPost