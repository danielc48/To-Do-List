// Creates empty array

var toDoListItem = [];

// Creates an unordered listed

var cont_list = document.querySelector("#list-container");
var ul = document.createElement("ul");
ul.setAttribute("id", "theList");
cont_list.appendChild(ul);

// Pushes text into array when submit button is clicked

var submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {

        toDoListItem.push(document.querySelector(".text").value);  

// Creates li elements
        var li = document.createElement("li");


// Adds text input to li element

    if (document.querySelector(".text").value !== ""){
        for (var i = 0; i <= toDoListItem.length-1; i++) {
            li.innerHTML = toDoListItem[i];
            ul.appendChild(li);
            }
    }
        

// Creates item delete button
        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.innerHTML = "Delete Me";

// Item Delete key Functionality

        deleteButton.addEventListener("click", function(){
            deleteButton.parentElement.remove();
        });


li.appendChild(deleteButton);

// Resets text input 
document.querySelector(".text").value="";


// Clear List Functionality

var clearListButton = document.querySelector(".clear");

clearListButton.addEventListener("click", function() {
    ul.innerHTML="";
});


});

// Key Down Functionality

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && document.querySelector(".text").value !== "") {
        submitButton.click(); 
    }
});








