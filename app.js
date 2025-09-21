const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector(".p1Display")
}
const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector(".p2Display")
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');


let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updatingScore (player, opponent) {
    if(!isGameOver){
        player.score += 1;
        player.display.innerText = player.score;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("looser");
            player.button.disabled = true;
            opponent.button. disabled = true;
        }
        
    }
}

p1.button.addEventListener('click', function () {
    updatingScore (p1 , p2 )
});

p2.button.addEventListener('click', function () {
    updatingScore (p2, p1)
});


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (p of  [p1, p2]) {
        p.score = 0;
        p.display.innerText = '0';
        p.display.classList.remove("winner", "looser");
        p.button.disabled = false;
    }
}
