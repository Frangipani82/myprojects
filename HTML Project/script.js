let headword = document.getElementById("hello");
headword.style.color = "purple";

function changeColor() {
    if (headword.style.color == "purple") {
        headword.style.color = "salmon";
    }
    else headword.style.color = "purple";
}