var num=100;

$(document).ready(function () {



        $("#imgHTML").on('mouseover',function() {
            $("#textHTML").addClass('bold');
        });
        $("#imgCSS").on('mouseover',function() {
            $("#textCSS").addClass('bold');
        });
        $("#imgPHP").on('mouseover',function() {
            $("#textPHP").addClass('bold');
        });
        $("#imgJAVA").on('mouseover',function() {
            $("#textJAVA").addClass('bold');
        });
        $("#imgC").on('mouseover',function() {
            $("#textC").addClass('bold');
        });
        $("#imgCPlusPlus").on('mouseover',function() {
            $("#textCPlusPlus").addClass('bold');
        });
        $("#imgVB").on('mouseover',function() {
            $("#textVB").addClass('bold');
        });
        $("#imgSQL").on('mouseover',function() {
            $("#textSQL").addClass('bold');
        });

        $("#imgHTML").on('mouseout',function() {
            $("#textHTML").removeClass('bold');
        });
        $("#imgCSS").on('mouseout',function() {
            $("#textCSS").removeClass('bold');
        });
        $("#imgPHP").on('mouseout',function() {
            $("#textPHP").removeClass('bold');
        });
        $("#imgJAVA").on('mouseout',function() {
            $("#textJAVA").removeClass('bold');
        });
        $("#imgC").on('mouseout',function() {
            $("#textC").removeClass('bold');
        });
        $("#imgCPlusPlus").on('mouseout',function() {
            $("#textCPlusPlus").removeClass('bold');
        });
        $("#imgVB").on('mouseout',function() {
            $("#textVB").removeClass('bold');
        });
        $("#imgSQL").on('mouseout',function() {
            $("#textSQL").removeClass('bold');
        });

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();

});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var boutons = document.querySelectorAll(".menu a");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            boutons.forEach(element => element.classList.remove("active"));
            boutons[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    };
