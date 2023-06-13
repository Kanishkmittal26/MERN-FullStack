$("h1").css("color","blue");


// selcting elements using jquery
$("button");


// selecting styles using jQuery
$("button").css("background-color","yellow");


// adding class to elements

$("h1").addClass("big-title");


// manipulating text using jQuery

$("h1").text("bye");


$("button").html("<em>Hey</em>")


// manipulating attributes of elements using jQuery

$("a").attr("href","https://www.yahoo.com");

var nameOfSite=console.log($("a").text());

nameOfSite="yahoo"; 

$("a").text(nameOfSite);


// adding eventListeners using jQuery

// 1.
$("h1").click(function(){
        $("h1").text("my name is Kanishk").addClass("kanishk").css("background-color","violet");
});


// 2.
// before jquery


// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";

//         setTimeout(function(){
//             document.querySelector("h1").style.color="yellow";
//         },1000);
//     });
// }


// after jQuery

$("button").click(function(){
    $("h1").css("color","purple");

    setTimeout(function(){
        $("h1").css("color","yellow");
    },1000);
});



$("input").keypress(function(event){
    console.log(event.key);
});



// task
// when u press anything on body the text inside h1 should change as the value you are pressing simultaneously



// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });
 

$("h1").on("mouseover",function(){
    $("h1").text("google");

    setTimeout(function(){
        $("h1").text("Kanishk");
    },1000);

});


// adding elements using jQuery

$("h1").before("<button>button before</button>");
{/* <button>button before</button> */}
{/* <h1></h1> */}

$("h1").after("<button>button before</button>");
{/* <h1></h1> */}
{/* <button>button before</button> */}


$("h1").prepend("<button>button before</button>");
{/* <h1><button>button before</button>Hello</h1> */}


$("h1").append("<button>button before</button>");
{/* <h1>Hello<button>button before</button></h1> */}


// adding animations using jQuery

$("button").on("click",function(){
    $("h1").slideUp().slideDown();
});


//    or

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});


//    or

$("button").on("click",function(){
    $("h1").hide();
});