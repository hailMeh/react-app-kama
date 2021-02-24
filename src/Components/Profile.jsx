const Profile = () => {
    return(
        <div className={"profile"}>
            <div className={"profile__MainImage"}><img src='https://www.clearrisk.com/hubfs/social%20media%20on%20a%20computer%20and%20phone.jpg' alt={""} /></div>
            <div className={"profile__Avatar"}><img src='https://images.chesscomfiles.com/uploads/v1/user/37708826.2c5c9165.1200x1200o.490f96c03c0c.jpeg' alt={""}/></div>
            <div className={"profile__Name"}><h2>Jimmy H.</h2></div>
            <div className={"profile__About_Me"}><ul>
                <li>Date of birth: 7 July</li>
                <li>City: Oslo</li>
                <li>Education: OGL 12'</li>
                <li>Web Site: https://Gridsisawesome.com</li></ul> </div>
            <div className={"profile__MyPosts"}><p>My Posts</p></div>
            <div className={"profile__Input"}><input type={"text"} value={"Your News"}/></div>
            <div className={"profile__ButtonSend"}><button>Send</button></div>
            <div className={"profile__NewsAll"}>
            <div className={"profile__News1"}> <div className={"profile__Circle"}></div><p className={"profile__MyNews1"}>Yesterday i found the body</p></div>
            <div className={"profile__News2"}> <div className={"profile__Circle"}></div><p className={"profile__MyNews2"}>It was my friend Pedro, he was a good guy</p></div>
        </div></div>
    )
}
export default Profile;