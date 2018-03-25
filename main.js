const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

class Timer {

    constructor(startTime, stopTime) {
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = this.stopTime - this.startTime;
    }

    static timeToNY() {
        this.year = new Date().getFullYear();
        this.NY = new Date (this.year + 1, 0, 1);
        this.daysToNY = Math.floor((this.NY - new Date()) / 86400000);
        return 'До нового года осталось ' + this.daysToNY + ' дней (день)';
    }

    start() {
        this.startTime = new Date();
    }

    stop() {
        this.stopTime = new Date();  
    }

    getTime() {
        this.interval = this.stopTime - this.startTime;
        return this.interval;
    }

}

const Timer1 = new Timer (10, 23);
console.log (`Timer1 start time: ${Timer1.startTime}`);
console.log (`Timer1 stop time: ${Timer1.stopTime}`);
console.log (`Timer1 interval: ${Timer1.interval}`);

const Timer2 = new Timer (1088, 2456);
console.log (`Timer2 start time: ${Timer2.startTime}`);
console.log (`Timer2 stop time: ${Timer2.stopTime}`);
console.log (`Timer2 interval: ${Timer2.interval}`);

const stopWatch = new Timer;

startButton.addEventListener('click', () => stopWatch.start());
stopButton.addEventListener('click', () => {
    stopWatch.stop();
    console.log(`После старта прошло ${stopWatch.getTime()} милисекунд`);
});
