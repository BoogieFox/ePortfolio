var num=0;

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
});
