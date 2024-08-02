let hour = 0;
let minutes = 0;
let seconds = 0;
let count =0;
let timerInterval; //to store the interval ID


let startBtn= document.getElementById("start")
let stopBtn=  document.getElementById("stop")
let resetBtn= document.getElementById("reset")


//Add EventListeners

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);

//functions

function startTimer() {
    timerInterval = setInterval(updateTimer,10); //Update every second (1000 ms)
}
// Function to update the stopwatch (called every second)
function updateTimer(){


    count++ 
    if(count==100){
       seconds++
       count=0;
    
    if (seconds == 60)
    {
         seconds=0;
         minutes++;
           if(minutes ==60)
           {
            minutes=0;
            hour++;
           }
    }
}
    displayTimer()
    

}

//Function to stop the timer

function stopTimer(){
   
    //console.log('Interval ID:', timerInterval);
    clearInterval(timerInterval);
}

//Function to reset the timer
function resetTimer(){
    clearInterval(timerInterval);
    hour=0;
    minutes=0;
    seconds=0;
    count=0;
    displayTimer();
   
}

// Function to update the display with current stopwatch values

function displayTimer(){

    document.getElementById("hr").innerText = hour < 10 ? `0${hour}` : hour;
    document.getElementById("mins").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("secs").innerText = seconds < 10 ? `0${seconds}` : seconds; 
    document.getElementById("count").innerText = count < 10 ? `0${count}` : count; 
}




