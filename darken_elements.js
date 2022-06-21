let elements = document.body.getElementsByTagName("*");
let emmetLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const tooBright = (element) => {
    // this is going to be in rgb format
    let backgroundColor = window.getComputedStyle(element).getPropertyValue("background-color");
    let values = backgroundColor.substring(backgroundColor.indexOf("(") + 1, backgroundColor.indexOf(")")).split(",");

    if(values.length > 3) { // aka it's rgba
        return false;
    }
    else {
        let sum = 0;
        
        for(let i = 0; i < values.length; i ++) {
            sum += Number(values[i]);
        }

        return sum >= (220 * 3) ? true : false;
    }
}

for(let i = 0; i < elements.length; i ++) {
    if(elements[i].style.color == "black") {
        elements[i].style.color = "white";
    }
    
    if(elements[i].nodeName == "DIV" && tooBright(elements[i])) {
        elements[i].style.backgroundColor = "#000";
        elements[i].style.color = "#ccc";
    }
}