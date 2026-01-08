let clavierBlanc = document.querySelectorAll(".clavier-blanc button")
let toucheBlanche = document.querySelectorAll("#blanche")


function wait(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


for (let i = 0; i < clavierBlanc.length; i = i + 1) {
    toucheBlanche[i].addEventListener('click', function () {
        toucheBlanche[i].style.backgroundColor = "hsla(299, 83%, 57%, 1.00)";
    });
    toucheBlanche[i].addEventListener('mouseover', function () {
        toucheBlanche[i].style.backgroundColor = "rgba(196, 189, 246, 1)";
    });
    toucheBlanche[i].addEventListener('mouseout', function () {
        toucheBlanche[i].style.backgroundColor = "rgb(135, 125, 210)";
    });
}

