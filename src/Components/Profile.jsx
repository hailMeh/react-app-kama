const Profile = () => {
    return(
        <div className={"Content"}>
            <div className={"Content__MainImage"}><img src='https://www.clearrisk.com/hubfs/social%20media%20on%20a%20computer%20and%20phone.jpg' alt={""} /></div>
            <div className={"Content__Avatar"}><img src='https://images.chesscomfiles.com/uploads/v1/user/37708826.2c5c9165.1200x1200o.490f96c03c0c.jpeg' alt={""}/></div>
            <div className={"Content__Name"}><h2>Jimmy H.</h2></div>
            <div className={"Content__About_Me"}><ul>
                <li>Date of birth: 7 July</li>
                <li>City: Oslo</li>
                <li>Education: OGL 12'</li>
                <li>Web Site: https://Gridsisawesome.com</li></ul> </div>
            <div className={"Content__MyPosts"}><p>My Posts</p></div>
            <div className={"Content__Input"}><input type={"text"} value={"Your News"}/></div>
            <div className={"Content__ButtonSend"}><button>Send</button></div>
            <div className={"Content__NewsAll"}>
            <div className={"Content__News1"}> <div className={"Circle"}></div><p className={"Content__MyNews1"}>Yesterday i found the body, oh my gosh, he was a good guy</p></div>
            <div className={"Content__News2"}> <div className={"Circle"}></div><p className={"Content__MyNews2"}>It was my friend Pedro, he was a good guy</p></div>
        </div></div>
    )
}
export default Profile;