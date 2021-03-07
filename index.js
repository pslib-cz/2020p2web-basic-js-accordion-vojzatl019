let text = document.getElementsByClassName("vypujcka-item")


for (i = 0; i < text.length; i++) {
    let inputs = text[i].getElementsByTagName("input")
    let el = text[i].getElementsByClassName("detail-vypujcky-container")
    inputs[0].onclick = (a) => {
        if (inputs[0].checked) {
            el[0].style.display = "block";
        } else {
            el[0].style.display = "none";
        }
    }
}

function auticko() {
}
