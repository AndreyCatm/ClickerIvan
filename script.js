let coins = 0;
let clickValue = 1;
let autoClickerInterval = null;

document.getElementById('clickerBtn').addEventListener('click', () => {
    coins += clickValue;
    updateCoinCount();
});

document.getElementById('doubleClicks').addEventListener('click', () => {
    if (coins >= 50) {
        coins -= 50;
        clickValue *= 2;
        this.innerHTML = `Удвоить клики (${50 * (clickValue / 2)} монет)`;
        updateCoinCount();
    }
});

document.getElementById('autoClicker').addEventListener('click', () => {
    if (coins >= 500) {
        coins -= 500;
        if (autoClickerInterval === null) {
            autoClickerInterval = setInterval(() => {
                coins += clickValue;
                updateCoinCount();
            }, 1000);
        } else {
            clearInterval(autoClickerInterval);
            autoClickerInterval = setInterval(() => {
                coins += clickValue;
                updateCoinCount();
            }, 1000 / (2 * clickValue));
        }
        updateCoinCount();
    }
});

document.getElementById('moderator').addEventListener('click', () => {
    if (coins >= 10000) {
        coins -= 10000;
        clickValue *= 50;
        updateCoinCount();
    }
});

document.getElementById('admin').addEventListener('click', () => {
    if (coins >= 100000) {
        coins -= 100000;
        clickValue *= 100;
        updateCoinCount();
    }
});

function updateCoinCount() {
    document.getElementById('coinCount').textContent = coins;
}
