$(document).ready(function(){

//---Nav Bar--------------------
/*$('nav li').on( 'click', 'a', function() {

$('nav li').removeClass( 'current' );
$(this).addClass( 'current' );

});*/

$("#Obooks").click(function(){

  $('#results').hide();
  $('#content').show();
  $("#music").slideUp(500,function(){
    $("#books").delay(200).slideDown(500);

  });
});

$("#Oalbums").click(function(){
  $('#content').show();
  $('#results').hide();
  $("#books").slideUp(500,function(){
    $("#music").delay(200).slideDown(500);
  });
});

$("#All").click(function(){
$('#content').show();
$('#results').hide();
  $("#music").slideDown(500);
  $("#books").slideDown(500);
});






//------------------------------



var products = [
  {
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 24.99,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
  },
  {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg"
  },
  {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8.99,
    picture_url: "https://images-na.ssl-images-amazon.com/images/I/51RWA6BmIWL._SX320_BO1,204,203,200_.jpg"
  },
  {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 99.99,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
  },
  {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19.99,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
  },
  {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["Made by and for a husband and wife", "The best darn music you will come across"],
    price: 109.99,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
  }
];





     function chooseProd(collection){
       
        for(var i = 0; i < collection.length; i++){
          
             if(collection[i].category=== 'books'){
              $('#books').append("<div class='itemBlock'><div class='floatLeft'><h2> Title:</h2> <p class = 'lead title'>"+collection[i].name+"</p><h2>Price:</h2> <p class = 'lead price'>$"
               +collection[i].price+"</p><h2>Buy this because it is: </h2><ul class = 'lead'>" + buyThis(products) + "</ul><br></div><div class='floatRight'><img class = 'pic' src="+collection[i].picture_url+"></div></div>");
             }
         
            else if(collection[i].category=== 'music'){
              $('#music').append("<div class='itemBlock'><div class='floatLeft'><h2> Title:</h2> <p class = 'lead title'>"+collection[i].name+"</p><h2>Price:</h2> <p class = 'lead price'>$"
               +collection[i].price+"</p><h2>Buy this because it is: </h2><ul class = 'lead'>" + buyThis(products) + "</ul><br></div><div class='floatRight'><img class = 'pic' src="+collection[i].picture_url+"></div></div>");
             }
        }

         function buyThis(collection){  
              var str = "";
            for(var x =0; x < collection[i].selling_points.length; x++){
              str +="<li>" + collection[i].selling_points[x] + "</li>";
            }
         return str;
        }
}

chooseProd(products)


var cartItems = [];
$(".price").after("<button class='cartAddBtn'>Add to Cart</button>");
$(".cartAddBtn").click(function(){
  $("#cart").attr("src","http://www.clipartkid.com/images/275/description-shopping-cart-with-food-clip-art-2-svg-HykRSL-clipart.png");
  var newItem = {}
  newItem.title = ($(this).siblings(".title").text());
  newItem.price = ($(this).siblings(".price").text());
  cartItems.push(newItem);
});

function buildCartList (list) {
  if (list.length===0) return "<p>No items in cart.<p>";
  var totalPrice = list.map(function(item){
    return Number(item.price.slice(1));
  }).reduce(function(tot,curr){
    return tot+curr;
  });
  var str= list.reduce(function(tot,curr){
    return tot+"<li>"+curr.price+" - "+curr.title+"</li>";
  },"<ul>");
  return str+"</ul><hr><h4>Total: $"+Math.floor(totalPrice*100)/100+"</h4>";
}

$("#cart").click(function(){
  $("#shoppingList").html(buildCartList(cartItems));
  $("#cartList").show();
  if (cartItems.length===0) {
    $("#checkoutBtn").hide();
    $("#resetBtn").hide();
  }
});

$("#closeList").click(function(){
  $("#checkoutBtn").show();
  $("#resetBtn").show();
  $("#cartList").hide();
});

$("#checkoutBtn").click(function(){
  alert("Items will ship in 2-3 buisness days!");
  $("#cartList").hide();
  $("#cart").attr("src","http://www.comfyco.com/new_images/empty_cart.png");
  cartItems = [];
});

$("#resetBtn").click(function(){
  $("#cartList").hide();
  $("#cart").attr("src","http://www.comfyco.com/new_images/empty_cart.png");
  cartItems = [];
});


/*
function callback(collection,i, x, y){
  $('#book1').html("<p> Title: "+products[0].name+"</p><img src="+products[0].picture_url+"><p> Price: $"
}

$('#book1').html("<p> Title: "+products[0].name+"</p><img src="+products[0].picture_url+"><p> Price: $" 
  +products[0].price+"</p><p> Why you should buy this: " + products[0].selling_points + "</p><br>");

 $('#book2').html("<p> Title: "+products[1].name+"</p><img src="+products[1].picture_url+"><p> Price: $" 
  +products[1].price+"</p><p> Why you should buy this: " + products[1].selling_points + "</p><br>");

$('#book3').html("<p> Title: "+products[2].name+"</p><img src="+products[2].picture_url+"><p> Price: $" 
  +products[2].price+"</p><p> Why you should buy this: " + products[2].selling_points + "</p><br>");

$('#song1').html("<p> Title: "+products[3].name+"</p><img src="+products[3].picture_url+"><p> Price: $" 
  +products[3].price+"</p><p> Why you should buy this: " + products[3].selling_points + "</p><br>");

 $('#song2').html("<p> Title: "+products[4].name+"</p><img src="+products[4].picture_url+"><p> Price: $" 
  +products[4].price+"</p><p> Why you should buy this: " + products[4].selling_points + "</p><br>");

$('#song3').html("<p> Title: "+products[5].name+"</p><img src="+products[5].picture_url+"><p> Price: $" 
  +products[5].price+"</p><p> Why you should buy this: " + products[5].selling_points + "</p><br>");
  */  



document.getElementById('search').onclick = function()
{
    var input = document.getElementById('search_id').value;
    var str = input.toLowerCase();
    var resultsName= [];
       $('#results').show();
    
    for(var key in products){
         
          resultsName.push({title:""+ products[key].name.toLowerCase()+""});
         // console.log("***************** " + resultsName); makes an array of titles
    }
     resultsName[0].id="#book1";
    resultsName[1].id="#book2";
    resultsName[2].id="#book3";
    resultsName[3].id="#song1";
    resultsName[4].id="#song2";
    resultsName[5].id="#song3";

    

   // var index = resultsName.indexOf(str);
    
          var regExpStr = new RegExp(str,"i"); //added Regular Expression
          $('#results').text("");  //resets results page
          for(var i=0 ; i<resultsName.length; i++){
            var showThis= resultsName[i]["title"];
           // console.log(typeof showThis + " " + typeof str);
            if(regExpStr.test(showThis)){  //changed conditional// if(showThis === str){
               
              // console.log(showThis + "" + str);
                $('#results').append("<h1>We found: </h1><br><img src='" + products[i].picture_url + "'>" + " <div>"+"<p>Title: " + products[i].name + "</p>" + "<p>Category: " + products[i].category + "</p>" +"<p>Price: " + products[i].price + "</p>" +"</div>"   ); 
                

                $('#content').hide();
                //break;  //commented out break so all matches get added
            }/*else {
                //  console.log(showThis + "" + str);
                 $('#results').html('<p>Your searched was not found</p>');
                 $('#content').hide();
            }*/
          }
          // Added if statement to check if no results were found
          if (!$('#results').text()) {
            $('#results').html('<p>Your searched was not found</p>');
            $('#content').hide();
          }
          /*for(var i = 1 ; i < resultsName.length ; i++){
               resultsName[i] = resultsName[i].charAt(0).toUpperCase();
            }*/
            //$('#results').html('We found: ' + resultsName[index][id] );  
            //$('#content').hide();

      
//console.log(resultsName[0].title);
}



});






