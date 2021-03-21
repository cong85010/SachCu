$(function() {
    let countItem = 0
    $(`#addCart`).click(() => {
       countItem++
        $(`.header__top--right .countCart`).text(countItem)
        $(`.header__top--right .countCart`).effect( "bounce", "slow" );
    })
    $(`#includeReport`).load('/html/product/report.html')
})

function report() {
    let Style =  document.querySelector('.report1').style;
    if(Style.right != '0px') {
        Style.visibility = "visible"
        Style.right = "0px"
        Style.opacity = "1"
    } else {
        Style.visibility = "hidden"
        Style.right = "-200px"
        Style.opacity = "0"
    }
   
}

