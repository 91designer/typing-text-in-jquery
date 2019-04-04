$(document).ready(function(){

    $("span").typed({
              strings: ["hello world",
              "My name is Mohamed Morh",
              "I hope you like my first page on git-hub",
              "actually I like this experience cuz..",
              "it helped mu so much to save my documents hahaha"
            ],
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
