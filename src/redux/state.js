let state = {
    ProfilePage: {
        PostData: [
            {id: 1, post: 'Hello', likesCounter: 12},
            {id: 2, post: 'How are you today?', likesCounter: 22},
            {id: 3, post: 'Ok', likesCounter: 3},
            {id: 4, post: 'Morning', likesCounter: 4},
        ]

    },
    DialogPage: {
        DialogsData: [
            {id: 1, person: 'Josh', ava: "https://sun9-25.userapi.com/impf/m-Yy05QtpIUhJWtv4lQI_9plT52DhLpW2C0Sgw/1AfXZz8lcFA.jpg?size=300x300&quality=96&proxy=1&sign=3108c455d0d63734f9f65ed6cfc79b01&type=album"},
            {id: 2, person: 'Fred', ava: "https://stream-promotion.ru/image/cache/catalog/banner/DbtrFLiX0AEnCwr.jpg%20large-300x300.jpg"},
            {id: 3, person: 'Chris', ava: "https://img.discogs.com/r8ZkH8J5sDCJvOML-hoJ6zg5r30=/300x300/filters:strip_icc():format(jpeg):quality(40)/discogs-avatars/U-3906656-1474338764.jpeg.jpg"},
            {id: 4, person: 'Amilie', ava: "https://img.like.video/eu_live/3u1/3FyDx1.jpg"},
            {id: 5, person: 'Steve', ava: "https://cdn1.flamp.ru/d1db81c5c926d23ec5df840b3e371c10_300_300.jpg"},
            {id: 6, person: 'Daizy', ava: "https://cdn1.flamp.ru/e37cb727d7e37a87e9496f5fb777a4ac_300_300.jpg"},
            {id: 7, person: 'Maria', ava: "https://images.chesscomfiles.com/uploads/v1/user/57010166.6e4df069.1200x1200o.19af94f0d651.png"},
        ],
        MessagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you today?'},
            {id: 3, message: 'Ok'},
            {id: 4, message: 'Morning'},

        ],
        AvatarsData: [
            {src: "https://images.pexels.com/photos/350347/pexels-photo-350347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
            {src: "https://images.pexels.com/photos/350347/pexels-photo-350347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        ]
    },
    NavigationPage: {
        FriendsOnlineData : [
            {id: 1, person: 'Josh'},
            {id: 2, person: 'Fred'},
            {id: 3, person: 'Chris'},
        ]
    }


}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: 'New Message',
        likesCounter: 3
    };
    state.ProfilePage.PostData.push(newPost)
}

export default state;