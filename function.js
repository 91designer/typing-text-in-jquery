$(document).ready(function(){

    $("span").typed({
              strings: ["hello world"," I'm mohamed "," I hope you like my git-hub tutorial ","how to publish your project on gIT-HUB","let's go.."],
              typeSpeed: 20,
              startDelay: 1000,
              backSpeed: 10,
              backDelay: 1000,
              loop: true,
              loopCount: 2,
              callBack: function(){
                  console.log("done done done done done ");
                  $("span").animate({background:"#fc6"},1000);
              },

          });
});
