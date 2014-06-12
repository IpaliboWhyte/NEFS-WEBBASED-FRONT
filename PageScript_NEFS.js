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

$(document).on("click", ".menu_Items", function() {
    toggleDivs();
});
