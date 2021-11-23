menu_list_array = ["Veg Margherita Pizza","Farmhouse","Fresh Veggie","Veggie Delight","Double Cheese Burst"];
function getmenu(){
var htmldata;
menu_list_array.sort();
for(var i=0;
    i<menu_list_array.length;
    i++)
    {
    htmldata=htmldata+menu_list_array[i]+"<br>";
    document.getElementById("display_menu").innerHTML=htmldata;
    }
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;
    i++){
        htmldata=htmldata+"<div class='card'>"
        +'<img src="images/pizzaImg.png"/>'
        +menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}