$(function() {

    //BEGIN
    $(".fcc-header").on("click", function(e) {

        console.log("emre");
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("faq-active")) {
            $(".fcc-body").slideUp(400);
            $(".fcc-header").removeClass("faq-active");
            //$('.accordion__arrow').removeClass('accordion__rotate');
        }

        $this.toggleClass("faq-active");
        $this.next().slideToggle();
        //$('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END

});
