$(".the-button").on("click", ()=>{
  $(".side-bar .the-bar").animate({ width: 'toggle'},300);
  $(".side-bar .the-bar .fa-xmark").css("cursor","pointer")
});

$(".the-bar i").on("click", ()=>{
  $(".side-bar .the-bar").animate({ width: 'toggle'},300);
});

$(".the-bar li a").on("click", (e)=>{

let scrollT = $(`#${e.target.href.split("#")[1]}`)
$('html, body').animate({ scrollTop: scrollT["0"].offsetTop},1500)
});

$(".singers .container p").not(".singers .container p:first").slideUp(0)

$(".singers .container div").on("click", (e)=>{
  $(".singers .container p").not($(e.target).siblings("p")).slideUp(500);
  $(e.target).siblings("p").slideToggle(500);
})

let eventDate = new Date("2024-10-25");
let curntDate = new Date();
let result =new Date(eventDate-curntDate)

let days=Math.floor((result.getTime())/86400000)
let hours=Math.floor((((result.getTime())/86400000)-days)*24)
let minutes=Math.floor((((((result.getTime())/86400000)-days)*24)-hours)*60)
let seconds =Math.floor((((((((result.getTime())/86400000)-days)*24)-hours)*60)-minutes)*60)
$(".notations .days .num").html(days)
$(".notations .hours .num").html(hours)
$(".notations .mins .num").html(minutes)
$(".notations .seconds .num").html(seconds)

setInterval(()=>{
  seconds--;
  if(seconds==0){
    seconds = 60;
    minutes--;
    if(minutes==0){
      minutes=60;
      hours--;
      if(hours==0){
        hours=24;
        days--;
        $(".notations .hours .num").html(hours)
      }else{
        $(".notations .hours .num").html(hours)
      }
      $(".notations .mins .num").html(minutes)
    }else{
      $(".notations .mins .num").html(minutes)
    }
    $(".notations .seconds .num").text(seconds)
  }else{
    $(".notations .seconds .num").text(seconds)
  }
  
}, 1000);

$("#contact textarea").on("input",()=>{
let textArr = $("#contact textarea").val().split("")
$(".counter").html(100-textArr.length)
})