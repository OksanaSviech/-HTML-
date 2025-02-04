
let currentIndex = 0;
const photos = [
    "https://st.depositphotos.com/1001374/3305/i/450/depositphotos_33059133-stock-photo-german-shepherd.jpg",
    "https://st4.depositphotos.com/4052875/38985/i/450/depositphotos_389852608-stock-photo-german-shepherd-lying-grass-park.jpg",
    "https://wallpaper.forfun.com/fetch/ee/eed28ef76a677293569d3e16b9738fec.jpeg"
];

function changePhoto() {
    var photo = document.getElementById("dogPhoto");
    currentIndex = (currentIndex + 1) % photos.length;
    photo.src = photos[currentIndex];
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.createElement('button');
    button.innerText = "Показати повідомлення";
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Привіт! Це повідомлення від вашого улюбленого собаки Рекса.');
    });
});
