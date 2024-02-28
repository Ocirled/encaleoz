// Navbar
$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1000);

    e.preventDefault();
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
// Navbar

// Dark theme
var ikon = document.getElementById("ikon");
    ikon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        ikon.src = "ikon/sun.png";
    } else {
        ikon.src = "ikon/moon.png";
    }
};
// Dark theme


// Tombol naik

const tombol = document.querySelector('.button-up--wrapper');

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        tombol.classList.add('button-up');
        tombol.style.opacity = 1;
    } else {
        tombol.style.opacity = 0;
    }
}

// Tombol naik