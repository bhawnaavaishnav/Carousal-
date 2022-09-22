let start = 0;

function controle(a) {
    start = start + a;
    slide(start)
}


function slide(pho) {
    let image = document.querySelectorAll(".img-container")
    // console.log(image)

    if (pho == image.length) {
        start = 0;
        pho = 0;
    }
    if (pho < 0) {
        start = image.length-1;
        pho = image.length-1;
    }

    for (let x of image) {
        x.style.display = "none";
    }

    // console.log(pho)
    image[pho].style.display = "block";
}

slide(start)