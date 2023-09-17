import { elements } from '../models/Elements.js'

export const renderHome = user => {
    let con = document.querySelector('.postCONTAINE')
    let src = user.image;
    if (user.image === undefined) {
        src = '../img/user.png'
    }
    let markUp = `<header class="header">
    <div class="container">
        <div class="header-search-container">
            <img src="../icon/favicon/favicon.ico" alt="" class="header-search-img">
            <i class="header-search-icon fa-1x fa-solid fa-magnifying-glass"></i>
            <i class="header-hidden-icon fa-solid fa-bars"></i>
            <input type="search" name="" class="header-search-searchBox" id="" placeholder="Search Facebook">
        </div>
        <div class="header-nav-container">
            <div class="activeBox header-nav-icon-box">
                <svg viewBox="0 0 28 28" class="activeIcon header-nav-icon-box-icon" fill="currentColor" height="28"
                    width="28" style="user-select: auto;">
                    <path
                        d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"
                        style="user-select: auto;">
                    </path>
                </svg>
            </div>
            <div class="header-nav-icon-box">
                <svg viewBox="0 0 28 28" class="header-nav-icon-box-icon" fill="currentColor" height="28" width="28"
                    style="user-select: auto;">
                    <path
                        d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"
                        style="user-select: auto;"></path>
                </svg>
            </div>
            <div class="header-nav-icon-box">
                <svg viewBox="0 0 28 28" class="header-nav-icon-box-icon" fill="currentColor" height="28" width="28"
                    style="user-select: auto;">
                    <path
                        d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"
                        style="user-select: auto;"></path>
                </svg>
            </div>
            <div class="header-nav-icon-box">
                <svg viewBox="0 0 28 28" class="header-nav-icon-box-icon" fill="currentColor" height="28" width="28"
                    style="user-select: auto;">
                    <path
                        d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"
                        style="user-select: auto;"></path>
                </svg>
            </div>
            <div class="header-nav-icon-box">
                <svg viewBox="0 0 28 28" class="header-nav-icon-box-icon" fill="currentColor" height="28" width="28"
                    style="user-select: auto;">
                    <path
                        d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"
                        style="user-select: auto;"></path>
                </svg>
            </div>
        </div>
        <div class="header-user-container">
            <div class="menu-icon header-user-containerBox">
                <svg fill="currentColor" viewBox="0 0 44 44" width="20px" height="20px"
                    class="header-user-containerBox-icon">
                    <circle cx="7" cy="7" r="6"></circle>
                    <circle cx="22" cy="7" r="6"></circle>
                    <circle cx="37" cy="7" r="6"></circle>
                    <circle cx="7" cy="22" r="6"></circle>
                    <circle cx="22" cy="22" r="6"></circle>
                    <circle cx="37" cy="22" r="6"></circle>
                    <circle cx="7" cy="37" r="6"></circle>
                    <circle cx="22" cy="37" r="6"></circle>
                    <circle cx="37" cy="37" r="6"></circle>
                </svg>
            </div>

            <div class="messenger-icon header-user-containerBox">
                <svg viewBox="0 0 28 28" alt="" class="header-user-containerBox-icon" fill="currentColor"
                    height="20" width="20">
                    <path
                        d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z">
                    </path>
                </svg>
            </div>

            <div class="notification-icon header-user-containerBox">
                <svg viewBox="0 0 28 28" alt="" class="header-user-containerBox-icon" fill="currentColor"
                    height="20" width="20" style="user-select: auto;">
                    <path
                        d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"
                        style="user-select: auto;"></path>
                </svg>
            </div>
            <div class="header-user-containerBox">
                <img src="${src}" alt="" class="header-user-containerBoxImg">
            </div>
        </div>
    </div>

</header>
<div class="profile-con vis">
                        <div class="profile-con--author-con">
                            <img src="${src}" alt="" class="profile-con--author-con--img">
                            <p class="profile-con--author-con--img--caption">${user.userName}</p>
                            <p class="profile-con--author-con--img--caption--see">See your Profile </p>
                        </div>
                        <div class="profile-con--other-con">
                            <div class="profile-con--other-con--circle">
                            <i data-visualcompletion="css-img" class="profile-con--feed-me-con--circle--icon" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/et3VB2M7xXt.png&quot;); background-position: 0px -536px; background-size: 26px 982px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                            </div>
                            <p class="profile-con--other-con--circle--icon--heading"> Log Out
                            </p>
                        </div>
                    </div>
<main class="main">
    <div class="sidebar">
        <div class="sidebar-main">
            <div class="sidebar-flex">
                <div class="sidebar-flexItem">
                    <img src="${src}" alt="" class="sidebar-flexItemImg">
                    <p class="sidebar-flexItemLabel">${user.userName}</p>
                </div>
                <div class="sidebar-flexItem">
                    <img src="./icon/fb-icons/find-icon.png" alt="" class="sidebar-flexItemImg">
                    <p class="sidebar-flexItemLabel">Find Friends</p>
                </div>
                <div class="sidebar-drowndown sidebar-flexItem">
                    <div class="sidebar-dropdownCircle">
                        <svg viewBox="0 0 16 16" width="2.0rem" height="2.0rem" class="sidebar-dropdownIcon"
                            style="user-select: auto;">
                            <g fill-rule="evenodd" transform="translate(-448 -544)" style="user-select: auto;">
                                <path fill-rule="nonzero"
                                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                                    style="user-select: auto;"></path>
                            </g>
                        </svg>
                        <img class="hidden sidebar-flexLoader" src="./icon/fb-icons/loader.gif" alt="">
                    </div>
                    <p class="sidebar-flexItemLabel">See More</p>
                </div>
                <div class="hidden sidebar-dropdownItem">
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/ad.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Ad Center</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/manager.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Ads Manager</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/climate.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Climate Science Center</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/help.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Community Help</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/covid-19.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">COVID-19 Information Center</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/emotional.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Emotional Health</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/pay.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Facebook Pay</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/star.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Favorites</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/fund.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Fundraisers</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/gaming.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Gaming Video</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/live.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Live videos</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/messenger.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Messenger</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/messenger kids.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Messenger Kids</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/recent.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Most Recent</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/game.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Play Games</p>
                    </div>
                    <div class="sidebar-flexItem">
                        <img src="./icon/fb-icons/recentad.png" alt="" class="sidebar-flexItemImg">
                        <p class="sidebar-flexItemLabel">Recent ad activity</p>
                    </div>
                    <div class="sidebar-drownup sidebar-flexItem">
                        <div class="sidebar-dropdownCircle">
                            <svg style="transform:rotate(-180deg)" viewBox="0 0 16 16" width="2.0rem"
                                height="2.0rem" class="sidebar-dropdownIcon" style="user-select: auto;">
                                <g fill-rule="evenodd" transform="translate(-448 -544)" style="user-select: auto;">
                                    <path fill-rule="nonzero"
                                        d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                                        style="user-select: auto;"></path>
                                </g>
                            </svg>
                        </div>
                        <p class="sidebar-flexItemLabel">See less</p>
                    </div>
                </div>
            </div>
            <div class="sidebar-flexDivider"></div>
            <div class="sidebar-shortCuts">
                <p class="sidebar-shortCutsHeading">Your Shortcuts</p>
                <div class="sidebar-shortCutsFlex">
                    <div style="margin-left: 25px; margin-top: -10px;" class="sidebar-shortCutsFlexItem">
                        <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                            class="activebar-headerIcon">
                            <g fill-rule="evenodd" transform="translate(-448 -544)">
                                <path
                                    d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602">
                                </path>
                            </g>
                        </svg>
                        <p class="sidebar-shortCutsFlexLabel">See all ShortCuts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="post-conatiner">
        <div class="post-container-flex">
            <div class="postStory-container">
                <div class="postStory-containerHeader">
                    <div class="postStory-activeItem postStory-containerHeaderItem">
                        <p class="postStory-activeTxt postStory-containerHeaderTxt">Stories</p>
                        <div class="postStory-activeLine"></div>
                    </div>
                    <div class="postStory-containerHeaderItem">
                        <p class="postStory-containerHeaderTxt">Reels</p>
                    </div>
                    <div class="postStory-containerHeaderItem">
                        <p class="postStory-containerHeaderTxt">Rooms</p>
                    </div>
                </div>
                <div class="postStory-main">
                    <div class="postStory-mainStory">
                        <div class="postStory-mainStoryImgsection">
                            <img src="${src}" alt="" class="postStory-mainStoryImg">
                        </div>
                        <div class="postStory-mainStoryTxtSection">
                            <div class="postStory-mainStoryIconCircle">
                                <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"
                                    class="postStory-mainStoryIcon" style="user-select: auto;">
                                    <g fill-rule="evenodd" transform="translate(-446 -350)"
                                        style="user-select: auto;">
                                        <g fill-rule="nonzero" style="user-select: auto;">
                                            <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                                                transform="translate(354.5 159.5)" style="user-select: auto;">
                                            </path>
                                            <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                                                transform="translate(354.5 159.5)" style="user-select: auto;">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p class="postStory-mainStoryTxt">Create Story</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mind-container">
                <div class="mind-containerSearchbox">
                    <img src="${src}" alt="" class="mind-containerSearchImg">
                    <input type="text" class="mind-containerSearch" placeholder="What's on your mind, ${user.userName}?">
                </div>
                <div class="mind-containerLine"></div>
                <div class="mind-containerChoosebox">
                    <div class="mind-containerChoose">
                        <svg fill="#F3425F" viewBox="0 0 24 24" width="1em" height="1em"
                            class="mind-containerChooseIcon" style="user-select: auto;">
                            <g fill-rule="evenodd" transform="translate(-444 -156)" style="user-select: auto;">
                                <g style="user-select: auto;">
                                    <path
                                        d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                                        transform="translate(354 158.5)" style="user-select: auto;"></path>
                                    <path
                                        d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                                        transform="translate(354 158.5)" style="user-select: auto;"></path>
                                </g>
                            </g>
                        </svg>
                        <p class="mind-containerChooseTxt">Live video</p>
                    </div>
                    <div class="mind-containerChoose">
                        <svg fill="#45BD62" viewBox="0 0 24 24" width="1em" height="1em"
                            class="mind-containerChooseIcon" style="user-select: auto;">
                            <g fill-rule="evenodd" transform="translate(-444 -156)" style="user-select: auto;">
                                <g style="user-select: auto;">
                                    <path
                                        d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                                        transform="translate(352 156.5)" style="user-select: auto;"></path>
                                    <path fill-rule="nonzero"
                                        d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                                        transform="translate(352 156.5)" style="user-select: auto;"></path>
                                </g>
                            </g>
                        </svg>
                        <p class="mind-containerChooseTxt">Photo/video</p>
                    </div>
                    <div class="hide-sm mind-containerChoose">
                        <svg fill="#F7B928" viewBox="0 0 24 24" width="1em" height="1em"
                            class="mind-containerChooseIcon" style="user-select: auto;">
                            <g fill-rule="evenodd" transform="translate(-444 -156)" style="user-select: auto;">
                                <g style="user-select: auto;">
                                    <path
                                        d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                                        transform="translate(353.5 156.5)" style="user-select: auto;"></path>
                                    <path fill-rule="nonzero"
                                        d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                                        transform="translate(353.5 156.5)" style="user-select: auto;"></path>
                                    <path
                                        d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                                        transform="translate(353.5 156.5)" style="user-select: auto;"></path>
                                </g>
                            </g>
                        </svg>
                        <p class="mind-containerChooseTxt">Feeling/activity</p>
                    </div>
                </div>
            </div>
            <div class='postCOn vis'>
  <div class='postCOn__header'>
    <p class='txtPOSY'>Create Post</p>
    <div class='postCOn__header__crossCircle'>
      <i data-visualcompletion="css-img" class="icon" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/oKW8d6qUPtx.png&quot;); background-position: 0px -110px; background-size: 190px 186px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
    </div>
  </div>
    <div class='divider'></div>
  <div class='mainPOST'>
    
    <div class='user_area'>
      <img src='${src}' class='user_area_img' />
      <p class='user_area_img_txt'>${user.userName}</p>
    </div>
    <input typ='text' class='textArea' placeholder='What is in your mind ${user.userName}'/>
    <div class='preview'>
    <img src=''  class='previIMg vis'/>
    <span class='txtxtx'>Image Preview<span/>
    </div>
    <div class='addpost'><p class='txtT'>Add to your post</p>
<label for='file'> <img class='img' src='https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png'/></label>
     
           <input type='file' id='file' class='FILEUPloader' style='visibility: hidden'/>
    </div>
    
  </div>
  <button class='postR'>Post<button>
</div>

<button class='btn_show value='Show Posts'>Show POsts</button>
<div class='postCONTAINE'>

     </div>
    </div>
     </div>
</div>
    <div class="activebar">
         <div class="activebar-header">
            <p class="sidebar-heading">Contact</p>
            <div class="activebar-headerInnerflex">
                <div class="activebar-headerCircle"><svg fill="currentColor" viewBox="0 0 16 16" width="1em"
                        height="1em" class="activebar-headerIcon">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <path
                                d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602">
                            </path>
                        </g>
                    </svg></div>
                <div class="activebar-headerCircle"><svg fill="currentColor" viewBox="0 0 16 16" width="1em"
                        height="1em" class="activebar-headerIcon">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <g fill-rule="nonzero">
                                <path
                                    d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                    transform="translate(448 544)"></path>
                            </g>
                        </g>
                    </svg></div>
                <div class="activebar-headerCircle"><svg fill="currentColor" viewBox="0 0 20 20" width="1em"
                        height="1em" class="activebar-headerIcon">
                        <g fill-rule="evenodd" transform="translate(-446 -350)">
                            <path
                                d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                            </path>
                        </g>
                    </svg></div>
            </div>
        </div>
        <div class="activebar-flex">
            <div class="activebar-flexItem">
                <div class="circel"
                    style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%;background-color: #3a3b3c;">
                    <i data-visualcompletion="css-img" class="x1b0d499 xep6ejk"
                        style=" filter:invert(89%) sepia(6%) hue-rotate(185deg);; background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_F7IDYRYTZy.png');background-position:0 -1072px;background-size:26px 1542px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                </div>
                <p style="color: #fff; padding-left: 10px;">Create New Group</p>
            </div>
        </div>
    </div>
</main>`

    elements.mainmainContainerrr.innerHTML = markUp;
}

export const renderSign = () => {
    let markup = `  <div class="cover"></div>
    <div class="signUpBox">
        <form action="">
            <img src="./img/cross.png" alt="" class="icon_cross">
            <p class="heading">Sign Up</p>
            <p class="subHeading">It's quick and easy.</p>
            <div class="signupLIne"></div>
            <div class="inputBox">
                <div class="nameInputs">
                    <input type="text" class="firstName" placeholder="First Name" required>
                    <input type="text" class="SurName" placeholder="Surname" required>
                </div>
                <input type="email" name="" id="" class="email" placeholder="Email address or phone number" required>
                <input type="" name="" id="" class="passworrd" placeholder="New Password" required>
            </div>
            <p class="subHeadings">Date of birth</p>
            <div class="personalData">
                <select class="ageSelector" required>
                    <option selected>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                    <option>
                        6
                    </option>
                    <option>
                        7
                    </option>
                    <option>
                        8
                    </option>
                    <option>
                        9
                    </option>
                    <option>
                        10
                    </option>
                    <option>
                        11
                    </option>
                    <option checked>
                        12
                    </option>
                    <option>
                        13
                    </option>
                    <option>
                        14
                    </option>
                    <option>
                        15
                    </option>
                    <option>
                        16
                    </option>
                    <option>
                        17
                    </option>
                    <option>
                        18
                    </option>
                    <option>
                        19
                    </option>
                    <option>
                        20
                    </option>
                    <option>
                        21
                    </option>
                    <option>
                        22
                    </option>
                    <option>
                        23
                    </option>
                    <option>
                        24
                    </option>
                    <option>
                        25
                    </option>
                    <option>
                        26
                    </option>
                    <option>
                        27
                    </option>
                    <option>
                        28
                    </option>
                    <option>
                        29
                    </option>
                    <option>
                        30
                    </option>
                    <option>
                        31
                    </option>
                </select>

                <select class="monthSeector" required>
                    <option selected>
                        Janurary
                    </option>
                    <option>
                        Feburary
                    </option>
                    <option>
                        March
                    </option>
                    <option>
                        April
                    </option>
                    <option>
                        May
                    </option>
                    <option>
                        June
                    </option>
                    <option>
                        july
                    </option>
                    <option>
                        August
                    </option>
                    <option>
                        September
                    </option>
                    <option>
                        Ocqtober
                    </option>
                    <option>
                        November
                    </option>
                    <option>
                        December
                    </option>

                </select>

                <select class="yearSelector" required>
                    <option value="2023" selected="1">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                </select>
            </div>

            <p class="subHeadings__gender">Gender</p>
            <div class="genderData">
                <label class="gender">
                    Female
                    <input type="radio" name="gender" value="Female" />
                </label>
                <label class="gender" style="margin-left: 30px;">
                    Male
                    <input type="radio" name="gender" value="Male" />
                </label>
            </div>
            <input type="" style="text-align: center;" class="signUP__button" value="Sign Up">
        </form>
    </div>
    <div class="container">
        <div class="txtCon">
            <img src="./img/logo.svg" alt="" class="logo">
            <p class="txt">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div class="logIN">
            <form action="">
                <div class="loginBox">
                    <input type="email" name="" id="" class="emailInput" placeholder="Email address or phone number"
                        required>
                    <input type="password" name="" id="" class="passwordInput" placeholder="Password" required>
                    <input type="" value="Login In" class="loginBtn">
            </form>
            <a href="" class="forgetBtn">Forgotten password?</a>
            <div class="line"></div>
            <button class="signUpBtn">Create New Account</button>
        </div>

    </div>
    </div>
    `
    elements.mainmainContainerrr.innerHTML = markup;
}