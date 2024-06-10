// Smooth scroll for navigation links and closing mobile menu on click
$(document).ready(function () {
    $("a.nav-link, .navbar-brand, header a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navbarHeight = $(".navbar").outerHeight(); // Get the height of the navbar

            // Adjust scroll position for Home link to go to top
            if (hash === "#home") {
                $("html, body").animate(
                    {
                        scrollTop: 0,
                    },
                    800,
                    function () {
                        // Add hash to the URL when done scrolling
                        if (history.pushState) {
                            history.pushState(null, null, hash);
                        } else {
                            window.location.hash = hash;
                        }
                    }
                );
            } else {
                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top - navbarHeight,
                    },
                    800,
                    function () {
                        // Add hash to the URL when done scrolling
                        if (history.pushState) {
                            history.pushState(null, null, hash);
                        } else {
                            window.location.hash = hash;
                        }
                    }
                );
            }

            // Close the navbar on mobile after clicking a link
            if ($(".navbar-toggler").is(":visible")) {
                $(".navbar-collapse").collapse("hide");
            }
        }
    });

    // Show or hide the back-to-top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });

    // Scroll to top functionality
    $("#back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});

$(document).on("click", ".navbar-collapse.show", function (e) {
    if ($(e.target).is("a") && !$(e.target).hasClass("dropdown-toggle")) {
        $(this).collapse("hide");
    }
});
