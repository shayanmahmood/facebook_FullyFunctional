// import { elements } from "../models/Elements"
// export const renderPOsts = post => {
//     let markUp = `
//     <div class="postMain-container">
//     <div class="postMain-containerHeader">
//         <img src="${post.dp}" alt="" class="postMain-containerHeaderImg">
//         <div class="postMain-containerHeaderInnerflex">
//             <p class="postMain-containerHeaderInnerflexTxt">
//                 <b>${post.userName}</b>
//             </p>
//             <p class="postMain-containerHeaderInnerflexTxt">Yesterday at ${new Date().getTime()}</p>
//         </div>
//     </div>
//     <div class="postMain-containerMain">
//         ${renderPOstINter(post)}
//     </div>
//     <div class="postMain-containerfooter">
//         <div class="postMain-containerfooterReated">
//             <img src="./icon/svg/download.svg" alt="" class="postMain-containerfooterReatedImg">
//             <p class="postMain-containerfooterReatedTxt">100M</p>
//             <p class="postMain-containerfooterReatedShares">2.5M Shares</p>
//         </div>
//         <div class="postMain-containerfooterReact">
//             <div class="postMain-chooseBox">
//                 <div class="postMain-chooseBoxChoose">
//                     <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
//                         style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/2w6e1rQEP5h.png&quot;); background-position: 0px -284px; background-size: 26px 794px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block; user-select: auto;"></i>
//                     <p class="postMain-chooseBoxChooseTxt">Like</p>
//                 </div>
//                 <div class="postMain-chooseBoxChoose">
//                     <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
//                         style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/CMflEb4AELS.png&quot;); background-position: 0px -296px; background-size: 26px 874px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
//                     <p class="postMain-chooseBoxChooseTxt">Comment</p>
//                 </div>
//                 <div class="postMain-chooseBoxChoose">
//                     <i data-visualcompletion="css-img" class="postMain-chooseBoxChooseIcon"
//                         style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/2w6e1rQEP5h.png&quot;); background-position: 0px -304px; background-size: 26px 794px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block; user-select: auto;"></i>
//                     <p class="postMain-chooseBoxChooseTxt">Share</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`

//     elements.postContainer.insertAdjacentHTML('afterbegin', markUp);
// }


// const renderPOstINter = (post) => {
//     if (post.postImage === null) {
//         return `<p class='postContnt'>${post.content}</p>`
//     } else {
//         return `<p class='postContnt'>${post.content}</p>
//         <br/>
//         <img src="${post.postImage}" alt="" class="postMain-containerMainImg"></img>
//         `
//     }
// }