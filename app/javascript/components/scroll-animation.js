$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function(event) {
        event.preventDefault();
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            let anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1000);
            }
        }
    });
});
