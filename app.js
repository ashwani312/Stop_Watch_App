let [hour, minut, second] = [0, 0, 0];

let displayTime = document.getElementById('time');
let stopButton = document.getElementById('stop');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let watch;


// starting the stopwatch-------------
const starWatch = () =>{
    let h = hour < 10? '0'+ hour: hour;
    let m = minut < 10? '0'+ minut : minut;
    let s = second < 10? '0'+ second : second;
    second++;
    if(second === 60){
        minut++;
        second = 0;
    }
    if(minut === 60){
        hour++;
        minut = 0;
    }

    displayTime.innerHTML = h + ':' + m + ':' +s;  //displaying the times
}
const watchRun = () =>{
      watch = setInterval(starWatch, 1000);  // setinterval function to run the startWatch function every seconds.
}
startButton.addEventListener('click', watchRun);


//stoping the stopwatch--------------------
const stopTheWatch = () =>{
    clearInterval(watch)
}
stopButton.addEventListener('click', stopTheWatch)



//reseting the watch-------------------
const resetTheWatch = () =>{
    clearInterval(watch);
     [hour, minut, second] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00'

}
resetButton.addEventListener('click', resetTheWatch)


