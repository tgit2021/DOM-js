var mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "New DOM Layout";
console.log(mainHeading);
mainHeading.classList.add("bg-success")

// Paragraphs
var para1 = document.getElementById("para1");
para1.textContent = "The Document Object Meodel (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
console.log(para1);
var para2 = document.getElementById("para2");
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
console.log(para2);
/*document.getElementById("btn").addEventlistner("click",myFunction);*/
let clickMe = document.getElementById("btn");
var para4 = document.getElementById("para4");

clickMe.addEventListener('click', () => {
    para4.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
});

var redBox = document.getElementById("red")
redBox.addEventListener('click', () => {
    if (redBox.classList.contains("bg-white")){
        redBox.classList.remove("bg-white");
        redBox.classList.add("bg-danger");
    } else {
        redBox.classList.remove("bg-danger");
        redBox.classList.add("bg-white");
    }
});

 var blueBox = document.getElementById("blue");
 blueBox.addEventListener('click', () => {
    if (blueBox.classList.contains("bg-white")){
        blueBox.classList.remove("bg-white");
        blueBox.classList.add("bg-primary");
    } else {
        blueBox.classList.remove("bg-primary");
        blueBox.classList.add("bg-white");
    }
});
var yellowBox = document.getElementById("yellow");
yellowBox.addEventListener('click', () => {
    if (yellowBox.classList.contains("bg-white")){
        yellowBox.classList.remove("bg-white");
        yellowBox.classList.add("bg-warning");
    } else {
        yellowBox.classList.remove("bg-warning");
        yellowBox.classList.add("bg-white");
    }
});


var greenBox = document.getElementById("green");
greenBox.addEventListener('click', () => {
    if (greenBox.classList.contains("bg-white")){
        greenBox.classList.remove("bg-white");
        greenBox.classList.add("bg-success");
    } else {
        greenBox.classList.remove("bg-success");
        greenBox.classList.add("bg-white");
    }
});
var blackBox = document.getElementById("black");
blackBox.addEventListener('click', () => {
    if (blackBox.classList.contains("bg-white")){
        blackBox.classList.remove("bg-white");
        blackkBox.classList.add("bg-dark");
        blackBox.classList.add('text-white');
        
    } else {
        blackBox.classList.remove("bg-dark");
        blackBox.classList.add("bg-white");
        blackBox.classList.remove('text-white');
        
         }
});



