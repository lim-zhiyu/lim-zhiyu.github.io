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
    $('.home-button').addClass('dark-mode-home-button');
    $('.cards-container').addClass('dark-mode-cards-container');
    $('.project-name').addClass('dark-mode-project-name');

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
    $('.home-button').removeClass('dark-mode-home-button');
    $('.cards-container').removeClass('dark-mode-cards-container');
    $('.project-name').removeClass('dark-mode-project-name');
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
        $('.home-button').removeClass('dark-mode-home-button');
        $('.cards-container').removeClass('dark-mode-cards-container');
        $('.project-name').removeClass('dark-mode-project-name');
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
        $('.home-button').addClass('dark-mode-home-button');
        $('.cards-container').addClass('dark-mode-cards-container');
        $('.project-name').addClass('dark-mode-project-name');
        localStorage.removeItem('currentTheme');
        localStorage.currentTheme = "night";
        theme = window.localStorage.currentTheme;
        // console.log(theme);
    }
});

