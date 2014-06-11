function toggleDivs() {
    var $inner = $("#inner");

    // See which <divs> should be animated in/out.
    if ($inner.position().left == 0) {
        $inner.animate({
            left: "-100%"
        });
    }
    else {
        $inner.animate({
            left: "0px"
        });
    }

}
$( document ).ready(function() {
    $('.menu_Items').bind("click", function() {
        alert("Got here");
});

$("button").bind("click", function() {
    toggleDivs();
});
 });   