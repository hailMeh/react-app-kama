import NewPost from "./post/post";
import video from "../../video/main.mp4"



const Profile = (props) => {
    let PostElementsArray = props.PostData.map( p => <NewPost post={p.post} likes={p.likesCounter}/>)
    return (
        <div className={"profile"}>
            <div className={"profile__MainImage"}>
                <video src={video} loop autoPlay muted>
                </video>
            </div>
            <div className={"profile__Avatar"}><img
                src='https://images.chesscomfiles.com/uploads/v1/user/37708826.2c5c9165.1200x1200o.490f96c03c0c.jpeg'
                alt={""}/></div>
            <div className={"profile__Name"}><h2>Jimmy H.</h2></div>
            <div className={"profile__About_Me"}>
                <ul>
                    <li>Date of birth: 7 July</li>
                    <li>City: Oslo</li>
                    <li>Education: OGL 12'</li>
                    <li>Web Site: https://Gridsisawesome.com</li>
                </ul>
            </div>
            <div className={"profile__MyPosts"}><p>My Posts</p></div>
            <div className={"profile__Input"}><input type={"text"} value={"Your News"}/></div>
            <div className={"profile__ButtonSend"}>
                <button>Send</button>
            </div>
            <div className={"profile__NewsAll"}>

                { PostElementsArray }

            </div>
        </div>
    )
}
export default Profile;