 

  $(document).ready(function(){
    $('#google_translate_element').bind('DOMNodeInserted', function(event) {
      $('.goog-te-menu-value span:first').html('LANGUAGE');
      $('.goog-te-menu-frame.skiptranslate').load(function(){
        setTimeout(function(){
          $('.goog-te-menu-frame.skiptranslate').contents().find('.goog-te-menu2-item-selected .text').html('LANGUAGE');    
        }, 100);
      });
    });
  });
  var targetElement = document.getElementById("google_translate_element");
    var yourContent = "Your text or <br /> HTML element"
    targetElement.addEventListener("DOMNodeInserted", () => {
      $(".goog-te-menu-value span:first").each(function (i, obj) {
        if (obj.childNodes[0] && obj.childNodes[0].textContent == "Language") {
          $(obj).html(yourContent);
        }
      });
    });