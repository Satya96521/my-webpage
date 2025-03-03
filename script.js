function toggleBox(boxNumber) {
    let content = document.getElementById("content" + boxNumber);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeColor(boxNumber, color) {
    let box = document.getElementsByClassName("box")[boxNumber - 1];
    box.style.backgroundColor = color;
}

function changeSize(boxNumber, size) {
    let box = document.getElementsByClassName("box")[boxNumber - 1];

    box.classList.remove("small", "medium", "large");

    if (size === "small") {
        box.classList.add("small");
    } else if (size === "medium") {
        box.classList.add("medium");
    } else if (size === "large") {
        box.classList.add("large");
    }
}