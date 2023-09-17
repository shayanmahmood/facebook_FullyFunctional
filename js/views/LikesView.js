const renderPOsts = post => {
    if (post.postImage === null || post.postImage === '' || post.postImage === ' ') {
        let markUp = `<div class="postMain-containerTxt">
        <div class="postMain-containerHeader" id='${post.id}'>
            <img src="${post.dp}" alt="" class="postMain-containerHeaderImg">
            <div class="postMain-containerHeaderInnerflex">
                <p class="postMain-containerHeaderInnerflexTxt">
                    <b>${post.userName}</b>
                </p>
                <p class="postMain-containerHeaderInnerflexTxt">Yesterday at ${new Date().getHours() + 'pm'}</p>
            </div>
        </div>
        <div class="postMain-containerMainTXT">
        <p class='postContnt'>${post.content}</p>
        </div>
        <div class="postMain-containerfooter">
            <div class="postMain-containerfooterReated">
                <img src="./icon/svg/download.svg" alt="" class="postMain-containerfooterReatedImg">
                <p class="postMain-containerfooterReatedTxt">${post.likes + ' Likes'}</p>
                <p class="postMain-containerfooterReatedShares">${post.shares + ' shares'}</p>
            </div>
            <div class="postMain-containerfooterReactTXT">
                <div class="postMain-chooseBox">
                    <div class="postMain-chooseBoxChooseLIkes">
                <i data-visualcompletion="css-img" id='${post.id}' class="postMain-chooseBoxChooseIcon" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/j8N2KzWECHs.png&quot;); background-position: 0px -180px; background-size: 26px 552px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                <i data-visualcompletion="css-img" class="vis postMain-chooseBoxChooseIcon bd" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/j8N2KzWECHs.png&quot;); background-position: 0px -160px; background-size: 26px 552px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                        <p class="postMain-chooseBoxChooseTxt">Like</p>
                    </div>
                    <div class="postMain-chooseBoxChoose">
                        <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
                            style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/CMflEb4AELS.png&quot;); background-position: 0px -296px; background-size: 26px 874px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                        <p class="postMain-chooseBoxChooseTxt">Comment</p>
                    </div>
                    <div class="postMain-chooseBoxChoose">
                        <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
                            style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/2w6e1rQEP5h.png&quot;); background-position: 0px -304px; background-size: 26px 794px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block; user-select: auto;"></i>
                        <p class="postMain-chooseBoxChooseTxt">Share</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        return markUp;
    } else {
        let markUp = `
    <div class="postMain-containerIMG">
    <div class="postMain-containerHeader" id='${post.id}'>
        <img src="${post.dp}" alt="" class="postMain-containerHeaderImg">
        <div class="postMain-containerHeaderInnerflex">
            <p class="postMain-containerHeaderInnerflexTxt">
                <b>${post.userName}</b>
            </p>
            <p class="postMain-containerHeaderInnerflexTxt">Yesterday at ${new Date().getHours() + 'am'}</p>
        </div>
    </div>
    <div class="postMain-containerMain">
    <p class='postContnt'>${post.content}</p>
             <br/>
             <img src="${post.postImage}" alt="" class="postMain-containerMainImg"></img>
    </div>
    <div class="postMain-containerfooterIMG">
        <div class="postMain-containerfooterReated">
            <img src="./icon/svg/download.svg" alt="" class="postMain-containerfooterReatedImg">
            <p class="postMain-containerfooterReatedTxt">${post.likes}Likes</p>
            <p class="postMain-containerfooterReatedShares">${post.shares}Shares</p>
        </div>
        <div class="postMain-containerfooterReact">
            <div class="postMain-chooseBox">
                <div class="postMain-chooseBoxChooseLIkes">
                <i data-visualcompletion="css-img"id='${post.id}' class="postMain-chooseBoxChooseIcon" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/j8N2KzWECHs.png&quot;); background-position: 0px -180px; background-size: 26px 552px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                <i data-visualcompletion="css-img" class="vis postMain-chooseBoxChooseIcon" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/j8N2KzWECHs.png&quot;); background-position: 0px -160px; background-size: 26px 552px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                <p class="postMain-chooseBoxChooseTxt">Like</p>
                </div>
                <div class="postMain-chooseBoxChoose">
                    <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
                        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/CMflEb4AELS.png&quot;); background-position: 0px -296px; background-size: 26px 874px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                    <p class="postMain-chooseBoxChooseTxt">Comment</p>
                </div>
                <div class="postMain-chooseBoxChoose">
                    <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
                        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/2w6e1rQEP5h.png&quot;); background-position: 0px -304px; background-size: 26px 794px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block; user-select: auto;"></i>
                    <p class="postMain-chooseBoxChooseTxt">Share</p>
                </div>
            </div>
        </div>
    </div>
</div>`
        return markUp;
    }

}


export const LIKES = (state, post) => {
    if (state === true) {
        let y = true;
        if (y === true) {
            let postdata = JSON.parse(localStorage.getItem('posts'));
            let postID = post.id;
            post.likes++;
            console.log(post.likes)
            let posts = []
            postdata.map((el, i) => {
                if (el.id === postID) {
                    console.log(el);
                    console.log(i);
                } else {
                    posts.push(el)
                }
            })
            // localStorage.setItem('posts', JSON.stringify(posts))
            posts.push(post)
            // console.log(post);
            localStorage.setItem('posts', JSON.stringify(posts))
            console.log(postdata)
        }
    }
}