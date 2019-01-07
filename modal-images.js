//used to darken images when hovered to show they can be clicked on
// to active the modal image
$(function() {
    var latestImg;
    $(".carousel").hover(function() {
        var imgHovered = $(this).find('img');
        latestImg = imgHovered;
        console.log(imgHovered);
        imgHovered.css("opacity", 0.8);
        $(".test").css("z-index", 10);
    })
    $(".carousel").mouseleave(function() {
        latestImg.css("opacity", 1);
        $(".test").css("z-index", 0);
    })
})

//find active image in the clicked on carousel
function activeImage(id) {
    var carousel = $(id);
    var active = carousel.find('.active');
    console.log(active);
    var src = $('.active', carousel).find('img').attr('src');
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
