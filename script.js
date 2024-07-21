let coins = 0;
let clickValue = 1;
let autoClickerInterval = null;
let isModerator = false;
let isAdmin = false;

document.getElementById('clickerBtn').addEventListener('click', () => {
    coins += clickValue;
    updateCoinCount();
});

document.getElementById('doubleClicks').addEventListener('click', () => {
    if (coins >= 50) {
        coins -= 50;
        clickValue += 1;
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
    if (!isModerator && coins >= 10000) {
        coins -= 10000;
        clickValue *= 50;
        isModerator = true;
        document.getElementById('moderator').disabled = true;
        updateCoinCount();
    }
});

document.getElementById('admin').addEventListener('click', () => {
    if (!isAdmin && coins >= 100000) {
        coins -= 100000;
        clickValue *= 100;
        isAdmin = true;
        document.getElementById('admin').disabled = true;
        updateCoinCount();
    }
});

function updateCoinCount() {
    document.getElementById('coinCount').textContent = coins;
}
