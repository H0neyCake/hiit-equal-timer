console.log('hello');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    return hour + ":" + min + ":" + sec;
}

async function equalTimer(count, chillTimer, exTimer) {
    var traning = [];
    var traningTime = (chillTimer * count) + (exTimer * count);
    var chillTime = chillTimer * 1000;
    var exTime = exTimer * 1000;
    console.log('Traning time in sec: ' + traningTime)

    for (let index = 0; index < count; index++) {
        traning.push('exercise');
        traning.push('chill');
    }

    console.log(traning);

    for (let i = 0; i <= traning.length; i++) {
        if (i === 0) {
            console.log('PREPARE to exercise...' + getDateTime());
        }
        else if (i % 2 === 0 && i !== 0) {
            console.log('do chill' + getDateTime());
            await sleep(chillTime);
            console.log('prepare to exercise...' + getDateTime());

        } else {
            console.log('do exercise' + getDateTime());
            await sleep(exTime);
            console.log('prepare to chill...' + getDateTime());
        }
        console.log(i);
    }
    console.log('Traning the end! Ez!' + getDateTime());
}

equalTimer(7, 10, 15);