/*
Game JS for Clicker Game Template
by Mike Henry (mikeshenry@gmail.com)
Available from https://github.com/mashmac2/clicker-game-template
You have permission to reuse this code for non-commercial purposes with attribution
*/
//object for our game items


//localStorage.clear();

var items = {};
items.topic = "";
items.clicks = 0;
items.clicks2 = 0;
items.clicks3 = 0;
items.clicks4 = 0;
items.clicks5 = 0;



//on page load, this runs one time.
$(document).ready(function(){
  // localstorage
  if (typeof(Storage) !== "undefined") {
  	// Code for localStorage
  	console.log("Viskas gerai");
    
  	if (localStorage.topic) {
  	  //already exists, second loading of the game
      $('#content p').show();
  	  $('#clicker').show();

  		//Retrieve all variables
  		items.topic = localStorage.topic;
  		items.clicks = localStorage.clicks;
      items.clicks2 = localStorage.clicks2;
      items.clicks3 = localStorage.clicks3;
      items.clicks4 = localStorage.clicks4;
      items.clicks5 = localStorage.clicks5;



  	} else {
  		// first loading of the game

  		// prompt for topic of your thesis
  		var topic = prompt("First, you need to enter your name. What is your name?",'');
  		localStorage.setItem("topic", topic);
  		items.topic = topic;
  		$('#topic').text("Your name is " + items.topic).show();
  		
		  //fade in messages
  		$('#content .one').delay(1000).fadeIn(1000);
  		$('#clicker').delay(2000).fadeIn(1000);
  		
  	}
  	      // Put variables into the page
  	  $('#topic').text("Your name is " + items.topic);
  	  $('#clicks-status').text(items.clicks);
      $('#clicks2-status').text(items.clicks2);
      $('#clicks3-status').text(items.clicks3);
      $('#clicks4-status').text(items.clicks4);
      $('#clicks5-status').text(items.clicks5);

  	  
  } else {
    // Sorry! No Web Storage support..
    console.log("No localStorage support!");
  }
  //end localstorage
});

//Game functions; these run when buttons are clicked, or when they're used in the document.ready or window.setInterval sections


function increment(item){

  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);

 $("#clicks").animate({width: "200px"});

}

function incrementClicks2(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);
  $("#clicks2").animate({height: "120px"});

}

function incrementClicks3(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);

  
  $("#clicks3").animate({opacity: '0.5'});

}

function incrementClicks4(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);

  $("#clicks4").animate({height: '200px', width: "200px"});
}

function incrementClicks5(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);
  $("#clicks5").animate({borderWidth: "10px"});
}

function save(){
  localStorage.setItem("clicks", items.clicks);
  localStorage.setItem("clicks2", items.clicks2);
  localStorage.setItem("clicks3", items.clicks3);
  localStorage.setItem("clicks4", items.clicks4);
  localStorage.setItem("clicks5", items.clicks5);
  console.log("Saving");

function restart(){
  localStorage.clear();
  location.reload(false);
}
  
  $('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);

  $("#clicks").animate({width: "92px"});
  $("#clicks2").animate({height: "92px"});
  $("#clicks3").animate({opacity: '1'});
  $("#clicks4").animate({height: '92px', width: "92px"});
  $("#clicks5").animate({borderWidth: "0px"});
  
}



  //game loop; this runs every ten seconds to do things in the game
window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the game loop");

  	save();
}, 10000); //updates once per second (1000 milliseconds)