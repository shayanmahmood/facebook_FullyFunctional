export default class Post {
    constructor(userName, Proimage, content, image = null, like = 0, comments = 0, share = 0) {
        this.userName = userName;
        this.dp = Proimage;
        this.content = content;
        this.likes = like;
        this.comments = comments;
        this.shares = share;
        this.postImage = image;
        this.id = Math.random().toString(16)
    }


    changeLike(like) {
        this.likes = like
    }
}