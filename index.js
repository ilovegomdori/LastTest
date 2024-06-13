document.addEventListener("DOMContentLoaded", function() {
    function updateTimer() {
        const now = new Date();
        const nextChristmas = new Date(now.getFullYear(), 11, 25); // 11은 12월을 의미
        if (now.getMonth() === 11 && now.getDate() > 25) {
            nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
        }

        const timeDifference = nextChristmas - now;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    const musicBtn = document.querySelector('.music-btn');
    const music = document.getElementById('music');

    musicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });
});
