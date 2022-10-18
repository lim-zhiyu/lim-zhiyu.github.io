var theme = window.localStorage.currentTheme;
// console.log(theme);

$('body').addClass(theme);

if ($("body").hasClass("night")) {
    // Dark mode
    $('.dntoggle').addClass('fa-sun-o');
    $('.dntoggle').removeClass('fa-moon-o');
    $('body').addClass('night');
    $('header').addClass('dark-mode-header');
    $('footer').addClass('dark-mode-footer');
    $('.project-container').addClass('dark-mode-project-containers');
    $('.navigation-button').addClass('dark-mode-nav-list-items');
    $('#linkedinLogo').attr("src", "img/logo/linkedin-dark-mode.png");
    $('#githubLogo').attr("src", "img/logo/github-dark-mode.png");
    $('#gmailLogo').attr("src", "img/logo/gmail-dark-mode.png");
    $('.contact-link').addClass('dark-mode-contact-links');

} else {
    // Light mode
    $('.dntoggle').removeClass('fa-sun-o');
    $('.dntoggle').addClass('fa-moon-o');
    $('body').removeClass('night');
    $('header').removeClass('dark-mode-header');
    $('header').removeClass('night');
    $('footer').removeClass('dark-mode-footer');
    $('footer').removeClass('night');
    $('.project-container').removeClass('dark-mode-project-containers');
    $('.navigation-button').removeClass('dark-mode-nav-list-items');
    $('.navigation-button').removeClass('night');
    $('#linkedinLogo').attr("src", "img/logo/linkedin.svg");
    $('#githubLogo').attr("src", "img/logo/github.svg");
    $('#gmailLogo').attr("src", "img/logo/gmail.svg");
    $('.contact-link').removeClass('dark-mode-contact-links');
}

$('.dntoggle').click(function() {
    $('.dntoggle').toggleClass('fa-sun-o');
    $('.dntoggle').toggleClass('fa-moon-o');

    if ($("body").hasClass("night")) {
        // Light mode
        $('body').removeClass('night');
        $('header').removeClass('dark-mode-header');
        $('header').removeClass('night');
        $('footer').removeClass('dark-mode-footer');
        $('footer').removeClass('night');
        $('.project-container').removeClass('dark-mode-project-containers');
        $('.navigation-button').removeClass('dark-mode-nav-list-items');
        $('.navigation-button').removeClass('night');
        $('#linkedinLogo').attr("src", "img/logo/linkedin.svg");
        $('#githubLogo').attr("src", "img/logo/github.svg");
        $('#gmailLogo').attr("src", "img/logo/gmail.svg");
        $('.contact-link').removeClass('dark-mode-contact-links');
        localStorage.removeItem('currentTheme');
        localStorage.currentTheme = "day";
        theme = window.localStorage.currentTheme;
        // console.log(theme);
    } else {
        // Dark mode
        $('body').toggleClass('night');
        $('header').toggleClass('dark-mode-header');
        $('footer').toggleClass('dark-mode-footer');
        $('.project-container').toggleClass('dark-mode-project-containers');
        $('.navigation-button').toggleClass('dark-mode-nav-list-items');
        $('#linkedinLogo').attr("src", "img/logo/linkedin-dark-mode.png");
        $('#githubLogo').attr("src", "img/logo/github-dark-mode.png");
        $('#gmailLogo').attr("src", "img/logo/gmail-dark-mode.png");
        $('.contact-link').addClass('dark-mode-contact-links');
        localStorage.removeItem('currentTheme');
        localStorage.currentTheme = "night";
        theme = window.localStorage.currentTheme;
        // console.log(theme);
    }
});


/*
var theme = window.localStorage.currentTheme;

        $('body').addClass(theme);
        $('header').addClass(theme);
        $('footer').addClass(theme);
        $('.project-container').addClass(theme);
        $('.navigation-button').addClass(theme);

        if ($("body").hasClass("night")) {
            $('.dntoggle').addClass('fa-sun-o');
            $('.dntoggle').removeClass('fa-moon-o');
        } else {
            $('.dntoggle').removeClass('fa-sun-o');
            $('.dntoggle').addClass('fa-moon-o');
        }

        if (theme == "night") {
            $('body').addClass('night');
            $('header').addClass('dark-mode-header');
            $('footer').addClass('dark-mode-footer');
            $('.project-container').addClass('dark-mode-project-containers');
            $('.navigation-button').addClass('dark-mode-nav-list-items');
        } else if (theme == "day") {
            $('body').removeClass('night');
            $('header').removeClass('dark-mode-header');
            $('footer').removeClass('dark-mode-footer');
            $('.project-container').removeClass('dark-mode-project-containers');
            $('.navigation-button').removeClass('dark-mode-nav-list-items');
        }

        $('.dntoggle').click(function() {
            $('.dntoggle').toggleClass('fa-sun-o');
            $('.dntoggle').toggleClass('fa-moon-o');

            if ($("body").hasClass("night")) {
                $('body').toggleClass('night');
                $('header').toggleClass('dark-mode-header');
                $('footer').toggleClass('dark-mode-footer');
                $('.project-container').toggleClass('dark-mode-project-containers');
                $('.navigation-button').toggleClass('dark-mode-nav-list-items');
                localStorage.removeItem('currentTheme');
                localStorage.currentTheme = "day";
            } else {
                $('body').toggleClass('night');
                $('header').toggleClass('dark-mode-header');
                $('footer').toggleClass('dark-mode-footer');
                $('.project-container').toggleClass('dark-mode-project-containers');
                $('.navigation-button').toggleClass('dark-mode-nav-list-items');
                localStorage.removeItem('currentTheme');
                localStorage.currentTheme = "night";
            }
        });
*/




/*
var darkmode = 0;

function toggleDarkMode() {
    // Body
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Project Containers
    var numOfProjectContainers = document.getElementsByClassName("project-container");
    for (let i = 1; i <= numOfProjectContainers.length; i++) {
        var tempElement = document.querySelector("body > main > section > section:nth-child(" + i + ")");
        tempElement.classList.toggle("dark-mode-project-containers");
    }

    // Header
    var elementHeader = document.querySelector("body > header");
    elementHeader.classList.toggle("dark-mode-header");

    // Footer
    var elementFooter = document.querySelector("body > footer");
    elementFooter.classList.toggle("dark-mode-footer");

    // Nav list items
    var numOfNavButtons = document.getElementsByClassName("navigation-button");
    for (let i = 1; i <= numOfNavButtons.length; i++) {
        var tempElement2 = document.querySelector("body > header > nav > ul > li:nth-child(" + i + ") > a");
        tempElement2.classList.toggle("dark-mode-nav-list-items");
    }

    // Contact links
    var numOfContactLinks = document.getElementsByClassName("contact-link");
    for (let i = 1; i <= numOfContactLinks.length-1; i++) {
        var tempElement3 = document.querySelector("body > main > section > section:nth-child(" + i + ")  > a:nth-child(2)");
        tempElement3.classList.toggle("dark-mode-contact-links");
    }

    // Contact logos
    if (darkmode % 2 == 0) {
        document.querySelector("#linkedinLogo").src="img/logo/linkedin-dark-mode.png";
        document.querySelector("#githubLogo").src="img/logo/github-dark-mode.png";
        document.querySelector("#gmailLogo").src="img/logo/gmail-dark-mode.png";
    }
    else {
        document.querySelector("#linkedinLogo").src="img/logo/linkedin.svg";
        document.querySelector("#githubLogo").src="img/logo/github.svg";
        document.querySelector("#gmailLogo").src="img/logo/gmail.svg";
    }
    darkmode = darkmode + 1;
    if (darkmode == 10) {
        darkmode = 0;
    }
}
*/