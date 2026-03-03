const drawBtn = document.getElementById('drawBtn');
const resultDisplay = document.getElementById('result');
const triesDisplay = document.getElementById('tries');
const winsDisplay = document.getElementById('wins');

let tries = 0;
let wins = 0;

// 当選確率（1/1000 = 0.001）
const PROBABILITY = 0.001; 

drawBtn.addEventListener('click', () => {
    tries++;
    
    // 0から1の乱数生成
    if (Math.random() < PROBABILITY) {
        wins++;
        resultDisplay.textContent = "🎉 おめでとう！当たり！";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.textContent = "残念…ハズレです";
        resultDisplay.style.color = "black";
    }

    // 画面の数字を更新
    triesDisplay.textContent = tries;
    winsDisplay.textContent = wins;
});
