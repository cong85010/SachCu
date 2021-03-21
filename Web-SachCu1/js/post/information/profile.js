function editInfor(classadd) {
    let check = document.querySelector('.post__form__right .' + classadd)
    if(classadd === 'pass' && check.disabled == true) {
        let passOld = prompt( 'Mật khẩu củ: ')
        if(!passOld) return
        /*Check pass */
         check.parentNode.childNodes[3].style.visibility = 'visible'
    } 
    if(check.disabled == true) {
        check.style.backgroundColor = 'white' 
        /*change pencil <-> check*/
        removeClass(check, 'fa-pencil')
        addClass(check, 'fa-check-circle')
        check.disabled = false
    }
    else {
        check.style.backgroundColor = 'whitesmoke' 
        removeClass(check, 'fa-check-circle')
        addClass(check, 'fa-pencil')
        check.disabled = true
        check.parentNode.childNodes[3].style.visibility = 'hidden'
        checkPass()
    }
}
function checkPass() {
    if(confirm("Xác nhận đổi mật khẩu!!!")) {
        /* Chap nhan doi mk */
    } else {
        /* Khong doi mk */
        alert("Mật khẩu không đổi")
    }
}
function addClass(check, nameClass) {
    check.parentNode.lastElementChild.classList.add(nameClass)
}
function removeClass(check, nameClass) {
    check.parentNode.lastElementChild.classList.remove(nameClass)
}
function viewPass() {
    let input_viewPass = document.querySelector('.post__form__right .pass')
    if(input_viewPass.type == 'password' && input_viewPass.disabled == false) {
        input_viewPass.type = 'text'
    } else {
        input_viewPass.type = 'password'
    }
}