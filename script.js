var hasil = document.querySelector('.hasil');
var button = document.querySelector('button');
var Player1 = document.querySelectorAll('img')[0];
var Player2 = document.querySelectorAll('img')[1];


button.addEventListener('click', function () {
    //angka random 1 - 6
    var randomPlayer1 = Math.floor((Math.random() * 6) + 1);
    var randomPlayer2 = Math.floor((Math.random() * 6) + 1);

    Player1.setAttribute('src', 'images/dice' + randomPlayer1 + '.png');
    Player2.setAttribute('src', 'images/dice' + randomPlayer2 + '.png');

    if (randomPlayer1 > randomPlayer2) {
        hasil.innerHTML = '🏴  Player 1';
    } else if (randomPlayer1 < randomPlayer2) {
        hasil.innerHTML = 'Player 2  🏴 ';
    } else {
        hasil.innerHTML = '🚩 STOP!! 🚩';
    }
});
