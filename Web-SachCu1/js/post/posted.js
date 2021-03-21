let checkAllbox = false
function checkAll() {
    var checkboxes  = document.getElementsByName('post')
    if(checkAllbox === false) {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes [i].checked = true
        }    
        checkAllbox = true
    }
    else {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes [i].checked = false
        }    
        checkAllbox = false
    }
}
function nextLink() {
    location.href = document.querySelector('.link').getAttribute("href")
}
function getName(id) {
    return document.getElementById(id).childNodes[3].textContent
}
function removeRowPost(del) {
    if(confirm('Xác nhận xóa ' + getName(del) +'?')) {
        let child = document.getElementById(del)
        child.parentNode.removeChild(child)
    }
}
function removecheckPost() {
    let all = document.querySelectorAll('tbody input') 
    all.forEach(item => {
        if(item.checked === true) {
            removeRowPost(item.parentNode.parentNode.getAttribute('id'))
        }
    });
}
