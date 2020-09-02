if (name && email && message) {
    customerMessage.push(name, email, message);
    alert("Hi " + name + ", \nThank you for reaching out to us, we will respond as soon as possible.");
    return customerMessage;

} else {
    alert("Please fill in all fields");
    return name;
}

// jQuery
$(document).ready(function() {

//Preloader
$(window).on("load", function() {
    preloaderFadeOutTime = 3000;
    function hidePreloader() {
        var preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

// Design: Hide image and show paragraph
$(".design-initially-showing").click(function() {
    $(".design-initially-hidden").show();
    $(".design-initially-showing").hide();
    $(".design-initially-hidden").slideToggle();
    $(".design-initially-showing").slideToggle();
});

// Design: Hide paragraph and show image
$(".design-initially-hidden").click(function() {
    $(".design-initially-hidden").hide();
    $(".design-initially-showing").show();
    $(".design-initially-hidden").slideToggle();
    $(".design-initially-showing").slideToggle();
});

// Development: Hide image and show paragraph
$(".dev-initially-showing").click(function() {
    $(".dev-initially-hidden").show();
    $(".dev-initially-showing").hide();
    $(".dev-initially-hidden").slideToggle();
    $(".dev-initially-showing").slideToggle();
});

// Development: Hide paragraph and show image
$(".dev-initially-hidden").click(function() {
    $(".dev-initially-hidden").hide();
    $(".dev-initially-showing").show();
    $(".dev-initially-hidden").slideToggle();
    $(".dev-initially-showing").slideToggle();
});

// Product Management: Hide image and show paragraph
$(".p-mgt-initially-showing").click(function() {
    $(".p-mgt-initially-hidden").show();
    $(".p-mgt-initially-showing").hide();
    $(".p-mgt-initially-hidden").slideToggle();
    $(".p-mgt-initially-showing").slideToggle();
});

// Product Management: Hide paragraph and show image
$(".p-mgt-initially-hidden").click(function() {
    $(".p-mgt-initially-hidden").hide();
    $(".p-mgt-initially-showing").show();
    $(".p-mgt-initially-hidden").slideToggle();
    $(".p-mgt-initially-showing").slideToggle();
});

// Hover effect on portfolio images
$(".portfolio img").hover(function() {
    $(".col-md-3 img").addClass("image");
    $(".project-name").show();
});
$("#button").click(function() {
    event.preventDefault();
});



$("#button").click(function() {
    if (showCustomerMessage()) {
        $("#message-alert").text("Hi " + showCustomerMessage() + ", \nThank you for reaching out to us, we will respond as soon as possible.");
        $("#message-alert").addClass("alert-success");
        $("#message-alert").removeClass("alert-danger");
        $("#message-alert").show();
    } else {
        $("#message-alert").text("Please fill in all fields");
        $("#message-alert").removeClass("alert-success");
        $("#message-alert").addClass("alert-danger");
        $("#message-alert").show();
    }


});

$(button).on("click", function() {
    alertFadeOutTime = 5000;

    function hideAlert() {
        var messageAlert = $('#message-alert');
        messageAlert.fadeOut(alertFadeOutTime);
    }
    hideAlert();
});
}); 