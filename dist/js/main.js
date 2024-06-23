

$(function() {
    AOS.init();
    $(".fcc-header").on("click", function(e) {

        e.preventDefault();
        let $this = $(this);

        if (!$this.hasClass("faq-active")) {
            $(".fcc-body").slideUp(400);
            $(".fcc-header").removeClass("faq-active");
        }

        $this.toggleClass("faq-active");
        $this.next().slideToggle();
    });


    $(".hc-menu-btn button").on("click", function(e) {
        if ($("header").hasClass("open-mobile-menu")){
            $("header").removeClass("open-mobile-menu")
        }else{
            $("header").addClass("open-mobile-menu")
        }
    })



});
