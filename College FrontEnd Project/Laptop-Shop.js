const images = ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690293529/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273867_vfvtxl.png?tr=w-640',
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1687503069/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273867_1_cp7svv.png?tr=w-640',
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690293532/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273867_3_lnveyg.png?tr=w-640',
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690293548/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273867_11_yz6esq.png?tr=w-640'
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

var shop = document.getElementById("shopselect");

shop.addEventListener('click', () => {
    window.alert("Your Product has been added to the cart");


});