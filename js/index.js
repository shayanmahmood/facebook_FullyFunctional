import User from './models/User.js'
import Post from './models/Post.js'
import { renderHome, renderSign } from './views/UserView.js'
import { LIKES } from './views/LikesView.js'
import { elements } from './models/Elements.js'
import { renderProfile } from './views/ProfileView.js'


/******picking elements */
const state = {}
window.state = state
let data = [];
let posts = []
var imaePOST;
window.state = state;
window.data = data;
window.post = posts


window.addEventListener('load', () => {
    if (document.querySelector('.mainPROFIPost')) {
        console.log(document.querySelector('.mainPROFIPost'));
    }
})

function handleSignUP() {
    let userName = elements.signUPuserName.value;
    let surName = elements.signUPsurName.value;
    let email = elements.signUPemail.value;
    let password = elements.signUPpassword.value;
    let birthDay = `${elements.signUPday.value} ${elements.signUPmonth.value} ${elements.signUPyear.value}`
    var profilephoto;
    let profile = document.querySelector('.hid').getAttribute('src')
    state.user = new User(userName, surName, email, password, birthDay, profile);
    state.user.getGender(elements.genders);
    data.push(state.user);
    localStorage.setItem('CurrentUser', JSON.stringify(state.user));
    localStorage.setItem('data', JSON.stringify(data));
    // let userDATAS = JSON.parse(localStorage.getItem('data'));
    // data = [];
    // localStorage.setItem('data', JSON.stringify(posts));
    // userDATAS.map((el) => {
    //     data.push(el);
    // });
    // localStorage.setItem('data', JSON.stringify(data));
    // if (data) {
    //     console.log(data);
    // }
    document.querySelector('.hid').setAttribute('src', '../img/user.png');
}


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
                <i data-visualcompletion="css-img" class="vis bd" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/j8N2KzWECHs.png&quot;); background-position: 0px -160px; background-size: 26px 552px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
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
                <i data-visualcompletion="css-img" class="vis bd" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/j8N2KzWECHs.png&quot;); background-position: 0px -160px; background-size: 26px 552px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
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


function handleLogin() {
    let loginUserName = elements.loginEmail.value;
    let loginPassword = elements.loginPassword.value;
    let userData = JSON.parse(localStorage.getItem('data'));
    userData.forEach((el) => {
        if (el.email === loginUserName && el.password === loginPassword) {
            state.user = el;
            let loginUser = state.user
            loginUser.login = true;
            renderHome(state.user)
            localStorage.setItem('loginUser', JSON.stringify(loginUser));
            console.log(JSON.parse(localStorage.getItem('loginUser')));
            setTimeout(() => {
                document.querySelector('.btn_show').click();
            }, 100);
        }
    })
}




elements.SignUPacctionBtn.addEventListener('click', handleSignUP);
elements.loginBtn.addEventListener('click', handleLogin)

elements.signUpPOPBtn.addEventListener('click', () => {
    elements.SignUPcover.style.visibility = 'visible';
    elements.SignUPbox.style.display = 'block';
    let src;
    document.querySelector('#files').addEventListener('change', function () {
        let reader = new FileReader();

        reader.addEventListener('load', function () {
            src = reader.result;
            console.log(src)
            document.querySelector('.hid').setAttribute('src', src);
        })
        reader.readAsDataURL(this.files[0])
    })


});

elements.SignUPclose.addEventListener('click', () => {
    elements.SignUPbox.style.display = 'none';
    elements.SignUPcover.style.visibility = 'hidden';
})

elements.mainmainContainerrr.addEventListener('click', e => {
    if (e.target.matches('.header-user-containerBoxImg,.header-user-containerBoxImg *')) {
        let a = document.querySelector('.profile-con')
        a.classList.toggle('vis');
    }
    else if (e.target.matches('.profile-con--other-con, .profile-con--other-con *')) {
        renderSign();
    }
    else if (e.target.matches('.loginBtn, .loginBtn *')) {
        let userData = JSON.parse(localStorage.getItem('data'));
        let loginUserName = document.querySelector('.emailInput').value;
        let loginPassword = document.querySelector('.passwordInput').value;
        userData.forEach((el) => {
            if (el.email === loginUserName && el.password === loginPassword) {
                console.log(el)
                state.user = el;
                let loginUser = state.user
                loginUser.login = true;
                renderHome(state.user)
                localStorage.setItem('loginUser', JSON.stringify(loginUser));
                console.log(JSON.parse(localStorage.getItem('loginUser')));
                document.querySelector('.postCONTAINE').innerHTML = '';
                let b = document.querySelector('.btn_show')
                if (b) {
                    b.click();
                }
            }
        })
    } else if (e.target.matches('.sidebar-drowndown, .sidebar-drowndown *')) {
        let main = document.querySelector('.sidebar-drowndown')
        let dropDown = document.querySelector('.sidebar-dropdownItem');
        let dropDownLOader = document.querySelector('.sidebar-flexLoader')
        let icon = document.querySelector('.sidebar-dropdownIcon')
        dropDownLOader.classList.remove('hidden')
        icon.style.display = 'none'
        setTimeout(() => {
            dropDownLOader.classList.add('hidden')
            dropDown.classList.toggle('hidden')
            main.style.display = 'none';
        }, 3000);
    }
    else if (e.target.matches('.sidebar-drownup, .sidebar-drownup *')) {
        let dropDown = document.querySelector('.sidebar-dropdownItem');
        let icon = document.querySelector('.sidebar-dropdownIcon')
        let main = document.querySelector('.sidebar-drowndown')
        dropDown.classList.toggle('hidden');
        main.style.display = 'flex';
        icon.style.display = 'inline-block'
    }
    else if (e.target.matches('.mind-containerSearch, .mind-containerSearch *')) {
        let postMaker = document.querySelector('.postCOn');
        postMaker.classList.remove('vis');
    } else if (e.target.matches('.postCOn__header__crossCircle, .postCOn__header__crossCircle *')) {
        let postMaker = document.querySelector('.postCOn');
        postMaker.classList.add('vis');
    } else if (e.target.matches('.postR, .postR *')) {
        let currentpost;
        let content = document.querySelector('.textArea').value
        let postMaker = document.querySelector('.postCOn');
        if (content !== '') {
            let src = document.querySelector('.previIMg').getAttribute('src')
            state.post = new Post(state.user.userName, state.user.image, content, src)
            posts.push(state.post);
            localStorage.setItem('posts', JSON.stringify(posts));
            currentpost = state.post;
            console.log(JSON.parse(localStorage.getItem('posts')));
            postMaker.classList.add('vis');
            let markUP = renderPOsts(state.post);
            document.querySelector('.postCONTAINE').innerHTML += markUP;
            document.querySelector('.previIMg').setAttribute('src', '');

        }
    } else if (e.target.matches('.btn_show, .btn_show *')) {
        let postdata = JSON.parse(localStorage.getItem('posts'));
        posts = [];
        localStorage.setItem('posts', JSON.stringify(posts));
        postdata.map((el) => {
            posts.push(el);
        });
        localStorage.setItem('posts', JSON.stringify(posts));
        console.log(JSON.parse(localStorage.getItem('posts')));
        document.querySelector('.postCONTAINE').innerHTML = ''
        console.log(postdata)
        let markup = postdata.map(el => renderPOsts(el));
        document.querySelector('.postCONTAINE').innerHTML += markup;
        document.querySelector('.btn_show').style.display = 'none';
        console.log(postdata);
    }
    else if (e.target.matches('.img')) {
        let fileUPloader = document.querySelector('.FILEUPloader')
        fileUPloader.click();
        fileUPloader.addEventListener('change', () => {
            let reader = new FileReader();

            reader.addEventListener('load', function () {
                //   var postIMM = reader.result
                var postIMM = reader.result
                console.log(postIMM)
                console.log(document.querySelector('.previIMg'))
                document.querySelector('.previIMg').classList.remove('vis')
                if (document.querySelector('.previIMg')) {
                    document.querySelector('.previIMg').setAttribute('src', postIMM);
                    console.log('changed')
                }
                // img.setAttribute('src', JSON.stringify(postIMM));
                // console.log(document.querySelector('.previIMg'));
            })

            reader.readAsDataURL(fileUPloader.files[0]);
        })
    }
    else if (e.target.matches('.postMain-chooseBoxChooseLIkes, .postMain-chooseBoxChooseLIkes *')) {
        let icon = e.target.closest('.postMain-chooseBoxChooseIcon')
        let parentICon = icon.parentElement;
        let invisbleICon = parentICon.querySelector('.vis')
        let txt = parentICon.querySelector('p')
        let limit = true;
        invisbleICon.classList.toggle('vis');
        icon.classList.toggle('vis');
        txt.style.color = '#2e89ff';
        console.log(txt)
        let iconID = icon.id
        let postdata = JSON.parse(localStorage.getItem('posts'));
        let post;
        let texture = parentICon.parentElement.parentElement.parentElement.querySelector('.postMain-containerfooterReated').querySelector('.postMain-containerfooterReatedTxt')
        let textureTxt = parseInt(texture.innerHTML)
        let newTex = textureTxt + 1;
        texture.innerHTML = newTex + ' likes';
        console.log(texture.innerHTML)
        if (limit === true) {
            postdata.map(el => {
                if (el.id == iconID) {
                    post = el
                    LIKES(true, post);
                }
            })
            limit = false;
        }
    } else if (e.target.matches('.sidebar-flexItem, .sidebar-flexItem *')) {
        renderProfile(state.user);
    }
    else if (e.target.matches('.showMEy, .showMEy *')) {
        let postdata = JSON.parse(localStorage.getItem('posts'));
        postdata.map(el => {
            if (state.user.userName === el.userName) {
                let markup = renderPOsts(el)
                document.querySelector('.mainPROFIPost').innerHTML += markup;
            }
        })
        console.log(document.querySelector('.mainPROFI'));
    }
})


