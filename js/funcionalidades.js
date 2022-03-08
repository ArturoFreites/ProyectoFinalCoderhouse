
//ANIMACIONES SCROLL

$(document).ready(function() {
    $("#main-nav li a").click(function(e) {
        
        var targetHref = $(this).attr("href");
        
      $("html, body").animate({
          scrollTop: $(targetHref).offset().top
      }, 1000);
      
      e.preventDefault();
    });
  });



  //IMPRIMIR DIV CON JQUERY

function printContent(el){
var restorepage = $("body").html();
var printcontent = $("#" + el).clone();
$("body").empty().html(printcontent);
window.print();
$("body").html(restorepage);
}

