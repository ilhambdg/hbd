//480 * 800 lebar hp

const container = document.getElementById('container');
const button = document.querySelector('.button');
const teks = document.querySelector('.teks');
const audio = document.querySelector('audio');

const muncul = () => {
    container.style.display = 'block';
    button.style.display = 'none';
    audio.play();
}

document.addEventListener('scroll', function() {
    const posisi = window.scrollY;
    if (posisi >= 250) {
        teks.style.display = 'block';}
})

