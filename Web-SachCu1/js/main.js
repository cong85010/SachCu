/*Responsive */
    //Mobile


/* Xu ly dang nhap */
function login() {
    document.querySelector('.container-login').classList.add('login__onscreen')
}
function closeLogin() {
    document.querySelector('.container-login').classList.remove('login__onscreen')
}
function register() {
    document.querySelector('.register').classList.add('register__onscreen')
}
function close__register() {
    document.querySelector('.register').classList.remove('register__onscreen')
}
/*Notification */
let check__notify = false
function notification() {
        check__notify = !check__notify
        let notify = document.querySelector('#notification .notify')
        if(check__notify) {
            notify.style.visibility = 'visible'
            notify.classList.add('notify__open')
        } else {
            notify.style.visibility = 'hidden'
            notify.classList.remove('notify__open')
        }
        return false;
 } 
/* Jquery load header & fo`oter */
$(function(){
    $('#includeHeader').load('/html/header/header.html', ()=> {
        $('#notification').load('/html/header/notification.html')
        $('#includeLogin').load('/html/header/login.html')
        $('#header__mobile').load('/html/header/header__mobile.html')
    })
    $('#includeFooter').load('/html/footer/footer.html')
    $('#includePost-right').load('/html/post/post-right.html')

})
let listScript = [
    '/js/header__mobile.js',
]
listScript.map(item => {
    $("head").append(`<script type="text/javascript" src="${item}"></script>`)
})