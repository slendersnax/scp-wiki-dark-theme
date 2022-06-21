let elements = document.body.getElementsByTagName("*");

for(let i = 0; i < elements.length; i ++) {
    if(elements[i].style.color == "black") {
        elements[i].style.color = "white";
    } 
}