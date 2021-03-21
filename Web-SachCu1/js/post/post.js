  window.onload = function() {
    function getCountPost() {
        return document.querySelectorAll('tbody tr').length
    }
    function setCountPost() {
       document.getElementById('countPost').innerHTML = getCountPost()
    }
    setInterval(setCountPost, 60)
}