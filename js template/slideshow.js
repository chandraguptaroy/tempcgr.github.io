    var slideIndex = [1,1];
    var slideId = ["mySlides1", "mySlides2"]
    var dotIndex = [1,1];
    var dotId = ["dot1", "dot2"]
    showSlides(1, 0);
    showSlides(1, 1);

    function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
    }
    function currentSlide(n,no) {
    showSlides(slideIndex[no] = n,no);
    }
    function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  

    var y = document.getElementsByClassName(dotId[no]);
    for (i = 0; i < y.length; i++) {
        y[i].className = y[i].className.replace(" active", "");
    } 
    y[slideIndex[no]-1].className += " active";
}

