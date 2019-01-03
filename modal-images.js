//$("test").hover(function() {
//    var imgHovered = //make img become more transparent
//})

//find active image in the clicked on carousel
function activeImage(id) {
    var carousel = document.getElementById(id);
    var src = $('.active').find('img').attr('src');
    return src;
}
//set the img for the modal
function modalFullscreen(imgSrc) {
    console.log(imgSrc);
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('pp-modal-image');
    var span = document.getElementsByClassName('close')[0];
    var navMenu = document.getElementsByClassName('navbar')[0];
    navMenu.style.display = "none";

    modal.style.display = "block";
    modalImg.src = imgSrc;
    span.onclick = function() {
        modal.style.display = "none";
        navMenu.style.display = "flex";
    }
}
