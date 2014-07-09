 
 $("body").click(function(){
      $(".fade").fadeIn("slow", function(){
        console.log("I was clicked on!");
      });
    });