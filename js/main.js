$("#logo-div").click(function() {
    $("nav").toggle();
});

$("nav ul>li").click(function() {
    $("nav").toggle();
    scrollToAnchor($("a", this).attr("href"));
});

$("nav a").click(function(event) {
    event.preventDefault();
})

function scrollToAnchor(anchorName) {
    var aTag = $(anchorName);
    $('html,body').animate({
        scrollTop: aTag.offset().top
    }, 'slow');
}