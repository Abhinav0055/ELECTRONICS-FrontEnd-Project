const images = ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688725095/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274974_ipynvd.png?tr=w-640',
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688725095/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274974_2_jp18x9.png?tr=w-640',
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688725095/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274974_3_pihs1s.png?tr=w-640',
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688725095/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274974_4_npfxf2.png?tr=w-640'
]

const picscroll = document.querySelector('#main-pic');

const mini1 = document.querySelector('#mini-img1');
mini1.addEventListener('click', () => {

    picscroll.style.backgroundImage = `url(${images[0]})`;

});

const mini2 = document.querySelector('#mini-img2');
mini2.addEventListener('click', () => {
    picscroll.style.backgroundImage = `url(${images[1]})`;
});

const mini3 = document.querySelector('#mini-img3');
mini3.addEventListener('click', () => {

    picscroll.style.backgroundImage = `url(${images[2]})`;

});
const mini4 = document.querySelector('#mini-img4');
mini4.addEventListener('click', () => {

    picscroll.style.backgroundImage = `url(${images[3]})`;

});

function border1() {
    document.getElementById("mini-img1").style.border = "solid 2px blue";
    document.getElementById("mini-img2").style.border = "solid 1px black";
    document.getElementById("mini-img3").style.border = "solid 1px black";
    document.getElementById("mini-img4").style.border = "solid 1px black";

}

function border2() {
    document.getElementById("mini-img1").style.border = "solid 1px black";
    document.getElementById("mini-img2").style.border = "solid 2px blue";
    document.getElementById("mini-img3").style.border = "solid 1px black";
    document.getElementById("mini-img4").style.border = "solid 1px black";

}

function border3() {
    document.getElementById("mini-img1").style.border = "solid 1px black";
    document.getElementById("mini-img2").style.border = "solid 1px black";
    document.getElementById("mini-img3").style.border = "solid 2px blue";
    document.getElementById("mini-img4").style.border = "solid 1px black";

}

function border4() {
    document.getElementById("mini-img1").style.border = "solid 1px black";
    document.getElementById("mini-img2").style.border = "solid 1px black";
    document.getElementById("mini-img3").style.border = "solid 1px black";
    document.getElementById("mini-img4").style.border = "solid 2px blue";

}



var acc = document.getElementsByClassName("mob-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '%' + y + '%';
}

var shop = document.getElementById("shopselect");

shop.addEventListener('click', () => {
    window.alert("Your Product has been added to the cart");


})